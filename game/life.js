class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 5;
    this.y = 0;
    this.w = this.ctx.canvas.width/35;
    this.h = this.ctx.canvas.width/35;
    this.total = 8; // Puedes cambiar esto a cualquier número, entero o decimal
    this.img = new Image();
    this.img.src = "../public/Imagenes/stats/heart.png";
    this.imgHalf = new Image();
    this.imgHalf.src = "../public/Imagenes/stats/heartHalf.png";
  }

  draw() {
    this.ctx.save();
    this.ctx.drawImage(this.imgHalf, this.x, this.y, this.w, this.h);
      let place
    for (let i = 0; i < Math.floor(this.total); i++) {
      place = this.x + 30*i
      this.ctx.drawImage(this.img, place, this.y, this.w, this.h);
    }
    if (this.total % 1 !== 0) {
      this.ctx.drawImage(this.imgHalf, place + 30, this.y, this.w, this.h);
    }
    this.ctx.restore();
    if(this.total >= 10){
      this.total = 10
    }
  }

  isVisible() {
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }
}
