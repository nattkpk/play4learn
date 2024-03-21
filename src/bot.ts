/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info("Bot Script started successfully");

WA.room.area.onEnter("bot_spawn").subscribe(() => {
  WA.nav.goToRoom("#");
  setTimeout(() => {
    WA.onInit().then(() => {
      console.log("Get Script");
      botrun();
    });
  }, 1000);
});
export {};

let x = 4655;
let y = 2094;
function botrun() {
  console.log("Start Walking");
  setTimeout(function () {
    const deltaX = Math.floor(Math.random() * 300) - 150;
    const deltaY = Math.floor(Math.random() * 300) - 150;
    x += deltaX;
    y += deltaY;
    WA.player.moveTo(x, y, 10);
    botrun();
  }, Math.floor(Math.random() * 3000) + 2000);
}
