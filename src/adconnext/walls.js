/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info("Roofs Script started successfully");


// Waiting for the API to be ready
WA.onInit()
  .then(() => {
    WA.room.area.onEnter("hall").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_hall");
      WA.room.showLayer("focus/hall");
    });
    WA.room.area.onLeave("hall").subscribe(() => {
      WA.room.showLayer("above/wall/wall_hall");
      WA.room.hideLayer("focus/hall");
    });

    WA.room.area.onEnter("room0").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_0");
    });
    WA.room.area.onLeave("room0").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_0");
    });

    WA.room.area.onEnter("room1").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_1");
      WA.room.hideLayer("above/wall/sign_room_1");
    });
    WA.room.area.onLeave("room1").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_1");
      WA.room.showLayer("above/wall/sign_room_1");
    });

    WA.room.area.onEnter("room2").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_2");
      WA.room.hideLayer("above/wall/sign_room_2");
      WA.room.showLayer("focus/room2");
    });
    WA.room.area.onLeave("room2").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_2");
      WA.room.showLayer("above/wall/sign_room_2");
      WA.room.hideLayer("focus/room2");
    });

    WA.room.area.onEnter("room3").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_3");
      WA.room.hideLayer("above/wall/sign_room_3");
      WA.room.showLayer("focus/room3");
    });
    WA.room.area.onLeave("room3").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_3");
      WA.room.showLayer("above/wall/sign_room_3");
      WA.room.hideLayer("focus/room3");
    });

    WA.room.area.onEnter("room4").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_4");
      WA.room.hideLayer("above/wall/sign_room_4");
      WA.room.showLayer("focus/room4");
    });
    WA.room.area.onLeave("room4").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_4");
      WA.room.showLayer("above/wall/sign_room_4");
      WA.room.hideLayer("focus/room4");
    });

    WA.room.area.onEnter("room5").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_5");
      WA.room.showLayer("focus/room5");
    });
    WA.room.area.onLeave("room5").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_5");
      WA.room.hideLayer("focus/room5");
    });

    WA.room.area.onEnter("room6").subscribe(() => {
      WA.room.hideLayer("above/wall/wall_room_6");
      WA.room.showLayer("focus/room6");
    });
    WA.room.area.onLeave("room6").subscribe(() => {
      WA.room.showLayer("above/wall/wall_room_6");
      WA.room.hideLayer("focus/room6");
    });

    WA.room.area.onEnter("hallRoom").subscribe(() => {
      WA.room.showLayer("focus/room1");
    });
    WA.room.area.onLeave("hallRoom").subscribe(() => {
      WA.room.hideLayer("focus/room1");
    });

    WA.room.area.onEnter("hallRoom2").subscribe(() => {
      WA.room.showLayer("focus/room0");
    });
    WA.room.area.onLeave("hallRoom2").subscribe(() => {
      WA.room.hideLayer("focus/room0");
    });
  
    WA.room.area.onEnter("openadmin").subscribe(() => {
      WA.room.hideLayer("above/wall/admin");
    });
   

  })
  .catch((e) => console.error(e));

export {};
