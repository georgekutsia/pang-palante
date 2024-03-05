class Lever {  
constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 24;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 23;  //altura calculada respecto al canvas
    this.vx = 0;
    this.vy = 0;
    this.g = 0.3;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/lever3.png";  //definir cual es la nueva imagen
    this.tick = 0;
    this.img.frame = 0;
    this.activated = false;
    this.dispose = true;
  }
  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width)/5,
      0,
      this.img.width/5,
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
      this.vy = 0; 
      this.g = 0;
    }
      if(this.activated){
        this.tick++;
        if(this.tick > 6){
          this.img.frame++;
          this.tick = 0;
        }
        if(this.img.frame >= 4){
          this.img.frame=4;
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

