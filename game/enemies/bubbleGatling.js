class BubbleGatling {
  constructor(ctx,x, y, boxLevel, containsRandom, lootNumber, bubblePopup) {
    this.ctx = ctx;
    this.x = x || 10;
    this.y = y || -4;
    this.w = this.ctx.canvas.width / 25;
    this.h = this.ctx.canvas.width / 10;
    this.tick = 0
    this.vx = 0;
    this.vy = 0;
    this.g = 0
    this.dispose = true;
    this.boxImg = new Image();
    this.boxImg.src = "/public/Imagenes/bubbleGatling.png";
    this.boxImg.frame = 0;
    this.imgTick = 0;
    this.boxLevel = boxLevel;// de 1 a 3 determina la resistenci de la caja
    this.containsRandom = containsRandom || false; //determina si el loot será random o no. mirar en funciones
    this.lootNumber = lootNumber || 5
    this.bubblePopup = bubblePopup || false;
    this.bubbleArray = []
    this.playerDetected = false;
  }

  draw() {
    if(this.boxLevel===1)this.boxImg.src = "/public/Imagenes/box1.png";

    this.ctx.drawImage(
      this.boxImg,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.bubbleArray.forEach((e)=>e.draw());
  }
  move() {
    this.x += this.vx
    this.bubbleArray.forEach((e)=>e.move());
  }

    checkPosition(player){
      if( this.x !== player.x && this.x <player.x) this.vx = 0.1
      if( this.x !== player.x && this.x > player.x) this.vx = -0.1
      if(this.x >= player.x -0.5  && this.x <= player.x+0.5 ) {
        this.playerDetected = true;
        this.shootingBubble()
      }
    }
    shootingBubble(){
      if(this.playerDetected){
        let bubble = new Bubble(ctx, this.x, this.y + 10, 20, 20, 0, 0,)
        this.bubbleArray.push( bubble)
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
