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
  WA.room.area.onEnter("board1-room1").subscribe(() => {
    board1();
    WA.room.area.onLeave("board1-room1").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board2-room1").subscribe(() => {
    board2();
    WA.room.area.onLeave("board2-room1").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });

  WA.room.area.onEnter("board3-room1").subscribe(() => {
    board3();
    WA.room.area.onLeave("board3-room1").subscribe(() => {
      WA.ui.modal.closeModal();
    });
  });
});

const sentPer1 = () => {
  WA.ui.modal.openModal({
    title: "sentPer1",
    src: "https://padlet.com/artnokkaew/submission-request/RdZYv72p81WdXrPl?section=220781711",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};


const sentPer2 = () => {
  WA.ui.modal.openModal({
    title: "sentPer2",
    src: "https://padlet.com/artnokkaew/submission-request/RdZYv72p81WdXrPl?section=220781932",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};


const viewPer1 = () => {
  WA.ui.modal.openModal({
    title: "viewPer1",
    src: "https://padlet.com/artnokkaew/breakout-link/K8wMqGOex35aqZJO-k2qlv3eR87Ndz5Rx",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

const viewPer2 = () => {
  WA.ui.modal.openModal({
    title: "viewPer2",
    src: "https://padlet.com/artnokkaew/breakout-link/enZlqb8RQwaV43QR-k2qlv3eR87Ndz5Rx",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

const sentCer1 = () => {
  WA.ui.modal.openModal({
    title: "sentCer1",
    src: "https://padlet.com/artnokkaew/submission-request/MV5obMPDMW5QvD8e?section=220778768",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};


const sentCer2 = () => {
  WA.ui.modal.openModal({
    title: "sentCer2",
    src: "https://padlet.com/artnokkaew/submission-request/MV5obMPDMW5QvD8e?section=220779429",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};



const viewCer1 = () => {
  WA.ui.modal.openModal({
    title: "viewCer1",
    src: "https://padlet.com/artnokkaew/breakout-link/Bk5x4drWy037qZgz-oO6VvPqleonBbrwD",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};


const viewCer2 = () => {
  WA.ui.modal.openModal({
    title: "viewCer2",
    src: "https://padlet.com/artnokkaew/breakout-link/eo1R47M7VLzgqZDL-oO6VvPqleonBbrwD",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

WA.room.area.onEnter("viewCer1").subscribe(() => {
  viewCer1();
  WA.room.area.onLeave("viewCer1").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("viewCer2").subscribe(() => {
  viewCer2();
  WA.room.area.onLeave("viewCer2").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("sentCer1").subscribe(() => {
  sentCer1();
  WA.room.area.onLeave("sentCer1").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("sentCer2").subscribe(() => {
  sentCer2();
  WA.room.area.onLeave("sentCer2").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("viewPer1").subscribe(() => {
  viewPer1();
  WA.room.area.onLeave("viewPer1").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("viewPer2").subscribe(() => {
  viewPer2();
  WA.room.area.onLeave("viewPer2").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("sentPer1").subscribe(() => {
  sentPer1();
  WA.room.area.onLeave("sentPer1").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});

WA.room.area.onEnter("sentPer2").subscribe(() => {
  sentPer2();
  WA.room.area.onLeave("sentPer2").subscribe(() => {
    WA.ui.modal.closeModal();
  });
});







export {};
