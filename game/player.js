class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = this.ctx.canvas.height - 21;
    this.w = this.ctx.canvas.width / 15;
    this.h = this.ctx.canvas.width / 15;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.img.frame = 3;
    this.count = 1;
    this.bulletArray = [];
    this.frameAmount = 5;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / this.frameAmount,
      0,
      this.img.width / this.frameAmount,
      this.img.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.bulletArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
      console.log(this.count)

    if (this.count > 1 ) {
      this.img.frame++;
      this.count = 0;
    }
    if (this.img.frame > 4) {
      this.img.frame = 0;
    }

    //todo: lo que hace que el personaje no se salga de la pantalla. se podría meter en una función aparte y luego llamarla aquí
    if (this.y <= 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h > this.ctx.canvas.height + 5) {//todo: bloqueo para el limite inferior. No se que hace el + 5 exactamente y la vy
      this.y = this.ctx.canvas.height - this.h - 1;
      this.vy = 0;
    }
    if (this.x <= 0) { //todo: bloque para el límite izquierdo
      this.x = 0;
      this.vx = 0;
    }
    if (this.x + this.w >= this.ctx.canvas.width) {//todo: bloqueo para el limite derecha
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }
    

    this.bulletArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
  }
//consultar constantes para el código de cada tecla
  keyDown(key) {
    if (key === W) {
      this.vy = -2.5;
    }
    if (key === A) {
      this.count++;
    this.vx = -2.5;
    this.img.src = "../public/Imagenes/pangRunLeft.png";
    this.frameAmount = 5;
    }
    if (key === D) {
      this.count++;
    this.vx = 2.5;
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.frameAmount = 5;
    }
    if (key === S && this.y + this.h < this.ctx.canvas.height - 21) {//todo: bloqueo para el limite inferior
      this.vy = 2.5;
    }
    if(key === B){
      this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 1;
      this.shoot();
      B = 0;
      recharge -= 1000;
      if(recharge <= 1000){
        recharge = 1000;
      }
      setTimeout(() => {
        B = 66;
      }, recharge);
    }
  }
  keyUp(key) {
    if (key === W) {
      this.vy = 0;
    }
    if (key === A) {
      this.vx = 0;
    this.img.src = "../public/Imagenes/pangStandShoot.png";
    this.frameAmount = 2;
    this.img.frame = 0;

    }
    if (key === D) {
      this.vx = 0;
    this.img.src = "../public/Imagenes/pangStandShoot.png";
    this.frameAmount = 2;
    this.img.frame = 0;

    }
    if (key === S) {
      this.vy = 0;
    }

    if (key === B) {
      this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 0;
    }
  }

  
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }

  shoot() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    const bullet = new Weapon1(this.ctx, this.x , this.y);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;

  }
}