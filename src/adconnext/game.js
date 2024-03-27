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
          const explore = `explore/${zoneName}/${index + 1}`;
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

    loop();
  })
  .catch((e) => console.error(e));

const loop = () => {
  exploreZones.forEach((zone) => {
    const zoneName = zone.zone;
    zone.value.forEach((areaIndex, index) => {
      const areaId = `${zoneName}${index + 1}`;
      const explore = `explore/${zoneName}/${index + 1}`;
      console.log(explore);
      if (WA.state[areaId]) {
        WA.room.showLayer(explore);
      }
    });
  });
  setTimeout(loop, 10000);
};

export {};
