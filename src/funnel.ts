/// <reference types="@workadventure/iframe-api-typings" />

console.log("Funnel script loaded");

const openModalFunnel = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://padlet.com/embed/tk2fbn34hg15d58j/slideshow?autoplay=1&loop=1",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

const test = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://padlet.com/aonparrot/submission-request/1OL2bZnNAM9lbaK3",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: true,
    position: "center",
  });
};

// Waiting for the API to be ready
WA.onInit().then(() => {
  // Enter in the funnel area
  WA.room.area.onEnter("gameHall_zone").subscribe(() => {
    WA.ui.modal.closeModal();
    openModalFunnel();
  });

  WA.room.area.onLeave("gameHall_zone").subscribe(() => {
    WA.ui.modal.closeModal();
  });

  WA.room.area.onEnter("alerttest").subscribe(() => {
    WA.ui.modal.closeModal();
    test();
  });

  WA.room.area.onLeave("alerttest").subscribe(() => {
    WA.ui.modal.closeModal();
  });

});

export {};
