class WeaponFire {
  constructor(ctx, x, y,  w, h, vx, vy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = vx || -0.18; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = vy || -0.5;
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponFire1.png";
    this.img.frame = 0;
    this.w = w  || this.ctx.canvas.width/ 80;
    this.h = h || this.ctx.canvas.width/ 29;
    this.flameSpinTick = 0;
    this.damage = 0.08;

    this.fireShootSOund = new Audio("/public/sounds/shooting/fireWeaponSound2.mp3")
    this.fireShootSOund.volume = 0.03;
    this.shoot = true;

  }

  draw() {
    if(this.shoot){
      this.fireShootSOund.play();
      this.shoot = false;
    }
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
    this.vy = this.vy -= fireWeaponSpeedYWhenCollides
    this.x += this.vx + fireWeaponSpeedXWhenCollides;
    this.y += this.vy + fireWeaponSpeedYWhenCollides;
    this.w += fireSizing; //aumenta el ancho de la bala mientras sube
    this.h += fireSizing; //aumenta la altura de la bala mientra sube
    this.flameSpinTick++
    if(this.flameSpinTick >= 1){
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
  collidesMiniboss1(objetivo) {
      const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x;
      const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h/2;
      return colX && colY;
  }
  shootFireToSides(){
    let newFire1 = new WeaponFire(this.ctx, this.x + this.w/2, this.y + this.h/2, 30, 30, 2, 0)
    let newFire2 = new WeaponFire(this.ctx, this.x + this.w/2, this.y + this.h/2, 30, 30, -2, 0)
    game.player.bulletFireArray.push(newFire1, newFire2)
  }
  isVisible() {
    return this.y + this.h >= 0;
  }
}