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
  if (isPointInsideObject( game.player.life, clickX, clickY, )) {
    showModal(`Salud`, `&nbsp&nbsp Si pierdes toda la vida, pierdes el juego. Puedes obtener vidas con algunos objetos y a 10 o más puntos de vida, mejoran tus habilidades físicas. <br/>&nbsp&nbsp  Si aciertas ${amountOfBullsEyeForHealth} disparos seguidos con las Burbalas del arma básica sobre las burbujas, recuperas medio punto de salud. Si fallas, se reinicia el contador. Puedes romper cajas y plataformas, no afecta al conteo total.  <br/>&nbsp&nbsp  Si pasa de nivel sin haber fallado ningún disparo, recuperas 1 punto de vida.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideObject( game.player, clickX, clickY, )) {
    if(game.player.electricShieldIsActive){
      showModal(`Electric Shield`, ` El escudo eléctrico, a parte de protegerte del daño, tiene otras propiedades adicionales muy poderosas: 
      <br/><span style="font-weight: 400; font-size: 20px;"> 1) </span> Si las burbujas de colores caen sobre el escudo, quedan electrificadas y encojen con el tiempo;;
      <br/><span style="font-weight: 400; font-size: 20px;"> 2) </span> Eres inmune a algunas trampas de suelo;
      <br/><span style="font-weight: 400; font-size: 20px;"> 3) </span> Las burbalas disparadas a través del escudo eléctrico atraviesan dañando las burbujas de colores;
      <br/><span style="font-weight: 400; font-size: 20px;"> 4) </span> Las burbalas disparadas a través del escudo eléctrico dañan y desconectan ${electrifiedGatlingTime/1000}s las Gatlings;
      <br/><span style="font-weight: 400; font-size: 20px;"> 5) </span> Puedes activar algunas plataformas <span style="font-style: italic; font-size: 14px;"> (las que tienen reborde rojo) </span> y también los Steps que creas;
      <br/><span style="font-weight: 400; font-size: 20px;"> 5) </span> Electrificar las Barras las hará  más anchas y resistentes cuanto más los electrifiques;
      <br/><span style="font-weight: 400; font-size: 20px;"> 5) </span> Las escaleras pueden ser electrificadas y crecerán poco a poco;
      `).then(() => {
        game.start();
      });
    } else {
      showModal(`Natus`, ` <span style="font-weight: 900; font-size: 20px;">Munición</span> <img class="sincrongeniero" width="100px" src="/public//Imagenes/minions/Sincrongeniero.png" alt="Sincrongeniero"> : <br/>   <span style="color:darkblue">  Carga de Lanzallamas -> ${game.player.fireAmount}</span> <span style="color:darkblue">  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Munición barra -> ${game.player.barAmount}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">  Carga eléctrica -> ${game.player.electroAmount}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">   Cantidad de blasters -> ${Math.floor(game.player.megaFireBlasterAmount / 10)}</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue">   Cantidad de ganchos -> ${game.player.hookAmount}</span>    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkblue"> Plataformas disponibles -> ${game.player.stepsAmount}</span>  
      <br/>  <span style="font-weight: 900; font-size: 20px;">Mejoras tecnológicas</span>: <br/> <span style="color:darkred">  Nivel del arma básica -> ${basicWeaponLevel} </span>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkred">  Duración de escudos y del daño eléctico-> ${shieldsDuration/1000}s </span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color:darkred"> Resistencia de las barras -> ${barLife}</span>   
      <br/> <span style="font-weight: 900; font-size: 20px;">Armas especiales</span>: 
      <br/>  <span style="color: red"> Espada Burbujaglória </span> <br/><span style="color: darkred">  Nivel -> ${game.player.swordLevel} </span>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      <span style="color: darkred">   Fuerza de estocada    -> ${stabDuration/10} </span>   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      <span style="color: darkred">  Cantidad de barridos por acción    -> ${(Math.abs(swordRounds))} </span> 
      <br/>  &nbsp&nbsp Manejando un gran arsenal de armas y poderes, debes derrotar las fuerzas que intentan invadir las islas, empezanado por las costas. <br/>&nbsp&nbsp La información sobre las armas principales está en el icono i de la izquierda. <br/>&nbsp&nbsp El resto de las indicaciones que salen sobre el jugador es para ayudarte visualmente si puedes <span style="color: blue">  esquivar <<  >></span> , si tienes cargas eléctricas, poténcias ígneas, armas de combate cuerpo a cuerpo equipadas etc.  
      <br/> &nbsp&nbsp  El escudo eléctrico (<span style="color: blue; font-size: 20px;">H</span>) tiene muchas propiedades que mejoran tanto los disparos básicos, como algunas otras habilidades. Las Burbalas electrificadas son las únicas capaces de afectar a las Gatlings.  Pulsa sobre el escudo mientras está activo para ver más información <span style="font-style: italic; font-size: 14px;">(recuerda que necesitas tener cargas para activarlo)</span>; `).then(() => {
        game.start();
      });
    }
    return;
  }

  if (isPointInside(game.platforms, clickX, clickY, )) {
    showModal(`Plataformas`, `&nbsp&nbsp Las plataformas podrían romperse a base de disparos (dependiendo del tamaño tiene más o menos resistencia) o simplemente poniéndote encima. También hay algunos enemigos poderosos que podrían romper la plataforma. <br/>&nbsp&nbsp Las que tienen reborde rojo se pueden activar con electricidad, pero no puedes usar gancho sobre esas plataformas. También puedes activar los Steps que creas al adquirir la habilidad de crear plataformas con el personaje <br/>&nbsp&nbsp También hay algunas defectuosas que son pegajosas, así que atrapan las burbujas sobre su superficie.`, `/public/Imagenes/gameBtns/blasterGunImg.png`).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en algún lanzallamas
  if (isPointInside(game.flamethrowers, clickX, clickY)) {
    showModal(`Lanzallamas <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Cargas para el lanzallamas. Para usar el lanzallamas pulsa la tecla <span style="color: blue; font-size: 20px;">N</span>  <br/>&nbsp&nbsp El fuego puede quemar algunos objetos, pero no afecta a las plataformas. <br/>&nbsp&nbsp Al chocar con burbujas, las evapora poco a poco, evitando así que exploten en más burbujas pequeñas. Ten en cuenta también que cuanto más grande sea la burbuja, menos le afecta el daño del fuego.`).then(() => {
      game.start();
    });
    return;
  }
  // Comprueba si el clic fue en algún arma de fuego
  if (isPointInside(game.machineguns, clickX, clickY)) {
    
        showModal(`Ametralladora <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Durante 10 segundos podrás disparar las balas básicas ¡ a una velocidad abrumadora !`).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en alguna curación
  if (isPointInside(game.healings, clickX, clickY)) {
        showModal(`Poción de bar <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Recuperas 1 punto de salud. Si tienes 10 o más puntos de salud mejora tu velocidad de movimiento <br/>&nbsp&nbsp Recuerda que si pasas de nivel sin recibir daño, obtienes dinero adicional `).then(() => {
      game.start();
    });
    return;
  }

  // Comprueba si el clic fue en alguna barra
  if (isPointInside(game.bars, clickX, clickY)) {
    showModal(`Barras <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Barras de lanzamiento <span style="color: blue; font-size: 20px;">M</span>, una  munición especial que resiste 2 impactos de burbujas de colores y es totalmente resistente a las burbujas oscuras. <br/>&nbsp&nbsp En la tienda puedes comprar tanto barras como mejorar su resistencia, para que aguante más impactos de burbujas de colores  <br/>&nbsp&nbsp Se pueden cargar las barras con el escudo eléctrico del personaje, haciéndolas más resistentes y que duren más tiempo. Cuanto más esté en contacto con la electricidad, mayor el efect.`).then(() => {
      game.start();
    });
    return;
  }

  if (isPointInside(game.bouncers, clickX, clickY)) {
        showModal(`Plataforma emburbujada <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp A diferencia de las plataformas normales, es imposible quedarse quieto en estas plataformas emburbujadas. Aprovecha los rebotes para llegar a donde puedas! <br/>&nbsp&nbsp  La química de BubbleMaster a veces falla! así que puede variar mucho la distancia y fuerza del rebote.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.spikes, clickX, clickY)) {
        showModal(`Trampa de pinchos `, `&nbsp&nbsp Cuidado con los pinchos! Hacen daño y a veces incluso podrías perder dinero!`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.stairs, clickX, clickY)) {
    
        showModal(`Escaleras`, `&nbsp&nbsp  Escaleras. Subes y bajas. Puedes quedarte arriba, pero a veces hace cosas raras. No me lo tengas en cuenta, mira todo lo demás que he hecho!!!  <br/>&nbsp&nbsp Las escaleras también reaccionan a la carga eléctrica del personaje, así que podrás hacer que se alarguen si activas el escudo eléctrico mientras estás encima`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.auras, clickX, clickY)) {
        showModal(`Aura burbuja <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp El aura te protege de casi todos los daños durante un corto período de tiempo`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.boxes, clickX, clickY)) {
        showModal(`Caja`, `&nbsp&nbsp Las cajas contienen todo tipo de recompensas. Algunas aleatorias, otras específicas. <br/>&nbsp&nbsp  También tienen cierta cantidad de resistencia según el material del que están hechas y se pueden quemar`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.blasters, clickX, clickY)) {
        showModal(`Megablaster <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Un super disparo de fuego que aumenta según el tiempo que mantengas pulsada la letra <span style="color: blue; font-size: 20px;">K</span>.<br/>&nbsp&nbsp   Se puede mejorar la potencia de los disparos, pero al principio solo cargará hasta 3 explosiones de fuego. Durante el juego podrás adquirir mejoras del arma `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.levelBalls, clickX, clickY)) {
        showModal(`Cristal de contención`, `&nbsp&nbsp Esta bola contienen un químico que impide alejarse de la zona a quienes estén presentes. <br/>&nbsp&nbsp  Está protegida por una energía química que sólo se desactiva activando las palancas que la mantienen encendida y reacciona con las burbujas presentes, así que debes explotarlas para que la aleación cambie.  <br/>&nbsp&nbsp  Si no hay burbujas ni palancas sin activar, se podrá romper y avanzar...`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.gatlings, clickX, clickY)) {
        showModal(`Gatling`, `&nbsp&nbsp Cuidado! Es una creación especial de <span style="font-style: italic; font-size: 18px; color: purple">Sincrongeniero.</span> <img class="sincrongeniero" width="100px" src="/public//Imagenes/minions/Sincrongeniero.png" alt="Sincrongeniero"> <br/>&nbsp&nbsp Tiene muchas creaciones que BubbleMaster usa para desplegar sus armas químicas, como las burbujas. Te perseguirá hasta tenerte en línea y luego va a disparar sin parar!  <br/>&nbsp&nbsp Son muy difíciles de destruir, casi imposibles. Mejor huír que enfrentrlos. <br/>&nbsp&nbsp Según su tamaño, pueden disparar burbujas más grandes, moverse más rápido o disparar más munición. <br/>&nbsp&nbsp La forma más efectiva de dañarlos es con la pistola de bolas mientras estás con escuro eléctrico. Eso provocará que electrocutes las armas y se queden inservibles.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.cannons, clickX, clickY)) {
        showModal(`Cañones de burbolas`, `&nbsp&nbsp Uno de los mejores inventos de Sincrongeniero, estos cañones disparan burbolas, muy parecidas a las burbujas normales, pero tienen nombre ya que se me acaba de ocurrir. Se pueden dañar, incluso con fuego. A veces se retirarán cuando hayan lanzado cierta cantidad de burbolas o haya pasado suficiente tiempo, pero para no lidiar con ellas, será más fácil destruirlas.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.levers, clickX, clickY)) {
        showModal(`Palanca`, `&nbsp&nbsp Debes activar todas las palancas del nivel para desactivar la protección del cristal de contención `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.coins, clickX, clickY)) {
        showModal(`Monedas <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Adquieres 10 monedas. Usa el dinero para comprar mejoras y objetos en la tienda`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.hooks, clickX, clickY)) {
    showModal(`Ganchos <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp Una munición especial que te impulsa hasta ciertos objetos sobre los que tiene la capacidad de engancharse <span style="color: blue; font-size: 20px;">J</span>. Úsalos para esquivar, moverte rápido y obtener ventaja en una gran variedad de situaciones.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.steps, clickX, clickY)) {
    showModal(`Steps`, `&nbsp&nbsp Coloca  (<span style="color: blue; font-size: 20px;">O </span>a la izquierda - <span style="color: blue; font-size: 20px;">P</span> a la derecha) plataformas pequeñas y endebles, pero que puedes usar para llegar a lugares complicados. <br/>&nbsp&nbsp  Se romperán rápido, pero te pueden proteger en algunas situaciones y también se pueden activar con electricidad`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.electros, clickX, clickY)) {
        showModal(`Electro <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp  Aumenta la carga eléctrica para el escudo. Si estás por encima de la capacidad total de carga de tu personaje, en su lugar obtendrás dinero. <br/>&nbsp&nbsp Para activa el escudo eléctrico pulsa  <span style="color: blue; font-size: 20px;">H</span>. Vuelve a pulsarla para desactivar. Con el escudo eléctrico activo, eres inmune a la mayoría de daños, electrificas algunas plataformas, burbujas y armas propias para potenciarlas, por ejemplo las barras y espadas.   `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.swords, clickX, clickY)) {
        showModal(`Espada`, `&nbsp&nbsp Espada Bubujaglória. Un arma especial del G.C.A.M. que te permite hacer ataques físicos especiales. Si recoges varias espadas, se fusionan, aumentando sus habilidades. <br/>&nbsp&nbsp Pulsa <span style="color: blue; font-size: 20px;">R</span> para hacer un barrido superior. Empieza con un barrido a un lado y en la siguiente acción lo hará al otro lado. Si haces el barrido en salto, también te impulsa un poco más hacia arriba. <br/>&nbsp&nbsp Si pulsas  <span style="color: blue; font-size: 20px;">F</span> harás una estocada en la dirección del último movimiento. La estocada es un ataque poderoso que puede explotar varias burbujas a la vez al contacto y también te protege. <br/>&nbsp&nbsp A medida que golpeas con la espada, cargas su poder especial, y al cargar del todo podrás disparar  Burbalas adicionals con cada barrido. `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.chests, clickX, clickY)) {
        showModal(`Cofre`, `&nbsp&nbsp Contiene un objeto o arma especial. Acércate para abrirlo! `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.miniBoses, clickX, clickY)) {
        showModal(`Minion`, `&nbsp&nbsp  BubbleMaster cuenta con gran cantidad de seguidores que se consideran sus minions. Son absolutamente fieles a su causa y no dudarán en destruir a cualquiera que se ponga en su camino.  <br/>&nbsp&nbsp  Hay poca información acerca de sus habilidades y poderes, así que tendrás que adaptarte en medio del combate.
        <br/>&nbsp&nbsp  <span style="font-style: italic; font-size: 24px;">Fase especial</span> <br/>&nbsp&nbsp  Las peleas contra los jefes tienen un sistema especial de combate y cambian algunos comportamientos. Por ejemplo, si pulsas W, cambiarás la dirección del disparo hacia arriba, pero si pulsas dos veces D, podrás disparar hacia la derecha.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.bulletFireArray, clickX, clickY)) {
    showModal(`Fuego <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp El fuego puede quemar algunos objetos, pero no afecta a las plataformas. <br/>&nbsp&nbsp Al chocar con burbujas, las evapora poco a poco, evitando así que exploten en más burbujas pequeñas. Ten en cuenta también que cuanto más grande sea la burbuja, menos le afecta el daño del fuego.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.bulletArray, clickX, clickY)) {
        showModal(`Burbalas <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp  Las Burbalas son la munición más versátil en tu armería.  <br/>&nbsp&nbsp  Aprovecha la dirección del movimiento para hacerlas rebotar contra ciertos objetos, tienen capacidad infinita y si no chocan contra una burbuja, desaparecen al cabo de un rato. <br/>&nbsp&nbsp  Porás mejorar tanto su velocidad como la cantidad que disparas. Siempre podrás cambiar entre los niveles del arma seleccionándo el nivel en la armería.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.bulletBarArray, clickX, clickY)) {
    showModal(`Barras <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp Barras de lanzamiento, una  munición especial que resiste 2 impactos de burbujas de colores y es totalmente resistente a las burbujas oscuras. <br/>&nbsp&nbsp En la tienda puedes comprar tanto barras como mejorar su resistencia, para que aguante más impactos de burbujas de colores  <br/>&nbsp&nbsp Se pueden cargar las barras con el escudo eléctrico del personaje, haciéndolas más resistentes y que duren más tiempo. Cuanto más esté en contacto con la electricidad, mayor el efecto.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.bulletPlatformArray, clickX, clickY)) {
        showModal(`Plataforma <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp Duran poco tiempo y se rompen al ponerte encima, pero son muy versátiles, tanto para defenderte como para subir a ciertos lugares`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.hooksArray, clickX, clickY)) {
        showModal(`Ganchos <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp Una munición especial que te impulsa hasta ciertos objetos sobre los que tiene la capacidad de engancharse. Úsalos para esquivar, moverte rápido y obtener ventaja en una gran variedad de situaciones.`).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInside(game.player.swordArray, clickX, clickY)) { 
        showModal(`Espada Burbujaglória <span style="font-style: italic; font-size: 18px;">Arma especial</span>`, `&nbsp&nbsp Espada Bubujaglória. Un arma especial del G.C.A.M. que te permite hacer ataques físicos especiales. Si recoges varias espadas, se fusionan, aumentando sus habilidades. <br/>&nbsp&nbsp Pulsa <span style="color: blue; font-size: 20px;">R</span> para hacer un barrido superior. Empieza con un barrido a un lado y en la siguiente acción lo hará al otro lado. Si haces el barrido en salto, también te impulsa un poco más hacia arriba. <br/>&nbsp&nbsp Si pulsas  <span style="color: blue; font-size: 20px;">F</span> harás una estocada en la dirección del último movimiento. La estocada es un ataque poderoso que puede explotar varias burbujas a la vez al contacto y también te protege. <br/>&nbsp&nbsp A medida que golpeas con la espada, cargas su poder especial, y al cargar del todo podrás disparar Burbalas adicionals con cada barrido. `).then(() => {
      game.start();
    });
    return;
  }

  if (isPointInsideAnyBubble(game.bubbles, clickX, clickY)) {
        showModal(`Burbujas`, `&nbsp&nbsp Simplemente llamadas burbujas, son un arma química de BubbleMaster. Al explotar tienen la capacidad de replicarse hasta hacerse más pequeñas. Si su tamaño disminuye hasta cierto punto, implosionan por su propia tensión. <br/> &nbsp&nbsp El fuego y la electricidad parecen provocar una reacción química especial que las disminuye de tamaño.<br/>&nbsp&nbsp Si ignoras las burbujas grandes, al cabo de un tiempo (${replicationSeconds} segs) 
        se replicarán a si mismas. No sabemos cuál es la intención de Bubblemaster, pero claramente tiene intenciones malévolas y hay que detenerlo. Sus burbujas son capaces de volver ciertos objetos en burbuja al impactar y hacen daño a los seres vivos cambiando su composición química hasta que mueren. <br/>&nbsp&nbsp Algunos objetos especiales te permiten aprovechar sus propiedades para tu bien. Por ejemplo las botas que vende Poltra-scrap te permiten saltar encima de las burbujas. <br/>&nbsp&nbsp Dependiendo del tamaño, el efecto de todas tus armas puede variar. `).then(() => {
      game.start();
    });
    return;
  }
  if (isPointInsideAnyBubble(game.darkBubbles, clickX, clickY)) {
        showModal(`Burbujas oscuras`, `&nbsp&nbsp Creadas con una disolución distinta, que reacciona a las Burbalas, pero a diferencia de las burbujas normales, éstas burbujas no se rompen con los impactos de las Burbalas y no le afecta el fuego ni la electricidad. Las Burbalas aumentan su volumen hasta que la tensión es grande y explota en burbujas más pequeñas.  <br/> &nbsp&nbsp Una venaja al enfrentarlos son las municiones de barra, que no se rompen con las burbujas oscuras. `).then(() => {
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


function isPointInside(platforms, x, y) {
  return platforms.some((plat) => {
    return (
      x >= plat.x &&
      x <= plat.x + plat.w  &&
      y >= plat.y &&
      y <= plat.y + plat.h 
    );
  });
}
function sword(platforms, x, y) {
  return platforms.some((plat) => {
    return (
      x >= plat.x &&
      x <= plat.x + plat.w  &&
      y >= plat.y &&
      y <= plat.y + plat.h 
    );
  });
}
canvas.addEventListener('click', swordClick);

// Manejar el clic de la espada cuando se hace clic en el canvas

function handleSwordClick(){
  globalAlphaForSword = 1;
  setTimeout(() => {
    let intervalId = setInterval(() => {
      globalAlphaForSword -= 0.1;
      if (globalAlphaForSword <= 0.3) {
        globalAlphaForSword = 0.3;
        clearInterval(intervalId); // Detiene el intervalo cuando globalAlphaForSword llega a cero
      }
    }, 50); // 5
  }, 1500);
}
function swordClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (
    clickX >= CTXW-45 &&
    clickX <= CTXW-45 + 30 &&
    clickY >= 5 &&
    clickY <= 100
  ) {
    if(game.player.swordEquipped){
      globalAlphaForSword = 1;
      setTimeout(() => {
        showModal(`Espada Burbujaglória`, `&nbsp&nbsp A medida que haces daño con la espada, se va cargando su poder especial. Dependiendo del nivel de la espada, el poder especial puede hacer de todo, durar más e incluso cargarse más rápido. <br/> &nbsp&nbsp
        Actualmente cargado   <span style="font-weight: 500; font-size: 20px; color: red"> ${game.player.swordPowerUp}  </span> de <span style="font-weight: 500; font-size: 20px; color: darkred"> ${powerToGetForSword}  </span>  `).then(() => {
          game.start();
          setTimeout(() => {
            let intervalId = setInterval(() => {
              globalAlphaForSword -= 0.1;
              if (globalAlphaForSword <= 0.3) {
                globalAlphaForSword = 0.3;
                clearInterval(intervalId); // Detiene el intervalo cuando globalAlphaForSword llega a cero
              }
            }, 50); // 5
          }, 3000);
        });
        return; 
      }, 700);
    }
  }
}

canvas.addEventListener('click', basicWeaponClick);

function basicWeaponClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (
    clickX >= CTXW-100 &&
    clickX <= CTXW &&
    clickY >= CTXH -100 &&
    clickY <= CTXH
  ) {
      globalAlphaForBasicWeapon = 1;  
      let weaponImgSizingInterval =  setInterval(() => {
        weaponImgSizing++
        if(weaponImgSizing >= 100){
        clearInterval(weaponImgSizingInterval)
        }
      }, 5);
      setTimeout(() => {
        showModal(`BurbalaBlaster`, `&nbsp&nbsp El arma básica usada en la lucha contra las abominaciones y creaciones de Bubblemaster. Se puede mejorar en la tienda de Poltra-scrap y podrás cambiar los niveles del arma según necesidad. No siempre es conveniente luchar con el arma al máximo nivel.`).then(() => {
          game.start();
          setTimeout(() => {
                let weaponImgSizingInterval =  setInterval(() => {
                weaponImgSizing--;
                if(weaponImgSizing <= 0){
                clearInterval(weaponImgSizingInterval)
              }
            }, 20);
          }, 500);
          setTimeout(() => {
            let intervalId = setInterval(() => {
              globalAlphaForBasicWeapon -= 0.1;
              if (globalAlphaForBasicWeapon <= 0.3) {
                    globalAlphaForBasicWeapon = 0.3;
                clearInterval(intervalId); // Detiene el intervalo cuando globalAlphaForSword llega a cero
              }
            }, 50); // 5
          }, 3000);
        });
        return; 
      }, 800);
      }
  }

function showModal(title, content, img) {
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
