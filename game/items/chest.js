class Chest {  
constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 18;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 21;  //altura calculada respecto al canvas
    this.vx = 0;
    this.vy = 0;
    this.g = 0.3;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/Chest2.png";  //definir cual es la nueva imagen
    this.tick = 0;
    this.tock = 0;
    this.img.frame = 0;
    this.activated = false;
    this.dispose = true;
    this.itemNotDropped = true;
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
    if (this.y + this.h >= this.ctx.canvas.height-6){
      this.vy = 0; 
      this.g = 0;
    }
      if(this.activated){
        this.tick++;
        this.tock++
        if(this.tick > 6){
          this.img.frame++;
          this.tick = 0;
        }
        if(this.img.frame > 5){
          this.img.frame=5;
          if(this.itemNotDropped){
            let swo = new Sword(ctx, this.x + 10 , this.y - 30)
            game.swords.push(swo)
            this.itemNotDropped = false;
          }
          
        }
        if(this.tock >= 150){
          this.dispose = false;
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

