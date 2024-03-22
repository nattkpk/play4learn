/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { chatPrompt, aiChatBot } from "./data/chatData.js";
import { run } from "./aichat.js";
console.info("Chat Script started successfully");

WA.onInit()
  .then(() => {
    WA.room.area.onEnter("chatZone").subscribe(() => {
  
      WA.chat.sendChatMessage("สวัสดีครับมีอะไรให้ช่วย ไหมครับ?","เอไอ");
      WA.chat.open();
      WA.chat.onChatMessage((message) => {
      run(message).then((result) => {
        WA.chat.sendChatMessage(result,"เอไอ");
      });
    });
    });
    WA.room.area.onLeave("chatZone").subscribe(() => {
      WA.chat.close();
    });

// const sendChatMessage = (message) => {
//   WA.chat.sendChatMessage(message);
// };

// const chatCommands = { 
//   "ไม่": () => sendChatMessage(("ไม่มี เฉยยย......นะเรา"),("นะเรา")),
//   "มี": () => sendChatMessage("ไม่ช่วยหรอก"),
// };

// chatPrompt.Variations1.forEach(variation => {
//   chatCommands[variation] = chatCommands["ไม่"];
// });
// chatPrompt.Variations2.forEach(variation => {
//   chatCommands[variation] = chatCommands["มี"];
// });

// const chatCommandsKeys = Object.keys(chatCommands);

// WA.chat.onChatMessage((message) => {
//   const trimmedMessage = message.trim().toLowerCase();
//   if (chatCommandsKeys.includes(trimmedMessage)) {
//     const commandFunction = chatCommands[trimmedMessage];
//     commandFunction();
//   }
// });

  })
  .catch((e) => console.error(e));

export {};



