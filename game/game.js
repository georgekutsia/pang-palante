class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameStarted = false;
    this.player = new Player(ctx); //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.bubbleGatling = new BubbleGatling(ctx); //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx); // traemos la clase Background para usarlo
    this.points = new Points(ctx); // traemos la clase Background para usarlo
    this.levelChengingImg = new Image(ctx);
    this.levelChengingImg.src = "/public/Imagenes/background/background0.jpeg";
    this.interval = null; //sirve para pausar el juego
    this.bubbleTick = 0;
    this.randomColor = null;
    this.isInfiniteChanging;
    this.gameTime = 0; //cuando el juego se inicia va sumando. Se usa para llevar cuenta del tiempo
    this.otherBubbles = 0;
    this.gameStarted = false;
    this.setListeners(); // para que se pueda usar el teclado
    this.bubbles = []; 
    this.darkBubbles = []; 
    this.flamethrowers = []; 
    this.machineguns = []; 
    this.healings = []; 
    this.bars = []; 
    this.steps = []; 
    this.puffBubbles = []; 
    this.platforms = []; 
    this.bouncers = []; 
    this.spikes = []; 
    this.stairs = []; 
    this.auras = []; 
    this.boxes = []; 
    this.blasters = []; 
    this.levelBalls = []; 
    this.gatlings = []; 
    this.cannons = []; 
    this.levers = []; 
    this.coins = []; 
    this.hooks = []; 
    this.electros = []; 
    this.swords = []; 
    this.swords = []; 
    this.miniBoses = []; 
    this.explosions = []; 
    this.totalCannonBubbleCount = 0;
    this.changingLevelSoChangeImage = true;
    this.dispached = true;
    // sounds sounds sounds
    this.bubblePopSound1 = new Audio("../public/sounds/bubblePop1.mp3"); //todo --  Sonido paso 1) guardar la ruta del sonido en una variable
    this.bubblePopSound1.volume = 0.3; // todo -- Sonido paso 2) ponerle volumen, auque no es obligatorio
    this.gameOver1 = new Audio("../public/sounds/gameOver1.mp3");
    this.gameOver1.volume = 0.05; //
    this.gameOver2 = new Audio("../public/sounds/gameOverSound.mp3");
    this.gameOver2.volume = 0.2; //
    this.gameBackgroundMusic = new Audio("../public/sounds/backgroundMusic1.mp3");
    this.gameBackgroundMusic.volume = 0.1; //
    this.changingLevel = false;
    this.bubbleSplash2 = new Audio("../public/sounds/bubbleSplash2.mp3");
    this.bubbleSplash2.volume = 0.1;
    this.platformHitSolid = new Audio("../public/sounds/platformHitSolid.mp3")
    this.platformHitSolid.volume = 0.1; 
    this.platformHitBreak = new Audio("../public/sounds/platformHitBreak.mp3")
    this.platformHitBreak.volume = 0.1; 
    this.coinsSound1 = new Audio("../public/sounds/coinsSound1.mp3")
    this.coinsSound1.volume = 0.1; 
    this.coinsSound2 = new Audio("../public/sounds/coinsSound2.mp3")
    this.coinsSound2.volume = 0.1; 
    this.coinsItemSound = new Audio("/public/sounds/items/gainCoinsSound.mp3")
    this.coinsItemSound.volume = 0.3
    this.blasterItemSound = new Audio("/public/sounds/items/blasterItemSound.mp3")
    this.blasterItemSound.volume = 0.3


    this.darkBubbleExplosion = new Audio("../public/sounds/darkBubbleExplosion.mp3")
    this.darkBubbleExplosion.volume = 0.1; 
    this.barHit = new Audio("/public/sounds/shooting/barHit.mp3");
    this.barHit.volume = 0.05;
    this.changeLevelSound1 = new Audio("/public/sounds/changeLevelSound1.mp3");
    this.changeLevelSound1.volume = 0.1;
    this.playerBar = new Audio("/public/sounds/barItemRechargeSound.mp3");
    this.playerBar.volume = 0.1;
    this.electroItemSound = new Audio("/public/sounds/electrofire/elecrtroItemSound.mp3");
    this.electroItemSound.volume = 0.1;
    this.minibossArrivingShip = new Audio("/public/sounds/minibossArrivingShip3.mp3")
    this.minibossArrivingShip.volume = 0.05;
    this.miniBossTalk1 = new Audio("/public/sounds/miniBossTalk1.mp3")
    this.miniBossTalk1.volume = 0.05;
    
    this.tickMiniBoss1 = 0;
    this.tickMiniBoss2 = 0;
    this.tickMiniBoss3 = 0;
    this.randomIsOn = true;
    this.randomNumberForTick1

    // Obtén un índice aleatorio
    this.frases = [
      "Bien hecho! sigue así",
      "Cada vez lo haces mejor!",
      "No te rindas! Ya lo tienes!",
      "Eres Imparable! Dale caña",
      "Das miedo! avanza más!",
      "Cuidado donde apuntas!",
      "Esto se pondrá dificil!",
      "He visto marines menos hábiles!",
      "Una respiro y a seguir",
      "Eres el orgullo de la patria!",
      "Que la adrenalina potencie tus disparos!",
      "¡Estás on fire! ¡Sigue así!",
      "¡Tienes el control! ¡No te detengas!",
      "¡Tus habilidades son impresionantes!",
      "¡Eres una máquina! ¡Sigue adelante!",
      "¡No hay obstáculo que te detenga!",
      "¡Tu determinación es inspiradora!",
      "¡Eres un verdadero guerrero!",
      " ¡Continúa luchando!",
      "¡Tu perseverancia es admirable!",
      "¡Demuestra tu valentía y sigue adelante!",
      "¡Eres una fuerza imparable! ",
      "¡Mantén el ritmo!",
    ];
    this.listaImagenes = [
      "/public/Imagenes/background/changeLevel1.webp",
      "/public/Imagenes/background/changeLevel2.webp",
      "/public/Imagenes/background/changeLevel3.webp",
      "/public/Imagenes/background/changeLevel4.webp",
      "/public/Imagenes/background/changeLevel5.webp",
      "/public/Imagenes/background/changeLevel6.webp",
      "/public/Imagenes/background/changeLevel7.webp",
      "/public/Imagenes/background/changeLevel8.webp",
      "/public/Imagenes/background/changeLevel9.webp",
      "/public/Imagenes/background/changeLevel10.webp",
    ]
    this.gameOverImgs = [
      "/public/Imagenes/background/gameOverImg1.webp",
      "/public/Imagenes/background/gameOverImg2.webp",
      "/public/Imagenes/background/gameOverImg3.webp",
      "/public/Imagenes/background/gameOverImg4.webp",
      "/public/Imagenes/background/gameOverImg5.webp",
      "/public/Imagenes/background/gameOverImg6.webp",
      "/public/Imagenes/background/gameOverImg7.webp",
      "/public/Imagenes/background/gameOverImg8.webp",
      "/public/Imagenes/background/gameOverImg9.webp",
      "/public/Imagenes/background/gameOverImg10.webp",
    ]
    this.indiceAleatorio;
  }

  start() {
    if(!this.gameStarted){
      if (GAMELEVEL === 1) {
        // inftroGame1();
        // setTimeout(() => {
        // level1(this.ctx, this.bubbles, this.platforms, this.levelBalls, this.boxes)
        // level5( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls);

          let gat =  new BubbleGatling(this.ctx)
          this.gatlings.push(gat)
          let hoo =  new Hook(this.ctx, 450, CTXH - 150)
          this.hooks.push(hoo)
          let lan =  new Flamethrower(this.ctx, 400, CTXH - 150)
          this.flamethrowers.push(lan)
          let spa =  new Bars(this.ctx, 300, CTXH - 150, 10, 30)
          this.bars.push(spa)
          let box =  new Box(this.ctx, 500, 30, 3)
          this.boxes.push(box)
          let blast = new MegaFireBlaster(this.ctx, 640, CTXH-190)
          this.blasters.push(blast);  
          let electro =  new Electro(this.ctx, 600, CTXH - 150, 10, 30)
          this.electros.push(electro)
          let coin =  new Coins(this.ctx, 800, CTXH - 150, 10, 30)
          let coin1 =  new Coins(this.ctx, 850, CTXH - 150, 10, 30)
          let coin2 =  new Coins(this.ctx, 900, CTXH - 150, 10, 30)
          this.coins.push(coin, coin1, coin2)
          let heal =  new Healing(this.ctx, 150, CTXH - 250,)
          let heal1 =  new Healing(this.ctx, 100, CTXH - 200,)
          let heal2 =  new Healing(this.ctx, 50, CTXH - 150,)
          this.healings.push(heal, heal1, heal2)
          // let sta =  new Stair(this.ctx, 200, CTXH - 150, 100, 150)
          // let sta1 =  new Stair(this.ctx, 600, CTXH - 150, 100, 150)
          // this.stairs.push(sta, sta1)
        // }, 15000);
        // setTimeout(() => {
          // addBubble1(this.ctx, this.bubbles)
        // }, 25000);
      }
      if(GAMELEVEL === 100) {
        levelInfinite( this.ctx, this.bubbles, this.platforms, this.bouncers, this.spikes, this.stairs, this.flamethrowers, this.machineguns, this.healings, this.auras, this.boxes, this.blasters, this.levelBalls, this.gatlings, this.darkBubbles)
      }
      if(GAMELEVEL === 1987 ) {
        infoIntro1()
        this.background.img.src = "../public/Imagenes/background/backgroundTraining4.webp";
        setTimeout(() => {
          addDemo1Electro(this.ctx,  this.platforms, this.electros)
          this.background.img.src = "../public/Imagenes/background/backgroundTraining0.webp";
        }, 10500);
        setTimeout(() => {
          addDemo1(this.ctx, this.platforms)
        }, 30000);





      }
    }

    this.interval = setInterval(() => {
      retryAmount$$.innerText = `${retry}`
      if(!retry){
        retryAmount$$.style.display = "none"
        retry$$.style.display = "none";
      }

      this.clear(); //   limpia el canvas. Sin esta función, nunca dejaría de dibujarse lo anterior y no aparentaría movimiento.
      this.move(); // mueve los objetos movibles
      this.draw(); // dibuja lo que haga falta
      this.checkLevelsState();// comprueba si algún nivel tiene una función especial, tipo setInterval que suelta burbujas
      this.checkBoss();// comprueba si algún nivel tiene una función especial, tipo setInterval que suelta burbujas
      this.changingLevels(); // la función que hace que cambie de nivel, sus mensajes, borra arrays etc 
      this.checkCollisions(); //Comprueba las colisiones constantemtente
      this.bubbleTick++;
      this.gameTime++; //Cada 60 representan 1 segundo de tiempo en el juego
    }, 1000 / gameSpeed);

  }

  stop() { //para pausar el juego
    clearInterval(this.interval);
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.bulletArray = this.player.bulletArray.filter((e) =>e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletFireArray = this.player.bulletFireArray.filter((e) =>e.isVisible()); //elimina cada bullet de fuego que ya no es visible y vacía el array
    this.player.bulletBarArray = this.player.bulletBarArray.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
    this.player.itemTakens = this.player.itemTakens.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
    this.player.swordArray = this.player.swordArray.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
    this.player.hooksArray = this.player.hooksArray.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
    this.bubbles = this.bubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.darkBubbles = this.darkBubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.platforms = this.platforms.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.flamethrowers = this.flamethrowers.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.machineguns = this.machineguns.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.auras = this.auras.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.boxes = this.boxes.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.blasters = this.blasters.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.levelBalls = this.levelBalls.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.gatlings = this.gatlings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.cannons = this.cannons.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.levers = this.levers.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.coins = this.coins.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.hooks = this.hooks.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.electros = this.electros.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.swords = this.swords.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.miniBoses = this.miniBoses.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.healings = this.healings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.bars = this.bars.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.steps = this.steps.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.puffBubbles = this.puffBubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
  }

  draw() {
    this.background.draw(); //dibuja el background
    this.stairs.forEach((e) => e.draw());
    this.spikes.forEach((e) => e.draw());
    this.explosions.forEach((e) => e.draw());
    this.platforms.forEach((e) => e.draw());
    this.bouncers.forEach((e) => e.draw());
    this.player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
    this.points.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
    this.puffBubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.boxes.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.bubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.darkBubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.flamethrowers.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.machineguns.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.auras.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.blasters.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.healings.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.gatlings.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.cannons.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.levers.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.coins.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.hooks.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.electros.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.swords.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.miniBoses.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.bars.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.steps.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.levelBalls.forEach((e) => e.draw()); //dibuja cada obstáculo
    demoMessageDisable();
  }
  move() {
    this.player.move(); //muve al personaje y todo lo que se mueve en la clase de personaje
    this.background.move(); //muve al personaje y todo lo que se mueve en la clase de personaje
    this.points.move(); //muve al personaje y todo lo que se mueve en la clase de personaje
    this.bubbles.forEach((e) => e.move()); //mueve los obstáculos
    this.darkBubbles.forEach((e) => e.move()); //mueve los obstáculos
    this.platforms.forEach((e) => e.move()); //mueve los obstáculos
    this.bouncers.forEach((e) => e.move()); //mueve los obstáculos
    this.spikes.forEach((e) => e.move()); //mueve los obstáculos
    this.explosions.forEach((e) => e.move()); //mueve los obstáculos
    this.flamethrowers.forEach((e) => e.move()); //mueve los obstáculos
    this.machineguns.forEach((e) => e.move()); //mueve los obstáculos
    this.auras.forEach((e) => e.move()); //mueve los obstáculos
    this.boxes.forEach((e) => e.move()); //mueve los obstáculos
    this.blasters.forEach((e) => e.move()); //mueve los obstáculos
    this.levelBalls.forEach((e) => e.move()); //mueve los obstáculos
    this.healings.forEach((e) => e.move()); //mueve los obstáculos
    this.gatlings.forEach((e) => e.move()); //mueve los obstáculos
    this.cannons.forEach((e) => e.move()); //mueve los obstáculos
    this.levers.forEach((e) => e.move()); //mueve los obstáculos
    this.coins.forEach((e) => e.move()); //mueve los obstáculos
    this.hooks.forEach((e) => e.move()); //mueve los obstáculos
    this.electros.forEach((e) => e.move()); //mueve los obstáculos
    this.swords.forEach((e) => e.move()); //mueve los obstáculos
    this.miniBoses.forEach((e) => e.move()); //mueve los obstáculos
    this.bars.forEach((e) => e.move()); //mueve los obstáculos
    this.steps.forEach((e) => e.move()); //mueve los obstáculos
    this.puffBubbles.forEach((e) => e.move()); //mueve los obstáculos
    this.gatlings.forEach((e) =>e.checkPosition(this.player))
    this.miniBoses.forEach((e) =>e.checkPosition(this.player))
    this.miniBoses.forEach((e) =>e.checkDistance(this.player))
  }
  setListeners() {
    //permite hacer keyup y keydown para usar teclado para mover el personaje
    document.addEventListener("keydown", (ev) => {
      this.player.keyDown(ev.keyCode);
      // this.keyDown(ev.keyCode)
    });
    document.addEventListener("keyup", (ev) => {
      this.player.keyUp(ev.keyCode);
      this.keyUp(ev.keyCode)
    });
  }

  checkCollisions() {
    //función para comprobar las colisiones
    this.spikes.forEach((spike) => {//player con spikes
      if (spike.collides(this.player) && !playerIsImmune) {
        if (!this.player.auraIsActive && !this.player.electricShieldIsActive) {
          spike.active = true;
          let loseCoins =  getRandomNumber(4);
          if(loseCoins === 1){
            coins -= 5;
            
          }
          this.player.wasNotDamaged = false;
          this.player.loseLife(spike.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
        }
      } else return true;
    });

    this.spikes.forEach((spike) => {
        this.platforms.forEach((platform) => {
            if(spike.collides(platform)){
              spike.vx = platform.vx
            }
        })
    })
    this.stairs.forEach((stair) => {//player con stair
      if (stair.collidesTop(this.player)) {
        this.player.vy = 0;
        this.player.y = stair.y - this.player.h;
        jumpDownDistance = 3;
        W = 0;
        this.player.g = 2;
      }
      if (stair.collidesSides(this.player)) {
        this.player.vy = 0;
        this.player.g = 0.2;
        setTimeout(() => {
          W = 0;
        }, 200);
      }
      if (stair.collides(this.player)) {
        W = 87
        jumpDownDistance = 0;
        this.player.canClimb = true;
      } else {
        // this.player.canClimb = false;    // esto impide que suba a las otras esfcaleras, solo a la ultima del array
        return true;
      }
    });
    //bubbles...bubbles...bubbles...bubbles...bubbles...
    //bubbles...bubbles...bubbles...bubbles...bubbles...
      checkBubbleCollision(this.bubbles, this.player, this.bubbleSplash2, this.bubblePopSound1, this.puffBubbles, this.ctx, this.platforms, this.bouncers, this.boxes)
    this.gatlings.forEach((e) => {  
      checkBubbleCollision(e.bubbleArray, this.player, this.bubbleSplash2, this.bubblePopSound1, this.puffBubbles, this.ctx, this.platforms, this.bouncers, this.boxes)
    })
    this.cannons.forEach((e) => {
      checkBubbleCollision(e.bubbleArray, this.player, this.bubbleSplash2, this.bubblePopSound1, this.puffBubbles, this.ctx, this.platforms, this.bouncers, this.boxes)
    })
    this.miniBoses.forEach((e) => {
      checkBubbleCollision(e.bubbleArray, this.player, this.bubbleSplash2, this.bubblePopSound1, this.puffBubbles, this.ctx, this.platforms, this.bouncers, this.boxes)
    })
    this.miniBoses.forEach((e) => {e.explosiveArray.forEach((exp) => { if(exp.collides(this.player)){
        if(this.player.electricShieldIsActive || this.player.auraIsActive){
            exp.vx = exp.vx * -1;
            exp.vy = exp.vy * -1;
        } else if (!this.player.electricShieldIsActive || !this.player.auraIsActive){
          this.player.loseLife(exp.damage, true);
          exp.exploded = true;
          if(exp.bigBomb){
            exp.fireExplosionBig.play()
          } else {
            exp.fireExplosionSmall.play()
          }
          exp.img.frame = 5;
          exp.vx = this.player.vx;
          exp.canCollide = false;
        }
    }})})


    this.miniBoses.forEach((e) => {e.explosiveArray.forEach((exp) => { 
      if(exp.collidesBoss(e)){
        if(exp.bigBomb){
          exp.fireExplosionBig.play()
        } else {
          exp.fireExplosionSmall.play()
        }
        exp.exploded = true;
        exp.vx = miniBossVx;
        exp.vy = miniBossVy;
        e.miniBossBurn()
    }})})

    
    bossFireCollision(this.miniBoses, this.stairs)
    bossFireCollision(this.miniBoses, this.platforms)
    bossFireCollision(this.miniBoses, this.bouncers)
    bossFireCollision(this.miniBoses, this.bubbles)
    bossFireCollision(this.miniBoses, this.spikes)
    // bossFireCollision(this.miniBoses, this.boxes)
    bossFireCollision(this.miniBoses, this.player.bulletArray)
    bossFireCollision(this.miniBoses, this.player.bulletBarArray)
    bossFireCollision(this.miniBoses, this.player.bulletPlatformArray)



    checkDarkBubbleCollision(this.darkBubbles, this.player, this.bubbleSplash2, this.platforms, this.darkBubbleExplosion, this.bubbles, this.puffBubbles, this.bouncers)

    //weaponBar..weaponBar..weaponBar..weaponBar..
    //weaponBar..weaponBar..weaponBar..weaponBar..

    checkBarCollisions(this.player.bulletBarArray, this.platforms, this.barHit, this.player);
    checkBarCollisions(this.player.bulletBarArray, this.bouncers, this.barHit, this.player);
    checkBarCollisions(this.player.bulletBarArray, this.boxes, this.barHit, this.player);

    checkHookCollisions(this.player.hooksArray, this.platforms, this.barHit, this.player);
    checkHookCollisions(this.player.hooksArray, this.bouncers, this.barHit, this.player);
    checkHookCollisions(this.player.hooksArray, this.boxes, this.barHit, this.player);
    
    this.player.bulletBarArray.forEach((bar) =>{
      if(bar.collides(this.player)){
            if(this.player.electricShieldIsActive){
              bar.isElectrified = true;
              bar.tick +=2.5;
              barLife += 0.1;
              bar.w+= 0.05;
            }
          }
        })
    
    // colisiones con Platform
    // colisiones con Platform
    this.platforms.forEach((platform) => {// platform con player
      if (platform.collides(this.player)) {
          platformPlayerCollision(this.player, platform)
      }
    });

    this.platforms.forEach((platform) => {//platform con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if (bullet.collides(platform)) {
          if (!platform.isSolid) {
            this.platformHitSolid.play()
            basicBulletBounce(bullet, platform);
          } else {
            this.platformHitBreak.play()
            const newColor = platform.calculateNewColor();
            platform.color = newColor;
            if(bullet.isBig){
              bigWeaponBubble(this.ctx, bullet,  this.player)
            }
            bullet.x = -200
            if (platform.life <= 0) {
              coins+=2;
              this.player.life.amountOfGainedCoins = 2;
              this.player.life.isGaining = true;
              this.coinsSound1.play()
              platform.x = -200;
            }
          }
          return true;
        } else return true;
      });
    });

    this.platforms.forEach((bubble) => {//  bubble con bullet
      this.player.bulletArray.forEach((bullet) => {
          if (bullet.collides(bubble) && bullet.isBig) {
            bigWeaponBubble(this.ctx, bullet,  this.player)
            bullet.y = -300;
          } else return true;
        });
      });

  

    //colisiones con bouncers
    this.bouncers.forEach((bouncer) => {
      if (bouncer.collides(this.player)) {
        bouncerPlayerCollision(this.player, bouncer)
      }
    });
    this.bouncers.forEach((bouncer) => {//bouncer con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if (bullet.collides(bouncer)) {
          basicBulletBounce(bullet, bouncer);
          return false;
        } else return true;
      });
    });

// bosssss
// bosssss
// bosssss

this.miniBoses.forEach((mini) => {//  minions con bullet
  this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
    if (bullet.collidesMiniboss1(mini) && !bullet.isBig) {
      mini.miniBossHit();
      return false;
    } else return true;
  });
});
this.miniBoses.forEach((mini) => {//  minions con bullet
  this.player.bulletFireArray.forEach((bullet) => {
    if (bullet.collidesMiniboss1(mini)){
      mini.miniBossBurn();
    } else return true;
  });
});
this.miniBoses.forEach((mini) => {//  minions con sword
  this.player.swordArray.forEach((bullet) => {
    if (bullet.collides(mini)){
      mini.miniBossBurn();
      this.player.swordPowerUp += 0.05
    } else return true;
  });
});
this.miniBoses.forEach((e) => {e.explosiveArray.forEach((exp) => { 
  this.player.swordArray.forEach((bullet) => {
      if(exp.collides(bullet)){
        exp.vx = exp.vx * -1;
        exp.vy = exp.vy * -1;
        this.player.swordPowerUp++
      }
  })})})

this.miniBoses.forEach((mini) => {//  miniboss con player
    if (mini.collides(this.player) && !playerIsImmune) {
      this.player.loseLife(2, true)
      return false;
    } else return true;
  });

this.cannons.forEach((cann) => {//  cannon con fire
  this.player.bulletFireArray =  this.player.bulletFireArray.filter((bullet) => {
    if (bullet.collides(cann) ) {
      cann.cannonIgniteSound.play()
      cann.burningCannonSound.play()
      cann.cannonHit();
      cann.burning = true;
      cann.burningForce++
      if(cann.burningForce > 5) cann.burningForce = 5;
      const puffBubble = new BubblePuff(ctx, cann.x, cann.y + cann.h / 2,cann.w, cann.h, "../public/Imagenes/puffBubble2.png");
      this.puffBubbles.push(puffBubble);
      return false;

    } else return true;
  });
});



// bosssss
// bosssss
// bosssss






    // items que mejoran el personaje
    this.flamethrowers.forEach((flame) => {// flamethrowers  choca con el personaje
      if (flame.collides(this.player)) {
        N = 78;
        itemTakenImages = "../public/Imagenes/itemTakenBullet1.png";
        this.player.itemJustTaken = true;
        eventInfo(munLanzallamas$$)
        this.player.fireAmount += 3; // sumamos 5 balas de fuego
        if (this.player.fireAmount >= 28) {//para que el charger que se dibuja haga el semicírculo
          this.player.fireAmount = 30;
        }
        flame.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.machineguns.forEach((machinegun) => {// machineguns  choca con el personaje
      if (machinegun.collides(this.player)) {
        recharge = 50;
        itemTakenImages = "../public/Imagenes/itemTakenBullet1.png";
        this.player.itemJustTaken = true;
        eventInfo(munAmetralladora$$)
        setTimeout(() => {
          recharge = 500;
        }, 10000);
        machinegun.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.healings.forEach((healing) => {
      // healings  choca con el personaje
      if (healing.collides(this.player)) {
        eventInfo(munSalud$$)
        this.player.gainLife();
        this.player.healSound.play();
        this.player.life.isHealing = true;
        itemTakenImages = "../public/Imagenes/itemTakenHealing1.png";
        this.player.itemJustTaken = true;
        healing.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });

    this.bars.forEach((bar) => {// bars  choca con el personaje
      if (bar.collides(this.player)) {
        this.player.barAmount += 2;
        this.player.ammoSound.play();
        eventInfo(munCadena$$)
        itemTakenImages = "../public/Imagenes/itemTakenBullet1.png";
        this.player.itemJustTaken = true;
        bar.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });

    this.steps.forEach((step) => {// steps  choca con el personaje
      if (step.collides(this.player)) {
        this.player.stepsAmount += 5;
        this.playerBar.play();
        this.player.itemJustTaken = true;
        eventInfo(munStep$$)
        step.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.blasters.forEach((blaster) => {// blasters  choca con el personaje
      if (blaster.collides(this.player)) {
        this.player.megaFireBlaster = true;
        this.player.megaFireBlasterAmount += 31;
        this.blasterItemSound.play()

        itemTakenImages = "../public/Imagenes/itemTakenBlaster1.png";
        this.player.itemJustTaken = true;
        eventInfo(munMegablaster$$)
        blaster.dispose = true; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.auras.forEach((aura) => { // aditionalaura  choca con el personaje
      if (aura.collides(this.player)) {
        this.player.auraIsActive = true;
        aura.dispose = false;
        this.player.itemJustTaken = true;
        eventInfo(munEscudo$$)
        setTimeout(() => {
          this.player.auraIsActive = false;
        }, shieldsDuration*2);
      } else return true;
    });
    this.levers.forEach((lever) => {
      if (lever.collides(this.player)) {
      lever.activated = true;
      } else return true;
    });
    this.coins.forEach((coin) => {
      if (coin.collides(this.player)) {
            coins+= coin.amountOfCoins;
            this.player.life.amountOfGainedCoins = coin.amountOfCoins;
            this.coinsItemSound.play()
        this.player.extraY = +20;
            itemTakenImages = "../public/Imagenes/itemTakenCoins2.png";
            this.player.life.isGaining = true;
            coin.dispose = false;
        this.player.itemJustTaken = true;
      } else return true;
    });
    this.hooks.forEach((hook) => {
      if (hook.collides(this.player)) {
            eventInfo(munHook$$)
            this.player.hookAmount += 2;
            hook.dispose = false;
        itemTakenImages = "../public/Imagenes/itemTakenBullet1.png";
        this.player.itemJustTaken = true;

      } else return true;
    });
    this.electros.forEach((electro) => {
      if (electro.collides(this.player)) {
        if(this.player.electroAmount <= 90){
          this.player.electroAmount += 5;
        itemTakenImages = "../public/Imagenes/itemTakenElectro.png";
        this.player.extraY = -30;
        this.player.itemJustTaken = true;
        } else{
          coins += 30;
        }
            this.electroItemSound.play()
            electro.dispose = false;
        this.player.itemJustTaken = true;
      } else return true;
    });
    this.swords.forEach((sword) => {
      if (sword.collides(this.player)) {
        this.player.swordEquipped = true;
        this.player.swordLevel ++;
        sword.dispose = false;
        itemTakenImages = "../public/Imagenes/itemTakenHealing1.png";
        this.player.itemJustTaken = true;
      } else return true;
    });
    // cannons..
    // cannons..

    this.cannons.forEach((cann) => {//  cannons con bullet
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if (bullet.collides(cann) && !bullet.isBig) {
          cann.cannonHit();
          cann.cannonHit();
          const puffBubble = new BubblePuff(ctx, cann.x, cann.y + cann.h / 2,cann.w, cann.h);
          this.puffBubbles.push(puffBubble);
          return false;
        } else return true;
      });
    });
    this.cannons.forEach((cann) => {//  cannon con fire
      this.player.bulletFireArray =  this.player.bulletFireArray.filter((bullet) => {
        if (bullet.collides(cann) ) {
          cann.cannonIgniteSound.play()
          cann.burningCannonSound.play()
          cann.cannonHit();
          cann.burning = true;
          cann.burningForce++
          if(cann.burningForce > 5) cann.burningForce = 5;
          const puffBubble = new BubblePuff(ctx, cann.x, cann.y + cann.h / 2,cann.w, cann.h, "../public/Imagenes/puffBubble2.png");
          this.puffBubbles.push(puffBubble);
          return false;

        } else return true;
      });
    });

    //que el item se quede sobre la plataforma al caer



    //para que caiga lentamente por los escalenos antes de llegar al suelo

    // boxes...
    // boxes...
      itemDropOn(this.platforms,this.boxes,this.stairs, this.flamethrowers,this.machineguns,this.healings, this.bars,this.blasters,this.auras,this.coins,this.steps,this.levers,this.hooks,this.electros,this.swords)

    this.boxes.forEach((box) => {// box con player
      if (box.collides(this.player)) {
          platformPlayerCollision(this.player, box)
      }
    });
    this.boxes.forEach((box) => {//  box con bullet
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if (bullet.collides(box) && !bullet.isBig) {
          box.boxHit();
          const puffBubble = new BubblePuff(ctx, box.x, box.y + box.h / 2,box.w,box.h);
          this.puffBubbles.push(puffBubble);
          return false;
        } else return true;
      });
    });
    this.boxes.forEach((box) => {
      if (box.boxImg.frame > 8) {
        if(box.bubblePopup){
          addBubble1(this.ctx, this.bubbles)
        }
        if (box.containsRandom) {
          randomLootFromBox(this.ctx,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps,this.hooks,  box.x ,box.y );
          if(box.boxLevel=== 0){
          randomLootFromBox(this.ctx,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps,this.hooks,  box.x-5 ,box.y-5 );
          }
          for (let i = 0; i < box.amountOfLoot; i++) {
          randomLootFromBox(this.ctx,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps,this.hooks,  box.x-5 ,box.y-5 );
          }
        } else {
          specificLootFromBox(this.ctx, box.lootNumber,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps, this.hooks,this.electros, box.x + box.w/2-3, box.y + box.h);
          if(box.boxLevel=== 0){
            specificLootFromBox(this.ctx, box.lootNumber,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps, this.hooks,this.electros, box.x + box.w/2+3, box.y + box.h/2);
          }
          for (let i = 0; i < box.amountOfLoot; i++) {
            specificLootFromBox(this.ctx, box.lootNumber,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,this.blasters,this.coins,this.steps, this.hooks,this.electros, box.x + box.w/2-5 + i*2, box.y + box.h/2 -i*4);      
          }
        }
      }
    });

    this.boxes.forEach((box) => {//  box con fire
      this.player.bulletFireArray =  this.player.bulletFireArray.filter((bullet) => {
        if (bullet.collides(box) ) {
          box.boxIgniteSound.play()
          box.burningBoxSound.play()
          box.burning = true;
          box.burningForce++
          if(box.burningForce > 5) box.burningForce = 5;
          const puffBubble = new BubblePuff(ctx, box.x, box.y + box.h / 2,box.w, box.h, "../public/Imagenes/puffBubble2.png");
          this.puffBubbles.push(puffBubble);
          return false;

        } else return true;
      });
    });



    this.boxes.forEach((box) => {
      this.player.bulletArray.forEach((bullet) => {
        if(bullet.collides(box) && bullet.isBig){
          bigWeaponBubble(this.ctx, bullet, this.player)
          return false
        }else return true;  
      })
    })

    this.levelBalls.forEach((levelBall) => {//levelBall con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if (bullet.collides(levelBall)) {
          if (levelBall.isActive) {
            ballBroke = false;
            levelBall.ballBroke = true;
            levelBall.breakingLevelBallSound.play();
            if(GAMELEVEL <= 1500){
              this.levelChange();
            }
            if(GAMELEVEL >= 1800){
              ballBroke = true; 
              demoPhase++;
            }
            levelBall.isActive = false;
          } else if (!levelBall.isActive && !levelBall.winCondition) {
            levelBall.ballShieldForceResist = true;
            bullet.y = -30;
          } else if (!levelBall.isActive && levelBall.winCondition) {
            levelBall.ballShieldBreaking = true;
            levelBall.forceFieldFailSound.play();
            setTimeout(() => {
              levelBall.isActive = true;
            }, 300);
          }
          return false;
        } else return true;
      });
    });
  }
  changingLevels(){
  if (this.changingLevel) {
    if(this.changingLevelSoChangeImage){
      let indiceAleatorio = Math.floor(Math.random() * this.listaImagenes.length);
      if(GAMELEVEL <100){
        mapChangeLevel$$.style.width = 'calc(200px + 2vw)';
        mapChangeLevel$$.style.top = '35vh';
        mapChangeLevel$$.style.left = '20vw';
        changingLevelImg$$.src = this.listaImagenes[indiceAleatorio];
        mapChangeLevel$$.src = mapArray[GAMELEVEL - 1];
        mapChangeLevel$$.style.display = 'block';
        setTimeout(() => {
          if(GAMELEVEL < 100){
            mapChangeLevel$$.style.left = '0.5vw';
            mapChangeLevel$$.style.width = 'calc(20px + 0.7vw)';
            mapChangeLevel$$.style.top = '21vh';
          }
        }, 1500);
      }
      this.changingLevelSoChangeImage = false;
      setTimeout(() => {
    this.changingLevelSoChangeImage = true;
      }, 5000);
    }
    changingLevelImg$$.style.display = "block";
    levelChangeText1$$.style.display = "block";
    levelChangeText2$$.style.display = "block";
    levelChangeText3$$.style.display = "block";
    levelChangeText4$$.style.display = "block";
    levelChangeText1$$.innerText = `Siguiente nivel ${GAMELEVEL}`;
    levelChangeText2$$.innerText = `${this.frases[this.indiceAleatorio]}`;
if(this.player.wasNotDamaged) {
  levelChangeText3$$.innerText = `+20 monedas por no recibir daño`;
} else {
  levelChangeText3$$.innerText = ``;
}
  levelChangeText4$$.innerText = ``;
  }
}
  levelChange() {      
    if(this.player.wasNotDamaged) {coins+=20; this.coinsSound2.play();}
    if(!this.isInfiniteChanging){
    setTimeout(() => {
      this.changeLevelSound1.play();
      GAMELEVEL += 1;
      this.changingLevel = true;
      this.indiceAleatorio = Math.floor(Math.random() * this.frases.length);
      setTimeout(() => {
        levelChangeMessagesDisplay()
        this.player.wasNotDamaged = true;
        ballBroke = true;
        this.changingLevel = false;
        this.levelBalls = [];
        if (GAMELEVEL === 2) {
          level2(this.ctx,this.bubbles,this.platforms,this.boxes,this.levelBalls);
          this.background.img.src ="/public/Imagenes/background/background2.jpeg";
        } else if (GAMELEVEL === 3) {
          this.background.img.src ="/public/Imagenes/background/background3.jpeg";
          level3(this.ctx,this.bubbles,this.platforms,this.stairs,this.boxes,this.healings,this.levelBalls);
        } else if (GAMELEVEL === 4) {
          this.background.img.src ="/public/Imagenes/background/background4.jpeg";
          level4( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls);
        } else if (GAMELEVEL === 5) {
          this.background.img.src ="/public/Imagenes/background/background5.jpeg";
          level5( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls);
        } else if (GAMELEVEL === 6) {
          this.background.img.src ="/public/Imagenes/background/background6.jpeg";
          level6( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes, this.spikes,this.levelBalls, this.stairs);
        } else if (GAMELEVEL === 7) {
          this.background.img.src ="/public/Imagenes/background/background7.jpeg";
          level7( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes, this.spikes,this.levelBalls, this.stairs);
        } else if (GAMELEVEL === 8) {
          this.background.img.src ="/public/Imagenes/background/background8.jpeg";
        level8(this.ctx, this.bubbles, this.platforms, this.stairs, this.boxes,  this.levelBalls, this.stairs, this.hooks, this.levers)
        } else if (GAMELEVEL === 9) {
          this.background.img.src ="/public/Imagenes/background/background9.jpeg";
          level9( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes,  this.levelBalls,this.spikes, this.levers);
        }else if (GAMELEVEL === 10) {
          this.background.img.src ="/public/Imagenes/background/background10.jpeg";
          level10( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls, this.coins);
        } else if (GAMELEVEL === 11) {
          this.background.img.src ="/public/Imagenes/background/background11.jpeg";
        level11( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls, this.levers);
          
        } else if (GAMELEVEL === 12) {
          this.background.img.src ="/public/Imagenes/background/background12.jpeg";

        level12( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls, this.gatlings);
          
        } else if (GAMELEVEL === 13) {//there
          this.background.img.src ="/public/Imagenes/background/background13.jpeg";

        level13( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls,  this.darkBubbles);
          
        } else if (GAMELEVEL === 14) {
          this.background.img.src ="/public/Imagenes/background/background14.jpeg";

        level14( this.ctx, this.bubbles, this.platforms,  this.healings, this.boxes, this.levelBalls, this.darkBubbles, this.spikes, this.bars);
          
        } else if (GAMELEVEL === 15) {
          this.background.img.src ="/public/Imagenes/background/background15.jpeg";
          setInterval(() => {
            this.cannons.forEach(c => c.shooting = true)
          }, 36000);
          level15( this.ctx,this.platforms, this.bubbles, this.levelBalls, this.darkBubbles, this.cannons, this.boxes);
          setInterval(() => {
            this.otherBubbles++
            this.cannons.forEach(c =>c.shooting = true)
            if(this.otherBubbles >=5){
            this.cannons.forEach((c) =>(c.vx = -0.05))
            }
          }, 3000);
        } else if (GAMELEVEL === 16){//pero 21 en realidad
          addMiniboss1()
          this.miniBossTalk1.play()
          setTimeout(() => {
            let bo = new MiniBoss1(ctx, CTXW - 70, -50)
            this.miniBoses.push(bo);
            this.minibossArrivingShip.play()
            this.dispached = false;
          }, 6100);
        }
      }, 3000);
    }, 1000);
  } else{
    this.changingLevel = true;
    this.indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    GAMELEVEL += 1;
    setTimeout(() => {
        this.player.wasNotDamaged = true;
        ballBroke = true;
        this.changingLevel = false;
        levelChangeMessagesDisplay()
        this.levelBalls = [];
        levelInfinite( this.ctx, this.bubbles, this.platforms, this.bouncers, this.spikes, this.stairs, this.flamethrowers, this.machineguns, this.healings, this.auras, this.boxes, this.blasters, this.levelBalls, this.gatlings, this.darkBubbles, this.cannons, this.levers, this.coins, this.hooks, this.bars);
        infiniteLeveling++
    }, 3000)
  }
  this.emptyAllGameArrays();
  this.emptyAllPlayerArrays();
  }

  checkLevelsState(){
    if (this.player.life.total <= 0){
      this.player.life.total = 3;
      GAMELEVEL<= 1800 ? this.gameOver() : this.demoOver(); 
    }
      if (this.bubbles.length <= 0 && this.gatlings.every(gat => gat.bubbleArray.length <= 0) && this.cannons.every(can => can.bubbleArray.length <= 0) && this.levers.every(lev =>lev.activated)&& this.miniBoses.length <= 0) {
        this.levelBalls.forEach(e => (e.img.src = e.img.newSrc));
        this.levelBalls.forEach(e => (e.winCondition = true));
      } else {this.levelBalls.forEach(e => (e.winCondition = false))}
    if(GAMELEVEL === 1987){
      if(demoPhase === 1){
        if(this.platforms.length<=2 && this.electros.length <=0 && this.gameTime >= 800){
        this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
          this.player.y = CTXH - 20;
          this.player.x = 50
          addDemo2(this.ctx, this.platforms, this.bouncers, this.stairs, this.levers)
          demoFunctions.mostrarVariosTextosPocoAPoco2()
          this.player.g = 1;
          demoPhase = 2;
        }
      }
      if(demoPhase === 2 && this.levers.every(lever =>lever.activated === true)){
        this.levelBalls = [];
          this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
          demoFunctions.mostrarVariosTextosPocoAPoco3()
          addDemo3(this.ctx, this.platforms, this.levers, this.bubbles, this.levelBalls)

          demoPhase = 3;
      }
      if(demoPhase === 4){
        this.levelBalls = [];
        this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
          demoFunctions.mostrarVariosTextosPocoAPoco4()
          addDemo4(this.ctx, this.platforms, this.levers, this.bubbles, this.levelBalls, this.boxes)
          demoPhase = 5;

      }
      if(demoPhase === 6){
        this.levelBalls = [];
        this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
        demoFunctions.mostrarVariosTextosPocoAPoco5()
        addDemo5(this.ctx, this.platforms, this.levers, this.levelBalls,this.boxes, this.darkBubbles, this.spikes, this.healings)
        this.totalCannonBubbleCount = this.cannons.reduce((total, cannon) => {
          if (cannon.bubbleArray.length > 0) {
              return total + cannon.bubbleArray.length;
          } else {
              return total;
          }
      }, 0);
        demoPhase = 7;
      }
      if(demoPhase === 8){
          this.levelBalls = [];
          this.emptyAllGameArrays()
          this.emptyAllPlayerArrays()
          addDemo6(this.ctx, this.platforms, this.levers, this.levelBalls,this.boxes, this.gatlings, this.cannons);
          demoPhase = 9;
      }
      if(demoPhase === 9){
        this.totalCannonBubbleCount = this.cannons.reduce((total, cannon) => {
          if (cannon.bubbleArray.length > 0) {
              return total + cannon.bubbleArray.length;
          } else {
              return total;
          }
      }, 0);
      if(this.totalCannonBubbleCount >=10){
        this.cannons.forEach((cannon) => cannon.shootInterval = 30000)
      } else {
        this.cannons.forEach((cannon) => cannon.shootInterval = 15000)
      }
      }
      if(demoPhase === 10){
        this.levelBalls = [];
        this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
        let bub1 = new Bubble(this.ctx, 20, 30, 30, 30)
        let bub2 = new Bubble(this.ctx, CTXW-40, 30, 30, 30)
        this.bubbles.push(bub1, bub2)
        
        addDemo7(this.ctx, this.platforms, this.swords);
        demoFunctions.mostrarVariosTextosPocoAPoco7()
        setTimeout(() => {
          let boss = new MiniBoss1(ctx, CTXW-60, -200, CTXW/5, CTXW/5, 0, 0, 10, true, false, false);
          this.miniBoses.push(boss);

          let bub1 = new Bubble(this.ctx, 20, 30, 20, 20)
          let bub2 = new Bubble(this.ctx, CTXW-40, 30, 20, 20)
          this.bubbles.push(bub1, bub2)

          const levelBall1 = new LevelBall(ctx, 120, 0)
          this.levelBalls.push(levelBall1)
        }, 20000);
        setInterval(() => {
          boxMoveDemo7(this.ctx, this.boxes)
        }, 15000);
        demoPhase = 11
      }
      if(demoPhase === 12){
        this.emptyAllGameArrays()
        this.emptyAllPlayerArrays()
        introAyudaFinal1$$.style.display = "block"
        setTimeout(() => {
          window.location.reload();
        }, 10000);
        demoPhase = 13;
      }
    }




    if(GAMELEVEL===11 && this.levelBalls.every(e =>e.winCondition===true)){
        this.platforms.forEach(element => {
          element.isSolid = true;
        })
      }
      if(GAMELEVEL===14){
        if(this.platforms.length === 1){
          this.platforms = [];
          coins -= 6
          setTimeout(() => {
            addPlatforms14(this.ctx, this.platforms)
          }, 3000);
        }
      }
    }

  
  checkBoss(){
    if(miniBoss1){
      this.tickMiniBoss1++;
      this.tickMiniBoss2++;
      this.tickMiniBoss3++;
      if(this.randomIsOn){
        this.randomNumberForTick1 = Math.random() * 300;
        this.randomIsOn = false;
      }
      if(this.tickMiniBoss1 >= 850 + this.randomNumberForTick1){  
        addPlatformsMiniBoss1(this.ctx, this.platforms)
        this.tickMiniBoss1 = 0;
        this.randomIsOn = true;
      }
      if(this.tickMiniBoss2 >= 1250 + this.randomNumberForTick1){  
        boxItemMiniBoss1(this.ctx, this.boxes);
        this.tickMiniBoss2 = 0;
        this.randomIsOn = true;
      }
      if(this.tickMiniBoss3 >= 1450 + this.randomNumberForTick1){  
        addBouncerMiniBoss1(this.ctx, this.bouncers)
        this.tickMiniBoss3 = 0;
        this.randomIsOn = true;
      }
      if (this.miniBoses.every((mini) => mini.life <= 50) && !this.dispached) {
        let randomNumber = Math.floor(Math.random() * 4); // Generar un número aleatorio entre 0 y 2
        if (randomNumber === 0) {
          let heali = new Healing(this.ctx, CTXW - getRandomNumber(40), 70);
          this.healings.push(heali);
        } else if (randomNumber === 1) {
          let fire = new Flamethrower(this.ctx, CTXW - getRandomNumber(40), 70);
          this.flamethrowers.push(fire);
        } else if (randomNumber === 2) {
          let bar = new Bars(this.ctx, CTXW - getRandomNumber(40), 70);
          this.bars.push(bar);
        } else if (randomNumber === 3){
          const hook = new Hook(  this.ctx, CTXW - getRandomNumber(40), 70)
          this.hooks.push(hook)
        }
        let breakable = Math.random() > 0.5;
        let jumpable = Math.random() > 0.5;
        const platform = new Platform(this.ctx, CTXW - 30, CTXH-25 , 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", breakable, jumpable, true, -0.3);
        this.platforms.push( platform);
        this.dispached = true;
        setTimeout(() => {
          this.dispached = false;
        }, 5000);
      }
    }
  }
  demoOver(){
    this.emptyAllGameArrays();
    demoFunctions.demoOverText()
    demoOverBackground$$.style.display = 'block';
    setTimeout(() => {
    demoOverBackground$$.style.opacity = '1';
    }, 500);
    setTimeout(() => {
    demoOverBackground$$.style.display = 'none';
      
      if(demoPhase < 5){
        this.levelBalls = [];
        demoFunctions.mostrarVariosTextosPocoAPoco3()
        addDemo3(this.ctx, this.platforms, this.levers, this.bubbles, this.levelBalls)
        demoPhase = 3;
      } else {
        this.levelBalls = [];
        demoFunctions.mostrarVariosTextosPocoAPoco5()
        addDemo5(this.ctx, this.platforms, this.levers, this.levelBalls,this.boxes, this.darkBubbles, this.spikes, this.healings)
        demoPhase = 7;
      }
    }, 10000);
  }
  gameOver() {
    //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.emptyAllGameArrays()
    this.emptyAllPlayerArrays()
    infiniteLeveling = 0;
    GAMELEVEL = 1;
    this.gameBackgroundMusic.pause();
    this.gameOver1.play();
    this.gameOver2.play();
    let randomIndex = Math.floor(Math.random() * this.gameOverImgs.length);
    gameOverBackground$$.src = this.gameOverImgs[randomIndex];
    gameOverBackground$$.style.display = "block";
    gameOverBackgroundText$$.style.display = "block"
    gameOverX$$.style.display = "block"
    setTimeout(() => {
      gameOverBackground$$.style.opacity = "1"; // Cambiar la opacidad a 1 después de 1 segundo
    }, 100); //
    setTimeout(() => {
      gameOverX$$.style.opacity = "1"; // Cambiar la opacidad a 1 después de 1 segundo
      gameOverBackgroundText$$.style.opacity = "1"; // Cambiar la opacidad a 1 después de 1 segundo
    }, 1000); //
  }
  emptyAllGameArrays(){
    this.bubbles = [];
    this.darkBubbles = [];
    this.healings= [];
    this.flamethrowers = [];
    this.machineguns = [];
    this.puffBubbles = [];
    this.platforms = [];
    this.bouncers = [];
    this.stairs = [];
    this.blasters = [];
    this.spikes = [];
    this.explosions = [];
    this.bars = [];
    this.boxes= [];
    this.gatlings = [];
    this.cannons = [];
    this.levers = [];
    this.coins = [];
    this.hooks = [];
    this.electros = [];
    this.swords = [];
    this.miniBoses = [];
  }
  emptyAllPlayerArrays(){
    this.player.bulletArray = [];
    this.player.bulletBarArray = [];
    this.player.bulletFireArray = [];

  }
  keyUp(key){
    if(key === P){
      this.shootStep(15);
    }
    if(key === O){
      this.shootStep(-18);
    }
  }
  shootStep(stepPlace) {
    if(this.player.platformCreator && this.player.stepsAmount > 0){
      this.player.stepsAmount--;
      const plat = new Platform(ctx, this.player.x + stepPlace, this.player.y - 10, 15, 5, "/public/Imagenes/obstacles/stepsSolid2.png", true, true, true);
      this.platforms.push(plat);
      setTimeout(() => {
        const index = this.platforms.indexOf(plat);
        if (index !== -1) {
          this.platforms.splice(index, 1);
        }
      }, 10000);
    }
  }  
}
