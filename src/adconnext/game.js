/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { exploreZones } from "./data/game";

console.log("BoradGame Run");

let explored = false;
let map = -99;

WA.onInit()
  .then(() => {
    let openCloseMessage;
    loop();
    if (!explored) {
      exploreZones.forEach((zone) => {
        const zoneName = zone.zone;
        zone.value.forEach((areaIndex, index) => {
          const areaId = `${zoneName}${index + 1}`;
          const areaValue = zone.value[index];
          const explore = `explore/${zoneName}/${index + 1}`;
          WA.room.area.onEnter(areaId + "f").subscribe(() => {
            if (!WA.state[areaId]) {
              openCloseMessage = WA.ui.displayActionMessage({
                message: ` ต้องการสำรวจพื้นที่ ${areaId} นี้   
                [กดเพื่อตรวจสอบ]`,
                callback: () => {
                  explored = true;
                  WA.state[areaId] = true;
                  WA.state.map++;

                  WA.chat.open();
                  WA.chat.sendChatMessage(
                    `บริเวณ ${areaId} ` + areaValue,
                    "ตัวเอง"
                  );
                },
              });
            } else {
              openCloseMessage = WA.ui.displayActionMessage({
                message: `พื้นที่ ${areaId} นี้ถูกสำรวจไปแล้ว     
              [กดเพื่อออก]`,
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

const loop = () => {
  if (WA.state.map !== map) {
    exploreZones.forEach((zone) => {
      const zoneName = zone.zone;
      zone.value.forEach((areaIndex, index) => {
        const areaId = `${zoneName}${index + 1}`;
        const explore = `explore/${zoneName}/${index + 1}`;
        if (WA.state[areaId]) {
          WA.room.showLayer(explore);
        }
      });
    });
    map = WA.state.map;
  }
  setTimeout(loop, 10000);
};

export {};
