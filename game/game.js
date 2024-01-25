class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameStarted = false;
    this.player = new Player(ctx); //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx); // traemos la clase Background para usarlo
    this.levelChengingImg = new Image(ctx);
    this.levelChengingImg.src = "/public/Imagenes/background/background0.jpeg";
    this.interval = null; //sirve para pausar el juego
    this.bubbleTick = 0;
    this.randomColor = null;
    this.gameTime = 0; //cuando el juego se inicia va sumando. Se usa para llevar cuenta del tiempo
    this.bubblePopSound1 = new Audio("../public/sounds/bubblePop1.mp3"); //todo --  Sonido paso 1) guardar la ruta del sonido en una variable
    this.bubblePopSound1.volume = 0.3; // todo -- Sonido paso 2) ponerle volumen, auque no es obligatorio
    this.gameOver1 = new Audio("../public/sounds/gameOver1.mp3");
    this.gameOver1.volume = 0.05; //
    this.gameOver2 = new Audio("../public/sounds/gameOverSound.mp3");
    this.gameOver2.volume = 0.2; //
    this.gameBackgroundMusic = new Audio(
      "../public/sounds/backgroundMusic1.mp3"
    );
    this.gameBackgroundMusic.volume = 0.1; //
    this.changingLevel = false;
    this.bubbleSplash2 = new Audio("../public/sounds/bubbleSplash2.mp3");
    this.bubbleSplash2.volume = 0.1;
    this.setListeners(); // para que se pueda usar el teclado
    this.bubbles = []; // un array que almacena todos los obstáculos que aparecen en la pantalla
    this.flamethrowers = []; // salen nuevas tipos de armas
    this.machineguns = []; // salen nuevas tipos de armas
    this.healings = []; // salen nuevas tipos de armas
    this.bars = []; // salen nuevas tipos de armas
    this.puffBubbles = []; // para cuando estalla la burbuja
    this.platforms = []; // plataformas para saltar
    this.bouncers = []; // plataformas que rebotan
    this.spikes = []; // plataformas que rebotan
    this.explosions = []; // plataformas que rebotan
    this.stairs = []; // Array para almacenar instancias de la clase Stair
    this.auras = []; // Array para almacenar instancias de la clase auras
    this.boxes = []; // Array para almacenar instancias de la clase boxes
    this.blasters = []; // Array para almacenar instancias de la clase blasters
    this.levelBalls = []; // Array para almacenar instancias de la clase blasters
    // sounds sounds sounds
    this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3"); //todo -- paso 1 traer el sonido y almacenarlo en una variable
    this.bubbleBounceSound.volume = 0.1; //todo -- paso 2, no obligatorio, determinarle volumen de 0 a 1, creo
    this.barHit = new Audio("/public/sounds/shooting/barHit.mp3");
    this.barHit.volume = 0.05;
    this.changeLevelSound1 = new Audio("/public/sounds/changeLevelSound1.mp3");
    this.playerHeals = new Audio("/public/sounds/heal1.mp3");
    this.playerBar = new Audio("/public/sounds/barItemRechargeSound.mp3");

    // Obtén un índice aleatorio
    this.frases = [
      "Bien hecho! sigue así",
      "Cada vez lo haces mejor!",
      "No te rindas! Ya lo tienes!",
      "Eres Imparable! Dale caña",
      "Das miedo! avanza más!",
      "Cuidado donde apuntas!",
      "Esto se pondrá dificil!",
    ];
    this.indiceAleatorio;
  }

  start() {
    // this.gameBackgroundMusic.play();
    this.interval = setInterval(() => {
      this.clear(); //   limpia el canvas. Sin esta función, nunca dejaría de dibujarse lo anterior y no aparentaría movimiento.
      this.move(); // mueve los objetos movibles
      this.draw(); // dibuja lo que haga falta
      this.ctx.drawImage(this.levelChengingImg, this.x, this.y, 40, 40);
      if (this.changingLevel) {
        changingLevelImg$$.style.display = "block";
        levelChangeText2$$.style.display = "block";
        levelChangeText1$$.style.display = "block";
        levelChangeText2$$.innerText = `${this.frases[this.indiceAleatorio]}`;
        levelChangeText1$$.innerText = `Siguiente nivel ${GAMELEVEL}`;
      }
      this.checkCollisions(); //Comprueba las colisiones constantemtente
      this.bubbleTick++;
      this.gameTime++; //Cada 60 representan 1 segundo de tiempo en el juego
      
    }, 1000 / 60);
    //crear nivel 1
    if (!this.gameStarted) {
      if (GAMELEVEL === 6) {
        level6( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes, this.spikes,this.levelBalls, this.stairs);
        // level1(this.ctx, this.bubbles, this.platforms, this.levelBalls,)
        // auraItem(this.ctx, this.auras)
        // setTimeout(() => {
        //   addBubble1(this.ctx, this.bubbles)
        // }, 10000);
      }
      this.gameStarted = true;
    }
  }

  stop() {
    //para pausar el juego
    clearInterval(this.interval);
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.bulletArray = this.player.bulletArray.filter((e) =>
      e.isVisible()
    ); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletFireArray = this.player.bulletFireArray.filter((e) =>
      e.isVisible()
    ); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletBarArray = this.player.bulletBarArray.filter((e) =>
      e.isVisible()
    ); //elimina cada bullet que ya no es visible y vacía el array
    this.bubbles = this.bubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.platforms = this.platforms.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.flamethrowers = this.flamethrowers.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.machineguns = this.machineguns.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.auras = this.auras.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.boxes = this.boxes.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.blasters = this.blasters.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.levelBalls = this.levelBalls.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.healings = this.healings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.bars = this.bars.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
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
    this.puffBubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.bubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.flamethrowers.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.machineguns.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.auras.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.boxes.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.blasters.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.healings.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.bars.forEach((e) => e.draw()); //dibuja cada obstáculo
    this.levelBalls.forEach((e) => e.draw()); //dibuja cada obstáculo
    if (this.player.life.total <= 0) this.gameOver(); // cuando el player muere se llama a la funcion gameOver()

  }
  move() {
    this.player.move(); //muve al personaje y todo lo que se mueve en la clase de personaje
    this.bubbles.forEach((e) => e.move()); //mueve los obstáculos
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
    this.bars.forEach((e) => e.move()); //mueve los obstáculos
    this.puffBubbles.forEach((e) => e.move()); //mueve los obstáculos
    if (this.bubbles.length <= 0) {
      this.levelBalls.forEach((e) => (e.winCondition = true));
    }
  }
  setListeners() {
    //permite hacer keyup y keydown para usar teclado para mover el personaje
    document.addEventListener("keydown", (ev) => {
      this.player.keyDown(ev.keyCode);
    });
    document.addEventListener("keyup", (ev) => {
      this.player.keyUp(ev.keyCode);
    });
  }

  //funciones o metodos para crear obstaculos y criaturas

  checkCollisions() {
    //función para comprobar las colisiones
    this.bubbles.forEach((bubble) => {//player con bubble
      if (bubble.collides(this.player) && !this.player.immune) {
        if (!this.player.auraIsActive) {
        bubble.vy = -30; // rebota encima del jugador haciéndole daño

          this.player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
        }
        this.bubbleSplash2.play();
        bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
      } else return true;
    });
    this.spikes.forEach((spike) => {//player con spikes
      if (spike.collides(this.player) && !this.player.immune) {
        if (!this.player.auraIsActive) {
          spike.active = true;
          this.player.loseLife(spike.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
        }
      } else return true;
    });

    this.stairs.forEach((stair) => {//player con stair
      if (stair.collidesTop(this.player)) {
        this.player.vy = 0;
        this.player.y = stair.y - this.player.h;
        W = 0;
        this.player.g = 0.2;
      }
      if (stair.collidesSides(this.player)) {
        this.player.vy = 0;
        this.player.g = 0.2;
        setTimeout(() => {
          W = 0;
        }, 200);
      }
      if (stair.collides(this.player)) {
        W = 87;
      } else {
        return true;
      }
    });

    //bubbles...bubbles...bubbles...bubbles...bubbles...
    //bubbles...bubbles...bubbles...bubbles...bubbles...
    this.bubbles.forEach((bubble) => {//  bubble con bullet
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if (bullet.collides(bubble)) {
          bubblePuff(bubble, this.puffBubbles, this.bubbles, this.ctx);
          this.bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          return false;
        } else return true;
      });
    });
    this.bubbles.forEach((bubble) => {//bubble con fire
      this.player.bulletFireArray.forEach((bullet) => {
        if (bullet.collides(bubble)) {
          bubble.w -= bullet.damage;
          bubble.h -= bullet.damage;
          if (bubble.w <= bubble.explodingSize * 2) {
            const elx = bubble.x;
            const ely = bubble.y;
            const puffBubble = new BubblePuff( this.ctx, elx, ely, bubble.w, bubble.h);
            this.puffBubbles.push(puffBubble);
            bubble.x = -100;
          }
        } else return true;
      });
    });
    this.bubbles.forEach((bubble) => {//bubble con platform
      this.platforms.forEach((platform) => {
        if (platform.collides(bubble)) {
          if (platform.isBouncable) {
          this.bubbleBounceSound.play();
            bounceFromObstacles(bubble, platform);
          } else if (!platform.isBouncable) {
            bubble.y = platform.y - bubble.h;
            bubble.vy = platform.vy;
            bubble.vx = platform.vx;
          }
        } else return true;
      });
    });
    this.bubbles.forEach((bubble) => {//bubble con bouncer
      this.bouncers.forEach((bouncer) => {
        if (bouncer.collides(bubble)) {
          this.bubbleBounceSound.play();
          bounceFromObstacles(bubble, bouncer);
        } else return true;
      });
    });

    //weaponBar..weaponBar..weaponBar..weaponBar..
    //weaponBar..weaponBar..weaponBar..weaponBar..

    checkBarCollisions(this.player.bulletBarArray, this.platforms, this.barHit, this.player);
    checkBarCollisions(this.player.bulletBarArray, this.bouncers, this.barHit, this.player);
    checkBarCollisions(this.player.bulletBarArray, this.boxes, this.barHit, this.player);
    

    this.bubbles.forEach((bubble) => {
      //  bulletBar con Bubble
      this.player.bulletBarArray.forEach((bullet) => {
        if (bullet.collides(bubble)) {
          bullet.life -= 1;
          if (bullet.life <= 0) {
            bullet.dispose = false;
          }
          bubblePuff(bubble, this.puffBubbles, this.bubbles, this.ctx);
          this.bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          return false;
        } else return true;
      });
    });


    // colisiones con Platform
    // colisiones con Platform
    this.platforms.forEach((platform) => {// platform con player
      if (platform.collides(this.player)) {
          platformPlayerCollision(this.player, platform)
      }
    });

    this.platforms.forEach((platform) => {
      //platform con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if (bullet.collides(platform)) {
          if (!platform.isSolid) {
            basicBulletBounce(bullet, platform);
          } else {
            const newColor = platform.calculateNewColor();
            platform.color = newColor;
            bullet.x = -200;
            if (platform.life <= 0) {
              platform.x = -200;
            }
          }
          return true;
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
          bounceFromObstacles(bullet, bouncer);
          return false;
        } else return true;
      });
    });

    // items que mejoran el personaje
    this.flamethrowers.forEach((weapon) => {// flamethrowers  choca con el personaje
      if (weapon.collides(this.player)) {
        N = 78;
        eventInfo(munLanzallamas$$)
        this.player.amountOfFireShoots += 5; // sumamos 5 balas de fuego
        if (this.player.amountOfFireShoots >= 90) {
          //para que el charger que se dibuja haga el semicírculo
          this.player.amountOfFireShoots = 90;
        }
        weapon.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.machineguns.forEach((machinegun) => {// machineguns  choca con el personaje
      if (machinegun.collides(this.player)) {
        recharge = 50;
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
        this.playerHeals.play();
        healing.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });

    this.bars.forEach((bar) => {
      // bars  choca con el personaje
      if (bar.collides(this.player)) {
        this.player.barAmount += 2;
        this.playerBar.play();
        eventInfo(munCadena$$)
        bar.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.blasters.forEach((blaster) => {
      // blasters  choca con el personaje
      if (blaster.collides(this.player)) {
        this.player.megaFireBlaster = true;
        eventInfo(munMegablaster$$)
        blaster.dispose = true; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    this.auras.forEach((aura) => {
      // aditionalaura  choca con el personaje
      if (aura.collides(this.player)) {
        this.player.auraIsActive = true;
        this.player.auraTime += aura.duration;
        eventInfo(munEscudo$$)
        setTimeout(() => {
          this.player.auraIsActive = false;
        }, this.player.auraTime);
        aura.x = -100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true;
    });
    //que el item se quede sobre la plataforma al caer
    itemDropOnPlatform(this.flamethrowers, this.platforms);
    itemDropOnPlatform(this.machineguns, this.platforms);
    itemDropOnPlatform(this.healings, this.platforms);
    itemDropOnPlatform(this.bars, this.platforms);
    itemDropOnPlatform(this.blasters, this.platforms);
    itemDropOnPlatform(this.auras, this.platforms);

    //para que caiga lentamente por los escalenos antes de llegar al suelo
    itemDropOnStairs(this.flamethrowers, this.stairs);
    itemDropOnStairs(this.machineguns, this.stairs);
    itemDropOnStairs(this.healings, this.stairs);
    itemDropOnStairs(this.bars, this.stairs);
    itemDropOnStairs(this.blasters, this.stairs);
    itemDropOnStairs(this.auras, this.stairs);



    // boxes...
    // boxes...

    this.boxes.forEach((box) => {// box con player
      if (box.collides(this.player)) {
          platformPlayerCollision(this.player, box)
      }
    });


    this.boxes.forEach((box) => {
      //  bubble con bullet
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if (bullet.collides(box)) {
          box.boxHit();
          if (box.boxImg.frame > 8) {
            if(box.bubblePopup){
              addBubble1(this.ctx, this.bubbles)
            }
            if (box.containsRandom) {
              randomLootFromBox(this.ctx,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,box.x,box.y);
            } else {
              specificLootFromBox(this.ctx,box.lootNumber,this.flamethrowers,this.healings,this.bars,this.auras,this.machineguns,box.x,box.y);
            }
          }
          const puffBubble = new BubblePuff(
            ctx,
            box.x,
            box.y + box.h / 2,
            box.w,
            box.h
          );
          this.puffBubbles.push(puffBubble);
          return false;
        } else return true;
      });
    });

    this.levelBalls.forEach((levelBall) => {
      //levelBall con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if (bullet.collides(levelBall)) {
          if (levelBall.isActive) {
            levelBall.ballBroke = true;
            levelBall.breakingLevelBallSound.play();
            this.levelChange();
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

  levelChange() {
    setTimeout(() => {
      this.changeLevelSound1.play();
      GAMELEVEL += 1;
      this.changingLevel = true;
      this.randomColor = getRandomColor();
      this.indiceAleatorio = Math.floor(Math.random() * this.frases.length);
      setTimeout(() => {
        this.changingLevel = false;
        changingLevelImg$$.style.display = "none";
        levelChangeText1$$.style.display = "none";
        levelChangeText2$$.style.display = "none";
        this.levelBalls = [];
        if (GAMELEVEL === 2) {
          this.background.img.src ="/public/Imagenes/background/background8.jpeg";
          level2(this.ctx,this.bubbles,this.platforms,this.boxes,this.levelBalls);
        } else if (GAMELEVEL === 3) {
          this.background.img.src ="/public/Imagenes/background/background9.avif";
          level3(this.ctx,this.bubbles,this.platforms,this.stairs,this.boxes,this.healings,this.levelBalls);
          setTimeout(() => {
            addBubble3(this.ctx, this.bubbles);
          }, 10000);
        } else if (GAMELEVEL === 4) {
          this.background.img.src ="/public/Imagenes/background/background10.avif";
          level4( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls);
          setTimeout(() => {
            addBubble4(this.ctx, this.bubbles)
          }, 10000);
        } else if (GAMELEVEL === 5) {
          this.background.img.src ="/public/Imagenes/background/background2.png";
          level5( this.ctx, this.bubbles, this.platforms, this.stairs,  this.healings, this.bars, this.boxes,this.levelBalls);
        } else if (GAMELEVEL === 6) {

        } else if (GAMELEVEL === 7) {
          this.background.img.src ="/public/Imagenes/background/background2.png";
          level7( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes, this.spikes,this.levelBalls, this.stairs);
        } else if (GAMELEVEL === 8) {
        
        } else if (GAMELEVEL === 9) {
          level9( this.ctx, this.bubbles, this.platforms,this.bouncers, this.stairs,  this.healings, this.bars, this.boxes, this.spikes,this.levelBalls);

        }else if (GAMELEVEL === 10) {

        }else if (GAMELEVEL === 11) {
        }
      }, 3000);
    }, 1000);
    this.bubbles = this.flamethrowers = this.machineguns = this.puffBubbles = this.platforms = this.bouncers = this.stairs = this.blasters = this.spikes =this.explosions = this.boxes= []; 
  }

  gameOver() {
    //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.bubbles = this.flamethrowers =this.machineguns =  this.puffBubbles = this.platforms = this.bouncers = this.stairs = this.blasters = this.spikes =  this.explosions = [];
    this.player.bulletArray = this.player.bulletBarArray = this.player.bulletFireArray = [];
    this.player.amountOfFireShoots = this.player.barAmount =0;
    GAMELEVEL = 1;
    this.gameBackgroundMusic.pause();
    this.gameOver1.play();
    this.gameOver2.play();
    this.ctx.save(); // guarda los estilos previos antes de ejecutar los siguientes para que no salgan los estilos estos en todos lados
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "orange";
    this.ctx.fillText("Game Over", 70, this.ctx.canvas.height / 2); // contador de vida
    this.ctx.restore(); //reestablece el estilo al estado principal.
  }
}
