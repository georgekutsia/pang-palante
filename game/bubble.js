class Bubble { //posX posY, ancho, alto, velX, velY, gravedad, buleano si hay gravedad, cuanto tarda la gravedad, el daño y la imagen
  constructor(ctx, x , y, w, h, vx, vy, g, isSlowGravity, slowGrvityDuration, damage, bubbleImg ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || -30; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 14;  //anchura calculada respecto al canvas
    this.h = h || this.ctx.canvas.width / 14;  //altura calculada respecto al canvas
    this.vx = vx || bubbleSpeedX;
    this.vy = vy || bubbleSpeedY;
    this.swordSpeed = 0;
    this.g = g || 0.05;
    this.gTick = 0;
    this.isSlowGravity = isSlowGravity || false;
    this.slowGrvityDuration = slowGrvityDuration || 3000; 
    this.explodingSize = this.ctx.canvas.width/80
    this.damage = damage || 1; // daño especificado o 1
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = bubbleImg || "../public/Imagenes/bubble.png";  //definir cual es la nueva imagen
    this.electrified = new Image();   //crear nueva imágene ne canvas
    this.electrified.src = "../public/Imagenes/electrifiedBall1.png";  //definir cual es la nueva imagen
    this.electrified.frame = 0;
    this.randomColor = getRandomColor();
    this.isElectrified = false;
    this.electroTick = 0;

    this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3") //todo -- paso 1 traer el sonido y almacenarlo en una variable
    this.bubbleBounceSound.volume = 0.1;  //todo -- paso 2, no obligatorio, determinarle volumen de 0 a 1, creo
  }
  draw() {
    // Dibujar el círculo detrás de la burbuja
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.randomColor;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
    if(this.w <= this.explodingSize) {
      this.x = -100;
      coins++
    }

    if(this.isElectrified){
      this.ctx.drawImage(
        this.electrified,
        (this.electrified.frame * this.electrified.width) / 10,
        0,
        this.electrified.width / 10,
        this.electrified.height ,
        this.x ,
        this.y-1,
        this.w ,
        this.h 
      );
    }
  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    this.gTick++
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
    if(this.isElectrified){
      this.w -= 0.05 + electricShieldlevel/150
      this.h -= 0.05 + electricShieldlevel/150
      this.electroTick++;
      if(this.electroTick >3){
        this.electrified.frame++;
        this.electroTick = 0;
      }
      if(this.electrified.frame > 9){
        this.electrified.frame = 0;
      }
    }
    if(this.isSlowGravity){
      setTimeout(() => {
        this.g = 0.05;
        clearTimeout(this.setTimeout)
        this.isSlowGravity = false;
      }, this.slowGrvityDuration);
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

