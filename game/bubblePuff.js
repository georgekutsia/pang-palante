class BubblePuff {
  constructor(ctx, x, y, w, h, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = img || "../public/Imagenes/puffBubble1.png";
    this.img.frame = 0;
    this.w = w ;
    this.h = h;
    this.puffTick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 5,
      0,
      this.img.width / 5,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.puffTick++
    if(this.puffTick >= 2){
      this.img.frame++
      this.puffTick = 0
    }
    if(this.img.frame > 4){
      this.img.frame = 0;
      this.x = -200 
    }

  }

  isVisible() {
    return  this.x > -2 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
}
