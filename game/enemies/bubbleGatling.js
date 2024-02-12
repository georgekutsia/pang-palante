class BubbleGatling {
  constructor(ctx, gatlingMoveSpeed, x) {
    this.ctx = ctx;
    this.x = x ||  this.ctx.canvas.width/2 -30;
    this.y =  -4;
    this.w = this.ctx.canvas.width / 21;
    this.h = this.ctx.canvas.width / 13;
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
    this.bubbleGatlingSound = new Audio("/public/sounds/shooting/bubbleGatling.mp3")
    this.bubbleGatlingSound.volume = 0.1;
    this.gatlingMoveSpeed = gatlingMoveSpeed || 0.1
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
    if(this.y + this.h >= 18) {this.g = 0; this.vy =0;};
    this.bubbleArray.forEach((e)=>e.move());
  }

    checkPosition(player){
      if( this.x !== player.x && this.x <player.x) this.vx = this.gatlingMoveSpeed
      if( this.x !== player.x && this.x > player.x) this.vx = -this.gatlingMoveSpeed
      if(this.x+ this.w/2 >= player.x + this.w/2  && this.x+ this.w/2 <= player.x + this.w/2 + 1 ) {
        this.playerDetected = true;
        this.shootingBubble()
      }
    }
    shootingBubble(){
      if(this.playerDetected){
          let bubble = new Bubble(ctx, this.x + this.w/2, this.y +this.h, this.w/2, this.w/2, -0.1)
          this.bubbleArray.push( bubble)
          this.bubbleGatlingSound.play()
          this.x -= 5;
          this.vy = -3;
          this.g = 1;
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
