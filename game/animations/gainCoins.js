class GainCoins {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x || 60;
    this.y = 40;
    this.w = this.ctx.canvas.width/35;
    this.h =  this.ctx.canvas.width/50;
    this.vx = 0;
    this.vy =  -3;
    this.g = 0.055;
    this.img = new Image();
    this.img.src = "/public/Imagenes/gainCoins1.png";
    this.img.framex = 0;
    this.img.framey = 0;
    this.tick = 0;
    this.dispose = true;
    this.rounds = 0;

  }

  draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.framex * this.img.width) / 2,
        (this.img.framey * this.img.height) / 9,
        this.img.width / 2,
        this.img.height / 9,
        this.x,
        this.y,
        this.w,
        this.h
        );
  }

  move() {
    this.tick++;
    this.vy += this.g
    this.y += this.vy
    if (this.tick > 1) {
      this.img.framey++; 
      this.tick = 0;
    }
    if (this.img.framey > 8) {
      this.img.framey = 0;
      this.img.framex++
    }
    if(this.img.framex > 1){
      this.img.framex = 0;
      this.rounds++
    }
    if(this.rounds > 2) this.dispose = false;
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
