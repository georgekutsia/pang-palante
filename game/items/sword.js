class Sword {
  constructor(ctx, x, y ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; ;
    this.y = y ||  Math.random() * this.ctx.canvas.height - 40 ;
    this.w = this.ctx.canvas.width / 20;
    this.h = this.ctx.canvas.width / 16;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0.05;
    this.dispose = true;
    this.auraImg = new Image();
    this.auraImg.src = "/public/Imagenes/swordShine1.png";
    this.auraImg.frame = 0;
    this.imgTick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.auraImg,
      (this.auraImg.frame * this.auraImg.width) / 6,
      0,
      this.auraImg.width / 6,
      this.auraImg.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.imgTick++
    if(this.imgTick > 15){
      this.auraImg.frame++
      this.imgTick = 0;
    }
    if(this.auraImg.frame > 5){
      this.auraImg.frame = 0;
    }
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.vy = 0; 
      this.g = 0;
    }
  }
  isVisible() {
    return this.dispose;
  }
  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y && this.y < aura.y + aura.h;
    return colX && colY;
  }
}
