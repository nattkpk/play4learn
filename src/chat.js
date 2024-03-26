/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

// import { chatPrompt } from "./data/chatData.js";
import { run } from "./aichat.js";
console.info("Chat Script started successfully");

let chat = false;
WA.onInit()
  .then(() => {
    // แสดงสถานะ chat เริ่มต้น
    console.log("chat :", chat);

    // เปิด chat เมื่อเข้า zone "chatZone"
    WA.room.area.onEnter("chatZone").subscribe(() => {
      WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?", "เอไอ");
      chat = true;
      WA.chat.open();
      console.log("เข้าร่วมการแชท:", chat);
    });

    // ปิด chat เมื่อออกจาก zone "chatZone"
    WA.room.area.onLeave("chatZone").subscribe(() => {
      chat = false;
      WA.chat.close();
      console.log("ออกจากการแชท:", chat);
    });

    // ฟังข้อความแชท
    WA.chat.onChatMessage((message) => { 
      if (chat) {
        WA.chat.startTyping({ scope: "local", author: "เอไอ" });
        run(message).then((result) => {
          
          WA.chat.sendChatMessage(result, "เอไอ");
          WA.chat.stopTyping({ scope: "local" });
        });
      }
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
