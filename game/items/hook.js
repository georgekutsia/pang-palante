class Hook {  
constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 40; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 25;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 20;  //altura calculada respecto al canvas
    this.vx = 0;
    this.vy = 0;
    this.g = 0.3;
    this.dispose = true;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/hookItem.png";  //definir cual es la nueva imagen
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
    }
  }
  isVisible(){
    return  this.dispose;
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

