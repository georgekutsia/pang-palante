class WeaponBar {
  constructor(ctx, x, y, ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -2;
    this.vx =  0;
    this.w = 5;
    this.width = 0,//para cuando la anchura aumenta al electrificarse, para que también la electricidad lo haga
    this.h = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "../public/Imagenes/weaponBarZigzag.png";
    this.img.frame = 0;
    this.tick = weaponBarSolidTick;

    this.electroImg = new Image();   //crear nueva imágene ne canvas
    this.electroImg.src = "/public/Imagenes/electrifiedBar2.png";  //definir cual es la nueva imagen
    this.electroImg.frame = 0;
    this.electroTick = 0;
    this.isElectrified = false;

    this.fading = 0;
    this.dispose = true;
    this.solidState = false;  //al pasar a true, empieza la cuenta atrás para que desaparezca;
    this.life = barLife //las veces que la barra puede chocar contra las burbujas antes de desaparecer
    this.barHit = new Audio("/public/sounds/shooting/barHit.mp3")
    this.barHit.volume = 0.05
    this.hittingTop = true;
  }

  draw() {
    if(this.fading >= 10 ) {
      this.ctx.globalAlpha = 0.3;
    }
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.globalAlpha = 1;

if(this.isElectrified){
  for (let i = 0; i < 17;  i++) {
    this.ctx.drawImage(
      this.electroImg,
      ((this.electroImg.frame+i)  * this.electroImg.width) / 17,
      0,
      this.electroImg.width / 17,
      this.electroImg.height,
      this.x - 6,
      this.y + i*10 , 
      this.width + 14,
      14
      );
  }
  }
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.isElectrified){
      electroBarSound.play();
      this.electroTick++;
      if(this.electroTick > 5){
        this.electroImg.frame++;
        this.electroTick = 0;
      }
      if(this.electroImg.frame >16){
        this.electroImg.frame = 0;
      }
    }
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
    if(this.hittingTop &&this.vy === 0){
  this.barHit.play();
  this.hittingTop = false;
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