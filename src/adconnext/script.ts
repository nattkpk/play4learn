/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("ADC_Script is started successfully");

import './chat'
import './game'
import './quiz'
import './board'
import './walls'

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

    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
