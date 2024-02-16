class BubbleCannon {
  constructor(ctx, x, y, bubX, bubY, gG, vx, vy, w, h, delay, shootInterval) {
    this.ctx = ctx;
    this.x = x || 0;
    this.y = y || 80;
    this.w = w || this.ctx.canvas.width / 22;
    this.h = h || this.ctx.canvas.width / 15;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.tick = 0
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/cannon.png";
    this.img.frame = 0;
    this.imgTick = 0;
    this.bubbleArray = [];
    this.damage = 0.001;
    this.bubbleGatlingSound = new Audio("/public/sounds/shooting/bubbleGatling.mp3")
    this.bubbleGatlingSound.volume = 0.1;
    this.img.frame = 0;
    this.tick = 0;
    this.shooting = true;
    this.bubX = bubX || 0;
    this.bubY = bubY || 0;
    this.gG =  gG || 0.05;
    this.life =this.w + this.h;
    this.shootInterval = shootInterval || 1000;
    this.delay = delay || 0;


    this.burningCannon = new Image();
    this.burningCannon.src = "/public/Imagenes/burningBox.png";
    this.burningCannon.framex = 0;
    this.burningCannon.framey = 0;
    this.burningTick = 0;
    this.burning = false;
    this.burningForce = 0;
    this.cannonIgniteSound = new Audio("/public/sounds/electrofire/boxBurning.mp3")
    this.cannonIgniteSound.volume = 0.03;
    this.burningCannonSound = new Audio("/public/sounds/electrofire/burningBox.mp3")
    this.burningCannonSound.volume = 0.05;
  }

  draw() {
    if(this.life <=0){
      this.dispose = false;
    }
    if(this.boxLevel === 1)this.img.src = "/public/Imagenes/box1.png";
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) /4,
      0,
      this.img.width/4,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    
    this.bubbleArray.forEach((e)=>e.draw());
    this.bubbleArray = this.bubbleArray.filter((e)=>e.isVisible());

    if(this.x <= -5)this.shooting = false;
    if(this.x <= -35)this.dispose = false;
    if(this.burning && this.burningForce >0){
      this.ctx.drawImage(
        this.burningCannon,
        (this.burningCannon.framex * this.burningCannon.width) / 8,
        (this.burningCannon.framey * this.burningCannon.width) / 4,
        this.burningCannon.width / 8,
        this.burningCannon.height/4,
        this.x -5,
        this.y,
        this.w,
        this.h
        );
      }
    if(this.burning && this.burningForce > 1){
      this.ctx.drawImage(
        this.burningCannon,
        (this.burningCannon.framex * this.burningCannon.width) / 8,
        (this.burningCannon.framey * this.burningCannon.width) / 4,
        this.burningCannon.width / 8,
        this.burningCannon.height/4,
        this.x,
        this.y -5,
        this.w+3,
        this.h+3
        );
      }
    if(this.burning && this.burningForce > 2){
      this.ctx.drawImage(
        this.burningCannon,
        (this.burningCannon.framex * this.burningCannon.width) / 8,
        (this.burningCannon.framey * this.burningCannon.width) / 4,
        this.burningCannon.width / 8,
        this.burningCannon.height/4,
        this.x - 8,
        this.y - this.h/3,
        this.w+3,
        this.h+3
        );
    if(this.burning && this.burningForce > 3){
      this.ctx.drawImage(
        this.burningCannon,
        (this.burningCannon.framex * this.burningCannon.width) / 8,
        (this.burningCannon.framey * this.burningCannon.width) / 4,
        this.burningCannon.width / 8,
        this.burningCannon.height/4,
        this.x + this.w/4,
        this.y - this.h/2,
        this.w+5,
        this.h+5
        );
      }
    if(this.burning && this.burningForce > 4){
      this.ctx.drawImage(
        this.burningCannon,
        (this.burningCannon.framex * this.burningCannon.width) / 8,
        (this.burningCannon.framey * this.burningCannon.width) / 4,
        this.burningCannon.width / 8,
        this.burningCannon.height/4,
        this.x -5,
        this.y - this.h/2,
        this.w+5,
        this.h+5
        );
      }
    }
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.delay--
    if(this.y + this.h >= 18) {this.g = 0; this.vy =0;};
    this.bubbleArray.forEach((e)=>e.move());
    if(this.shooting && this.delay <= 0){
      this.delay = 0;
      this.tick++;
      if(this.tick > 2){
        this.img.frame++;
        this.tick = 0;
      }
      if(this.img.frame >3){
      this.img.frame = 0;
      this.shootingBubble()
      this.shooting = false;
      setTimeout(() => {
        this.shooting = true;
      }, this.shootInterval);
    }
   }
   if(this.burning){
    this.burningTick++;
    if(this.burningTick > 3){
      this.burningCannon.framex++
      this.burningTick = 0;
    }
    if(this.burningCannon.framex > 7){
      this.burningCannon.framey+= 0.5
      this.burningCannon.framex = 0;
    } 
    if(this.burningCannon.framey > 1.5 ) {
      this.burningCannon.framey = 0
      this.burningCannon.framex = 0;
      this.life -= this.burningForce;
        if(this.life <=0){
    this.dispose = false;
  }
    }
  }


  }
cannonHit(){
  this.life --
}
  shootingBubble(){
    let bubble = new Bubble(ctx, this.x + this.w/2+10, this.y +this.h/2-5, this.w/2, this.w/2, this.bubX, this.bubY, this.gG)
    this.bubbleArray.push( bubble)
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
