class BubbleGatling {
  constructor(ctx, gatlingMoveSpeed, x, bubbleWidth = 0, amountOsShoots ) {
    this.ctx = ctx;
    this.x = x ||  this.ctx.canvas.width/2 -30;
    this.y =  -14;
    this.w = this.ctx.canvas.width / 30 + bubbleWidth/2;
    this.h = this.ctx.canvas.width / 20 + bubbleWidth/2;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0.2
    this.dispose = true;
    this.img = new Image();
    this.img.src = "/public/Imagenes/bubbleGatling.png";
    this.img.frame = 0;
    this.imgTick = 0;
    this.bubbleArray = []
    this.playerDetected = false;
    this.damage = 0.001
    this.gatlingMoveSpeed = gatlingMoveSpeed || 0.5;
    this.bubbleWidth = bubbleWidth || 0;
    this.amountOsShoots = amountOsShoots || 30;
    this.moving = true;
    this.electrifEffect = true;
  }

  draw() {
    if(this.boxLevel===1)this.img.src = "/public/Imagenes/box1.png";
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.bubbleArray.forEach((e)=>e.draw());
    this.bubbleArray = this.bubbleArray.filter((e)=>e.isVisible());
  }
  move() {
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
    if(this.y + this.h >= 60) {this.g = 0; this.vy =0;};
    this.bubbleArray.forEach((e)=>e.move());
  }

  checkPosition(player){
    if(this.moving){
      if( this.x !== player.x && this.x <player.x) this.vx = this.gatlingMoveSpeed
      if( this.x !== player.x && this.x > player.x) this.vx = -this.gatlingMoveSpeed
      if(this.x+ this.w/2 >= player.x + this.w/2  && this.x+ this.w/2 <= player.x + this.w/2 + 1 ) {
        this.playerDetected = true;
        if(this.bubbleArray.length <= this.amountOsShoots){
          this.shootingBubble()
        }
      }
    } else {
      this.vx = 0;
      this.vy = 0;
      if(this.electrifEffect){
        setTimeout(() => {
            let shock = new ElectricShock(game.ctx, this.x - 20, this.y - 60, 100, 200, "/public/Imagenes/electricBurbalas1.png");
            game.electricShocks.push(shock)
          this.electrifEffect = true;
          }, 2500);
          this.electrifEffect = false;
      }
    }
  }
  shootingBubble(){
    if(this.playerDetected && this.y + this.h >= 60 ){  //bubbleWidth es el tamaño de las burbujas y hay que resituar desde donde dispara según el tamaño
        let bubble = new Bubble(ctx, this.x + this.w/2 - 10 - this.bubbleWidth/2, this.y +this.h, this.w - 10 + this.bubbleWidth, this.w - 10+ this.bubbleWidth, -0.1)
        this.bubbleArray.push( bubble)
        bubbleGatlingSound.play()
        this.x -= 5;
        this.vy = -4 - this.bubbleWidth/10;
        this.g = 0.4;
        this.playerDetected = false;
    }
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
