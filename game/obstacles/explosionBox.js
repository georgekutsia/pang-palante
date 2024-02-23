class ExplosionBox { 
  constructor(ctx, x,  y, w, h, obstacleImg) {
    this.ctx = ctx; // Contexto del canvas
    this.x = x || 200; // Posición horizontal (coordenada x), valor predeterminado o especificado
    this.y = y || 100; // Posición vertical (coordenada y), valor predeterminado o especificado
    this.w = w || 60; // Ancho de la escalera, valor predeterminado o especificado
    this.h = h || 60; // Altura de la escalera, valor predeterminado o especificado
    this.img = new Image(); // Imagen asociada a la escalera
    this.img.src = obstacleImg || "../../public/Imagenes/obstacles/cajaRota1.png"; // Ruta de la imagen de la escalera
    this.imgBox = new Image(); // Imagen asociada a la escalera
    this.imgBox.src = "../../public/Imagenes/obstacles/box.png"
    this.img.frameX = 0;
    this.img.frameY = 0;
    this.imgTick = 0;
    this.damage = 0.25;
    this.exploding = false;
  }

  draw() {
    // Dibujar la escalera en el canvas utilizando el contexto y la imagen
    if(!this.exploding){
      this.ctx.drawImage(this.imgBox, this.x, this.y, this.w, this.h)
    }
    if(this.exploding){
      this.ctx.drawImage(
        this.img,
        (this.img.frameX * this.img.width) / 4,
        (this.img.frameY * this.img.height) / 3,
        this.img.width / 4,
        this.img.height /3,
        this.x,
        this.y,
        this.w,
        this.h
        );
    }

  }

  move() {
    if(this.exploding){
    this.imgTick++
    if(this.imgTick > 10){
      this.img.frameX++
      this.imgTick = 0;
    }
    if(this.img.frameX > 3){
      this.img.frameY++
      this.img.frameX = 0;
    }
  }}

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