class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 5;
    this.y = 0;
    this.w = this.ctx.canvas.width/35;
    this.h = this.ctx.canvas.width/35;
    this.total = 5; // Puedes cambiar esto a cualquier número, entero o decimal
    this.img = new Image();
    this.img.src = "../public/Imagenes/stats/heart.png";
    this.imgHalf = new Image();
    this.imgHalf.src = "../public/Imagenes/stats/heartHalf.png";
    this.emptyHeart = new Image();
    this.emptyHeart.src = "../public/Imagenes/emptyHeart.png";
    this.healingHearts = [];
    this.healingDamages = [];
    this.timeStopped = [];
    this.isHealing = true;
    this.gainCoins = [];
    this.isGaining = false;
    this.isLosing = false;
    this.amountOfGainedCoins = 0;
  }

  draw() {
    this.ctx.save();
    this.ctx.drawImage(this.imgHalf, this.x, this.y, this.w, this.h);
    if(healingDamageIsActivated){
    for (let i = 0; i < amountOfBullsEyeForHealth; i++) {
      const emptyHeartX = -5 + i*20;
      this.ctx.drawImage(this.emptyHeart, emptyHeartX, 15, this.ctx.canvas.width/35, this.ctx.canvas.width/35);
    }
  }
    let place
    for (let i = 0; i < Math.floor(this.total); i++) {
      place = this.x + 30*i
      if (this.isHealing && i === Math.floor(this.total) - 1 && this.total < maxLife) {
        let healHeart = new HealingHeart(this.ctx, place+1, 0)
        this.healingHearts.push(healHeart)
        this.isHealing = false
      }
      this.ctx.drawImage(this.img, place, this.y, this.w, this.h);
      
    }
    if (this.total % 1 !== 0) {
      this.ctx.drawImage(this.imgHalf, place + 30, this.y, this.w, this.h);
    }
    this.ctx.restore();
    if(this.total >= maxLife){
      this.total = maxLife
    }

    if (this.isGaining) {
      for (let i = 0; i < this.amountOfGainedCoins; i++) {
        setTimeout(() => {
          let coins = new GainCoins(this.ctx, 50 + i*2 )
          this.gainCoins.push(coins)
        }, 100 + i*150);
      }
      this.isGaining = false;
    }


    if(this.isLosing){
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          let coins = new GainCoins(this.ctx, 50 + i*4, 1, -2);
          this.gainCoins.push(coins);
        }, 100 + i*150);
    }
    this.isLosing = false;
  }
    this.healingHearts.forEach(heart => heart.draw())
    this.healingHearts.forEach(heart => heart.move())
    this.healingHearts = this.healingHearts.filter(heart => heart.isVisible())

    if(healingDamageIsActivated){
      this.healingDamages.forEach(healDam => healDam.draw())
      this.healingDamages.forEach(healDam => healDam.move())
      this.healingDamages = this.healingDamages.filter(healDam => healDam.isVisible())
    }
    if(timeStopped){
      this.timeStopped.forEach(timeSt => timeSt.draw())
      this.timeStopped.forEach(timeSt => timeSt.move())
      this.timeStopped = this.timeStopped.filter(timeSt => timeSt.isVisible())
    }
    this.gainCoins.forEach(coin => coin.move())
    this.gainCoins.forEach(coin => coin.draw())
    this.gainCoins = this.gainCoins.filter(coin => coin.isVisible())
  }

  isVisible() {
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }
}
