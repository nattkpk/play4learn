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

let x = 4600;
let y = 1900;
function botrun() {
  console.log("Start Walking");

  const deltaX = Math.floor(Math.random() * 700) - 350;
  const deltaY = Math.floor(Math.random() * 700) - 350;
  x += deltaX;
  y += deltaY;
  if (y > 2440) {
    y = 2420;
  }
  if (x > 4840) {
    x = 4780;
  }
  WA.player.moveTo(x, y, 10);
  setTimeout(function () {
    WA.onInit().then(async () => {
      console.log("St Position : ", await WA.player.getPosition());
      // WA.player.onPlayerMove(console.log);
    });
    console.log("to Position X: ", x);
    console.log("to Position Y: ", y);
    botrun();
  }, Math.floor(Math.random() * 4000) + 6000);
}
