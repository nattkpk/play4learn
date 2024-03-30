/// <reference types="@workadventure/iframe-api-typings" />

import { questions } from "./data/quiz.js";
console.info("The Quiz Script has successfully begun!");

let quizDone = false;
let quiz = false;
let score = 0;
let currentQuestionIndex = 0;
questions.sort(() => Math.random() - 0.5);
WA.onInit()
  .then(() => {
    let openCloseMessage;

    WA.room.area.onEnter("quizZone").subscribe(() => {
      if (currentQuestionIndex <= questions.length) {
        WA.chat.sendChatMessage(
          "ยินดีเข้าสู่การทดสอบนะ นักสำรวจ",
          "ผู้ทดสอบความรู้"
        );
        quiz = true;
        WA.chat.open();
        askQuestion();
        loopEmerdoor();
      }
    });

    WA.room.area.onLeave("quizZone").subscribe(() => {
      quiz = false;
      WA.chat.close();
    });

    const sendChatMessage = (message, sender = "Quiz") => {
      WA.chat.sendChatMessage(message, sender);
    };

    const askQuestion = () => {
      if (WA.state.emerdoor) {
        sendChatMessage(
          "การทดสอบความรู้พื้นฐานสิ้นสุดแล้ว คุณพร้อมเป็นนักสืบเสาะภัยพิบัติแล้ว ออกไปสำรวจกันเถอะ",
          "ผู้ทดสอบความรู้"
        );
      } else if (currentQuestionIndex === questions.length) {
        // แสดงผลลัพธ์และข้อความเมื่อตอบคำถามครบ
        sendChatMessage(
          "การทดสอบความรู้พื้นฐานสิ้นสุดแล้ว คุณพร้อมเป็นนักสืบเสาะภัยพิบัติแล้ว ออกไปสำรวจกันเถอะ",
          "ผู้ทดสอบความรู้"
        );
        sendChatMessage(
          "จากแผนที่ คุณคิดว่าตำแหน่งที่เกิดการปนเปื้อนสารหนู อยู่ที่ตำแหน่งไหนในแผนที่",
          "ผู้ทดสอบความรู้"
        );
        WA.chat.onChatMessage(() => {
          WA.room.hideLayer("logic/doorLock");
          currentQuestionIndex++;
          quizDone = true;
        });
      } else {
        // แสดงคำถามปัจจุบัน
        const currentQuestion = questions[currentQuestionIndex];
        sendChatMessage(currentQuestion.question, "ผู้ทดสอบความรู้");
      }
    };

    WA.chat.onChatMessage((message) => {
      if (quiz) {
        if (currentQuestionIndex < questions.length) {
          handleAnswer(message);
        } else {
          sendChatMessage(
            "ประตูห้องสืบสวนเปิดแล้ว คุณมีภาระกิจสืบหาต้นตอจุดรั่วไหลของสารหนู เข้าสู่พื้นที่พื้นที่ปนเปื้อนสารหนู ได้เลย",
            "ผู้ทดสอบความรู้"
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
        sendChatMessage("ตอบได้ถูกต้อง!", "ผู้ทดสอบความรู้");
        currentQuestionIndex++;
        askQuestion();
      } else {
        sendChatMessage("ยังไม่ถูกต้อง!", "ผู้ทดสอบความรู้");
        askQuestion();
      }
    };

    WA.room.area.onEnter("emerdoor").subscribe(() => {
      if (!WA.state.emerdoor) {
        openCloseMessage = WA.ui.displayActionMessage({
          message: `Open Emergency Door  
          [กดเพื่อเปิดประตู]`,
          callback: () => {
            WA.state.emerdoor = true;
          },
        });
      } else {
        openCloseMessage = WA.ui.displayActionMessage({
          message: `Close Emergency Door  
          [กดเพื่อปิดประตู]`,
          callback: () => {
            WA.state.emerdoor = false;
          },
        });
      }
      WA.room.area.onLeave("emerdoor").subscribe(() => {
        openCloseMessage.remove();
      });

    });
  })
  .catch((e) => console.error(e)); 

const loopEmerdoor = () => {
  if (WA.state.emerdoor) {
    WA.room.hideLayer("logic/doorLock");
  } else {
    if(!quizDone){
    WA.room.showLayer("logic/doorLock");
    }
  }
  setTimeout(loopEmerdoor, 5000);
};

export {};
