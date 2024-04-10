class CadenaAnimation {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width - 50;
    this.y = 90;
    this.w = this.ctx.canvas.width/20;
    this.h =  this.ctx.canvas.width/20;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/cadenaAnimation.png";
    this.img.framex = -1;
    this.img.framey = 0;
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
        this.x,
        this.y,
        this.w,
        this.h
        );
  }

  move() {
    if (this.img.framex > 2) {
      this.img.framex = 0;
      this.img.framey++
    }
    if(this.img.framey > 6){
      this.img.framex = -1;
      this.img.framey = 0;
    }
    if(this.img.framex >= 0 && this.img.framey >= 1){
      this.activated();
    }
  }

  activated(){
    cadenaSoundFinalPiece.play()
    this.tick++;
    if(this.tick % 5 === 0)
    this.img.framex++;
  }
  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
