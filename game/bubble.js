class Bubble { //posX posY, ancho, alto, velX, velY, gravedad, buleano si hay gravedad, cuanto tarda la gravedad, si las bolas rebotan, el daño y la imagen
  constructor(ctx, x , y, w, h, vx, vy, g, isSlowGravity, slowGrvityDuration, damage, willBounce = true, bubbleImg, runnerBubble, bounceFromEachOther ) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || -10; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 18;  //anchura calculada respecto al canvas      ctxw/18 hará que se divida otras 2 veces
    this.h = h || this.ctx.canvas.width / 18;  //altura calculada respecto al canvas
    this.vx = vx || bubbleSpeedX;
    this.vy = vy || bubbleSpeedY;
    this.wvy = this.w / 10
    this.swordSpeed = 0;
    this.g = g || 0.2;
    this.gTick = 0;
    this.isSlowGravity = isSlowGravity || false;
    this.slowGrvityDuration = slowGrvityDuration || 3000; 
    this.explodingSize = 15
    this.damage = damage || 1; // daño especificado o 1
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = bubbleImg || "../public/Imagenes/bubble.png";  //definir cual es la nueva imagen
    this.electrified = new Image();   //crear nueva imágene ne canvas
    this.electrified.src = "../public/Imagenes/electrifiedBall1.png";  //definir cual es la nueva imagen
    this.electrified.frame = 0;
    this.randomColor = getRandomColor();
    this.isElectrified = false;
    this.isElectrifiedButBig = 0;
    this.electroTick = 0;
    this.willBounce = willBounce;
    this.replicateTick = 0;
    this.hitAmount = 0;
    this.timeTick = 0;
    this.repTimeInSeconds = replicationSeconds;
    this.timeStopBubble = false; // para el efecto que detiene el tiempo al hacer desaparecer una burbuja con una esquiva
    this.runnerBubble = runnerBubble || false;
    this.bounceFromEachOther = bounceFromEachOther || false;
    this.bounceVolume = this.w/1000;
    this.bubbleBounceSound = new Audio("../public/sounds/bubbleBounce.mp3") 
    this.bubbleBounceSound.volume = this.bounceVolume;  
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.randomColor;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo

    if(this.w <= this.explodingSize*2) {
      this.timeStopBubble = true;
    }
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
    if(this.w >= 101){
      this.ctx.save();
      this.ctx.font = `${this.w/2}px arial`
      this.ctx.fillStyle = "black"
      this.timeTick++
      if(this.timeTick >= 60){
        this.repTimeInSeconds --;
        this.timeTick = 0;
      }
      this.ctx.fillText(`${(this.repTimeInSeconds)}`, this.x + this.w/3 , this.y + this.h/1.5, this.w/3, 20);
    }
  }
  move() {
    setTimeout(() => {
      this.bounceFromEachOther = true;
    }, 200);
    if(this.runnerBubble) this.g = 0
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    this.gTick++
    this.replicateTick++;
    if(this.y <= -350 && !this.runnerBubble){
      this.vy = 0;
      this.g = 0.2
    }
    if (this.y + this.h >= this.ctx.canvas.height && !this.runnerBubble){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vy = -Math.abs(this.w/20 + 7); 
    }
    if(this.x + this.w >= this.ctx.canvas.width && this.willBounce && !this.runnerBubble){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = this.vx * -1;
    }
    if(this.x <= 0 && this.willBounce && !this.runnerBubble){
      this.bubbleBounceSound.play()//todo --paso 3 llamar a .play() para invocar el sonido donde sea necesario
      this.vx = this.vx * -1;
    }
    if(this.isElectrified){
      this.w -= (0.25 + electricShieldlevel/150) - this.isElectrifiedButBig
      this.h -= (0.25 + electricShieldlevel/150) - this.isElectrifiedButBig
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
    if(this.replicateTick === replicationTime && this.w >= 101){
      const newBubble = new Bubble(this.ctx, this.x, this.y, this.w, this.h, -this.vx, this.vy, this.g, this.isSlowGravity, this.slowGrvityDuration, this.damage, this.willBounce, this.img.src);
      game.bubbles.push(newBubble);
      this.replicateTick = 0; // Reinicia el contador de replicación
      this.repTimeInSeconds = 40;
    }

  }
  
  isVisible(){
    return  this.x > -10 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    if(!this.runnerBubble){
      const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
      const colY = this.y + this.h >= objetivo.y && this.y <= objetivo.y + objetivo.h;
      return colX && colY;
    }
  }

}

