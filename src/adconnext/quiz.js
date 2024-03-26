/// <reference types="@workadventure/iframe-api-typings" />

import { questions } from "./data/quiz.js";
console.info("The Quiz Script has successfully begun!");

let quiz = false;
let score = 0;
let currentQuestionIndex = 0;
questions.sort(() => Math.random() - 0.5);
WA.onInit()
  .then(() => {
    WA.room.area.onEnter("quizZone").subscribe(() => {
      WA.chat.sendChatMessage("ยินดีเข้าสู่การทดสอบนะ นักสำรวจ", "ผู้ทดสอบความรู้");
      quiz = true;
      WA.chat.open();
      askQuestion();
    });

    WA.room.area.onLeave("quizZone").subscribe(() => {
      quiz = false;
      WA.chat.close();
    });

    const sendChatMessage = (message, sender = "Quiz") => {
      WA.chat.sendChatMessage(message, sender);
    };

    const askQuestion = () => {
      if (currentQuestionIndex >= questions.length) {
        sendChatMessage(
          `Exam completed! Your score is ${score} out of ${questions.length}`,
          "ผู้ทดสอบความรู้"
        );
        return;
      }

      const currentQuestion = questions[currentQuestionIndex];
      sendChatMessage(currentQuestion.question, "ผู้ทดสอบความรู้");
    };

    WA.chat.onChatMessage((message) => {
      if (quiz) {
        if (currentQuestionIndex < questions.length) {
          handleAnswer(message);
        } else {
          sendChatMessage(
            "การสอบสิ้นสุดแล้ว ออกไปสำรวจกันเถอะ",
            "ผู้ทดสอบความรู้"
          );
          WA.room.hideLayer("logic/doorLock");
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
        sendChatMessage("ตอบได้ถูกต้อง!", "ผู้ทดสอบความรู้");
        currentQuestionIndex++;
        askQuestion();
      } else {
        sendChatMessage("ยังไม่ถูกต้อง!", "ผู้ทดสอบความรู้");
        askQuestion();
      }
    };
  })
  .catch((e) => console.error(e));

export {};
