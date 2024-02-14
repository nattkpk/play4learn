/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info("Actions Script started successfully");

let currentPopup: any = undefined;
let go: boolean = true;
// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    WA.room.area.onEnter("P1").subscribe(() => {
      if (go == true) {
        WA.nav.goToRoom("#R1");
        go = false;
        console.log("Portal1 to Room1");
      }
    });

    WA.room.area.onEnter("R1").subscribe(() => {
      if (go == true) {
        WA.nav.goToRoom("#P1");
        go = false;
        console.log("Room1 to Portal1");
      }
    });

    WA.room.area.onLeave("a").subscribe(() => {
      setTimeout(() => {
        go = true;
      }, 1000);
    });

    WA.room.area.onLeave("A").subscribe(() => {
      setTimeout(() => {
        go = true;
      }, 1000);
    });

    WA.room.area.onEnter("title_zone").subscribe(() => {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      console.log("titlezone");

      currentPopup = WA.ui.openPopup(
        "title_pop",
        "Welcome to Learning Center" + time,
        []
      );
    });
    WA.room.area.onLeave("title_zone").subscribe(closePopup);
  })
  .catch((e) => console.error(e));

function closePopup() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

export {};
