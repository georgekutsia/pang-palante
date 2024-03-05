class ItemTaken {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = game.player.x - game.player.w;
    this.y = game.player.y;
    this.img = new Image();
    this.img.src = itemTakenImages
    this.img.framex = 0;
    this.img.framey = 0;
    this.w =  this.ctx.canvas.width / 15;;
    this.h =this.ctx.canvas.width / 15; 
    this.tick = 0;
    this.dispose = true;
  }

  draw() {
    console.log(game.player.vx)
    this.ctx.drawImage(
      this.img,
      (this.img.framex * this.img.width) / 3,
      (this.img.framey * this.img.height) / 6,
      this.img.width / 4,
      this.img.height / 7,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.x = game.player.x - game.player.w/2;
    this.y = game.player.y;
    this.tick++
    if(this.tick >= 5){
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
