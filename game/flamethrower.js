class Flamethrower {  
constructor(ctx, obstacleImg, obstacPlacing) {
    this.ctx = ctx;
    this.x = Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = obstacPlacing || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 15;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 20;  //altura calculada respecto al canvas
    this.vy = 0;
    this.g = 0.1;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = obstacleImg || "../public/Imagenes/flamethrower.png";  //definir cual es la nueva imagen
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.vy = 0; 
      this.g = 0;
    }
  }
  isVisible(){
    return  this.x > -2 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

