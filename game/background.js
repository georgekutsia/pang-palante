class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "../public/Imagenes/background1.png";
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
// class BackgroundMove {
//   constructor(ctx) {
//     this.ctx = ctx;
//     this.x = 10;
//     this.y = 0;
//     this.vx = -0.3;

//     this.w = this.ctx.canvas.width;
//     this.h = this.ctx.canvas.height;
//     this.img = new Image();
//     this.img.src = "../public/img/back-canvas.jpeg";
//   }
//   draw() {
//     this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//     this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
//   }
//   move() {
//     this.x += this.vx;
//     if (this.x + this.w <= 0) {
//       this.x = 0;
//     }
//   }
// }
