
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);   //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx);   // traemos la clase Background para usarlo
    this.interval = null;  //sirve para pausar el juego
    this.bubbleTick = 0;
    this.gameTime = 0; //cuando el juego se inicia va sumando. Se usa para llevar cuenta del tiempo
    this.bubblePopSound1 = new Audio("../public/sounds/bubblePop1.mp3")//todo --  Sonido paso 1) guardar la ruta del sonido en una variable
    this.bubblePopSound1.volume = 0.3; // todo -- Sonido paso 2) ponerle volumen, auque no es obligatorio
    this.gameOver1 = new Audio("../public/sounds/gameOver1.mp3");
    this.gameOver1.volume = 0.05; //
    this.gameOver2 = new Audio("../public/sounds/gameOverSound.mp3");
    this.gameOver2.volume = 0.2; //
    this.gameBackgroundMusic = new Audio("../public/sounds/backgroundMusic1.mp3");
    this.gameBackgroundMusic.volume = 0.1; //
    this.playerDamageSound1 = new Audio("../public/sounds/playerDamageSound1.mp3");
    this.playerDamageSound1.volume = 0.1; //
    this.bubbleSplash2 = new Audio("../public/sounds/bubbleSplash2.mp3")
    this.bubbleSplash2.volume = 0.1; 
    this.setListeners();  // para que se pueda usar el teclado 
    this.bubbles = [];  // un array que almacena todos los obstáculos que aparecen en la pantalla
    this.flamethrowers = []; // salen nuevas tipos de armas
    this.healings = []; // salen nuevas tipos de armas
    this.puffBubbles = []; // para cuando estalla la burbuja
    this.platforms = []; // plataformas para saltar
    this.bouncers = []; // plataformas que rebotan
    this.stairs = []; // Array para almacenar instancias de la clase Stair
    this.auras = []; // Array para almacenar instancias de la clase Stair
    this.boxes = []; // Array para almacenar instancias de la clase Stair
    // sounds sounds sounds
    this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3") //todo -- paso 1 traer el sonido y almacenarlo en una variable
    this.bubbleBounceSound.volume = 0.1;  //todo -- paso 2, no obligatorio, determinarle volumen de 0 a 1, creo
  }
  
  start() {
    // this.gameBackgroundMusic.play();
    this.interval = setInterval(() => {
      this.clear();  //   limpia el canvas. Sin esta función, nunca dejaría de dibujarse lo anterior y no aparentaría movimiento.
      this.move();  // mueve los objetos movibles
      this.draw();  // dibuja lo que haga falta
      this.checkCollisions(); //Comprueba las colisiones constantemtente
      this.bubbleTick++
      this.gameTime++ //Cada 60 representan 1 segundo de tiempo en el juego
      // Empiezan a aparecer obstáculos y criaturas a medida que pasa cierto tiempo
      if(this.bubbleTick >= Math.floor(Math.random() * 10 + 100)){ //añade obtáculo en algún momento random 
        this.addbubble(); // la función para añadir obstáculo
        this.bubbleTick = 0; //regresa el bubbleTick a 0 para reiniciar la cuenta
      }
      if(GAMELEVEL === 0){
        level1(this.gameTime, this.ctx, this.platforms, this.bouncers, this.stairs, this.flamethrowers, this.healings, this.auras, this.boxes)
      }
    }, 1000 / 60);
  }

  stop() {  //para pausar el juego
    clearInterval(this.interval); 
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.bulletArray = this.player.bulletArray.filter((e) => e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletFireArray = this.player.bulletFireArray.filter((e) => e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletBarArray= this.player.bulletBarArray.filter((e) => e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.bubbles = this.bubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.platforms = this.platforms.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.flamethrowers = this.flamethrowers.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.auras = this.auras.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.boxes = this.boxes.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.healings = this.healings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.puffBubbles = this.puffBubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
  }

  draw() {
    this.background.draw();  //dibuja el background
    this.stairs.forEach((e) => e.draw());
    this.platforms.forEach((e) => e.draw());
    this.bouncers.forEach((e) => e.draw());
    this.player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
    this.puffBubbles.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.bubbles.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.flamethrowers.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.auras.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.boxes.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.healings.forEach((e) => e.draw());  //dibuja cada obstáculo
    if(this.player.life.total <= 0) this.gameOver(); // cuando el player muere se llama a la funcion gameOver()
  }
  move() {
    this.player.move();  //muve al personaje y todo lo que se mueve en la clase de personaje
    this.bubbles.forEach((e) => e.move());  //mueve los obstáculos
    this.platforms.forEach((e) => e.move());  //mueve los obstáculos
    this.bouncers.forEach((e) => e.move());  //mueve los obstáculos
    this.flamethrowers.forEach((e) => e.move());  //mueve los obstáculos
    this.auras.forEach((e) => e.move());  //mueve los obstáculos
    this.boxes.forEach((e) => e.move());  //mueve los obstáculos
    this.healings.forEach((e) => e.move());  //mueve los obstáculos
    this.puffBubbles.forEach((e) => e.move());  //mueve los obstáculos
  }
  setListeners() { //permite hacer keyup y keydown para usar teclado para mover el personaje
    document.addEventListener("keydown", (ev) => {
      this.player.keyDown(ev.keyCode);
    });
    document.addEventListener("keyup", (ev) => {
      this.player.keyUp(ev.keyCode);
    });
  }
  
//funciones o metodos para crear obstaculos y criaturas
addbubble() {  //función para añadir obstáculo
  const bubble = new Bubble(this.ctx)
  if(this.bubbles.length < 2){
    this.bubbles.push(bubble);
  }
}

  checkCollisions() {  //función para comprobar las colisiones

    this.bubbles.forEach((bubble) => { //player con bubble
      if (bubble.collides(this.player) && !this.player.immune) {
        if(!this.player.auraIsActive){
          this.player.loseLife(bubble.damage); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
        }
        this.playerDamageSound1.play();
        this.bubbleSplash2.play();
        bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
      } else return true
    });
    this.stairs.forEach((stair) => { //player con stair
      if (stair.collidesTop(this.player)) {
        this.player.vy = 0;
        this.player.y = stair.y - this.player.h
        W = 0;
        this.player.g = 0.2;
      }
      if(stair.collidesSides(this.player)){
        this.player.vy = 0;
        this.player.g = 0.2;
        setTimeout(() => {
          W = 0;
        }, 200);
      }
      if (stair.collides(this.player)) {
        W = 87;
      } else{return true;
      }
    });

    //bubbles...bubbles...bubbles...bubbles...bubbles...
    //bubbles...bubbles...bubbles...bubbles...bubbles...
    this.bubbles.forEach((bubble) => {    //  bubble con bullet
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if(bullet.collides(bubble)){
          bubblePuff(bubble, this.puffBubbles, this.bubbles, this.ctx)
          this.bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          return false;
        } else return true;
      })
    })
    this.bubbles.forEach((bubble) => { //bubble con fire
      this.player.bulletFireArray.forEach((bullet) => {
        if(bullet.collides(bubble)){
          bubble.w -= bullet.damage;
          bubble.h -= bullet.damage;
          if(bubble.w <= bubble.explodingSize*2) {
          const elx = bubble.x;
          const ely = bubble.y;
          const puffBubble = new BubblePuff(this.ctx, elx, ely, bubble.w, bubble.h)
          this.puffBubbles.push(puffBubble)
          bubble.x = -100;
        }
        } else return true;
      })
    })
    this.bubbles.forEach((bubble) => {  //bubble con platform
      this.platforms.forEach((platform) => {
        if(platform.collides(bubble)){
          bubbleBounce(bubble, platform)
        } else return true;
      })
    })
    this.bubbles.forEach((bubble) => {//bubble con bouncer
      this.bouncers.forEach((bouncer) => {
        if (bouncer.collides(bubble)) {
          bubbleBounce(bubble, bouncer)
        } else return true;
      });
    });



//weaponBar..weaponBar..weaponBar..weaponBar..
//weaponBar..weaponBar..weaponBar..weaponBar..


      this.player.bulletBarArray.forEach((bar =>{
          this.platforms.forEach((platform) => {
            if(bar.collides(platform)){
                  bar.solidState = true;
                  bar.y = platform.y+ platform.h;
                  bar.vy = 0;
                  bar.img.src =  "../public/Imagenes/weaponBarSolid.png";
            }
          })
      }))
      this.player.bulletBarArray.forEach((bar =>{
          this.bouncers.forEach((bouncer) => {
            if(bar.collides(bouncer)){
                  bar.solidState = true;
                  bar.y = bouncer.y+ bouncer.h;
                  bar.vy = 0;
                  bar.img.src =  "../public/Imagenes/weaponBarSolid.png";
            }
          })
      }))
        
    this.bubbles.forEach((bubble) => {    //  bulletBar con Bubble
      this.player.bulletBarArray.forEach((bullet) => {
        if(bullet.collides(bubble)){
          bullet.life -= 1;
          if(bullet.life<=0){
            bullet.y = -300;
          }
          bubblePuff(bubble, this.puffBubbles, this.bubbles, this.ctx)
          this.bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          return false;
        } else return true;
      })
    })




// colisiones con Platform
// colisiones con Platform
    this.platforms.forEach((platform) => {  // platform con player
      if (platform.collides(this.player)) {
        if(platform.isBrakable){
          if (this.player.y <= platform.y && this.player.x <= platform.x + platform.w  && this.player.x + this.player.w > platform.x) {
            this.player.y = platform.y - this.player.h ;
            this.player.vy = 0;
            platform.braking--;
            ALT = 16;
            platform.goingToBreak = true;
          }
        } else {
          this.player.vy = 0;
          if (this.player.y <= platform.y && this.player.x <= platform.x + platform.w  && this.player.x + this.player.w > platform.x) {
            this.player.y = platform.y - this.player.h ;
            ALT = 16;
          }
          if (this.player.y + this.player.h >= platform.y + platform.h) { //colisión por la parte inferior de la plataforma
            this.player.vy = 0;
          }
          if (this.player.x >= platform.x + platform.w - 6 || this.player.x <= platform.x) { //colisión por los lados de la plataforma
            this.player.vy = 0;
            this.player.g = 0.2
          }
        }
      }
    })

    this.platforms.forEach((platform) => { //platform con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if(bullet.collides(platform)){
          basicBulletBounce(bullet, platform)
          if(platform.isSolid){
            const newColor = platform.calculateNewColor();
            platform.color = newColor;
            if( platform.life <= 0){
              platform.x = -200;
            }
          }
          return false;
        } else return true;
      })
    })


    //colisiones con bouncers

    this.bouncers.forEach((bouncer) => { 
      if (bouncer.collides(this.player)) {
        this.player.vy = 0;
        if (this.player.y <= bouncer.y && this.player.x <= bouncer.x + bouncer.w  && this.player.x + this.player.w > bouncer.x - 30) {
          this.player.vy = -4
          this.player.y = bouncer.y - this.player.h ;
        }
        if (this.player.y + this.player.h >= bouncer.y + bouncer.h) { //colisión por la parte inferior de la plataforma
          this.player.vy = 0;
        }
        if (this.player.x >= bouncer.x + bouncer.w - 6 ) { //colisión por la derecha
          this.player.g = 0.2;
          this.player.vx = 2;
          setTimeout(() => {
            this.player.vx = 0;
          }, 500);
        }
        if (this.player.x -1  <= bouncer.x ) { //colisión por la izquierda
          this.player.g = 0.2;
          this.player.vx = -2;
          setTimeout(() => {
            this.player.vx = 0;
          }, 500);
        }
      }
    })

    
// items que mejoran el personaje y box
    this.flamethrowers.forEach((weapon) => {   // aditionalweapon  choca con el personaje
        if (weapon.collides(this.player)) {
          N = 78;
          this.player.amountOfFireShoots += 5; // sumamos 5 balas de fuego 
          if(this.player.amountOfFireShoots >=90) { //para que el charger que se dibuja haga el semicírculo
            this.player.amountOfFireShoots =90;
          }
          weapon.x = - 100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
        } else return true
      });
    this.healings.forEach((healing) => {   // aditionalhealing  choca con el personaje
        if (healing.collides(this.player)) {
          this.player.gainLife()
          healing.x = - 100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
        } else return true
      });
    this.auras.forEach((aura) => {   // aditionalaura  choca con el personaje
        if (aura.collides(this.player)) {
          this.player.auraIsActive = true;
          this.player.auraTime+= 5000;
          setTimeout(() => {
            this.player.auraIsActive = false;
          }, this.player.auraTime);
          aura.x = - 100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
        } else return true
      });

      this.boxes.forEach((box) => {    //  bubble con bullet
        this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
          if(bullet.collides(box)){
            box.boxHit();
            if(box.boxImg.frame >8){
                randomLootFromBox(this.ctx, this.flamethrowers, this.healings, this.auras, box.x, box.y)
            }
            const puffBubble = new BubblePuff(ctx, box.x, box.y + box.h/2, box.w, box.h)
            this.puffBubbles.push(puffBubble)
            return false;
          } else return true;
        })
      })
  }

  gameOver() {  //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.bubbles = [];
    this.flamethrowers = []
    this.puffBubbles = [];
    this.platforms = [];
    this.bouncers = [];
    this.stairs = [];
    this.gameBackgroundMusic.pause()
    this.gameOver1.play()
    this.gameOver2.play()
    this.ctx.save(); // guarda los estilos previos antes de ejecutar los siguientes para que no salgan los estilos estos en todos lados
    this.ctx.font = "30px Arial"
    this.ctx.fillStyle = "orange";
    this.ctx.fillText("Game Over", 70, this.ctx.canvas.height / 2); // contador de vida 
    this.ctx.restore(); //reestablece el estilo al estado principal.
  }
}