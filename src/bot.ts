/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info("Bot Script started successfully");


    WA.room.area.onEnter("bot_spawn").subscribe(() => {
      console.log("Enter"); 
      WA.nav.goToRoom("#");
      setTimeout(() => {
        WA.onInit().then(() => {
          timeout()
        });
      }, 1000);
    });
export {};
let xs = 4655;
let ys = 2094;
let x = xs;
let y = ys;
function timeout() {
  setTimeout(function () {
    console.log("Start Walking");
    let addx = Math.floor(Math.random() * 401) - 200; 
    let addy = Math.floor(Math.random() * 401) - 200; 
    x = x + addx;
    y = y + addy;
    WA.player.moveTo(x, y, 10);
    timeout();
  }, 2000);
}sa
timeout();


