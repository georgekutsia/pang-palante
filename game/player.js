class Player {
  constructor(ctx, moving) {
    this.ctx = ctx;
    this.x = 60;
    this.h = this.ctx.canvas.width / 15;
    this.y = this.ctx.canvas.height - this.h;
    this.w = this.ctx.canvas.width / 18;
    this.life = new Life(ctx)
    this.vx = 0;
    this.vy = 0;
    this.g = 0.03;
    this.img = new Image();
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.img.frame = 3;
    this.count = 1;
    this.bulletArray = [];
    this.bulletFireArray = [];
    this.bulletBarArray = [];
    this.frameAmount = 5;
    this.amountOfFireShoots = 0;
    this.moving = moving;
    this.immune = false; // al recibir daño se vuelve inmune durante unos segundos
    this.fading = 0; //necesario para el parpadeo del personaje cuando es inmune

  }

  draw() {
    if(this.immune){
      this.fading++
      if(this.fading >= 20){
        this.fading = 0;
      }
    }
    if(this.fading >= 10 ) {
      this.ctx.globalAlpha = 0.3;
    }
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
    this.ctx.globalAlpha = 1;
    this.bulletArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletFireArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletBarArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.life.draw()
    // this.ctx.fillText(`Life ${this.life}`, this.ctx.canvas.width - 50, 15); // contador de vida 
  }

  move() {
    this.vy += this.g
    this.x += this.vx;
    this.y += this.vy;
    this.moving = this.vx
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
    if (this.y + this.h >= this.ctx.canvas.height) {//todo: bloqueo para el limite inferior.
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
      this.g = 0;
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
    this.bulletFireArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
    this.bulletBarArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
  }
//consultar constantes para el código de cada tecla
  keyDown(key) {
    if (key === W ) {
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
    if (key === S /*&& this.y + this.h < this.ctx.canvas.height - this.h*/) {//todo: bloqueo para el limite inferior
      this.vy = 2.5;
      this.y = this.y + 5;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
    }
    if(key === B){
      this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 1;
      this.shoot();
      B = 0;
      setTimeout(() => {
        this.img.frame = 0;
      }, 50); // para que parezca que dispara y se levanta al poco tiempo
      setTimeout(() => {
        B = 66;
      }, recharge);
    }

    if(key === N){
      this.amountOfFireShoots -= 1;
      this.shootFire();
      if(this.amountOfFireShoots <= 0){
        N = 0;
        this.amountOfFireShoots = 5;
      }
    }
    if(key === M){
      this.shootBar();
    }
    if(key === ALT ){
      this.vy = jumpHeight 
      this.g = 0.2
      ALT = 0;
      setTimeout(() => {
        ALT = 16;
      }, jumpCooldown);
    }

  }
  keyUp(key) {
    if (key === W) {
      this.vy = 0;
      W = 0;  //esto parece que soluciona un bug con la escalera, que si pulsas muy rapido y te sales a un lado, puedes flotar un rato
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

    if (key === B ) {
      this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 0;
    }
  }
  
  
  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  loseLife(damage){
    this.life.total -= damage;
    this.immune = true;
    setTimeout(() => {  // para desactivar immune y que el personaje deje de parpadear
        this.immune = false;
        this.fading = 0;
    }, immuneTime);
  }
  shoot() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, this.moving);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }

  shootFire(){
    const bulletFire = new WeaponFire(this.ctx, this.x, this.y)
    this.bulletFireArray.push(bulletFire);
  }
  shootBar(){
    const bulletBar = new WeaponBar(this.ctx, this.x, this.y)
    this.bulletBarArray.push(bulletBar);
  }
}