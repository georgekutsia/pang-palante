canvas.addEventListener('click', handleClick);

function handleClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  
  if (isPointInsideObject( game.points, clickX, clickY, )) {
    showModal(`Ganancias`, `&nbsp&nbsp Al explotar burbujas, romper cajas, plataformas, impactar sobre ciertos objetos etc. ganas dinero para luego comprar mejoras en la tienda. <br/>&nbsp&nbsp Recuerda que si pasas de nivel sin recibir daño, obtienes dinero adicional `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideObject( game.player, clickX, clickY, )) {
    showModal(`Nombre: hah-yit`, ` <span style="font-weight: 900; font-size: 20px;">Munición</span> : <br/>   <span style="color:darkblue">  Carga de Lanzallamas -> ${game.player.fireAmount}</span> <span style="color:darkblue">  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Munición barra -> ${game.player.barAmount}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">  Carga eléctrica -> ${game.player.electroAmount}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">   Cantidad de blasters -> ${Math.floor(game.player.megaFireBlasterAmount / 10)}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">   Cantidad de ganchos -> ${game.player.hookAmount}</span>    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue"> Plataformas disponibles -> ${game.player.stepsAmount}</span>  
    <br/>  <span style="font-weight: 900; font-size: 20px;">Mejoras tecnológicas</span>: <br/> <span style="color:darkred">  Nivel del arma básica -> ${basicWeaponLevel} </span>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkred">  Duración de escudos y del daño eléctico-> ${shieldsDuration/1000}s </span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkred"> Resistencia de las barras -> ${barLife}</span>   
    <br/> <span style="font-weight: 900; font-size: 20px;">Armas especiales</span>: <br/>  <span style="color: red"> Espada Burbujaglória </span> <br/><span style="color: darkred">  Nivel -> ${game.player.swordLevel} </span>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      <span style="color: darkred">   Fuerza de estocada    -> ${stabDuration/10} </span>   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      <span style="color: darkred">  Cantidad de barridos por acción    -> ${swordRounds} </span> 
     <br/>  &nbsp&nbsp Manejando un gran arsenal de armas y poderes, debes derrotar las fuerzas que intentan invadir las islas, empezanado por las costas. <br/>&nbsp&nbsp La información sobre las armas principales está en el icono i de la izquierda. <br/>&nbsp&nbsp El resto de las indicaciones que salen sobre el jugador es para ayudarte visualmente a ver si puedes esquivar <<  >> , si tienes cargas eléctricas, poténcias ígneas, armas de combate cuerpo a cuerpo equipadas etc.  `).then(() => {
      game.start();
    });
    return;
  }

  if (isPointInsideAnyPlatform(game.platforms, clickX, clickY, )) {
    showModal(`Plataformas`, `&nbsp&nbsp Las plataformas podrían romperse a base de disparos (dependiendo del tamaño tiene más o menos resistencia) o simplemente poniéndote encima. También hay algunos enemigos poderosos que podrían romper la plataforma. <br/>&nbsp&nbsp Las que tienen reborde azul se pueden activar con electricidad. `).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en algún lanzallamas
  if (isPointInsideAnyPlatform(game.flamethrowers, clickX, clickY)) {
    showModal(`Lanzallamas`, `&nbsp&nbsp Cargas para el lanzallamas. Para usar el lanzallamas pulsa la tecla <span style="color: blue; font-size: 20px;">N</span>  <br/>&nbsp&nbsp El fuego puede quemar algunos objetos, pero no afecta a las plataformas. <br/>&nbsp&nbsp Al chocar con burbujas, las evapora poco a poco, evitando así que exploten en más burbujas pequeñas`).then(() => {
      game.start();
    });
    return;
  }
  // Comprueba si el clic fue en algún arma de fuego
  if (isPointInsideAnyPlatform(game.machineguns, clickX, clickY)) {
    
        showModal(`Ametralladora`, `&nbsp&nbsp Durante 10 segundos podrás disparar las balas básicas ¡ a una velocidad abrumadora !`).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en alguna curación
  if (isPointInsideAnyPlatform(game.healings, clickX, clickY)) {
        showModal(`Poción de bar`, `&nbsp&nbsp Recuperas 1 punto de salud. Si tienes 10 o más puntos de salud mejora tu velocidad de movimiento <br/>&nbsp&nbsp Recuerda que si pasas de nivel sin recibir daño, obtienes dinero adicional `).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en alguna barra
  if (isPointInsideAnyPlatform(game.bars, clickX, clickY)) {
        showModal(`Barras`, `&nbsp&nbsp Barras de lanzamiento, una  munición especial que resiste 2 impactos de burbujas de colores y es totalmente resistente a las burbujas oscuras. <br/>&nbsp&nbsp En la tienda puedes comprar tanto barras como mejorar su resistencia, para que aguante más impactos de burbujas de colores  <br/>&nbsp&nbsp Se pueden cargar las barras con el escudo eléctrico del personaje, haciéndolas más resistentes y que duren más tiempo. Cuanto más esté en contacto con la electricidad, mayor el efect.`).then(() => {
      game.start();
    });
    return;
  }

  if (isPointInsideAnyPlatform(game.bouncers, clickX, clickY)) {
        showModal(`Plataforma emburbujada`, `&nbsp&nbsp A diferencia de las plataformas normales, es imposible quedarse quieto en estas plataformas emburbujadas. Aprovecha los rebotes para llegar a donde puedas!`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.spikes, clickX, clickY)) {
        showModal(`Trampa de pinchos`, `&nbsp&nbsp Cuidado con los pinchos! Hacen daño y a veces incluso podrías perder dinero!`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.stairs, clickX, clickY)) {
    
        showModal(`Escaleras`, `&nbsp&nbsp  Escaleras. Subes y bajas. Puedes quedarte arriba, pero a veces hace cosas raras. No me lo tengas en cuenta, mira todo lo demás que he hecho!!! `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.auras, clickX, clickY)) {
        showModal(`Aura burbuja`, `&nbsp&nbsp El aura te protege de casi todos los daños durante un corto período de tiempo`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.boxes, clickX, clickY)) {
    
        showModal(`Caja`, `&nbsp&nbsp Las cajas contienen todo tipom de recompensas. Algunas aleatorias, otras específicas. <br/>&nbsp&nbsp  También tienen cierta cantidad de resistencia según el material del que están hechos. Se pueden quemar`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.blasters, clickX, clickY)) {
    
        showModal(`Megablaster`, `&nbsp&nbsp Un super disparo de fuego que aumenta según el tiempo que mantengas pulsada la letra <span style="color: blue; font-size: 20px;">K</span>.<br/>&nbsp&nbsp   Se puede mejorar la potencia de los disparos, pero al principio solo cargará hasta 3 explosiones de fuego. Durante el juego podrás adquirir mejoras del arma `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.levelBalls, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.gatlings, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.cannons, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.levers, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.coins, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.hooks, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.electros, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp  Aumenta la carga eléctrica para el escudo. Si estás por encima de la capacidad total de carga de tu personaje, en su lugar obtendrás dinero. <br/>&nbsp&nbsp Para activa el escudo eléctrico pulsa  <span style="color: blue; font-size: 20px;">H</span>. Vuelve a pulsarla para desactivar. Con el escudo eléctrico activo, eres inmune a la mayoría de daños, electrificas algunas plataformas, burbujas y armas propias para potenciarlas, por ejemplo las barras y espadas.   `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.swords, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.miniBoses, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.bulletFireArray, clickX, clickY)) {
    showModal(`Lanzallamas`, `&nbsp&nbsp El fuego puede quemar algunos objetos, pero no afecta a las plataformas. <br/>&nbsp&nbsp Al chocar con burbujas, las evapora poco a poco, evitando así que exploten en más burbujas pequeñas`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.bulletArray, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.bulletBarArray, clickX, clickY)) {
    showModal(`Barras`, `&nbsp&nbsp Barras de lanzamiento, una  munición especial que resiste 2 impactos de burbujas de colores y es totalmente resistente a las burbujas oscuras. <br/>&nbsp&nbsp En la tienda puedes comprar tanto barras como mejorar su resistencia, para que aguante más impactos de burbujas de colores  <br/>&nbsp&nbsp Se pueden cargar las barras con el escudo eléctrico del personaje, haciéndolas más resistentes y que duren más tiempo. Cuanto más esté en contacto con la electricidad, mayor el efect.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.bulletPlatformArray, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.hooksArray, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyPlatform(game.player.swordArray, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }

  if (isPointInsideAnyBubble(game.bubbles, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyBubble(game.darkBubbles, clickX, clickY)) {
    
        showModal(`Lanzallamas`, `&nbsp&nbsp`).then(() => {
      game.start();
    });
    return;
  }
}
function isPointInsideAnyBubble(bubbles, x, y) {
  return bubbles.some(bubble => isPointInsideObject(bubble, x, y));
}

function isPointInsideObject(object, x, y) {
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

function showModal(title, content) {
  return new Promise((resolve, reject) => {
 let randomColorsForBackground1 =  getRandomNumber( 100)
 let randomColorsForBackground2 =  getRandomNumber( 100)
 let randomColorsForBackground3 =  getRandomNumber( 100)

    // Crear el elemento del modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'exampleModal';
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    game.stop();
    // Contenido del modal
    modal.innerHTML = `
      <div class="modal-dialog modal-lg" >
        <div class="modal-content " >
        <div class="modal-header" style="background-color: rgb(${randomColorsForBackground1}, ${randomColorsForBackground2}, ${randomColorsForBackground3}); color:  rgb(255, 255, 255)">
            <h1 class="modal-title fs-4" id="exampleModalLabel">${title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"  style="background-color: rgb(${randomColorsForBackground1 + 155}, ${randomColorsForBackground2 + 155}, ${randomColorsForBackground3 + 155}); color:  rgb(0, 0, 0)">
            ${content}
          </div>
        </div>
      </div>
    `;

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Mostrar el modal
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // Resolver la promesa cuando el modal se cierre
    modal.addEventListener('hidden.bs.modal', function () {
      document.body.removeChild(modal);
      resolve();
    });
  });
}