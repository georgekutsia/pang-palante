class WeaponBar {
  constructor(ctx, x, y, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -2;
    this.vx =  0;
    this.direction = direction; // recoge la dirección en la que se está moviendo player cuando se dispara, para luego usarlo al impactar sobre algunos objetos, tipo al rebotar de plataformas
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponBarZigzag.png";
    this.img.frame = 0;
    this.w = 5;
    this.h = this.ctx.canvas.height;
    this.tick = weaponBarSolidTick;
    this.fading = 0;
    this.dispose = true;
    this.solidState = false;  //al pasar a true, empieza la cuenta atrás para que desaparezca;
    this.life = barLife //las veces que la barra puede chocar contra las burbujas antes de desaparecer
  }

  draw() {
    if(this.fading >= 10 ) {
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
    if(this.y <= 1 || this.solidState) {
      this.tick--;
      this.img.src = "../public/Imagenes/weaponBarSolid.png";
      this.vy = 0;
      if(this.tick <= 100) {
        this.fading++
        if(this.fading >=20){
          this.fading = 0;
        }
      }
      if(this.tick <=0) {
        this.dispose = false;
        this.tick = -1
      }
    }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  isVisible() {
    return this.dispose ;
  }
}