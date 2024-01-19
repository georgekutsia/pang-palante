class BasicWeapon {
  constructor(ctx, x, y, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -3;
    this.vx =  0;
    this.direction = direction; // recoge la dirección en la que se está moviendo player cuando se dispara, para luego usarlo al impactar sobre algunos objetos, tipo al rebotar de plataformas
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponStone.png";
    this.img.frame = 0;
    this.tick = 0; //para que no rebote eternamente
    this.w = this.ctx.canvas.width/ 60;
    this.h = this.ctx.canvas.width/ 25;
    this.bulletDirection = true;
  }

  draw() {
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
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.y + this.h >= this.ctx.canvas.height) {
    this.vy = -3
    }
    this.tick++
    if(this.tick >= 250){
      this.y = -200
    }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.y >= 0 ;
  }
}