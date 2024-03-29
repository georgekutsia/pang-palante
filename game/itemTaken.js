class ItemTaken {
  constructor(ctx, x, y, extraW, extraH) {
    this.ctx = ctx;
    this.x =  game.player.x ;
    this.y = game.player.y - game.player.h*5;
    this.extraX = x || 0;
    this.extraY = y || 0;
    this.extraW = extraW || 0;
    this.extraH = extraH || 0;
    this.img = new Image();
    this.img.src = itemTakenImages
    this.img.framex = 0;
    this.img.framey = 0;
    this.w =  this.ctx.canvas.width / 15 + this.extraW;
    this.h =this.ctx.canvas.width / 15 + this.extraH; 
    this.tick = 0;
    this.dispose = true;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.framex * this.img.width) / 3,
      (this.img.framey * this.img.height) / 6,
      this.img.width / 3,
      this.img.height / 6,
      this.x + this.extraX,
      this.y + this.extraY ,
      this.w,
      this.h
    );
  }
  move() {
    this.x = game.player.x - game.player.w/4 ;
    this.y = game.player.y - game.player.h/4;
    this.tick++
    if(this.tick >= 4){
      this.img.framex++
      this.tick = 0
    }
    if(this.img.framex > 2){
      this.img.framex = 0;
      this.img.framey ++;
    }
    if(this.img.framey > 5 ){
      this.dispose = false;
    }
  }

  isVisible() {
    return  this.dispose  //determina cuándo es visible el obstáculo
  }
}
