class Box {
  constructor(ctx,x, y, boxLevel, lootNumber) {
    this.ctx = ctx;
    this.x = x || 100;
    this.y = y || 20;
    this.w = this.ctx.canvas.width / 18;
    this.h = this.ctx.canvas.width / 18;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0
    this.dispose = true;
    this.boxImg = new Image();
    this.boxImg.src = "/public/Imagenes/box1.png";
    this.boxImg.frame = 0;
    this.imgTick = 0;
    this.boxHitSound = new Audio("/public/sounds/box/boxHit.mp3")
    this.boxHitSound.volume = 0.3
    this.boxHitBreakSound = new Audio("/public/sounds/box/boxBreak.mp3")
    this.boxHitBreakSound.volume = 0.2
    this.boxHitBreakingLongSound = new Audio("/public/sounds/box/boxBreakingLong.mp3")
    this.boxHitBreakingLongSound.volume = 0.1
    this.boxImpactMetalic = new Audio("/public/sounds/box/boxImpactMetalic.mp3")
    this.boxImpactMetalic.volume = 0.08;
    this.boxLevel = boxLevel;// de 1 a 3 determina la resistenci de la caja
    this.containsRandom = false;
    this.lootNumber = lootNumber || 3
  }

  draw() {
    if(this.boxLevel===1)this.boxImg.src = "/public/Imagenes/box1.png";
    if(this.boxLevel===2)this.boxImg.src = "/public/Imagenes/box2.png";
    if(this.boxLevel===3)this.boxImg.src = "/public/Imagenes/box3.png";
    this.ctx.drawImage(
      this.boxImg,
      (this.boxImg.frame * this.boxImg.width) / 9,
      0,
      this.boxImg.width / 9,
      this.boxImg.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
    
  }
  move() {
    this.imgTick++
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    if (this.y + this.h >= this.ctx.canvas.height ){
      this.vy = 0; 
      this.g = 0;
    }
  }
  hitingSound(){
    if(this.boxImg.frame <= 4) {this.boxHitSound.play()}
    if(this.boxImg.frame >=5 && this.boxImg.frame <=8) this.boxHitBreakSound.play()
    if(this.boxImg.frame >8) this.boxHitBreakingLongSound.play();
    if(this.boxImg.frame > 8){ 
      this.dispose = false; 
    }
  }
  boxHit(){
    if(this.boxLevel===1) {
      this.boxImg.frame+=1;
      this.boxImpactMetalic.play();
    }
    if(this.boxLevel===2) {
      this.boxImg.frame+=2;
    }
    if(this.boxLevel===3) {
      this.boxImg.frame+=3;
    }
    this.hitingSound()
  }  
  isVisible() {
    return this.dispose;
  }
  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y && this.y < aura.y + aura.h;
    return colX && colY;
  }
}
