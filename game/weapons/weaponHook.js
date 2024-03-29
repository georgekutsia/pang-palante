class WeaponHook {
  constructor(ctx, x, y, ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -15;
    this.vx =  0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/hookup2.png";
    this.img.frame = 0;
    this.w = this.ctx.canvas.width /50;
    this.h = this.ctx.canvas.width/2;
    this.tick = 20;
    this.fading = 0;
    this.dispose = true;
    this.solidState = false;  //al pasar a true, empieza la cuenta atrás para que desaparezca;
    this.life = barLife //las veces que la barra puede chocar contra las burbujas antes de desaparecer

    this.hittingTop = true;
  }

  draw() {
    if(this.fading >= 3 ) {
      this.ctx.globalAlpha = 0.3;
    }
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.width) / 1,
      this.img.width / 1,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.globalAlpha = 1;

  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++
      if(this.tick >=100) {
        this.dispose = false;
      }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  collidesTop(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x;
    const colY =this.y + 10 > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.dispose ;
  }
}