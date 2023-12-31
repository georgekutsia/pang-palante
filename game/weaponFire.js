class WeaponFire {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -1;
    this.vx = 0;
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponFire1.png";
    this.img.frame = 0;
    this.w = this.ctx.canvas.width/ 20;
    this.h = this.ctx.canvas.width/ 20;
    this.flameSpinTick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 5,
      0,
      this.img.width / 5,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.w += 0.2; //aumenta el ancho de la bala mientras sube
    this.h += 0.2; //aumenta la altura de la bala mientra sube
    this.flameSpinTick++
    if(this.flameSpinTick >= 2){
      this.img.frame++;
    this.flameSpinTick = 0
    }
    if(this.img.frame > 4){
      this.img.frame = 0;
    }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.y >= 0;
  }
}