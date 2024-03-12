/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info("Actions Script started successfully");
import { ActionMessage } from "@workadventure/iframe-api-typings";

let currentPopup: any = undefined;
let openCloseMessage: ActionMessage | undefined;
// let go: boolean = true;
let countPlayers: number = 0;
let countPlayersDone: boolean = false;
let alert: number = 255;
let walk1: boolean = true;
let walk2: boolean = false;
let walk3: boolean = false;
let walk4: boolean = false;
let walk5: boolean = false;
let walk6: boolean = false;

// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    WA.room.area.onEnter("P1").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'Hall' room ",
        callback: () => {
          WA.nav.goToRoom("#H1");
          console.log("Portal1 to Hall1");
        },
      });
    });

    WA.room.area.onEnter("P2").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'CPW Hall of Fame' room ",
        callback: () => {
          WA.nav.goToRoom("#R2");
          console.log("Portal2 to Room2");
        },
      });
    });

    WA.room.area.onEnter("P3").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'CPW Pitching 2022' room ",
        callback: () => {
          WA.nav.goToRoom("#R3");
          console.log("Portal3 to Room3");
        },
      });
    });

    WA.room.area.onEnter("P4").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'A-Gadgets' room ",
        callback: () => {
          WA.nav.goToRoom("#R4");
          console.log("Portal4 to Room4");
        },
      });
    });

    WA.room.area.onEnter("P5").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'B-Competitive Game' room ",
        callback: () => {
          WA.nav.goToRoom("#R5");
          console.log("Portal5 to Room5");
        },
      });
    });

    WA.room.area.onEnter("P6").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto 'C-Self Entertain' room ",
        callback: () => {
          WA.nav.goToRoom("#R6");
          console.log("Portal6 to Room");
        },
      });
    });

    WA.room.area.onLeave("P1").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("P2").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("P3").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("P4").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("P5").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("P6").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });

    WA.room.area.onEnter("RoomL").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto Right side",
        callback: () => {
          WA.nav.goToRoom("#RoomR");
          console.log("Left to Right side");
        },
      });
    });

    WA.room.area.onEnter("RoomR").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "Press 'Spacebar' OR 'Click' \nto Left side",
        callback: () => {
          WA.nav.goToRoom("#RoomL");
          console.log("Right to Left side");
        },
      });
    });

    WA.room.area.onLeave("RoomL").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });
    WA.room.area.onLeave("RoomR").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
    });

    WA.room.onEnterLayer("start").subscribe(() => {
      countPlayers++;
      console.log(countPlayers);
    });

    WA.room.area.onEnter("title_zone").subscribe(() => {
      if (!countPlayersDone) {
        (WA.state.countPlayers as number)++;
        countPlayersDone = true;
      }
      console.log(WA.state.countPlayers);
    });

    WA.room.area.onEnter("checkCountPlayers").subscribe(() => {
      if (!countPlayersDone) {
        (WA.state.countPlayers as number)++;
        countPlayersDone = true;
      }
      console.log("alertVar is " + WA.state.alertVar);
      console.log("alert is " + alert);
      console.log(WA.state.countPlayers);
    });

    WA.room.onEnterLayer("walk/1").subscribe(() => {
      if (walk1) {
      WA.room.hideLayer("walk/1");
      WA.room.showLayer("walk/2");
      walk1 = false;
      walk2 = true;
      }
    });

    WA.room.onEnterLayer("walk/2").subscribe(() => {
      if (walk2) {
        WA.room.hideLayer("walk/2");
        WA.room.showLayer("walk/3");
        walk2 = false;
        walk3 = true;
      }
    });

    WA.room.onEnterLayer("walk/3").subscribe(() => {
      if (walk3) {
        WA.room.hideLayer("walk/3");
        WA.room.showLayer("walk/4");
        walk3 = false;
        walk4 = true;
      }
    });

    WA.room.onEnterLayer("walk/4").subscribe(() => {
      if (walk4) {
        WA.room.hideLayer("walk/4");
        WA.room.showLayer("walk/5");
        walk4 = false;
        walk5 = true;
      }
    });

    WA.room.onEnterLayer("walk/5").subscribe(() => {
      if (walk5) {
        WA.room.hideLayer("walk/5");
        WA.room.showLayer("walk/6");
        walk5 = false;
        walk6 = true;
      }
    });

    WA.room.onEnterLayer("walk/6").subscribe(() => {
      if (walk6) {
        WA.room.hideLayer("walk/6");
        walk6 = false;
      }
    });

    // WA.room.area.onEnter("R1").subscribe(() => {
    //   if (go == true) {
    //     WA.nav.goToRoom("#P1");
    //     go = false;
    //     console.log("Room1 to Portal1");
    //   }
    // });
    // WA.room.area.onLeave("P1").subscribe(() => {
    //   setTimeout(() => {
    //     go = true;
    //   }, 1000);
    // });

    WA.room.area.onLeave("alerttest").subscribe(() => {
      if (openCloseMessage !== undefined) {
        openCloseMessage.remove();
      }
      alert = WA.state.alertVar as number;
      WA.room.hideLayer("alert");
    });

    WA.room.area.onEnter("alerttest").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: "edit something",
        callback: () => {
          (WA.state.alertVar as number)++;
        },
      });
    });

    loop();

    WA.room.area.onEnter("title_zone").subscribe(() => {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      console.log("titlezone");

      currentPopup = WA.ui.openPopup(
        "title_pop",
        "Welcome to Learning Center!! \n at " +
          time +
          " NOW HAVING " +
          WA.state.countPlayers +
          " Players",
        []
      );
    });
    WA.room.area.onLeave("title_zone").subscribe(closePopup);
  })
  .catch((e) => console.error(e));

const loop = () => {
  if (WA.state.alertVar !== alert) {
    WA.room.showLayer("alert");
  } else {
    WA.room.hideLayer("alert");
  }
  setTimeout(loop, 1500);
};

function closePopup() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

export {};
