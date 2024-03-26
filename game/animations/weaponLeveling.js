class WeaponLeveling {
  constructor(ctx, x, y, w, h, img) {
    this.ctx = ctx;
    this.x = x || 200;
    this.y = y ||  200;
    this.w = w || this.ctx.canvas.width/30;
    this.h = h || this.ctx.canvas.width/30;
    this.vx = 0;
    this.vy =  0;
    this.img = new Image();
    this.img.src = img || "/public/Imagenes/weaponLvl2.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;

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
    setTimeout(() => {
      this.tick++;
    }, 300);
    if (this.tick > 4) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 4) {
      this.img.frame = 4;
      setTimeout(() => {
        this.dispose = false;
      }, 500);
    }
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
