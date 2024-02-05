class WeaponFire {
  constructor(ctx, x, y,  w, h) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = -0.065; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = -0.5;
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponFire1.png";
    this.img.frame = 0;
    this.w = w  || this.ctx.canvas.width/ 29;
    this.h = h || this.ctx.canvas.width/ 29;
    this.flameSpinTick = 0;
    this.damage = 0.05;
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
    this.w += fireSizing; //aumenta el ancho de la bala mientras sube
    this.h += fireSizing; //aumenta la altura de la bala mientra sube
    this.flameSpinTick++
    if(this.flameSpinTick >= 0.5){
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
    return this.y + this.h >= 0;
  }
}