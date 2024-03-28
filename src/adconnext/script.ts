/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("ADC_Script is started successfully");

import './chat'
import './game'
import './quiz'
import './board'
import './walls'

let check3 = false;

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
      id: "btn-form",
      type: "action",
      imageSrc: "https://i.ibb.co/JFXcrqH/computerx.png",
      toolTip: "Questionnaire",
      callback: () => {
        if (check3) {
          WA.ui.modal.closeModal();
          check3 = false;
          return;
        }
        ggform();
        check3 = true;
      },
    });

    const ggform = async () => {
      WA.ui.modal.closeModal();
      WA.ui.modal.openModal({
        src: "https://forms.office.com/Pages/ResponsePage.aspx?id=-LMev9IZnUCwxU6AyUP9UnHcR20-rXVHlnMm8B4tnvxUMllUNENDTE8wWDYzTENVWkVPSFRCWVdJQy4u",
        allow: "fullscreen",
        title: "website",
        allowApi: true,
        position: "center",
      });
    };

    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
