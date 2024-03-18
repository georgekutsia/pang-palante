class Coins {  
constructor(ctx, x, y, w, h, amount) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 40;  //anchura calculada respecto al canvas
    this.h = h || this.ctx.canvas.width / 40;  //altura calculada respecto al canvas
    this.vy = 0;
    this.vx = 0;
    this.g = 0.3;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/coinsItem1.png";  //definir cual es la nueva imagen
    this.tick = 0;
    this.img.frame = 0;
    this.activated = true;
    this.dispose = true;
    this.amountOfCoins = amount || 15;
  }
  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width)/6,
      0,
      this.img.width/6,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h);  // dibuja el obstáculo
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if (this.y + this.h >= this.ctx.canvas.height-1 ){
      this.vy = -0.3;
      this.g = 0.01;
      if(finalBoss){
        this.vx = -1.3
      }
    }
    if(this.activated){
        this.tick++;
        if(this.tick > 5){
          this.img.frame++;
          this.tick = 0;
        }
        if(this.img.frame > 5){
          this.img.frame=0;
        }
      }
  }
  isVisible(){
    return  this.dispose
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w-2  && this.x + this.w > objetivo.x+2;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

