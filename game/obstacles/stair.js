class Stair {
  constructor(ctx, x,  y, w, h, obstacleImg) {
    this.ctx = ctx; // Contexto del canvas
    this.x = x || 0; // Posición horizontal (coordenada x), valor predeterminado o especificado
    this.w = w || this.ctx.canvas.width / 13; // Ancho de la escalera, valor predeterminado o especificado
    this.h = h || this.ctx.canvas.width / 7; // Altura de la escalera, valor predeterminado o especificado
    this.y = y || this.ctx.canvas.height - this.h; // Posición vertical (coordenada y), valor predeterminado o especificado
    this.img = new Image(); // Imagen asociada a la escalera
    this.img.src = obstacleImg || "/public/Imagenes/obstacles/stair1.png"; // Ruta de la imagen de la escalera

  }

  draw() {
    // Dibujar la escalera en el canvas utilizando el contexto y la imagen
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    // Método para actualizar la posición de la escalera en función de su velocidad

  }

  isVisible() {
    // Método para verificar si la escalera es visible en el canvas (puedes ajustar según tus necesidades)
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }

  collides(objetivo) {
    // Método para verificar colisiones con otro objeto (puedes ajustar según tus necesidades)
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x ;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  collidesTop(objetivo) { //colisiona con la parte superior de la escalera para dejar el jugador fijo arriba y activar la gravedad si se sale
    const colX = this.x  <= objetivo.x && this.x + this.w  >= objetivo.x ;
    const colY = this.y + 25 > objetivo.y + objetivo.h && this.y  < objetivo.y + objetivo.h;
    return colX && colY
  }
  collidesSides(objetivo) { //colisiona con los lados de la escalera para desactivar W y activar gravedad
    const colX = this.x -9 <= objetivo.x  &&  this.x - 2 >= objetivo.x ;
    const colY = this.x + this.w - 3  <= objetivo.x  &&  this.x + this.w >= objetivo.x;
    return colX || colY 
  }
  collidesUnder(objetivo) { 
    const colZ = this. y + this.h - 3 <= objetivo.y && this.y + this.h >= objetivo.y //todo colision con la parte inferior
      return colZ
  }
}