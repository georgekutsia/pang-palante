class Aura {
  constructor(ctx, x, y ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; ;
    this.y = y ||  Math.random() * this.ctx.canvas.height - 40 ;
    this.w = this.ctx.canvas.width / 30;
    this.h = this.ctx.canvas.width / 30;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0.3;
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/auraItem2.png";
    this.img.frame = 0;
    this.tick = 0;

    
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 8,
      0,
      this.img.width / 8,
      this.img.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );

  }
  move() {
    this.tick++
    if(this.tick > 4){
      this.img.frame++
      this.tick = 0;
    }
    if(this.img.frame > 7){
      this.img.frame = 0;
    }

    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.vy = 0; 
      this.g = 0;
      if(finalBoss){
        this.vx = -1.3
      }
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
