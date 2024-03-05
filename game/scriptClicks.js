canvas.addEventListener('click', handleClick);

function handleClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  
  if (isPointInsideObject( game.points, clickX, clickY, )) {
    alert("puntos");
    return;
  }

  if (isPointInsideAnyPlatform(game.platforms, clickX, clickY, )) {
    alert("plataforma");
    return;
  }

  // Comprueba si el clic fue en algún lanzallamas
  if (isPointInsideAnyPlatform(game.flamethrowers, clickX, clickY)) {
    alert("lanzallamas");
    return;
  }

  // Comprueba si el clic fue en algún arma de fuego
  if (isPointInsideAnyPlatform(game.machineguns, clickX, clickY)) {
    alert("arma de fuego");
    return;
  }

  // Comprueba si el clic fue en alguna curación
  if (isPointInsideAnyPlatform(game.healings, clickX, clickY)) {
    alert("curación");
    return;
  }

  // Comprueba si el clic fue en alguna barra
  if (isPointInsideAnyPlatform(game.bars, clickX, clickY)) {
    alert("barra");
    return;
  }

  if (isPointInsideAnyPlatform(game.bouncers, clickX, clickY)) {
    alert("bouncers");
    return;
  }
  if (isPointInsideAnyPlatform(game.spikes, clickX, clickY)) {
    alert("spikes");
    return;
  }
  if (isPointInsideAnyPlatform(game.stairs, clickX, clickY)) {
    alert("stairs");
    return;
  }
  if (isPointInsideAnyPlatform(game.auras, clickX, clickY)) {
    alert("auras");
    return;
  }
  if (isPointInsideAnyPlatform(game.boxes, clickX, clickY)) {
    alert("boxes");
    return;
  }
  if (isPointInsideAnyPlatform(game.blasters, clickX, clickY)) {
    alert("blasters");
    return;
  }
  if (isPointInsideAnyPlatform(game.levelBalls, clickX, clickY)) {
    alert("levelBalls");
    return;
  }
  if (isPointInsideAnyPlatform(game.gatlings, clickX, clickY)) {
    alert("gatlings");
    return;
  }
  if (isPointInsideAnyPlatform(game.cannons, clickX, clickY)) {
    alert("cannons");
    return;
  }
  if (isPointInsideAnyPlatform(game.levers, clickX, clickY)) {
    alert("levers");
    return;
  }
  if (isPointInsideAnyPlatform(game.coins, clickX, clickY)) {
    alert("coins");
    return;
  }
  if (isPointInsideAnyPlatform(game.hooks, clickX, clickY)) {
    alert("hooks");
    return;
  }
  if (isPointInsideAnyPlatform(game.electros, clickX, clickY)) {
    alert("electros");
    return;
  }
  if (isPointInsideAnyPlatform(game.swords, clickX, clickY)) {
    alert("swords");
    return;
  }
  if (isPointInsideAnyPlatform(game.miniBoses, clickX, clickY)) {
    alert("miniBoses");
    return;
  }
}


function isPointInsideObject(x, y, object) {
  return (
    x >= object.x &&
    x <= object.x + object.w + 80 &&
    y >= object.y &&
    y <= object.y + object.h
  );
}

function isPointInsideAnyPlatform(platforms, x, y) {
  return platforms.some((plat) => {
    return (
      x >= plat.x &&
      x <= plat.x + plat.w  &&
      y >= plat.y &&
      y <= plat.y + plat.h 
    );
  });
}
