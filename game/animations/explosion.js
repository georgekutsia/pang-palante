class Explosion {
  constructor(ctx, x, y, w, h, vx, vy, obstacleImg) {
    this.ctx = ctx;
    this.x = x || 200;
    this.y = y || 100;
    this.w = w || this.ctx.canvas.width/15;
    this.h = h || this.ctx.canvas.width/15;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.img = new Image();
    this.img.src = obstacleImg || "/public/Imagenes/explosion1.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;

  }

  draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.frame * this.img.width) / 11,
        0,
        this.img.width / 11,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
        );
        this.explosion1 = false;
  }

  move() {
    this.x += this.vx
    this.y += this.vy
    this.tick++;
    if (this.tick > 4) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 10) {
      this.dispose = false;
    }
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX =
      this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY =
      this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
