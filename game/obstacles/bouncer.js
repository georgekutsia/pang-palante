class Bouncer { 
  constructor(ctx, x,  y, w, h, vx, vy, obstacleImg) {
    this.ctx = ctx; // Contexto del canvas
    this.x = x || 100; // Posición horizontal (coordenada x), valor predeterminado o especificado
    this.w = w || this.ctx.canvas.width / 13; // Ancho de la escalera, valor predeterminado o especificado
    this.h = h || this.ctx.canvas.width / 40; // Altura de la escalera, valor predeterminado o especificado
    this.y = y || this.ctx.canvas.height - this.h - 20; // Posición vertical (coordenada y), valor predeterminado o especificado
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.img = new Image(); // Imagen asociada a la escalera
    this.img.src = obstacleImg || "/public/Imagenes/obstacles/platfomJump3.png"; // Ruta de la imagen de la escalera

  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

  }

  isVisible() {
    return this.x > -20 && this.x <= this.ctx.canvas.width + 30;
  }

  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y  < objetivo.y + objetivo.h;
    return colX && colY;
  }

}