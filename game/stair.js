class Stair {
  constructor(ctx, x,  y, w, h, obstacleImg) {
    this.ctx = ctx; // Contexto del canvas
    this.x = x || 100; // Posición horizontal (coordenada x), valor predeterminado o especificado
    this.w = w || this.ctx.canvas.width / 13; // Ancho de la escalera, valor predeterminado o especificado
    this.h = h || this.ctx.canvas.width / 7; // Altura de la escalera, valor predeterminado o especificado
    this.y = y || this.ctx.canvas.height - this.h; // Posición vertical (coordenada y), valor predeterminado o especificado
    this.img = new Image(); // Imagen asociada a la escalera
    this.img.src = obstacleImg || "../public/Imagenes/obstacles/stair1.png"; // Ruta de la imagen de la escalera

    // ** Se ha comentado la parte relacionada con el sonido
    // this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3");
    // this.bubbleBounceSound.volume = 0.3;
  }

  draw() {
    // Dibujar la escalera en el canvas utilizando el contexto y la imagen
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    // Método para actualizar la posición de la escalera en función de su velocidad
    this.x += this.vx;
    this.y += this.vy;
  }

  isVisible() {
    // Método para verificar si la escalera es visible en el canvas (puedes ajustar según tus necesidades)
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }

  collides(objetivo) {
    // Método para verificar colisiones con otro objeto (puedes ajustar según tus necesidades)
    const colX = this.x + 7 <= objetivo.x + objetivo.w && this.x + this.w - 7 > objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y  < objetivo.y + objetivo.h;
    return colX && colY;
  }
  collidesTop(objetivo) { //colisiona con la parte superior de la escalera para dejar el jugador fijo arriba y activar la gravedad si se sale
    const colX = this.x + 7 <= objetivo.x + objetivo.w && this.x + this.w - 7 >= objetivo.x;
    const colY = this.y  + 5> objetivo.y + objetivo.h && this.y  < objetivo.y + objetivo.h;
    return colX && colY
  }
  collidesSides(objetivo) { //colisiona con los lados de la escalera para desactivar W y activar gravedad
    const colX = this.x -9 <= objetivo.x  &&  this.x - 2 >= objetivo.x ;
    const colY = this.x + this.w - 3  <= objetivo.x  &&  this.x + this.w >= objetivo.x;
    return colX || colY
  }
}