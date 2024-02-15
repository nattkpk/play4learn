/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import "./roofs";
import "./actions";
import "./funnel"

console.log("Script started successfully");

let check1 = false;
let check2 = false;


// Waiting for the API to be ready
WA.onInit()
  .then(async () => {
    console.log("Scripting API ready");
    await WA.players.configureTracking();

    const players = WA.players.list();
    console.log(players);
    for (const player of players) {
      console.log(`name: ${player.name}`);
      console.log(`id: ${player.uuid}`);
    }
    console.log("Token: ", WA.player.userRoomToken);
    console.log("Player name: ", WA.player.name);
    console.log("Player tags: ", WA.player.tags);
    console.log("Player ID: ", WA.player.id);





    WA.ui.actionBar.addButton({
      id: "btn-trueeye",
      type: "action",
      imageSrc: "https://i.ibb.co/8452NqN/rocket-lunchx.png",
      toolTip: "AI ThaiGen",
      callback: () => {
        if (check1) {
          WA.ui.modal.closeModal();
          check1 = false;
          return;
        }
        aithaigen();
        check1 = true;
      },
    });

    WA.ui.actionBar.addButton({
      id: "btn1",
      type: "action",
      imageSrc: "https://i.ibb.co/JFXcrqH/computerx.png",
      toolTip: "Coding Thailand",
      callback: () => {
        if (check2) {
          WA.ui.modal.closeModal();
          check2 = false;
          return;
        }
        codingthailand();
        check2 = true;
      },
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

const codingthailand = async () => {
  WA.ui.modal.closeModal();
  WA.ui.modal.openModal({
    src: "https://codingthailand.org/",
    allow: "fullscreen",
    title: "website",
    allowApi: true,
    position: "center",
  });
};

const aithaigen = async () => {
  WA.ui.modal.closeModal();
  WA.ui.modal.openModal({
    src: "https://aithaigen.in.th/home",
    allow: "fullscreen",
    title: "website",
    allowApi: true,
    position: "center",
  });
};

export {};
