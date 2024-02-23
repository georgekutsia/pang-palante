class MiniBoss1 {
  constructor(ctx, x, y, w, h, vx, vy, damage, life) {
    this.ctx = ctx;
    this.x = x ||  this.ctx.canvas.width -30;
    this.y = y || -4;
    this.w = w || this.ctx.canvas.width / 4;
    this.h = h || this.ctx.canvas.width / 4;
    this.tick = 0
    this.vx = vx || 0;
    this.vy =  vy || 1;
    this.g = -0.005;
    this.tick = 0;
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/minions/MiniBoss1.webp";
    this.img.frame = 0;
    this.imgTick = 0;
    this.playerDetected = false;
    this.damage = damage || 0.001;
    this.bubbleArray = [];
    this.explosiveArray = [];
    this.shootOne = true;  // el primer tipo de disparo especial
    this.oneShot = true; // para que dispare solo una vez al detectar al jugador
    this.life = life || 70;
    this.distanceFromPlayer = -2
    this.shootingIntervalBubble = 1;
    this.shootingIntervalBubbleTick = 0;
    this.bossTalkGone = true;
    this.bossTalk2 = true;
    this.bossTalk3 = true;
    //burning...
    this.burningShip = new Image();
    this.burningShip.src = "/public/Imagenes/burningShip1.png";
    this.burningShip.framex = 0;
    this.burningShip.framey = 0;
    this.burningTick = 0;
    this.burning = true;
    this.burningForce = 0;
    this.damage0 = 0;


    this.exploding = true;
    this.explosions = [];
    this.burningShipImages = [
      "/public/Imagenes/burningShip1.png",
      "/public/Imagenes/burningShip2.png",
      "/public/Imagenes/burningShip3.png",
      "/public/Imagenes/burningShip4.png",
      "/public/Imagenes/burningShip5.png",
      "/public/Imagenes/burningShip6.png",
      "/public/Imagenes/burningShip7.png",
    ]
    this.randomNumber = 1;
  }

  draw() {
    if(this.boxLevel===1)this.img.src = "/public/Imagenes/box1.png";
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 6,
      0,
      this.img.width / 6,
      this.img.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );

    
    if(this.burning && this.burningForce >0 || this.life <= 60 ){
      this.burningShip.src = this.burningShipImages[this.randomNumber];
      this.ctx.drawImage(
        this.burningShip,
        (this.burningShip.framex * this.burningShip.width) / 8,
        (this.burningShip.framey * this.burningShip.width) / 4,
        this.burningShip.width / 8,
        this.burningShip.height/4,
        this.x,
        this.y + this.h/2-this.h/10,
        this.w /3,
        this.h/3
        );
      }
    if(this.burning && this.burningForce > 1 || this.life <= 50 ){
      this.ctx.drawImage(
        this.burningShip,
        (this.burningShip.framex * this.burningShip.width) / 8,
        (this.burningShip.framey * this.burningShip.width) / 4,
        this.burningShip.width / 8,
        this.burningShip.height/4,
        this.x + this.w/2,
        this.y + this.h/2-this.h/15,
        this.w/3,
        this.h/3
        );
      }
    if(this.burning && this.burningForce > 2 || this.life <= 40 ){
      this.ctx.drawImage(
        this.burningShip,
        ((this.burningShip.framex + 1) * this.burningShip.width) / 8,
        ((this.burningShip.framey +1 )* this.burningShip.width) / 4,
        this.burningShip.width / 8,
        this.burningShip.height/4,
        this.x + this.w/3,
        this.y + this.h/3,
        this.w/3,
        this.h/3
        );
    if(this.burning && this.burningForce > 3 || this.life <= 30 ){
      this.ctx.drawImage(
        this.burningShip,
        (this.burningShip.framex * this.burningShip.width) / 8,
        (this.burningShip.framey * this.burningShip.width) / 4,
        this.burningShip.width / 8,
        this.burningShip.height/4,
        this.x + this.w/2.5,
        this.y + this.h/10,
        this.w/2,
        this.h/2
        );
      }
    }
    if(this.burning && this.burningForce > 4 || this.life <= 20 ){
      this.ctx.drawImage(
        this.burningShip,
        (this.burningShip.framex * this.burningShip.width) / 8,
        (this.burningShip.framey * this.burningShip.width) / 4,
        this.burningShip.width / 8,
        this.burningShip.height/4,
        this.x + this.w/7,
        this.y + this.h/20,
        this.w/2,
        this.h/2
        );
        this.life-= 0.001; // que pierda la vida poco a poco si está muy reventado
      }
    this.explodingShip()

    this.bubbleArray.forEach(bub => bub.draw())
    this.bubbleArray = this.bubbleArray.filter((e) =>e.isVisible()); 
    this.explosiveArray.forEach(bub => bub.draw())
    this.explosiveArray = this.explosiveArray.filter((e) =>e.isVisible()); 
    this.explosions.forEach(bub => bub.draw())
    this.explosions = this.explosions.filter((e) =>e.isVisible()); 

  }
  move() {
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
    if(this.vy >= 1) this.vy = 0.4
    if(this.vy <= -1) this.vy = -0.4; 
    if(this.y >= 70 ){
      this.g = -0.01;
      if(this.shootOne){
        this.shootingBomb()
        this.shootOne = false;
      }
    } 
    if(this.y <= 40){
      this.g = 0.01;
      this.shootOne = true;
    }
    this.tick++
    if(this.tick > 10){
      this.img.frame++
      this.tick = 0;
    }
    if(this.img.frame > 5){
      this.img.frame = 0;
    }


    this.burningTick++;
    if(this.burningTick > 6 - this.burningForce){
      this.burningShip.framex++
      this.burningTick = 0;
    }
    if(this.burningShip.framex > 7){
      this.burningShip.framey+= 0.5
      this.burningShip.framex = 0;
    } 
    if(this.burningShip.framey > 1.5 ) {
      this.burningShip.framey = 0
      this.burningShip.framex = 0;
      if(this.boxLevel===0) {
        this.damage0 +=1;
        if(this.damage0 >=3){
          this.boxImg.frame+=1;
          this.boxImpactMetalic.play();
          this.damage0 = 0;
        }
      }
    }

    this.shootingIntervalBubbleTick++
    if(this.shootingIntervalBubbleTick >= this.shootingIntervalBubble){
      this.shootingIntervalBubble = getRandomNumberDecimals(200, 500)
      this.shootingBubble1(-1, 25, 25)
      if(this.life <= 20 ){
        this.shootingBubble1(-1.4, 20, 20)
        this.shootingBubble1(-1.6, 20, 20)
        this.shootingBubble1(-1.8, 20, 20)
      }
      this.shootingIntervalBubbleTick = 0;
    }

    this.bubbleArray.forEach(bub => bub.move())
    this.explosiveArray.forEach(bub => bub.move())
    this.explosions.forEach(bub => bub.move())
  }

  checkPosition(player){
    if(this.y + this.h/1.8 >= player.y  && this.y + this.h/1.8 <= player.y  + 5 ) {
      this.playerDetected = true;
    }
    if(this.playerDetected && this.oneShot){
      this.shootingExplosive()
      this.playerDetected = false;
      this.oneShot = false;
      setTimeout(() => {
        this.oneShot = true;
      }, this.distanceFromPlayer*2);
    }
  }

  shootingExplosive(){
    let explo = new ExplosionBullet(this.ctx, this.x, this.y + this.h/2, CTXW/15, CTXW/15, -3);
    this.explosiveArray.push(explo)
  }
  shootingBomb(){
    let explo = new ExplosionBomb(this.ctx, this.x, this.y, CTXW/5, CTXW/5, -this.distanceFromPlayer/100, -2.5);
    this.explosiveArray.push(explo)
  }

  shootingBubble1(speedX, size){
    let bubble2 = new Bubble(ctx, this.x , this.y + this.h/2 , size, size, -0.5, speedX, 0.0001, true, 700, 0, false)
    this.bubbleArray.push(bubble2);
  }

  checkDistance(player){
      this.distanceFromPlayer = this.x - player.x;
  }    

  miniBossHit(){
    this.life -= 1;
  }
  


  explodingShip(){
    if(this.life <= 50&& this.bossTalk2){
      minionsTalking.miniBossTalk2();
      this.bossTalk2 = false;
    }
    if(this.life <= 20&& this.bossTalk3){
      minionsTalking.miniBossTalk3();
      this.bossTalk3 = false;
    }
    if(this.life <=0.1){
      this.vy = -2;
      this.vx = 0.5;
      if(this.bossTalkGone){
        minionsTalking.miniBossTalk1Gone();
        this.bossTalkGone = false;
      }
    }
    if(this.life <= -1){
      this.dispose = false;
    }

    if(this.exploding){
      if(this.life <= 66){
        let explo1 = new Explosion(this.ctx, this.x, this.y + this.h/2, this.w/5, this.w/5, this.vx, this.vy)
        this.explosions.push(explo1);
      }
      if(this.life <= 64){
        setTimeout(() => {
          
          let explo1 = new Explosion(this.ctx, this.x+ this.w/2,  this.y + this.h/2, this.w/4, this.w/4, this.vx, this.vy)
          this.explosions.push(explo1);
        }, 300);
      }
      if(this.life <= 62){
        setTimeout(() => {
          
          let explo1 = new Explosion(this.ctx, this.x+ this.w/4,  this.y + this.h/4, this.w/4, this.w/4, this.vx, this.vy)
          this.explosions.push(explo1);
        }, 600);
      }
      if(this.life <= 61){
        setTimeout(() => {
          let explo1 = new Explosion(this.ctx, this.x + this.w/3, this.y + this.h/2, this.w/3, this.w/3, this.vx, this.vy)
          this.explosions.push(explo1);
        }, 900);
      }
      this.exploding = false;
      setTimeout(() => {
        this.exploding = true;
      }, 2000);
    }
  }
  isVisible() {
    return this.dispose;
  }
  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y  && this.y < aura.y + aura.h- 50;
    return colX && colY;
  }
}
