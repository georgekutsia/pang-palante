class BubbleCannon {
  constructor(ctx, x, y, bubX, bubY, gG, vx, vy) {
    this.ctx = ctx;
    this.x = x || 0;
    this.y = y || 80;
    this.w = this.ctx.canvas.width / 20;
    this.h = this.ctx.canvas.width / 13;
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
  }

  draw() {
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

  }
  move() {
    console.log("bulala")
    this.x += this.vx;
    this.y += this.vy;
    if(this.y + this.h >= 18) {this.g = 0; this.vy =0;};
    this.bubbleArray.forEach((e)=>e.move());
    if(this.shooting){
      this.tick++;
      if(this.tick > 2){
        this.img.frame++;
        this.tick = 0;
      }
      if(this.img.frame >3){
      this.img.frame = 0;
      this.shootingBubble()
      this.shooting = false;
    }
  }
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
