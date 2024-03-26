/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { run } from "./chatbot.js";
console.info("Chat Script started successfully");

let chat = false;
WA.onInit()
  .then(() => {
 
    WA.room.area.onEnter("chatZone1").subscribe(() => {
      chat = true;
      WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?", "เอไอ");
      WA.chat.open();
    });

    WA.room.area.onEnter("chatZone2").subscribe(() => {
      chat = true;
      WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?", "เอไอ");
      WA.chat.open();
    });

    WA.room.area.onLeave("chatZone1").subscribe(() => {
      chat = false;
      WA.chat.close();
    });

    WA.room.area.onLeave("chatZone2").subscribe(() => {
      chat = false;
      WA.chat.close();
    });

    WA.room.area.onEnter("chatZone3").subscribe(() => {
      chat = true;
      WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?", "เอไอ");
      WA.chat.open();
    });

    WA.room.area.onEnter("chatZone4").subscribe(() => {
      chat = true;
      WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?", "เอไอ");
      WA.chat.open();
    });

    WA.room.area.onLeave("chatZone3").subscribe(() => {
      chat = false;
      WA.chat.close();
    });

    WA.room.area.onLeave("chatZone4").subscribe(() => {
      chat = false;
      WA.chat.close();
    });

    WA.chat.onChatMessage((message) => {
      if (chat) {
        WA.chat.startTyping({ scope: "local", author: "เอไอ" });
        run(message).then((result) => {
          WA.chat.sendChatMessage(result, "เอไอ");
          WA.chat.stopTyping({ scope: "local" });
        });
      }
    });
  })
  .catch((e) => console.error(e));


  

export {};
