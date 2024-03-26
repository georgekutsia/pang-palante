class CristalBall {
  constructor(ctx, x, y, w, h, vx, vy, imgNumber) {
    this.ctx = ctx;
    this.x = x || Math.random() * this.ctx.canvas.width; ;
    this.y = y ||  Math.random() * this.ctx.canvas.height - 40 ;
    this.w = w || this.ctx.canvas.width / 20;
    this.h =  h || this.ctx.canvas.width / 20;
    this.tick = 0
    this.vx = vx || 1.3;
    this.vy = vy || 1.3;
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/specialItem2.png";
    this.img.frame = 0;
    this.moveTick = 0;
    this.imgNumber = imgNumber || 0;
    this.itemSound = new Audio("/public/sounds/items/specialItemSound.mp3");
    this.itemSound.volume = 0.03;    
    this.shoot = true;
  }

  draw() {
    if(this.shoot){
      this.itemSound.play();
      this.shoot = false;
    }
    switch (this.imgNumber) {
      case 0:
    this.img.src = "/public/Imagenes/specialItem2.png";
        break;
    
      case 1:
    this.img.src = "/public/Imagenes/specialItem3.png";
        break;
    
      case 2:
    this.img.src = "/public/Imagenes/specialItem4.png";
        break;
    
      case 3:
    this.img.src = "/public/Imagenes/specialItem5.png";
        break;

      case 4:
    this.img.src = "/public/Imagenes/specialItem6.png";
        break;
    
      default:
        break;
    }
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 8,
      0,
      this.img.width / 8,
      this.img.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.moveTick++
    if(this.moveTick >= 50){
      this.vy = this.vy * -1
      this.moveTick = 0;
    }
    this.y += this.vy;
    this.x += this.vx;
    if(this.x < -30 || this.x >= CTXW + 20){
      this.dispose = false;
    }    
    
    this.tick++
    if(this.tick > 2){
      this.img.frame++
      this.tick = 0;
    }
    if(this.img.frame > 7){
      if( this.imgNumber <=3){
        this.img.frame = 0;
      } else {
        this.gainingSpecialAmount()
        this.dispose = false;
      }
    }

  }
  isVisible() {
    return this.dispose;
  }
  gainingSpecialAmount(){
      let randomTreasure = getRandomNumber(1)
      switch (randomTreasure) {
        case 2:
        game.player.life.amountOfGainedCoins = 50;
        game.player.life.isGaining = true;
        coins += 50;
          break;
        case 3:
          game.player.slowIncreaseFireElectro(700)
          break;
        case 1:
          let lev = new WeaponLeveling(game.ctx, game.player.x, game.player.y - 100, 100, 100, "/public/Imagenes/weaponLvl2.png");
          game.weaponLevelings.push(lev)
          basicWeaponLevel++;
          setTimeout(() => {
            basicWeaponLevel--;
          }, 20000);
          break;
        default:
          break;
      }
  }


  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y && this.y < aura.y + aura.h;
    return colX && colY;
  }
}
