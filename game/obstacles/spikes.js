class Spikes { 
  constructor(ctx, x, y, w, h, isMoving, vx,  obstacleImg) {
    this.ctx = ctx; // Contexto del canvas
    this.x = x || 100; // Posición horizontal (coordenada x), valor predeterminado o especificado
    this.w = w || this.ctx.canvas.width / 13; // Ancho de la escalera, valor predeterminado o especificado
    this.h = h || this.ctx.canvas.width / 22; // Altura de la escalera, valor predeterminado o especificado
    this.y = y || this.ctx.canvas.height - this.h - 20; // Posición vertical (coordenada y), valor predeterminado o especificado
    this.img = new Image(); // Imagen asociada a la escalera
    this.img.src = obstacleImg || "/public/Imagenes/obstacles/spikes5.png"; // Ruta de la imagen de la escalera
    this.img.frame = 0;
    this.imgTick = 0;
    this.damage = 0.25;
    this.active = false;
    this.isMoving = isMoving || false;
    this.vx = vx || 0
  }

  draw() {
    // Dibujar la escalera en el canvas utilizando el contexto y la imagen
      this.ctx.drawImage(
        this.img,
        (this.img.frame * this.img.width) / 15,
        0,
        this.img.width / 15,
        this.img.height ,
        this.x,
        this.y,
        this.w,
        this.h
        );
  }

  move() {
    this.x += this.vx;
    if(this.isMoving){
      if(this.x + this.w >= CTXW){
        this.vx = this.vx * -1;
      } else if(this.x <= 2){
        this.vx = this.vx * -1;
      }
    }
    if(this.active){
    this.imgTick++
    if(this.imgTick > 7){
      this.img.frame++
      this.imgTick = 0;
    }
    if(this.img.frame > 12){
      this.img.frame = 5;
    }
  }
  }

  isVisible() {
    // Método para verificar si la escalera es visible en el canvas (puedes ajustar según tus necesidades)
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }

  collides(objetivo) {
    // Método para verificar colisiones con otro objeto (puedes ajustar según tus necesidades)
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y  < objetivo.y + objetivo.h;
    return colX && colY;
  }

}