class Weapon1 {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.vx = 1;
    this.img = new Image();
    this.img.src = "../public/img/waterspin.png";
    this.img.frame = 0;
    this.w = this.ctx.canvas.width/ 20;
    this.h = this.ctx.canvas.width/ 20;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.width) / 8,
      this.img.width / 8,
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
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.x < this.ctx.canvas.width;
  }
}
