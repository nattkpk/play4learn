/// <reference types="@workadventure/iframe-api-typings" />

import { questions } from "./data/chatData.js";
console.info("The Quiz Script has successfully begun!");
let quiz = false;
let score = 0;
let currentQuestionIndex = 0;
questions.sort(() => Math.random() - 0.5);

WA.onInit()
  .then(() => {
    console.log("quiz :", quiz);
    WA.room.area.onEnter("quizZone").subscribe(() => {
      WA.chat.sendChatMessage("Welcome to the Exam!", "Teacher");
      quiz = true;
      console.log("Join quiz:", quiz);
      WA.chat.open();
      askQuestion();
    });

    WA.room.area.onLeave("quizZone").subscribe(() => {
      quiz = false;
      console.log("Leave quiz:", quiz);
      WA.chat.close();
    });

    const sendChatMessage = (message, sender = "Quiz") => {
      WA.chat.sendChatMessage(message, sender);
    };

    const askQuestion = () => {
      if (currentQuestionIndex >= questions.length) {
        sendChatMessage(
          `Exam completed! Your score is ${score} out of ${questions.length}`,
          "Teacher"
        );
        return;
      }

      const currentQuestion = questions[currentQuestionIndex];
      sendChatMessage(currentQuestion.question, "Teacher");
    };

    WA.chat.onChatMessage((message) => {
      if (quiz) {
        if (currentQuestionIndex < questions.length) {
          handleAnswer(message);
        } else {
          sendChatMessage(
            `Your score is ${score} out of ${questions.length}`,
            "Teacher"
          );
          sendChatMessage(
            "Exam is over. You can leave the quiz zone now.",
            "Teacher"
          );
        }
      }
    });

    const handleAnswer = (message) => {
      const lowercaseMessage = message.trim().toLowerCase().split(" ");

      const correctAnswers = questions[currentQuestionIndex].answer.map((a) =>
        a.toLowerCase()
      );

      let isCorrect = false;

      switch (questions[currentQuestionIndex].answerType) {
        case "any":
          for (const answer of lowercaseMessage) {
            if (correctAnswers.includes(answer)) {
              isCorrect = true;
              break;
            }
          }
          break;
        case "all":
          isCorrect =
            lowercaseMessage.length === correctAnswers.length &&
            lowercaseMessage.every((a) => correctAnswers.includes(a));
          break;
        default:
          console.error(
            "Invalid answerType:",
            questions[currentQuestionIndex].answerType
          );
      }

      if (isCorrect) {
        score++;
        sendChatMessage("Correct!", "Teacher");
        currentQuestionIndex++;
        askQuestion();
      } else {
        sendChatMessage("Incorrect!", "Teacher");
        askQuestion();

        // currentQuestionIndex++;

        // if (questions[currentQuestionIndex].answerType === "all") {
        //   const missingAnswers = correctAnswers.filter((a) => !lowercaseMessage.includes(a));
        //   if (missingAnswers.length > 0) {
        //     sendChatMessage(`Missing answers: ${missingAnswers.join(", ")}`, "Teacher");
        //   }
        // }
      }
    };
  })
  .catch((e) => console.error(e));

export {};
