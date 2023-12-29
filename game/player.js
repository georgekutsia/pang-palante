class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 50;
    this.w = this.ctx.canvas.width / 25;
    this.h = this.ctx.canvas.width / 25;
    this.vx = 1;
    this.vy = 0;
    // this.img = new Image();
    // this.img.src = "../public/img/magikarp.png";
    // this.img.frame = 0;
    this.count= 0;
    this.bulletArray = [];
  }
  draw() {
    // this.ctx.drawImage(
    //   this.img,
    //   0,
    //   (this.img.frame * this.img.height) / 3,
    //   this.img.width,
    //   this.img.height / 3,
    //   this.x,
    //   this.y,
    //   this.w,
    //   this.h
    // );

    ctx.fillStyle = '#FF0000';  // Color del cuadrado (rojo en este caso)
    ctx.fillRect(this.x, this.y, this.w, this.h); 
    this.bulletArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
  }

  move() {
    this.x += this.vx ;
    this.y += this.vy;
    this.count++;
    // if (this.count > 20 ) {
    //   this.img.frame++;
    //   this.count = 0;
    // }
    // if (this.img.frame > 2) {
    //   this.img.frame = 0;
    // }
    // if (this.y <= 0) {
    //   this.y = 0;
    //   this.vy = 0;
    // }
    // if (this.y + this.h > this.ctx.canvas.height + 5) {
    //   this.y = this.ctx.canvas.height - this.h + 5;
    //   this.vy = 0;
    // }
    // if (this.x <= -10) {
    //   this.x = -10;
    //   this.vx = 0;
    // }
    // if (this.x + this.w >= this.ctx.canvas.width) {
    //   this.x = this.ctx.canvas.width - this.w;
    //   this.vx = 0;
    // }

    this.bulletArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare

  }
//consultar constantes para el código de cada tecla
  keyDown(key) {
    if (key === W) {
      this.vy = -0.5;
    }
    if (key === A) {
      this.vx = -0.5;
    }
    if (key === D) {
      this.vx = 0.5;
    }
    if (key === S) {
      this.vy = 0.5;
    }
    if(key === B){
      this.shoot();
    }
  }
  keyUp(key) {
    if (key === W) {
      this.vy = 0;
    }
    if (key === A) {
      this.vx = 0;
    }
    if (key === D) {
      this.vx = 0;
    }
    if (key === S) {
      this.vy = 0;
    }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }

  shoot() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    const bullet = new Weapon1(this.ctx, this.x , this.y );
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet
  }
}
