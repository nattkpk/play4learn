/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

import { exploreZones } from "./data/game";

console.log("BoradGame Script Run");

let explored = false;
let map = -99;

WA.onInit()
  .then(() => {
    let openCloseMessage;
    loop();

    WA.room.area.onEnter("reset").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: `Reset Data   
          [กดเพื่อล้างข้อมูล]`,
        callback: () => {
          WA.state.data1 = false;
          reset();
        },
      });
      WA.room.area.onLeave("reset").subscribe(() => {
        openCloseMessage.remove();
      });
    });

    WA.room.area.onEnter("data1").subscribe(() => {
      if (!WA.state.data1) {
        openCloseMessage = WA.ui.displayActionMessage({
          message: `Show Ex.Data1  
          [กดเพื่อแสดงข้อมูลตัวอย่าง]`,
          callback: () => {
            WA.state.data1 = true;
            WA.state.map++;
          },
        });
      } else {
        openCloseMessage = WA.ui.displayActionMessage({
          message: `Close Ex.Data1  
          [กดเพื่อปิดข้อมูลตัวอย่าง]`,
          callback: () => {
            WA.state.data1 = false;
            WA.state.map++;
          },
        });
      }
      WA.room.area.onLeave("data1").subscribe(() => {
        openCloseMessage.remove();
      });
    });

    WA.room.area.onEnter("back").subscribe(() => {
      openCloseMessage = WA.ui.displayActionMessage({
        message: `Back to Start Point   
          [กดเพื่อกลับจุดเริ่มต้น]`,
        callback: () => {
          WA.nav.goToRoom("#/");
        },
      });
      WA.room.area.onLeave("back").subscribe(() => {
        openCloseMessage.remove();
      });
    });

    exploreZones.forEach((zone) => {
      const zoneName = zone.zone;
      zone.value.forEach((areaIndex, index) => {
        const areaId = `${zoneName}${index + 1}`;
        const areaValue = zone.value[index];
        const explore = `explore/${zoneName}/${index + 1}`;
        WA.room.area.onEnter(areaId + "f").subscribe(() => {
          if (!explored) {
            if (!WA.state[areaId]) {
              openCloseMessage = WA.ui.displayActionMessage({
                message: ` ต้องการสำรวจพื้นที่ ${areaId} นี้   
                [กดเพื่อตรวจสอบ]`,
                callback: () => {
                  explored = true;
                  WA.state[areaId] = true;
                  WA.state.map++;
                  console.log(WA.state.map);
                  WA.chat.open();
                  WA.chat.sendChatMessage(
                    `บริเวณ ${areaId} ` + areaValue,
                    "ตัวเอง"
                  );
                },
              });
            } else {
              openCloseMessage = WA.ui.displayActionMessage({
                message: `พื้นที่ ${areaId} นี้ถูกสำรวจไปแล้ว`,
              });
            }
          } else {
            openCloseMessage = WA.ui.displayActionMessage({
              message: `คุณได้ทำการสำรวจไปแล้ว`,
            });
          }
        });

        WA.room.area.onLeave(areaId + "f").subscribe(() => {
          openCloseMessage.remove();
        });
      });
    });
  })
  .catch((e) => console.error(e));

const loop = () => {
  if (WA.state.map !== map) {
    if (WA.state.data1) {
      WA.room.showLayer("explore/data1");
    } else {
      WA.room.hideLayer("explore/data1");
    }

    exploreZones.forEach((zone) => {
      const zoneName = zone.zone;
      zone.value.forEach((areaIndex, index) => {
        const areaId = `${zoneName}${index + 1}`;
        const explore = `explore/${zoneName}/${index + 1}`;
        if (!WA.state.data1) {
          if (WA.state[areaId]) {
            WA.room.showLayer(explore);
          }
        } else {
          WA.room.hideLayer(explore);
        }
      });
    });
    map = WA.state.map;
  }
  setTimeout(loop, 10000);
};

const reset = () => {
  exploreZones.forEach((zone) => {
    const zoneName = zone.zone;
    zone.value.forEach((areaIndex, index) => {
      const areaId = `${zoneName}${index + 1}`;
      WA.state[areaId] = false;
    });
  });
  WA.state.map = 0;
};

export {};
