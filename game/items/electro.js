class Electro {  
constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 30;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 30;  //altura calculada respecto al canvas
    this.vy = 0;
    this.vx = 0;

    this.g = 0.3;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/electroItem.png";  //definir cual es la nueva imagen
    this.dispose = true;

  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if (this.y + this.h >= this.ctx.canvas.height-1 ){
      this.vy = 0; 
      this.g = 0;
      if(finalBoss){
        this.vx = -1.3
      }
    }
  }
  isVisible(){
    return  this.dispose
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

