
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);   //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx);   // traemos la clase Background para usarlo
    this.bubbles = [];  // un array que almacena todos los obstáculos que aparecen en la pantalla
    this.interval = null;  //sirve para pausar el juego
    this.gameTime = 0; //cuando el juego se inicia va sumando. Se usa para lleavar cuenta del tiempo
    this.bubbleTick = 0;
    this.setListeners();  // para que se pueda usar el teclado 
  }
  
  start() {
    this.interval = setInterval(() => {
      this.clear();  //   limpia el canvas. Sin esta función, nunca dejaría de dibujarse lo anterior y no aparentaría movimiento.
      this.move();  // mueve los objetos movibles
      this.draw();  // dibuja lo que haga falta
      this.checkCollisions(); //Comprueba las colisiones constantemtente
      this.gameTime++ //Cada 60 representan 1 segundo de tiempo en el juego
      this.bubbleTick++;// Se inicia la cuenta de los obstáculos
      // Empiezan a aparecer obstáculos y criaturas a medida que pasa cierto tiempo

      if(this.bubbleTick >= Math.floor(Math.random() * 10 + 100)){ //añade obtáculo en algún momento random 
        this.addbubble1(); // la función para añadir obstáculo
        this.bubbleTick = 0; //regresa el bubbleTick a 0 para reiniciar la cuenta
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
    this.bubbles = this.bubbles.filter((bubble) => bubble.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array

  }

  draw() {
    this.background.draw();  //dibuja el background
    this.player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
    this.bubbles.forEach((e) => e.draw());  //dibuja cada obstáculo
  }
  move() {
    this.player.move();  //muve al personaje y todo lo que se mueve en la clase de personaje
    this.bubbles.forEach((e) => e.move());  //mueve los obstáculos
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
addbubble1() {  //función para añadir obstáculo
  // const bubble = new bubble(this.ctx, 10, "../public/img/waterball.png", 120);// si quieres cambiarle el dibujo o especificar a qué altura sale
  const bubble = new Bubble(this.ctx, 10)
  this.bubbles.push(bubble);
}

  checkCollisions() {  //función para comprobar las colisiones
   // obstaculo  choca con el personaje
    this.bubbles.forEach((bubble) => {
      if (bubble.collides(this.player)) {
      } else return true
    });


    //  obstáculo choca con bullet
    this.bubbles.forEach((bubble) => {
      this.player.bulletArray = this.player.bulletArray.filter((bullet) => {
        if(bullet.collides(bubble)){
        bubble.x = -100;
        return false;
        } else return true;
      })
    })
  }

  gameOver() {  //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.bubble = [];
  }
}
