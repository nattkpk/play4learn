/// <reference types="@workadventure/iframe-api-typings" />

import { questions } from "./data/chatData.js";
console.info("The Quiz Script has successfully begun!");
let actionMessage
let currentPopup
let score = 0;
let currentQuestionIndex = 0;
questions.sort(() => Math.random() - 0.5);

WA.onInit()
  .then(() => {
    WA.room.area.onEnter("quizZone").subscribe(() => {
      actionMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto Exam ",
        callback: () => {
          currentPopup = WA.ui.openPopup("quizDisplay"," w", [
            {
              label: "1",
              callback: (popup) => {
                popup.close();
              },
            },
            {
              label: "2",
              callback: (popup) => {
                popup.close();
              },
            },
            {
              label: "3",
              callback: (popup) => {
                popup.close();
              },
            },
            {
              label: "4",
              callback: (popup) => {
                popup.close();
              },
            },
            
          ]
         );
        },
      });
    });
    WA.room.area.onLeave("quizZone").subscribe(() => {});
  })
  .catch((e) => console.error(e));


export {};
