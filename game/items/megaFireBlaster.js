class MegaFireBlaster {
  constructor(ctx, x, y ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; ;
    this.y = y ||  Math.random() * this.ctx.canvas.height - 40 ;
    this.w = this.ctx.canvas.width / 18;
    this.h = this.ctx.canvas.width / 16;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0.03;
    this.dispose = false;
    this.blasterImg = new Image();
    this.blasterImg.src = "/public/Imagenes/fireMegaBlasterItem1.png";
    this.blasterImg.frame = 0;
    this.imgTick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.blasterImg,
      (this.blasterImg.frame * this.blasterImg.width) / 3,
      0,
      this.blasterImg.width / 3,
      this.blasterImg.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
    
  }
  move() {
    this.imgTick++
    if(this.imgTick > 14){
      this.blasterImg.frame++
      this.imgTick = 0;
    }
    if(this.blasterImg.frame > 2){
      this.blasterImg.frame = 0;
    }
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.vy = 0; 
      this.g = 0;
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y && this.y < aura.y + aura.h;
    return colX && colY;
  }
}
