class ShowSpecialItem {
  constructor(ctx, x, y, w, h) {
    this.ctx = ctx;
    this.x = x || this.ctx.canvas.width - 80;
    this.y = y || 10;
    this.w = w || this.ctx.canvas.width / 20;
    this.h = h || this.ctx.canvas.width / 20;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/showSpecialItem2.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 20,
      0,
      this.img.width / 20,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    if (this.tick > 5.5) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 19) {
      this.img.frame = 0;
    }
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
