const ctx = canvas.getContext("2d");

const game = new Game(ctx);
//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado

let start$$ = document.getElementById("pang-start");
let restart$$ = document.getElementById("pang-restart");

start$$.addEventListener("click", function () {
  canvas.style.display = "block";
  start$$.style.opacity = "0.2"
  start$$.style.bottom = "8%"
    if (game.interval) {
      game.stop();
      start$$.innerText = "Start";
      start$$.style.opacity = "1";
    } else {
      game.start();
      start$$.innerText = "Stop";
    }
  }
);

restart$$.addEventListener("click", ()=>{
    window.location.reload();
})