const ctx = canvas.getContext("2d");

const game = new Game(ctx);
//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado

let saltarNivel$$ = document.getElementById("saltar-nivel");
let startInfinite$$ = document.getElementById("pang-startInfinite");
let startDemo$$ = document.getElementById("pang-demo");
let start$$ = document.getElementById("pang-start");
let restart$$ = document.getElementById("pang-restart");
let retry$$ = document.getElementById("pang-retry");
let retryAmount$$ = document.getElementById("retry-amount");
let startBackground$$ = document.getElementById("start-background");
let instruccionesBtn$$ = document.getElementById("instrucciones-btn");
let instruccionesInfo1$$ = document.getElementById("instrucciones-info-1");
let instruccionesInfo2$$ = document.getElementById("instrucciones-info-2");
let changingLevelImg$$ = document.getElementById("changing-level-img");
let levelChangeText1$$ = document.getElementById("level-change-text1");
let levelChangeText2$$ = document.getElementById("level-change-text2");
let levelChangeText3$$ = document.getElementById("level-change-text3");
let levelChangeText4$$ = document.getElementById("level-change-text4");

let infoPlayerBtn1$$ = document.querySelector(".ayudas-btn")
let infoPlayer1$$ = document.querySelector(".introAyuda1")
let infoPlayer2$$ = document.querySelector(".introAyuda2")
let munAmetralladora$$ = document.querySelector(".munAmetralladora")
let munCadena$$ = document.querySelector(".munCadena")
let munEscudo$$ = document.querySelector(".munEscudo")
let munLanzallamas$$ = document.querySelector(".munLanzallamas")
let munMegablaster$$ = document.querySelector(".munMegablaster")
let munSalud$$ = document.querySelector(".munSalud")
let munHook$$ = document.querySelector(".munHook")
let munStep$$ = document.querySelector(".munStep")
let toggleShop$$ = document.getElementById("toggle-shop")

// shop btns
let shopBtnsAll$$ = document.getElementById("shop-btn")
let shopShield$$ = document.getElementById("shop-shield")
let shopFire$$ = document.getElementById("shop-fire")
let shopBar$$ = document.getElementById("shop-bar")
let shopSuperGun$$ = document.getElementById("shop-superGun")
let shopSuperGun1$$ = document.getElementById("shop-superGun1")
let shopSuperGun2$$ = document.getElementById("shop-superGun2")
let shopSuperGun3$$ = document.getElementById("shop-superGun3")
let shopSuperGun4$$ = document.getElementById("shop-superGun4")
let shopBarResistance$$ = document.getElementById("shop-barResistane")


let shopSpeedGun$$ = document.getElementById("shop-speedGun")
let actionsDiv$$ = document.getElementById("actions-div")
let movesDiv$$ = document.getElementById("moves-div")

let ammosCount$$ = document.getElementById("ammos-count")


start$$.addEventListener("click", function () {
  GAMELEVEL = 1;
  canvas.style.display = "block";
  restart$$.style.display = "block";
  retry$$.style.display = "block";
  startInfinite$$.style.display = "none";
  startDemo$$.style.display = "none";
  startBackground$$.style.display = "none";
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  infoPlayerBtn1$$.style.display = "block";
  ammosCount$$.style.display = "block";
  toggleShop$$.style.display = "block";
  game.isInfiniteChanging = false;
  if (window.innerWidth < 880 && window.innerHeight < 400) {
    actionsDiv$$.style.display = "flex"
    movesDiv$$.style.display = "flex"
  }
    if (game.interval) {
      game.stop();
      start$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      start$$.style.left = "1vw";
      start$$.style.top = "35vh";
      start$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "25vh";
      instruccionesBtn$$.style.left = "1vw";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      start$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
    }
  }
);

startInfinite$$.addEventListener("click", function () {
  GAMELEVEL = 100
  canvas.style.display = "block";
  restart$$.style.display = "block";
  retry$$.style.display = "block";
  start$$.style.display = "none";
  startDemo$$.style.display = "none";
  startBackground$$.style.display = "none";
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  infoPlayerBtn1$$.style.display = "block";
  ammosCount$$.style.display = "block";
  toggleShop$$.style.display = "block";
  game.isInfiniteChanging = true;
  if (window.innerWidth < 880 && window.innerHeight < 400) {
    actionsDiv$$.style.display = "flex"
    movesDiv$$.style.display = "flex"
  }
    if (game.interval) {
      game.stop();
      start$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      startInfinite$$.style.left = "1vw";
      startInfinite$$.style.top = "35vh";
      startInfinite$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "25vh";
      instruccionesBtn$$.style.left = "1vw";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      startInfinite$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
    }
  }
);

startDemo$$.addEventListener("click", function () {
  GAMELEVEL = 1987
  canvas.style.display = "block";
  restart$$.style.display = "block";
  retry$$.style.display = "block";
  start$$.style.display = "none";
  startInfinite$$.style.display = "none";
  startBackground$$.style.display = "none";
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  infoPlayerBtn1$$.style.display = "block";
  ammosCount$$.style.display = "block";
  toggleShop$$.style.display = "block";
  game.isInfiniteChanging = false;
  if (window.innerWidth < 880 && window.innerHeight < 400) {
    actionsDiv$$.style.display = "flex"
    movesDiv$$.style.display = "flex"
  }
    if (game.interval) {
      game.stop();
      startDemo$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      startDemo$$.style.left = "1vw";
      startDemo$$.style.top = "35vh";
      startDemo$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "25vh";
      instruccionesBtn$$.style.left = "1vw";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      startDemo$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
    }
  }
)
instruccionesBtn$$.addEventListener("click", function () {
    if(instruccionesInfo1$$.style.display === "block"){
      instruccionesInfo1$$.style.display = "none";
      instruccionesInfo2$$.style.display = "none";
    } else{
      instruccionesInfo1$$.style.display = "block";
      instruccionesInfo2$$.style.display = "block";
    }
});

restart$$.addEventListener("click", ()=>{
    window.location.reload();
})
retry$$.addEventListener("click", ()=>{
  if(retry >=1){
    retry -= 1; //hay 2 retries
    game.player.wasNotDamaged = false; //para que no se sumen 20 monedas
    GAMELEVEL = GAMELEVEL -1; //para que reinicie en el mismo nivel en el que está
    game.levelChange();
  }
})

instruccionesInfo2$$.addEventListener("click",()=>{
    instruccionesInfo1$$.style.zIndex = 1;
    instruccionesInfo2$$.style.zIndex = 2;
})

instruccionesInfo1$$.addEventListener("click",()=>{
    instruccionesInfo1$$.style.zIndex = 2;
    instruccionesInfo2$$.style.zIndex = 1;
})

instruccionesInfo2$$.addEventListener("dblclick", () => {
  const currentScale = parseFloat(instruccionesInfo2$$.style.transform.replace("scale(", "").replace(")", "")) || 1.0;
  if (currentScale === 1.3) {
    instruccionesInfo2$$.style.transform = "scale(1.0)";
  } else {
    instruccionesInfo2$$.style.transform = "scale(1.3)";
    instruccionesInfo1$$.style.transform = "scale(1.0)";
    instruccionesInfo1$$.style.zIndex = 1;
    instruccionesInfo2$$.style.zIndex = 2;
  }
});
instruccionesInfo1$$.addEventListener("dblclick", () => {
  const currentScale = parseFloat(instruccionesInfo1$$.style.transform.replace("scale(", "").replace(")", "")) || 1.0;
  if (currentScale === 1.3) {
    instruccionesInfo1$$.style.transform = "scale(1.0)";
  } else {
    instruccionesInfo1$$.style.transform = "scale(1.3)";
    instruccionesInfo2$$.style.transform = "scale(1.0)";
    instruccionesInfo1$$.style.zIndex = 2;
    instruccionesInfo2$$.style.zIndex = 1;
  }
});



saltarNivel$$.addEventListener("click",()=>{
  game.levelChange()
})