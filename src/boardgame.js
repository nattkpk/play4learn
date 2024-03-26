/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { exploreZones } from "./data/gameData";

console.log("BoradGame Run");

let explored = false;

WA.onInit()
  .then(() => {
    let openCloseMessage;
    if (explored == false) {
      exploreZones.forEach((zone) => {
        const zoneName = zone.zone;
        zone.value.forEach((areaIndex, index) => {
          const areaId = `${zoneName}${index + 1}`;
          const areaValue = zone.value[index];
          WA.room.area.onEnter(areaId + "f").subscribe(() => {
            if (!WA.state[areaId]) {
              openCloseMessage = WA.ui.displayActionMessage({
                message: `${areaId} Explore this area.  
                [Click]`,
                callback: () => {
                  console.log(`survey ${areaId}`);
                  console.log(`value is ${areaValue}`);
                  explored = true;
                  WA.state[areaId] = true;
                  console.log(`${areaId} done`, WA.state[areaId]);
                },
              });
            } else {
              openCloseMessage = WA.ui.displayActionMessage({
                message: `${areaId} It has already been explored.  
              [Click]`,
                callback: () => {
                  openCloseMessage.remove();
                },
              });
            }
          });

          WA.room.area.onLeave(areaId + "f").subscribe(() => {
            openCloseMessage.remove();
          });
        });
      });
    }
    // WA.room.area.onEnter("a1f").subscribe(() => {
    //   openCloseMessage = WA.ui.displayActionMessage({
    //     message: "Press 'Spacebar' OR 'Click' \nto Exploration a1",
    //     callback: () => {
    //       console.log("survey a1");
    //       console.log("a1 done", WA.state.a1);
    //     },
    //   });
    // });
  })
  .catch((e) => console.error(e));

export {};
