class Box {
  constructor(ctx, x, y, boxLevel, containsRandom, lootNumber, bubblePopup, amountOfLoot) {
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
    this.burningBox = new Image();
    this.burningBox.src = "/public/Imagenes/burningBox.png";
    this.burningBox.framex = 0;
    this.burningBox.framey = 0;
    this.burningTick = 0;
    this.burning = false;
    this.burningForce = 0;
    this.damage0 = 0;
    this.amountOfLoot = amountOfLoot || 0;


    this.boxHitSound = new Audio("/public/sounds/box/boxHit.mp3")
    this.boxHitSound.volume = 0.03;
    this.boxHitBreakSound = new Audio("/public/sounds/box/boxBreak.mp3")
    this.boxHitBreakSound.volume = 0.03;
    this.boxHitBreakingLongSound = new Audio("/public/sounds/box/boxBreakingLong.mp3")
    this.boxHitBreakingLongSound.volume = 0.03;
    this.boxImpactMetalic = new Audio("/public/sounds/box/boxImpactMetalic.mp3")
    this.boxImpactMetalic.volume = 0.01;
    this.boxIgniteSound = new Audio("/public/sounds/electrofire/boxBurning.mp3")
    this.boxIgniteSound.volume = 0.03;
    this.burningBoxSound = new Audio("/public/sounds/electrofire/burningBox.mp3")
    this.burningBoxSound.volume = 0.05;

    this.coinsSound1 = new Audio("../public/sounds/coinsSound1.mp3")
    this.coinsSound1.volume = 1; 
    this.boxLevel = boxLevel;// de 1 a 3 determina la resistenci de la caja
    this.containsRandom = containsRandom || false; //determina si el loot será random o no. mirar en funciones
    this.lootNumber = lootNumber || 5
    this.bubblePopup = bubblePopup || false;
  }

  draw() {
    if(this.boxLevel===0)this.boxImg.src = "/public/Imagenes/box0.png";
    if(this.boxLevel===1)this.boxImg.src = "/public/Imagenes/box12.png";
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
    
    if(this.burning && this.burningForce >0){
      this.ctx.drawImage(
        this.burningBox,
        (this.burningBox.framex * this.burningBox.width) / 8,
        (this.burningBox.framey * this.burningBox.width) / 4,
        this.burningBox.width / 8,
        this.burningBox.height/4,
        this.x,
        this.y + 3,
        this.w,
        this.h
        );
      }
    if(this.burning && this.burningForce > 1){
      this.ctx.drawImage(
        this.burningBox,
        (this.burningBox.framex * this.burningBox.width) / 8,
        (this.burningBox.framey * this.burningBox.width) / 4,
        this.burningBox.width / 8,
        this.burningBox.height/4,
        this.x -3,
        this.y -1,
        this.w+3,
        this.h+3
        );
      }
    if(this.burning && this.burningForce > 2){
      this.ctx.drawImage(
        this.burningBox,
        (this.burningBox.framex * this.burningBox.width) / 8,
        (this.burningBox.framey * this.burningBox.width) / 4,
        this.burningBox.width / 8,
        this.burningBox.height/4,
        this.x +1,
        this.y - 4,
        this.w + 3,
        this.h + 3
        );
    if(this.burning && this.burningForce > 3){
      this.ctx.drawImage(
        this.burningBox,
        (this.burningBox.framex * this.burningBox.width) / 8,
        (this.burningBox.framey * this.burningBox.width) / 4,
        this.burningBox.width / 8,
        this.burningBox.height/4,
        this.x -1,
        this.y - 6,
        this.w + 5,
        this.h + 5
        );
      }
    if(this.burning && this.burningForce > 4){
      this.ctx.drawImage(
        this.burningBox,
        (this.burningBox.framex * this.burningBox.width) / 8,
        (this.burningBox.framey * this.burningBox.width) / 4,
        this.burningBox.width / 8,
        this.burningBox.height/4,
        this.x-3,
        this.y - 8,
        this.w + 8,
        this.h + 8
        );
      }
    }
  }
  move() {
    if(this.burning){
      this.burningTick++;
      if(this.burningTick > 6 - this.burningForce){
        this.burningBox.framex++
        this.burningTick = 0;
      }
      if(this.burningBox.framex > 7){
        this.burningBox.framey+= 0.5
        this.burningBox.framex = 0;
      } 
      if(this.burningBox.framey > 1.5 ) {
        this.burningBox.framey = 0
        this.burningBox.framex = 0;
        if(this.boxLevel===0) {
          this.damage0 +=1;
          if(this.damage0 >=3){
            this.boxImg.frame+=1;
            this.boxImpactMetalic.play();
            this.damage0 = 0;
          }
        }
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
    }

  }
  hitingSound(){
    if(this.boxImg.frame <= 4) {this.boxHitSound.play()}
    if(this.boxImg.frame >=5 && this.boxImg.frame <=8) this.boxHitBreakSound.play()
    if(this.boxImg.frame >8) this.boxHitBreakingLongSound.play();
    if(this.boxImg.frame > 8){ 
      coins+=2;
      this.burningBoxSound.volume = 0;
      this.coinsSound1.play()
      this.dispose = false; 
    }
  }
  boxHit(){
    this.damage0 +=1;
    if(this.boxLevel===0) {
      if(this.damage0 >=4){
        this.boxImg.frame+=1;
        this.boxImpactMetalic.play();
        this.damage0 = 0;
      }
    }
    if(this.boxLevel===1 && this.damage0 >=3) {
      this.boxImg.frame+=1;
      this.boxImpactMetalic.play();
      this.damage0 = 0;
    }
    if(this.boxLevel===2 && this.damage0 >= 2) {
      this.boxImg.frame+=2;
      this.damage0 = 0;
    }
    if(this.boxLevel===3) {
      this.boxImg.frame+=2;
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
