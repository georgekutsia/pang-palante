class MiniBoss1 {
  constructor(ctx, x, y, w, h, vx, vy, life, gun1 = true, gun2 = true, gun3= true, ) {
    this.ctx = ctx;
    this.x = x ||  this.ctx.canvas.width - 230;
    this.y = y || -100;
    this.w = w || this.ctx.canvas.width / 6;
    this.h = h || this.ctx.canvas.width / 6;
    this.tick = 0
    this.vx = vx || 0;
    this.vy =  vy || 1;
    this.g = -0.5;
    this.tick = 0;
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/minions/MiniBoss1.webp";
    this.img.frame = 0;
    this.imgTick = 0;
    this.playerDetected = false;
    this.bubbleArray = [];
    this.explosiveArray = [];
    this.bulletArray = [];
    this.burningColorsArray = [];
    this.explosions = [];
    this.shootOne = true;  // el primer tipo de disparo especial
    this.oneShot = true; // para que dispare solo una vez al detectar al jugador
    this.life = life || 45;

    this.gun1 = gun1;
    this.gun2 = gun2;
    this.gun3 = gun3;

    this.distanceFromPlayer = -2
    this.shootingIntervalBubble = 1;
    this.shootingIntervalBubbleTick = 0;
    this.bossTalkGone = true;
    this.burningLevel = 0;
    this.explodingLevel = 0;
    //burning...
    this.burning = true;
    this.burningForce = 0;
    this.damage0 = 0;
    this.arriving = true;
  }
  draw() {
if(this.arriving){
  minibossFlyingShip.play();
  this.arriving = false;
  setTimeout(() => {
    this.arriving = true;
  }, 60000);
}
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

    this.checkLife()
    this.burningShip();
    this.explodingShip()
    this.bubbleArray.forEach(bub => bub.draw())
    this.bubbleArray = this.bubbleArray.filter((e) =>e.isVisible()); 
    this.explosiveArray.forEach(bub => bub.draw())
    this.explosiveArray = this.explosiveArray.filter((e) =>e.isVisible()); 
    this.bulletArray.forEach(bub => bub.draw())
    this.bulletArray = this.bulletArray.filter((e) =>e.isVisible()); 
    this.explosions.forEach(bub => bub.draw())
    this.explosions = this.explosions.filter((e) =>e.isVisible()); 
    this.burningColorsArray.forEach(bub => bub.draw())
    this.burningColorsArray = this.burningColorsArray.filter((e) =>e.isVisible()); 

  }
  move() {
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
    miniBossVx = this.vx
    miniBossVy = this.vy
    if(this.vy >= 1) this.vy = 0.4
    if(this.vy <= -1) this.vy = -0.4; 
    if(this.y >= 470 ){
      this.g = -1;
      if(this.shootOne){
        this.shootingBomb()
        this.shootOne = false;
      }
    } 
    if(this.y <= 40){
      this.g = 1;
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
    }

    this.shootingIntervalBubbleTick++
    if(this.shootingIntervalBubbleTick >= this.shootingIntervalBubble){
      this.shootingIntervalBubble = getRandomNumberDecimals(900, 1500)
      this.shootingBubble1(-1.5, -2.5, 100, 100)
      if(this.life <= 20 ){
        this.shootingBubble1(-1.4, -7, 60, 60)
        this.shootingBubble1(-1.6,-8.5, 60, 60)
        this.shootingBubble1(-1.8,-9.5, 60, 60)
      }
      this.shootingIntervalBubbleTick = 0;
    }

    this.bubbleArray.forEach(bub => bub.move())
    this.explosiveArray.forEach(bub => bub.move())
    this.bulletArray.forEach(bub => bub.move())
    this.explosions.forEach(bub => bub.move())
    this.burningColorsArray.forEach(bub => bub.move())
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
      }, this.distanceFromPlayer*2 + 300);
    }
  }
  shootingExplosive(){
    if(this.gun1){
      let explo = new ExplosionBullet(this.ctx, this.x - 50, this.y + this.h/2, CTXW/15, CTXW/15, -8);
      this.bulletArray.push(explo)
    }
  }
  shootingBomb(){
    if(this.gun2){
      let explo = new ExplosionBomb(this.ctx, this.x, this.y - 100, CTXW/10, CTXW/10, -this.distanceFromPlayer/200, -10);
      this.explosiveArray.push(explo)
    }
  }
  shootingBubble1(speedX, speedY, size){
    if(this.gun3){
      let bubble2 = new Bubble(ctx, this.x , this.y + this.h/2 , size, size, speedX, speedY, 0.2, false, 0, 0, false)
      this.bubbleArray.push(bubble2);
    }
  }
  checkDistance(player){
      this.distanceFromPlayer = this.x - player.x;
  }    
  miniBossHit(){
    this.life -= 1;
  }
  miniBossBurn(){
    this.life -= 0.005;
  }
  burningShip(){
      if( this.life <= 50 && this.burningLevel === 0 ){
        let fire =  new BurningColors(this.ctx, this.x, this.y + this.h/7, 200, 200)
        this.burningColorsArray.push(fire);
        if(finalBoss){
          minionsTalking.miniBossTalk2();
        }
        this.burningLevel = 1;
      }
      if( this.life <= 40 && this.burningLevel === 1 ){
        let fire =  new BurningColors(this.ctx, this.x + this.w/2, this.y + this.h/3, 180, 180)
        this.burningColorsArray.push(fire);
        this.burningLevel = 2;
      }
      if( this.life <= 30 && this.burningLevel === 2 ){
        let fire =  new BurningColors(this.ctx, this.x + this.w /4, this.y+ this.h/16, 250, 250)
        this.burningColorsArray.push(fire);
        this.burningLevel = 3;

      }
      if( this.life <= 20 && this.burningLevel === 3 ){
        let fire =  new BurningColors(this.ctx, this.x + this.w/2, this.y - this.h/10, 200, 200)
        this.burningColorsArray.push(fire);
        if(finalBoss){
        minionsTalking.miniBossTalk3();
        } 
        this.burningLevel = 4;
      }
      if( this.life <= 10 && this.burningLevel === 4 ){
        let fire =  new BurningColors(this.ctx, this.x + this.w/6, this.y + this.h/7, 300, 300)
        this.burningColorsArray.push(fire);
        this.burningLevel = 5;
      }
      if(this.life <= 9 ){
        this.life -= 0.001
      }
  }


  explodingShip(){
      if(this.life <= 34 && this.explodingLevel === 0){
          let explo1 = new Explosion(this.ctx, this.x+ this.w/2,  this.y + this.h/2.5, this.w/4, this.w/4, this.vx, this.vy)
          this.explosions.push(explo1);
          this.explodingLevel = 1;
      }
      if(this.life <= 28 && this.explodingLevel === 1){
          let explo1 = new Explosion(this.ctx, this.x+ this.w/4,  this.y + this.h/4, this.w/4, this.w/4, this.vx, this.vy)
          this.explosions.push(explo1);
          this.explodingLevel = 2;
      }
      if(this.life <= 16 && this.explodingLevel === 2){
          let explo1 = new Explosion(this.ctx, this.x + this.w/3, this.y + this.h/2, this.w/3, this.w/3, this.vx, this.vy)
          this.explosions.push(explo1);
          this.explodingLevel = 3;
      }
      if(this.life <= 12 && this.explodingLevel ===3){
          let explo1 = new Explosion(this.ctx, this.x , this.y + this.h/2, this.w/3, this.w/3, this.vx, this.vy)
          this.explosions.push(explo1);
          this.explodingLevel = 4;
      }
      if(this.life <= 8 && this.explodingLevel === 4){
        let explo1 = new Explosion(this.ctx, this.x + this.w/5 , this.y + this.h/3, this.w/2, this.w/2, this.vx, this.vy)
          this.explosions.push(explo1);
          this.explodingLevel = 5;
      }
  }
  checkLife(){

    if(this.life <= 0.1){
      this.vy = -2;
      this.vx = 0.5;
      setTimeout(() => {
        setTimeout(() => {
          finalBoss = false;
          miniBoss1 = false;
          game.emptyAllGameArrays();
          game.player.shootUp = true;
        }, 4000);
        this.dispose = false;
      }, 3000);
      if(this.bossTalkGone){
        minionsTalking.miniBossTalk1Gone();
        this.bossTalkGone = false;
      }
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
