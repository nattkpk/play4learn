/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { exploreZones } from "./data/game";

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
                message: `${areaId} ต้องการสำรวจพื้นที่นี้
                [Click]`,
                callback: () => {
                  explored = true;
                  WA.state[areaId] = true;
                   
                },
              });
            } else {
              openCloseMessage = WA.ui.displayActionMessage({
                message: `${areaId} พื้นที่นี้ถูกสำรวจไปแล้ว  
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
  })
  .catch((e) => console.error(e));

export {};
