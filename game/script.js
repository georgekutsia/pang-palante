const ctx = canvas.getContext("2d");

const game = new Game(ctx);
//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado
let start$$ = document.getElementById("pang-start");
let restart$$ = document.getElementById("pang-restart");
let startBackground$$ = document.getElementById("start-background");
let instruccionesBtn$$ = document.getElementById("instrucciones-btn");
let instruccionesInfo1$$ = document.getElementById("instrucciones-info-1");
let instruccionesInfo2$$ = document.getElementById("instrucciones-info-2");
let changingLevelImg$$ = document.getElementById("changing-level-img");
let levelChangeText1$$ = document.getElementById("level-change-text1");
let levelChangeText2$$ = document.getElementById("level-change-text2");

let infoPlayerBtn1$$ = document.querySelector(".ayudas-btn")
let infoPlayer1$$ = document.querySelector(".introAyuda1")
let infoPlayer2$$ = document.querySelector(".introAyuda2")
let munAmetralladora$$ = document.querySelector(".munAmetralladora")
let munCadena$$ = document.querySelector(".munCadena")
let munEscudo$$ = document.querySelector(".munEscudo")
let munLanzallamas$$ = document.querySelector(".munLanzallamas")
let munMegablaster$$ = document.querySelector(".munMegablaster")
let munSalud$$ = document.querySelector(".munSalud")

// shop btns
let shopShield$$ = document.getElementById("shop-shield")
let shopFire$$ = document.getElementById("shop-fire")


start$$.addEventListener("click", function () {
  canvas.style.display = "block";
  restart$$.style.display = "block";
  startBackground$$.style.display = "none";
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  infoPlayerBtn1$$.style.display = "block";
  infoIntro1()
    if (game.interval) {
      game.stop();
      start$$.innerText = "Start";
      start$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      start$$.style.left = "1vw";
      start$$.style.top = "25vh";
      instruccionesBtn$$.style.left = "1vw";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      start$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  

    }
  }
);

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

