class ElectricShock {
  constructor(ctx, x, y, w, h, img ) {
    this.ctx = ctx;
    this.x = x || 200;
    this.y = y || 100;
    this.w = w || this.ctx.canvas.width/15;
    this.h = h || this.ctx.canvas.width/15;
    this.vx = miniBossVx;
    this.vy = miniBossVy;
    this.img = new Image();
    this.img.src =  img || "/public/Imagenes/electricShock1.png"
    this.img.frameX = 0;
    this.img.frameY = 0;
    this.imgTick = 0;
    this.tick = 0;
    this.dispose = true;
  }

  draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.frameX * this.img.width) / 5,
        (this.img.frameY * this.img.height) / 2,
        this.img.width / 5,
        this.img.height / 2,
        this.x ,
        this.y,
        this.w,
        this.h
        );
  }

  move() {
    this.x += miniBossVx
    this.y += miniBossVy
    this.imgTick++;
    if(this.imgTick > 3){
      this.img.frameX++
      this.imgTick = 0;
    }
    if(this.img.frameX > 5){
      this.img.frameY++
      this.img.frameX = 0;
    } 
    if(this.img.frameY > 2){
      this.img.frameX = 0;
      this.img.frameY = 0;
      this.dispose = false;
    } 
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX =
      this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY =
      this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
