class Player {

  constructor(ctx, moving) {
    this.ctx = ctx;
    this.x = 120;
    this.h = this.ctx.canvas.width / 19;
    this.y = this.ctx.canvas.height - this.h;
    this.w = this.ctx.canvas.width / 23;
    this.life = new Life(ctx)
    this.charger = new Charger(ctx)
    this.vx = 0;
    this.vy = 0;
    this.g = 0.03; //gravedad
    this.r = 0; //rozamiento
    this.feet = this.y + this.h
    this.auraIsActive = false;
    this.auraTime = 5000;
    this.frameTick = 1;
    this.bulletArray = [];
    this.bulletFireArray = [];
    this.bulletBarArray = [];
    this.frameAmount = 5;
    this.fireAmount = 30;
    this.moving = moving;
    this.immune = false; // al recibir daño se vuelve inmune durante unos segundos
    this.fading = 0; //necesario para el parpadeo del personaje cuando es inmune
    this.charging = 0;  // acumula la carga, lo que dibuja el semicírculo
    this.chargingFires = false; //   se pone en true mientras carga el disparo fuerte de fuego
    this.megaFireBlaster = false;
    this.megaFireBlasterAmount = 0;
    this.barAmount = 430;
    this.ableToJump = false;

    this.img = new Image();
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.img.frame = 3;
    this.auraImg = new Image();
    this.auraImg.src = "/public/Imagenes/aura1.png";
    this.weaponFire = new Image();
    this.weaponFire.src = "/public/Imagenes/weaponFire.png";
    this.dodgeQ = new Image();
    this.dodgeQ.src = "/public/Imagenes/q.png";
    this.dodgeE = new Image();
    this.dodgeE.src = "/public/Imagenes/e.png";
    this.machinegunPaint = new Image();
    this.machinegunPaint.src = "/public/Imagenes/machinegunPaint.png";
    this.barItem = new Image();
    this.barItem.src = "/public/Imagenes/barItem.png";


    this.blasterExplosion = new Audio("../public/sounds/megablasterBlastSound.mp3");
    this.blasterExplosion.volume = 1; //
    this.blasterCharging = new Audio("../public/sounds/blasterChargindSound.mp3");
    this.blasterCharging.volume = 1; //
    this.playerDamageSound1 = new Audio("../public/sounds/playerDamageSound1.mp3");
    this.playerDamageSound1.volume = 0.1; //
    this.shootSound = new Audio("/public/sounds/shooting/weaponShootSound.mp3");
    this.shootSound.volume = 0.1;
    this.shootBarSound = new Audio("/public/sounds/shooting/shootBarSound2.mp3");
  }

  draw() {
    this.bulletArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletFireArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletBarArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.life.draw()
    if(Q === 81){
      this.ctx.drawImage(this.dodgeE, this.x + this.w , this.y + this.h/2, this.w/2, this.h/2);
      this.ctx.drawImage(this.dodgeQ, this.x-this.w/1.6, this.y + this.h/2, this.w/2 , this.h/2);
    }
    for (let i = 0; i < this.charging /10 -1; i++) {
      if(this.charging >= 11)
      this.ctx.drawImage(this.weaponFire, this.x-20 + i*5, this.y-15, this.w , this.h);
    }
    if (this.barAmount > 0) {
      this.ctx.save()
      this.ctx.font = "10px Arial"
      this.ctx.fillText(`x ${this.barAmount}`, this.ctx.canvas.width  - 20, 10);
      this.ctx.drawImage(this.barItem, this.ctx.canvas.width  - 28, 1, this.w/1.8 , this.h/1.3);
      this.ctx.restore()
    }
    if(this.fireAmount>=1){    
                   //x, y, la cantidad por la que se dibuja, radio exterior, radio interior, color de inicio, color de medio, color de final es negro
      this.charger.draw(this.x + 5, this.y + 10, this.fireAmount, 20, 19, "aqua", "blue")
    }
    if(this.charging >=1){
      this.charger.draw(this.x + 5, this.y + 10, this.charging, 16, 15, "yellow", "red")
    }
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
    if(recharge <= 200){
      this.ctx.drawImage(this.machinegunPaint, this.x, this.y +5, this.ctx.canvas.width/30, this.ctx.canvas.width/26);
    }
    if(this.auraIsActive){
    this.ctx.drawImage(this.auraImg, this.x-7, this.y-5, this.w + 10, this.h+10);
    }
  }

  move() {
    this.vy += this.g
    this.velocidadX = this.vx += this.r;
    if(this.velocidadX <= 0.5 && this.velocidadX >= -0.5 && this.r !==0){
      this.r = 0;
      this.vx = 0;
      this.img.frame = 0;
    }
    this.x += this.velocidadX;
    this.y += this.vy;
    this.moving = this.vx
    if(this.vx){
      this.frameTick++
      if (this.frameTick > 10  ) {
        this.img.frame++;
        this.frameTick = 0;
      }
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
//consultar constantes para el código de cada teclahjkl-
  keyDown(key) {
    if (key === W ) {
      this.vy = -playerSpeed;
    }
    if (key === A) {
      this.frameTick++;
    this.vx = -playerSpeed;
    this.img.src = "../public/Imagenes/pangRunLeft.png";
    this.frameAmount = 5;
    }
    if (key === D) {
    this.vx = playerSpeed;
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.frameAmount = 5;
    }
    if (key === S /*&& this.y + this.h < this.ctx.canvas.height - this.h*/) {//todo: bloqueo para el limite inferior
      this.vy = playerSpeed;
      this.y = this.y + jumpDownDistance;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
    }

    if(key === Q){
      this.r = 0.4;
      this.vx = -6;
      this.img.frame = 0;
      Q = 0;
      E = 9;
      setTimeout(() => {
        Q = 81;
        E = 69;
      }, 1000);
    }
    if(key === E){
      this.r = -0.4;
      this.vx = 6;
      this.img.frame = 0;
      Q = 0;
      E = 9;
      setTimeout(() => {
        Q = 81;
        E = 69;
      }, 1000);
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

    if(key === N && this.fireAmount > 0){ 
      this.fireAmount -= 1;
      this.shootFire();
      if(this.fireAmount <= 0){
        N = 0;
      }
    }
    if(key === M){
      this.shootBar();
      this.barAmount--;
      if(this.barAmount <= 0)this.barAmount = 0;
      M = 0
        setTimeout(() => {
          M = 77
        }, 100);
    }
    if(key === ALT && this.vy === 0 || key === ALT && this.ableToJump === true){
      this.vy = jumpHeight 
      this.g = 0.2
      this.ableToJump = false;
      ALT = 0;
      setTimeout(() => {
        ALT = 16;
      }, jumpCooldown);
    }
    if(key === K && this.megaFireBlaster ){
      A = 0;
      D = 0;
      this.chargingFires = true;
      this.charging++;
      this.blasterCharging.volume = 1;
      this.blasterCharging.play()
      if(this.charging >= this.megaFireBlasterAmount){
        this.charging = this.megaFireBlasterAmount;
      this.blasterCharging.volume = 0;
      }
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
    if(key === K && this.megaFireBlaster ){
      A = 65;
      D = 68;
      this.chargingFires = false;
      this.megaFireBlaster = false;
      if(this.charging >= 3){
        for (let i = 0; i < this.charging; i++) {
          this.blasterExplosion.play();
          this.blasterCharging.volume = 0;
          if(i % 10 === 0  && i % 20 !==0 ){
            const bulletFire = new WeaponFire(this.ctx, this.x + this.w-i, this.y, this.ctx.canvas.width/20, this.ctx.canvas.width/18)
            this.bulletFireArray.push(bulletFire);
          }
          if(i % 20 === 0 && i >= 10){
            const bulletFire = new WeaponFire(this.ctx, this.x +i, this.y, this.ctx.canvas.width/20, this.ctx.canvas.width/18)
            this.bulletFireArray.push(bulletFire);
          }
        }
        this.charging -= this.charging;
      }
    }
  }
  
  
  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  loseLife(damage, immuneState){
    this.life.total -= damage;
    this.immune = immuneState;
    this.playerDamageSound1.play();
    setTimeout(() => {  // para desactivar immune y que el personaje deje de parpadear
        this.immune = false;
        this.fading = 0;
    }, immuneTime);
  }
  
  gainLife(){
    this.life.total += 1;
  }
  shoot() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    this.shootSound.play()
    const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, this.moving);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }

  shootFire(){
    const bulletFire = new WeaponFire(this.ctx, this.x, this.y)
    this.bulletFireArray.push(bulletFire);
  }
  shootBar(){
    if(this.barAmount > 0){
    this.shootBarSound.volume = 0.09;
    this.shootBarSound.play();
    const bulletBar = new WeaponBar(this.ctx, this.x + 5, this.y)
    this.bulletBarArray.push(bulletBar);
  }
  }


}