class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "/public/Imagenes/background/background1.jpg";
    this.vx = -0.3;

  }

  draw() {
    if(!finalBoss){
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } else{
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      this.ctx.drawImage(this.img, this.x + this.w-4, this.y, this.w, this.h);
    }
  }
  move() {
    if(miniBoss1){
    this.img.src = "/public/Imagenes/background/backgroundBoss1.jpeg";
      this.x += this.vx;
      if (this.x + this.w <= 0) {
        this.x = 0;
      }
    }
  }
}
