class Obstacle {  
  constructor(ctx, damage, obstacleImg, obstacPlacing) {
    this.ctx = ctx;
    this.x = Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde el final del canvas a la derecha 
    this.y = obstacPlacing || -30; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 17;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 17;  //altura calculada respecto al canvas
    this.vx = 0;
    this.vy = 1;
    this.g = 0.05;
    this.damage = damage || 10; // daño especificado o 10
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = obstacleImg || "../public/Imagenes/bubble.png";  //definir cual es la nueva imagen
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.x += this.vx;  //mueve el obstáculo
    this.y += this.vy;
    if (this.y + 100 === this.ctx.canvas.height -100){
      this.vy = 0;
      this.g = 0;
      console.log("hola" + this.y);
    }

  }
  isVisible(){
    return this.x <= this.ctx.canvas.width && this.x >= 0;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

