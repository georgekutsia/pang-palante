class Points {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 10;
    this.y = 55;
    this.w = this.ctx.canvas.width/45;
    this.h = this.ctx.canvas.width/45;
    this.img = new Image();
    this.img.src = "../public/Imagenes/stats/coin.png";
    this.imgHalf = new Image();
    this.imgHalf.src = "../public/Imagenes/stats/heartHalf.png";
  }

  draw() {
    this.ctx.save();
    this.ctx.font = "25px Arial"
    this.ctx.fillStyle = "gold";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.fillText(`x ${coins}`, this.x + 35, this.y + 25)
    this.ctx.restore();
  }

addOnePoint(){
  this.coins++;
}
  isVisible() {
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }
}
