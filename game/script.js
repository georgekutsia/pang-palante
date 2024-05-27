function positioningButtons(button) {
  const screenWidth = window.innerWidth;
  let leftPosition;
  if (screenWidth >= 2090) {
    leftPosition = "12.5vw";
  } else if (screenWidth >= 1801) {
    leftPosition = "4.2vw";
  } else if (screenWidth >= 1501) {
    leftPosition = "2.2vw";
  } else if (screenWidth >= 1301) {
    leftPosition = "1.2vw";
  } else {
    leftPosition = ".1vw";
  }
  button.style.left = leftPosition;
}

start$$.addEventListener("click", function () {
  GAMELEVEL = 1;
  canvas.style.display = "block";
  restart$$.style.display = "block";
  retry$$.style.display = "block";
  startInfinite$$.style.display = "none";
  startDemo$$.style.display = "none";
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  instruccionesInfo3$$.style.display = "none";
  instruccionesInfo4$$.style.display = "none";
  // infoPlayerBtn1$$.style.display = "block";
  ammosCount$$.style.display = "block";
  
  game.isInfiniteChanging = false;
  iconsBtns$$.forEach(function(icon) {
    icon.style.backgroundColor = "transparent";
  });
  if (window.innerWidth < 880 && window.innerHeight < 400) {
    actionsDiv$$.style.display = "flex"
    movesDiv$$.style.display = "flex"
  }
    if (game.interval) {
      game.stop();
      start$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      start$$.style.top = "16vh";
      start$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "11vh";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      start$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
      game.gameStarted = true;
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
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  instruccionesInfo3$$.style.display = "none";
  instruccionesInfo4$$.style.display = "none";
  toggleShop$$.style.display = "block"
  ammosCount$$.style.display = "block";
  
  game.isInfiniteChanging = true;
  iconsBtns$$.forEach(function(icon) {
    icon.style.backgroundColor = "transparent";
  });
  if (window.innerWidth < 880 && window.innerHeight < 400) {
    actionsDiv$$.style.display = "flex"
    movesDiv$$.style.display = "flex"
  }
    if (game.interval) {
      game.stop();
      start$$.innerHTML = '<i class="fa-solid fa-play"></i>';  
    } else {
      game.start();
      startInfinite$$.style.top = "16vh";
      startInfinite$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "11vh";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      startInfinite$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
      game.gameStarted = true;
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
  instruccionesInfo1$$.style.display = "none";
  instruccionesInfo2$$.style.display = "none";
  instruccionesInfo3$$.style.display = "none";
  instruccionesInfo4$$.style.display = "none";
  // infoPlayerBtn1$$.style.display = "block";
  ammosCount$$.style.display = "block";
  
  iconsBtns$$.forEach(function(icon) {
    icon.style.backgroundColor = "transparent";
  });
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
      startDemo$$.style.top = "16vh";
      startDemo$$.style.transform = "translate(0)";
      instruccionesBtn$$.style.top = "11vh";
      instruccionesBtn$$.style.transform = "translate(0)";
      instruccionesBtn$$.innerHTML = '<i class="fa-solid fa-info"></i>';  
      startDemo$$.innerHTML = '<i class="fa-solid fa-pause"></i>';  
      game.gameStarted = true;
    }
  }
)

instruccionesBtn$$.addEventListener("click", function () {
    if(instruccionesInfo1$$.style.display === "block"){
      instruccionesInfo1$$.style.display = "none";
      instruccionesInfo2$$.style.display = "none";
      instruccionesInfo3$$.style.display = "none";
      instruccionesInfo4$$.style.display = "none";
    } else{
      instruccionesInfo1$$.style.display = "block";
      instruccionesInfo2$$.style.display = "block";
      instruccionesInfo3$$.style.display = "block";
      instruccionesInfo4$$.style.display = "block";
    }
});

restart$$.addEventListener("click", ()=>{
    window.location.reload();
})
retry$$.addEventListener("click", ()=>{
  if(GAMELEVEL <= 1800){
    if(retry >=1){
      retry -= 1; //hay 2 retries
      game.player.wasNotDamaged = false; //para que no se sumen 20 monedas
      GAMELEVEL = GAMELEVEL -1; //para que reinicie en el mismo nivel en el que está
      game.levelChange();
  }
} else if (GAMELEVEL >= 1987){
  game.emptyAllGameArrays();
  game.player.life.total = 3;
  if(demoPhase <= 2){
    alert("Está todo bien. Sigue jugando. No entres en pánico. Va, saltamos a la siguiente sala.")
  } else if(demoPhase === 3){
    game.levelBalls = [];
    demoPhase = 3;
    demoFunctions.mostrarVariosTextosPocoAPoco3()
    addDemo3(game.ctx, game.platforms, game.levers, game.bubbles, game.levelBalls, game.boxes)
  } else if (demoPhase === 5){
    game.levelBalls = [];
    game.emptyAll()
    demoPhase = 5;
    demoFunctions.mostrarVariosTextosPocoAPoco4()
    addDemo4(game.ctx, game.platforms, game.levers, game.bubbles, game.levelBalls, game.boxes)
  } else if(demoPhase === 6){
    game.levelBalls = [];
    demoFunctions.mostrarVariosTextosPocoAPoco5()
    addDemo5(game.ctx, game.platforms, game.levers, game.levelBalls,game.boxes, game.darkBubbles, game.spikes, game.healings)
    demoPhase = 7;
    console.log(demoPhase)
  } else if(demoPhase === 7){
    game.background.img.src = "../public/Imagenes/background/backDemo10.webp";
    game.levelBalls = [];
    game.emptyAll()
    demoPhase = 7;
    demoFunctions.mostrarVariosTextosPocoAPoco5()
    addDemo5(game.ctx, game.platforms, game.levers, game.levelBalls,game.boxes, game.darkBubbles, game.spikes, game.healings)
    console.log(demoPhase)

  } else if(demoPhase === 9){
    game.background.img.src = "../public/Imagenes/background/backDemo11.webp";
      game.levelBalls = [];
      game.emptyAll()
      demoPhase = 9;
      demoFunctions.mostrarVariosTextosPocoAPoco6()
      addDemo6(game.ctx, game.platforms, game.levers, game.levelBalls,game.boxes, game.gatlings, game.cannons);
    console.log(demoPhase)

  } else if(demoPhase >= 11){
    game.background.img.src = "../public/Imagenes/background/backDemo12.webp";
    game.levelBalls = [];
    game.emptyAll()
    demoPhase = 11;
    addDemo7(game.ctx, game.platforms, game.swords, game.bouncers, game.machineguns);
    demoFunctions.mostrarVariosTextosPocoAPoco7()
    setTimeout(() => {
        addBubblesDemo7(game.ctx, game.bubbles)
        addLevelBallDemo7(game.ctx, game.levelBalls)
    }, 15000);
    boxMoveDemo7(game.ctx, game.boxes, game.hooks, game.healings)
      if(game.boxes.length<= 0) {
        setTimeout(() => {
        boxMoveDemo7(game.ctx, game.boxes, game.hooks, game.healings)
      }, 2000);
      }
    console.log(demoPhase)
  } 
}
})


const instrucciones = [instruccionesInfo1$$, instruccionesInfo2$$, instruccionesInfo3$$, instruccionesInfo4$$];

instrucciones.forEach((instruccion, index) => {
  instruccion.addEventListener("click", () => {
    instrucciones.forEach((instr, i) => {
      instr.style.zIndex = (i === index) ? 2 : 1;
    });
  });

  instruccion.addEventListener("dblclick", () => {
    instrucciones.forEach((instr, i) => {
      instr.style.transform = (i === index) ? "scale(1.5)" : "scale(1.0)";
      instr.style.zIndex = (i === index) ? 2 : 1;
    });
  });
});





saltarNivel$$.addEventListener("click",()=>{
  game.levelChange()
})

gameOverX$$.addEventListener("click",()=>{
  gameOverBackground$$.style.display = "none"
  gameOverBackgroundText$$.style.display = "none"
  gameOverX$$.style.display = "none"
})

btnCambiarSala$$.addEventListener("click", ()=>{
  trainingRoom++;
  switch (trainingRoom) {
    case 1:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining1.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
  
    case 2:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining2.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
  
    case 3:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining3.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
  
    case 4:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining4.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
  
    case 5:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining5.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
    case 6:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining6.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
    case 7:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining7.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
    case 8:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining8.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      break;
    case 9:
      game.background.img.src = "../public/Imagenes/background/backgroundTraining0.webp";
      btnCambiarSala$$.style.backgroundColor = getRandomColor()
      trainingRoom = 0;
      break;
  
    default:
      break;
  }
})

mapChangeLevel$$.addEventListener("mouseover", () => {
  mapChangeLevel$$.style.width = "calc(400px + 6vw)";
});

mapChangeLevel$$.addEventListener("mouseout", () => {
  mapChangeLevel$$.style.width = "calc(20px + 0.7vw)";

});

