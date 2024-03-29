/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import "./roofs";
import "./actions";
import "./funnel";
import "./bot";
import "./chat";
import "./quiz2";
import "./boardgame"


console.log("Script started successfully");

let check1 = false;
// let check2 = false;
let check3 = false;

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

    // const url: string =
    //   "https://docs.google.com/spreadsheets/d/1Pv5pJjORIJGZ2dXBf7CMV2t9FJVycPFe8nDthwjeEkU/gviz/tq?";
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    //     }
    //     return res.text();
    //   })
    //   .then((rep: string) => {
    //     const data: {
    //       table: { cols: { id: string; label: string; type: string }[] };
    //     } = JSON.parse(rep.substr(47).slice(0, -2));
    //     data.table.cols.forEach((heading) => {
    //       console.log(heading);
    //     });
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Fetch error:", error);
    //   });

    console.log("Token: ", WA.player.userRoomToken);
    console.log("Player name: ", WA.player.name);
    console.log("Player tags: ", WA.player.tags);
    console.log("Player ID: ", WA.player.id);

    WA.ui.actionBar.addButton({
      id: "btn-poll-a",
      type: "action",
      imageSrc: "https://i.ibb.co/8452NqN/rocket-lunchx.png",
      toolTip: "MINI MAP",
      callback: () => {
        if (check1) {
          WA.ui.modal.closeModal();
          check1 = false;
          return;
        }
        pollA();
        check1 = true;
      },
    });

    // WA.ui.actionBar.addButton({
    //   id: "btn-poll-b",
    //   type: "action",
    //   imageSrc: "https://i.ibb.co/JFXcrqH/computerx.png",
    //   toolTip: "B-Competitive Game",
    //   callback: () => {
    //     if (check2) {
    //       WA.ui.modal.closeModal();
    //       check2 = false;
    //       return;
    //     }
    //     pollB();
    //     check2 = true;
    //   },
    // });

    // WA.ui.actionBar.addButton({
    //   id: "btn-poll-c",
    //   type: "action",
    //   imageSrc: "https://i.ibb.co/8452NqN/rocket-lunchx.png",
    //   toolTip: "C-Self-Entertain",
    //   callback: () => {
    //     if (check3) {
    //       WA.ui.modal.closeModal();
    //       check3 = false;
    //       return;
    //     }
    //     pollC();
    //     check3 = true;
    //   },
    // });

    const pollA = async () => {
      WA.ui.modal.closeModal();
      WA.ui.modal.openModal({
        src: "https://i.ibb.co/QXhXY8R/Screenshot-2567-03-01-at-09-37-21.png",
        allow: "",
        title: "website",
        allowApi: true,
        position: "center",
      });
    };

    // const pollB = async () => {
    //   WA.ui.modal.closeModal();
    //   WA.ui.modal.openModal({
    //     src: "https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQBiw2aWJH6e9Wha89yPzyqbhGUG238Olmpi_hyy_LlDoVLTWDuPnxqQv3LOT-7pOv8zvsb4XL_owck/pubchart?oid=1708420520&format=interactive",
    //     allow: "fullscreen",
    //     title: "website",
    //     allowApi: true,
    //     position: "center",
    //   });
    // };

    // const pollC = async () => {
    //   WA.ui.modal.closeModal();
    //   WA.ui.modal.openModal({
    //     src: "https://www.mentimeter.com/app/presentation/40489e0c11d75fe1de1a865a8551fe09/63utkjxax5jt",
    //     allow: "fullscreen",
    //     title: "website",
    //     allowApi: true,
    //     position: "center",
    //   });
    // };

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
        src: "https://docs.google.com/forms/d/e/1FAIpQLSfsBAyWHjq2h6Mo7YZJKPZQV025nn6saqe4BCsgE20aucU07w/viewform?embedded=true",
        allow: "fullscreen",
        title: "website",
        allowApi: true,
        position: "center",
      });
    };

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
      .then(() => {
        console.log("Scripting API Extra ready");
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));

export {};
