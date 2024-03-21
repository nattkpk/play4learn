/// <reference types="@workadventure/iframe-api-typings" />

import { questions } from "./data/chatData.js"; 
console.info("The Quiz Script has successfully begun!");

let score = 0; 
let currentQuestionIndex = 0; 
questions.sort(() => Math.random() - 0.5);

WA.onInit()
  .then(() => {
    WA.room.area.onEnter("quizZone").subscribe(() => {
      WA.chat.sendChatMessage("Welcome to the Exam!", "Teacher");
      WA.chat.open();
      askQuestion(); // Start the first question
    });
    WA.room.area.onLeave("quizZone").subscribe(() => {
      WA.chat.close();
    });

    const sendChatMessage = (message, sender = "Quiz") => {
      WA.chat.sendChatMessage(message, sender);
    };

    const askQuestion = () => {
      if (currentQuestionIndex >= questions.length) {

        sendChatMessage(`Exam completed! Your score is ${score} out of ${questions.length}`, "Teacher");
        return;
      }

      const currentQuestion = questions[currentQuestionIndex];
      sendChatMessage(currentQuestion.question, "Teacher"); // Display the question
    };

    const handleAnswer = (message) => {
      const lowercaseMessage = message.trim().toLowerCase().split(" "); // Split user input on spaces

      const correctAnswers = questions[currentQuestionIndex].answer.map((a) => a.toLowerCase()); // Convert correct answers to lowercase

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
          isCorrect = lowercaseMessage.length === correctAnswers.length && lowercaseMessage.every((a) => correctAnswers.includes(a)); // Check if all correct answers are present
          break;
        default:
          console.error("Invalid answerType:", questions[currentQuestionIndex].answerType);
      }

      if (isCorrect) {
        score++;
        sendChatMessage("Correct!", "Teacher");
        currentQuestionIndex++; 
        askQuestion();
      }else{
        sendChatMessage("Incorrect!", "Teacher");
        currentQuestionIndex++; 
        askQuestion();
        // Re-ask the question if the answer is incorrect
        // if (questions[currentQuestionIndex].answerType === "all") {
        //   const missingAnswers = correctAnswers.filter((a) => !lowercaseMessage.includes(a));
        //   if (missingAnswers.length > 0) {
        //     sendChatMessage(`Missing answers: ${missingAnswers.join(", ")}`, "Teacher");
        //   }
        // }
      }
    };

    WA.chat.onChatMessage((message) => {
      if (currentQuestionIndex < questions.length) {
        handleAnswer(message);
      } else {
        sendChatMessage(`Your score is ${score} out of ${questions.length}`, "Teacher");
        sendChatMessage("Exam is over. You can leave the quiz zone now.", "Teacher");
      }
    });
  })
  .catch((e) => console.error(e));

export {};
