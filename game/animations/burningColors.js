class BurningColors {
  constructor(ctx, x, y, w, h, obstacleImg) {
    this.ctx = ctx;
    this.x = x || 200;
    this.y = y || 100;
    this.w = w || this.ctx.canvas.width/15;
    this.h = h || this.ctx.canvas.width/15;
    this.vx = miniBossVx;
    this.vy = miniBossVy;
    this.img = new Image();
    this.burningImg = [
      "/public/Imagenes/burningShip1.png",
      "/public/Imagenes/burningShip2.png",
      "/public/Imagenes/burningShip3.png",
      "/public/Imagenes/burningShip4.png",
      "/public/Imagenes/burningShip5.png",
      "/public/Imagenes/burningShip6.png",
      "/public/Imagenes/burningShip7.png",
      "/public/Imagenes/burningShip8.png",
      "/public/Imagenes/burningShip9.png",
      "/public/Imagenes/burningShip10.png",
    ]
    this.colorRandom = Math.floor(Math.random() * this.burningImg.length)
    this.img.src = obstacleImg || this.burningImg[this.colorRandom]
    this.img.framex = 0;
    this.img.framey = 0;
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;

  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.framex * this.img.width) / 8,
      (this.img.framey * this.img.width) / 4,
      this.img.width / 8,
      this.img.height/4,
      this.x,
      this.y + this.h/2-this.h/10,
      this.w /3,
      this.h/3
      );
  }

  move() {
    this.x += miniBossVx
    this.y += miniBossVy
    this.tick++;
    if(this.tick > 6 ){
      this.img.framex++
      this.tick = 0;
    }
    if(this.img.framex > 7){
      this.img.framey+= 0.5
      this.img.framex = 0;
    } 
    if(this.img.framey > 1.5 ) {
      this.img.framey = 0
      this.img.framex = 0;
      if(this.boxLevel === 0) {
        this.damage0 +=1;
        if(this.damage0 >=3){
          this.boxImg.frame+=1;
          this.boxImpactMetalic.play();
          this.damage0 = 0;
        }
      }
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
