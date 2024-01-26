class Points {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 5;
    this.y = 10;
    this.w = 10;
    this.h = 10;
    this.totalCoins = 3; // Puedes cambiar esto a cualquier número, entero o decimal
    this.img = new Image();
    this.img.src = "../public/Imagenes/stats/coin.png";
    this.imgHalf = new Image();
    this.imgHalf.src = "../public/Imagenes/stats/heartHalf.png";
  }

  draw() {
    this.ctx.save();
    this.ctx.font = "10px Arial"
    this.ctx.fillStyle = "gold";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.fillText(`x ${totalCoins}`,this.x + 12, this.y +8)
    this.ctx.restore();
  }
move(){

}
addOnePoint(){
  this.totalCoins++;
}
  isVisible() {
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }
}
