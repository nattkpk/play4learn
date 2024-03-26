/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.log("Ed-Board loaded");

const board1 = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://heyzine.com/flip-book/1726b3063d.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

const board2 = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://heyzine.com/flip-book/856aea112a.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

const board3 = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://heyzine.com/flip-book/ea48b35953.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

WA.onInit().then(() => {
  WA.room.area.onEnter("board1-Hallway").subscribe(() => {
    board1();
    WA.room.area.onLeave("board1-Hallway").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board2-Hallway").subscribe(() => {
    board2();
    WA.room.area.onLeave("board2-Hallway").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board3-Hallway").subscribe(() => {
    board3();
    WA.room.area.onLeave("board3-Hallway").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board1-Hall").subscribe(() => {
    board1();
    WA.room.area.onLeave("board1-Hall").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board2-Hall").subscribe(() => {
    board2();
    WA.room.area.onLeave("board2-Hall").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board3-Hall").subscribe(() => {
    board3();
    WA.room.area.onLeave("board3-Hall").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });
  WA.room.area.onEnter("board1-Room").subscribe(() => {
    board1();
    WA.room.area.onLeave("board1-Room").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board2-Room").subscribe(() => {
    board2();
    WA.room.area.onLeave("board2-Room").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board3-Room").subscribe(() => {
    board3();
    WA.room.area.onLeave("board3-Room").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });
});

export {};
