/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import "./roofs";
import "./actions";
import "./funnel";

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
      console.log(`Player ${player.name} is near you`);
    }


    console.log("Token: ", WA.player.userRoomToken);
    console.log("Player name: ", WA.player.name);
    console.log("Player tags: ", WA.player.tags);
    console.log("Player ID: ", WA.player.id);

    WA.ui.actionBar.addButton({
      id: "btn-trueeye",
      type: "action",
      imageSrc: "https://i.ibb.co/8452NqN/rocket-lunchx.png",
      toolTip: "Live Graph",
      callback: () => {
        if (check1) {
          WA.ui.modal.closeModal();
          check1 = false;
          return;
        }
        graph();
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
        voding();
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

const voding = async () => {
  WA.ui.modal.closeModal();
  WA.ui.modal.openModal({
    src: "https://www.mentimeter.com/app/presentation/40489e0c11d75fe1de1a865a8551fe09/63utkjxax5jt",
    allow: "fullscreen",
    title: "website",
    allowApi: true,
    position: "center",
  });
};

const graph = async () => {
  WA.ui.modal.closeModal();
  WA.ui.modal.openModal({
    src: "https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQBiw2aWJH6e9Wha89yPzyqbhGUG238Olmpi_hyy_LlDoVLTWDuPnxqQv3LOT-7pOv8zvsb4XL_owck/pubchart?oid=1708420520&format=interactive",
    allow: "fullscreen",
    title: "website",
    allowApi: true,
    position: "center",
  });
};

export {};
