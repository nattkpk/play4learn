/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { chatPrompt, aiChatBot } from "./data/chatData.js";

console.info("Chat Script started successfully");

WA.onInit()
  .then(() => {
    WA.room.area.onEnter("chatZone").subscribe(() => {
      console.log("chatttttt");
      WA.chat.sendChatMessage("สวัสดีครับมีอะไรให้ช่วย ไหมครับ?");
      WA.chat.open();
    });
    WA.room.area.onLeave("chatZone").subscribe(() => {
      WA.chat.close();
    });

const sendChatMessage = (message) => {
  WA.chat.sendChatMessage(message);
};

const chatCommands = { 
  "ไม่": () => sendChatMessage("ไม่มี เฉยยย......นะเรา"),
  "มี": () => sendChatMessage("ไม่ช่วยหรอก"),
  // "ไม่": () => sendChatMessage("ไม่มี เฉยยย......นะเรา"),
  // "ไม่": () => sendChatMessage("ไม่มี เฉยยย......นะเรา"),
  // "ไม่": () => sendChatMessage("ไม่มี เฉยยย......นะเรา"),
};

chatPrompt.Variations1.forEach(variation => {
  chatCommands[variation] = chatCommands["ไม่"];
});
chatPrompt.Variations2.forEach(variation => {
  chatCommands[variation] = chatCommands["มี"];
});

const chatCommandsKeys = Object.keys(chatCommands);

WA.chat.onChatMessage((message) => {
  const trimmedMessage = message.trim().toLowerCase();
  if (chatCommandsKeys.includes(trimmedMessage)) {
    const commandFunction = chatCommands[trimmedMessage];
    commandFunction();
  }

  
});

  })
  .catch((e) => console.error(e));

export {};



