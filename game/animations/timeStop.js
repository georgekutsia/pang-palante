class TimeStop {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width - 80;
    this.y = 10;
    this.w = this.ctx.canvas.width / 20;
    this.h = this.ctx.canvas.width / 20;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/timeStopImg.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 12,
      0,
      this.img.width / 12,
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
    if (this.tick > 0.5) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 11) {
      this.img.frame = 0;
    }
    // Llamada a la función detectPlaceToMove y actualización de vx y vy
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
