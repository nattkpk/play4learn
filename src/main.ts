/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

let currentPopup: any = undefined;
let check = false;

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
        if (check) {
          WA.ui.modal.closeModal();
          check = false;
          return;
        }
        aithaigen();
        check = true;
      },
    });

    WA.ui.actionBar.addButton({
      id: "btn1",
      type: "action",
      imageSrc: "https://i.ibb.co/JFXcrqH/computerx.png",
      toolTip: "Coding Thailand",
      callback: () => {
        if (check) {
          WA.ui.modal.closeModal();
          check = false;
          return;
        }
        codingthailand();
        check = true;
      },
    });

    WA.room.area.onEnter("A").subscribe(() => {
        console.log('A to a');
      });

      WA.room.area.onEnter("a").subscribe(() => {
        WA.nav.goToRoom("#A");
        console.log('a to A');
      });





    WA.room.area.onEnter("title_zone").subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        console.log('titlezone');
        
        currentPopup = WA.ui.openPopup("title_pop", "Welcome to Learning Center" + time, []);
      });
    WA.room.area.onLeave("title_zone").subscribe(closePopup);

    WA.room.area.onEnter("clock").subscribe(() => {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    });
    WA.room.area.onLeave("clock").subscribe(closePopup);




    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

function closePopup() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

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
