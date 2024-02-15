/// <reference types="@workadventure/iframe-api-typings" />

console.log("Funnel script loaded");

const openModalFunnel = () => {
  WA.ui.modal.openModal({
    title: "GAME",
    src: "https://games.crazygames.com/th_TH/uno-online/index.html?fbclid=IwAR0g_OWl8AMpTRYi7YiqDBHU42h_8rXE1jpfZsBAJnkLuu9ZM9bYKiN8dgE&v=1.269",
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
