class DarkBubble {  
  constructor(ctx, x , y, w, h, vx, vy, g, damage,  sizeChange, willShrink) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || -30; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 14;  //anchura calculada respecto al canvas
    this.h = h || this.ctx.canvas.width / 14;  //altura calculada respecto al canvas
    this.vx = vx || bubbleSpeedX;
    this.vy = vy || bubbleSpeedY;
    this.g = g || 0.2;
    this.sizing = 0.1;
    this.sizeChange = sizeChange || false;
    this.willShrink = willShrink || false;
    this.damage = damage || 1; // daño especificado o 1
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src =  "../public/Imagenes/darkBubble1.png";  //definir cual es la nueva imagen

  }
  draw() {
    // Dibujar el círculo detrás de la burbuja
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if(this.sizeChange){
      this.w += this.sizing
      this.h += this.sizing
      if(this.w <= 20){
        this.sizing = 0.01
      } else if(this.w >= 70 && this.willShrink){
        this.sizing = -0.01
      }
      if(this.w >= CTXW/3){
        darkBubbleExplosion( this, game.bubbles, game.puffBubbles)//explota y genera bubbles pequeño
      }
    }

    if (this.y + this.h >= this.ctx.canvas.height ){
      darkBubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vy = -bubbleSpeedY; 
    }
    if(this.x + this.w >= this.ctx.canvas.width){
      darkBubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = -bubbleSpeedX;
    }
    if(this.x <= 0){
      darkBubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = bubbleSpeedX;
    }

  }
  
  isVisible(){
    return  this.x > -50 && this.x <= this.ctx.canvas.width + 40;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

