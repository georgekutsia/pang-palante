class CristalBall {
  constructor(ctx, x, y, vx, vy ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; ;
    this.y = y ||  Math.random() * this.ctx.canvas.height - 40 ;
    this.w = this.ctx.canvas.width / 20;
    this.h = this.ctx.canvas.width / 20;
    this.tick = 0
    this.vx = vx || 1.3;
    this.vy = vy || 1.3;
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/cristalBall.png";
    this.img.frame = 0;
    this.tick = 0;

    
  }

  draw() {
    this.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++
    if(this.tick >= 50){
      this.vy = this.vy * -1
      this.tick = 0;
    }
    this.y += this.vy;
    this.x += this.vx;
    if(this.x < -30 || this.x >= CTXW + 20){
      this.dispose = false;
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
