class Bubble {  
  constructor(ctx, vx, vy, x , y, w, h, g, damage, obstacleImg, obstacPlacing ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y || obstacPlacing || -30; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 14;  //anchura calculada respecto al canvas
    this.h = h || this.ctx.canvas.width / 14;  //altura calculada respecto al canvas
    this.vy = vy || bubbleSpeedY;
    this.vx = vx || bubbleSpeedX;
    this.g = g || 0.05;
    this.explodingSize = this.ctx.canvas.width/80
    this.damage = damage || 1; // daño especificado o 10
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = obstacleImg || "../public/Imagenes/bubble.png";  //definir cual es la nueva imagen
    this.randomColor = getRandomColor();

    this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3") //todo -- paso 1 traer el sonido y almacenarlo en una variable
    this.bubbleBounceSound.volume = 0.3;  //todo -- paso 2, no obligatorio, determinarle volumen de 0 a 1, creo
  }
  draw() {
    // Dibujar el círculo detrás de la burbuja
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.randomColor;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
    if(this.w <= this.explodingSize) this.x = -100;
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vy = -bubbleSpeedY; 
    }
    if(this.x + this.w >= this.ctx.canvas.width){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = -bubbleSpeedX;
    }
    if(this.x <= 0){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = bubbleSpeedX;
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

