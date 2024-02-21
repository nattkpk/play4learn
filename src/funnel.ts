/// <reference types="@workadventure/iframe-api-typings" />

console.log("Funnel script loaded");

const openModalFunnel = () => {
  WA.ui.modal.openModal({
    title: "Review",
    src: "https://wordwall.net/play/68723/373/470",
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
});

export {};
