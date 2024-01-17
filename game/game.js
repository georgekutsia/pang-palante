
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);   //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx);   // traemos la clase Background para usarlo
    this.interval = null;  //sirve para pausar el juego
    this.gameTime = 0; //cuando el juego se inicia va sumando. Se usa para llevar cuenta del tiempo
    this.bubbleTick = 0;
    this.aditionalWeaponTick = 0;
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
    this.aditionalWeapons = []; // salen nuevas tipos de armas
    this.puffBubbles = []; // para cuando estalla la burbuja
    this.platforms = []; // plataformas para saltar
    this.bouncers = []; // plataformas que rebotan
    this.stairs = []; // Array para almacenar instancias de la clase Stair


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
      this.gameTime++ //Cada 60 representan 1 segundo de tiempo en el juego
      this.bubbleTick++;// Se inicia la cuenta de los obstáculos
      this.aditionalWeaponTick++;// Se inicia la cuenta de los obstáculos
      // Empiezan a aparecer obstáculos y criaturas a medida que pasa cierto tiempo
      if(this.bubbleTick >= Math.floor(Math.random() * 10 + 100)){ //añade obtáculo en algún momento random 
        this.addbubble(); // la función para añadir obstáculo
        this.bubbleTick = 0; //regresa el bubbleTick a 0 para reiniciar la cuenta
      }
      if(this.aditionalWeaponTick >= 200){ //añade obtáculo en algún momento random 
        this.aditionalWeapon(); // la función para añadir obstáculo
        this.aditionalWeaponTick = 0; //regresa el bubbleTick a 0 para reiniciar la cuenta
      }
    }, 1000 / 60);
    this.addStair(); 
    this.addPlatforms();
    this.addBouncer();
  }

  stop() {  //para pausar el juego
    clearInterval(this.interval); 
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.bulletArray = this.player.bulletArray.filter((e) => e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.player.bulletFireArray = this.player.bulletFireArray.filter((e) => e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
    this.bubbles = this.bubbles.filter((bubble) => bubble.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.aditionalWeapons = this.aditionalWeapons.filter((flamethrower) => flamethrower.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
    this.puffBubbles = this.puffBubbles.filter((puff) => puff.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
  }

  draw() {
    this.background.draw();  //dibuja el background
    this.stairs.forEach((e) => e.draw());
    this.platforms.forEach((e) => e.draw());
    this.bouncers.forEach((e) => e.draw());
    this.player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
    this.puffBubbles.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.bubbles.forEach((e) => e.draw());  //dibuja cada obstáculo
    this.aditionalWeapons.forEach((e) => e.draw());  //dibuja cada obstáculo
    if(this.player.life <= 0) this.gameOver(); // cuando el player muere se llama a la funcion gameOver()

  }
  move() {
    this.player.move();  //muve al personaje y todo lo que se mueve en la clase de personaje
    this.bubbles.forEach((e) => e.move());  //mueve los obstáculos
    this.platforms.forEach((e) => e.move());  //mueve los obstáculos
    this.bouncers.forEach((e) => e.move());  //mueve los obstáculos
    this.aditionalWeapons.forEach((e) => e.move());  //mueve los obstáculos
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
  // const bubble = new bubble(this.ctx, 10, "../public/img/waterball.png", 120);// si quieres cambiarle el dibujo o especificar a qué altura sale
  const bubble = new Bubble(this.ctx)
  if(this.bubbles.length < 4){
    this.bubbles.push(bubble);
  }
}

aditionalWeapon() {  //función para añadir obstáculo
  const flamethrower = new Flamethrower(this.ctx)
  this.aditionalWeapons.push(flamethrower)
}

  addStair() {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
    //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
    // const stair1 = new Stair(this.ctx, 1, this.ctx.canvas.height - 40,  30, 40);
    // const stair2 = new Stair(this.ctx, 200, this.ctx.canvas.height - 100,  20, 60);
    // this.stairs.push(stair1, stair2);
  }

    addPlatforms(){                              // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
      const platform1 = new Platform(this.ctx, 10, 45, 25, 5)
      const platform2 = new Platform(this.ctx, 40, 45, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png" )
      const platform3 = new Platform(this.ctx, 80, 45, 45, 5 , "../public/Imagenes/obstacles/platformSolid1.png" )
      const platform4 = new Platform(this.ctx, 140, 45, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png" )
      this.platforms.push(platform1, platform2, platform3, platform4)
      
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total ea 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura
    }

    addBouncer(){
      // const bouncer1 = new Bouncer(this.ctx, 30, 70, 20, 80)
      // const bouncer2 = new Bouncer(this.ctx, 160, 70, 20, 80)
      // this.bouncers.push(bouncer1, bouncer2)
    }

  checkCollisions() {  //función para comprobar las colisiones
   // bubble  choca con el personaje
    this.bubbles.forEach((bubble) => {
      if (bubble.collides(this.player)) {
        this.player.life -= bubble.damage; //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
        this.playerDamageSound1.play();
        this.bubbleSplash2.play();
        bubble.vy = -3.5; // rebota encima del jugador haciéndole daño
      } else return true
    });

    
   // aditionalweapon  choca con el personaje
    this.aditionalWeapons.forEach((weapon) => {
      if (weapon.collides(this.player)) {
        N = 78;
        this.player.amountOfFireShoots += 5; // sumamos 5 balas de fuego 
        weapon.x = - 100; // situa fuera del canvas la burbuja que colisiona con el player y luego isVisible la elimina del array
      } else return true
    });


    //  bubble choca con bullet
    this.bubbles.forEach((bubble) => {
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if(bullet.collides(bubble)){
          const elx = bubble.x;
          const ely = bubble.y;
          bubble.x = -100
          const puffBubble = new BubblePuff(this.ctx, elx, ely, bubble.w, bubble.h)
          this.puffBubbles.push(puffBubble)
          const smallBubble1 = new Bubble(this.ctx, -0.5, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.03, bubble.damage / 2 )// al explotar una burbuja, crea otra en su lugar, usando su ubicación y dimensiones para hacerla más pequeña
          const smallBubble2 = new Bubble(this.ctx, 0.5, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.03, bubble.damage / 2 )
          this.bubbles.push(smallBubble1, smallBubble2)
          this.bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          return false;
        } else return true;
      })
    })
    //  bubble choca con bulletFire
    this.bubbles.forEach((bubble) => {
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


    // colisiones con la escalera
    this.stairs.forEach((stair) => {
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


    // colisiones con Platform
    // colisiones con Platform
    this.platforms.forEach((platform) => {  // platform con player
      if (platform.collides(this.player)) {
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
    })

    this.platforms.forEach((platform) => { //platform con bullets normales
      this.player.bulletArray.forEach((bullet) => {
        if(bullet.collides(platform)){
          bullet.vy = 3;
          bullet.vx = bullet.direction;
          const newColor = platform.calculateNewColor();
          platform.color = newColor;
         if( platform.life <= 0){
          platform.x = -200;
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
  }

  gameOver() {  //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.bubbles = [];
    this.aditionalWeapons = []
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