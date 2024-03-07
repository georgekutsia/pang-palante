class HealingHeart {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x || 200;
    this.y = 5;
    this.w = this.ctx.canvas.width/35;
    this.h =  this.ctx.canvas.width/50;
    this.vx = 0;
    this.vy =  0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/heartHealing.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;

  }

  draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.frame * this.img.width) / 6,
        0,
        this.img.width / 6,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
        );
  }

  move() {
    this.tick++;
    if (this.tick > 4) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 5) {
      this.dispose = false;
    }
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
