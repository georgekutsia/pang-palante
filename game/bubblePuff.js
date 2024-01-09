class BubblePuff {
  constructor(ctx,x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "../public/Imagenes/puffBubble.png";
    this.img.frame = 0;
    this.w = this.ctx.canvas.width/ 5;
    this.h = this.ctx.canvas.width/ 5;
    this.puffTick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 4,
      0,
      this.img.width / 4,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.puffTick++
    if(this.puffTick >= 3){
      this.img.frame++
      this.puffTick = 0
    }
    if(this.img.frame > 3){
      this.img.frame = 0;
      this.x = -200 
    }

  }

  isVisible() {
    return  this.x > -2 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
}
