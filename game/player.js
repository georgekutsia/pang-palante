class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 20;
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
    this.bulletPlatformArray = [];
    this.hooksArray = [];
    this.swordArray = []; //
    this.frameAmount = 5;
    this.immune = false; // al recibir daño se vuelve inmune durante unos segundos
    this.fading = 0; //necesario para el parpadeo del personaje cuando es inmune
    this.charging = 0;  // acumula la carga, lo que dibuja el semicírculo
    this.chargingFires = false; //   se pone en true mientras carga el disparo fuerte de fuego
    this.megaFireBlaster = false; //al ponerse en true, se puede activar la K
    this.electroAmount = 10; //cantidad de carga eléctrica que tiene
    this.megaFireBlasterAmount = 31; //la carga del blaster. cada 10, es una bola
    this.fireAmount = 20; //cantidad de fuegos que puedes disparar con N
    this.hookAmount = 10; // la cantidad de hooks con J
    this.barAmount = 20; //la cantidad de barras disponibles con M
    this.stepsAmount = 0; //cantidad de plataformas que puedes crear con O / P
    this.ableToJump = false;
    this.wasNotDamaged = true;
    this.bigWeaponBubblesMaxAmount = 0;
    this.platformCreator = true;
    this.hookedOnPlatform = false;
    this.img = new Image();
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.img.frame = 3;
    this.auraImg = new Image();
    this.auraImg.src = "/public/Imagenes/aura1.png";
    this.electricShieldImg = new Image();
    this.electricShieldImg.src = "/public/Imagenes/electricShield.png";
    this.electricShieldImg.frame = 0;
    this.electricShieldIsActive = false;
    this.electricShieldImgTick = 0;
    this.clickedH = false;
    this.shootUp = true;
    this.canClimb= false;
    this.diagonalShoot = false;
    this.walkingSpeed = 0;
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
    this.swordBack = new Image();
    this.swordBack.src = "/public/Imagenes/swordBack.png";
    this.swingSwordState = true;
    this.swordEquipped = false;
    this.swordLevel = 0;
    this.swordPowerUp = 8;
    this.swordPower1 = false;
    this.swordCooldown = 0;
    this.keySwitchCounter = 0;

    this.blasterExplosion = new Audio("../public/sounds/megablasterBlastSound.mp3");
    this.blasterExplosion.volume = 0.5; //
    this.blasterCharging = new Audio("../public/sounds/blasterChargindSound.mp3");
    this.blasterCharging.volume = 0.5; //
    this.playerDamageSound1 = new Audio("../public/sounds/playerDamageSound1.mp3");
    this.playerDamageSound1.volume = 0.05; //
    this.shootSound = new Audio("/public/sounds/shooting/weaponShootSound.mp3");
    this.shootSound.volume = 0.1;
    this.shootBarSound = new Audio("/public/sounds/shooting/shootBarSound2.mp3");
    this.hookShoot = new Audio("/public/sounds/shooting/hookShort.m4a")
    this.hookShoot.volume = 0.05
    this.electroSoundOn = new Audio("/public/sounds/electrofire/electrifingShield.mp3")
    this.electroSoundOn.volume = 0.1

    this.barInfo$$ = document.getElementById("bar-info")
    this.fireInfo$$ = document.getElementById("fire-info")
    this.hookInfo$$ = document.getElementById("hook-info")
    this.stepInfo$$ = document.getElementById("step-info")
    this.barImg$$ = document.getElementById("bar-img")
    this.fireImg$$ = document.getElementById("fire-img")
    this.hookImg$$ = document.getElementById("hook-img")
    this.stepImg$$ = document.getElementById("step-img")
    // move btns
    this.upBtn$$ = document.getElementById("upBtn");
    this.rightBtn$$ = document.getElementById("rightBtn");
    this.downBtn$$ = document.getElementById("downBtn");
    this.leftBtn$$ = document.getElementById("leftBtn");
    this.leftBtnDodge$$ = document.getElementById("leftBtnDodge");
    this.rightBtnDodge$$ = document.getElementById("rightBtnDodge");

    this.jumpBtn$$ = document.getElementById("jumpBtn");
    this.jumpBtnRight$$ = document.getElementById("jumpBtnRight");


    this.jumpBtn$$.addEventListener("touchstart", this.handleJump);
    this.jumpBtnRight$$.addEventListener("touchstart", this.handleJump);

    this.upBtn$$.addEventListener("touchstart", this.handleUp);
    this.rightBtn$$.addEventListener("touchstart", this.handleRight);
    this.downBtn$$.addEventListener("touchstart", this.handleDown);
    this.leftBtn$$.addEventListener("touchstart", this.handleLeft);
    this.rightBtnDodge$$.addEventListener("touchstart", this.handleRightDodge);
    this.leftBtnDodge$$.addEventListener("touchstart", this.handleLeftDodge);


    this.upBtn$$.addEventListener("touchend", this.handleUpU);
    this.rightBtn$$.addEventListener("touchend", this.handleRightU);
    this.downBtn$$.addEventListener("touchend", this.handleDownU);
    this.leftBtn$$.addEventListener("touchend", this.handleLeftU);
    // shoot btns
    this.shootBtn$$ = document.getElementById("shootBtn")
    this.fireBtn$$ = document.getElementById("fireBtn")
    this.cadenaBtn$$ = document.getElementById("cadenaBtn")
    this.blasterBtn$$ = document.getElementById("blasterBtn")

    this.shootBtn$$.addEventListener("touchstart", this.handleShoot);
    this.shootBtn$$.addEventListener("touchend", this.handleShootU);

    this.fireBtn$$.addEventListener("touchstart", this.handleFIre);
    this.cadenaBtn$$.addEventListener("touchstart", this.handleCadena);
    
    this.blasterBtn$$.addEventListener('touchstart', this.handleMegablaster);
    this.blasterBtn$$.addEventListener('touchend', this.handleMegablasterU);
    this.blasterBtn$$.addEventListener('touchcancel', this.handleMegablasterU);
  }
  handleShoot = (event) => {//*
    event.preventDefault(); 
    if(basicWeaponLevel >= 0)this.shoot();
    if(basicWeaponLevel >= 1)this.shootDouble()
    if(basicWeaponLevel >= 2)this.shootTriple()
    if(basicWeaponLevel >= 3)this.shootCuatruple()
    if(basicWeaponLevel >= 4)this.shootQuintuple()
    this.img.src = "../public/Imagenes/pangStandShoot.png";
    this.frameAmount = 2;
    this.img.frame = 1;
    B = 0;
    setTimeout(() => {
      this.img.frame = 0;
    }, 50); // para que parezca que dispara y se levanta al poco tiempo
    setTimeout(() => {
      B = 66;
    }, recharge);
    }
  handleShootU = () =>{ //*
    this.img.src = "../public/Imagenes/pangStandShoot.png";
    this.frameAmount = 2;
    this.img.frame = 0;
  }
  handleFIre = (event) => {//*
    event.preventDefault(); 
    if(this.fireAmount > 0){ 
      this.fireAmount -= 1;
      this.shootFire();
      if(this.fireAmount <= 0){
        N = 0;
      }
    }
  }
  handleCadena = (event) => {
    event.preventDefault(); 
    this.shootBar();
    this.barAmount--;
    if(this.barAmount <= 0)this.barAmount = 0;
    M = 0
      setTimeout(() => {
        M = 77
      }, 100);
  }
  handleMegablaster = (event) => {
    event.preventDefault(); 
    if (this.megaFireBlaster) {
      A = 65;
      D = 68;
      this.chargingFires = false;
      this.megaFireBlaster = true; // No estoy seguro de tu lógica, pero asegúrate de que se active correctamente
      this.chargingFires = true;
      this.charging++;
      this.blasterCharging.volume = 1;
      this.blasterCharging.play();

      if (this.charging >= this.megaFireBlasterAmount) {
        this.charging = this.megaFireBlasterAmount;
        this.blasterCharging.volume = 0;
      }
    }
  }

  handleMegablasterU = (event) => {
    event.preventDefault(); 
    if (this.megaFireBlaster) {
      A = 0;
      D = 0;
      this.chargingFires = false;
      this.megaFireBlaster = false;
      if (this.charging >= 3) {
        for (let i = 0; i < this.charging; i++) {
          this.blasterExplosion.play();
          this.blasterCharging.volume = 0;

          if (i % 10 === 0 && i % 20 !== 0) {
            const bulletFire = new WeaponFire(this.ctx, this.x + this.w - i, this.y, this.ctx.canvas.width / 20, this.ctx.canvas.width / 18)
            this.bulletFireArray.push(bulletFire);
          }

          if (i % 20 === 0 && i >= 10) {
            const bulletFire = new WeaponFire(this.ctx, this.x + i, this.y, this.ctx.canvas.width / 20, this.ctx.canvas.width / 18)
            this.bulletFireArray.push(bulletFire);
          }
        }
        this.charging -= this.charging;
      }
    }
  }

  handleJump = (event) => {
    event.preventDefault(); 
    if (this.vy === 0 || this.ableToJump === true) {
      this.vy = jumpHeight;
      this.g = 0.2;
      this.ableToJump = false;
      setTimeout(() => {
        this.jumpBtn$$.addEventListener("touchstart", this.handleJumpTouchStart);
      }, jumpCooldown);
    }
  };
  handleUp = (event) => {
  if(W === 87){
    event.preventDefault(); 
    this.vy = -playerSpeed;
  }
    }
    handleRight = (event) => {
      event.preventDefault(); 
      this.vx = playerSpeed;
      this.img.src = "../public/Imagenes/pangRunRight.png";
      this.frameAmount = 5;
    }
    handleLeft = (event) => {
  event.preventDefault(); 
      this.frameTick++;
      this.vx = -playerSpeed;
      this.img.src = "../public/Imagenes/pangRunLeft.png";
      this.frameAmount = 5;
    }
    handleDown = (event) => {
   event.preventDefault(); 
       this.vy = playerSpeed;
       this.y = this.y + jumpDownDistance;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
}
handleUpU = (event) => { //*
  event.preventDefault(); 
    this.vy = 0;
    W = 0;
}
handleDownU = (event) => {//*
  event.preventDefault(); 
  this.vx = 0;
  this.vy = 0;
  this.img.src = "../public/Imagenes/pangStandShoot.png";
  this.frameAmount = 2;
  this.img.frame = 0;
}
handleLeftU = (event) =>{//*
  event.preventDefault(); 
  this.vx = 0;
  this.img.src = "../public/Imagenes/pangStandShoot.png";
  this.frameAmount = 2;
  this.img.frame = 0;
}
handleRightU = (event) =>{//*
  event.preventDefault(); 
  this.vx = 0;
  this.img.src = "../public/Imagenes/pangStandShoot.png";
  this.frameAmount = 2;
  this.img.frame = 0;
}

handleLeftDodge = (event) =>{//*
  event.preventDefault(); 
  if(Q === 81){
    this.shootDodgeQ()
    this.r = 0.4;
    this.vx = -6;
    this.img.frame = 0;
    Q = 0;
    E = 0;
    setTimeout(() => {
      Q = 81;
      E = 69;
    }, dodgeCooldown);
  }
}
handleRightDodge = (event) =>{ //*
  event.preventDefault(); 
  if(Q === 81){
    this.shootDodgeE()
    this.r = -0.4;
    this.vx = 6;
    this.img.frame = 0;
    Q = 0;
    E = 0;
    setTimeout(() => {
      Q = 81;
      E = 69;
    }, dodgeCooldown);
 }
}
  draw() {
    this.bulletArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletFireArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletBarArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.bulletPlatformArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.hooksArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.swordArray.forEach((bullet) => {bullet.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.life.draw()

    this.blasterBtn$$.style.display = !this.megaFireBlaster ? 'none' : 'block';
    this.cadenaBtn$$.style.display = this.barAmount <= 0 ? 'none' : 'block';
    this.fireBtn$$.style.display = this.fireAmount <= 0 ? 'none' : 'block';
    

    if(Q === 81){
      this.ctx.drawImage(this.dodgeE, this.x + this.w , this.y + this.h/2, this.w/2, this.h/2);
      this.ctx.drawImage(this.dodgeQ, this.x-this.w/1.6, this.y + this.h/2, this.w/2 , this.h/2);
    }
    for (let i = 0; i < this.charging /10 -1; i++) {
      if(this.charging >= 11)
      this.ctx.drawImage(this.weaponFire, this.x-20 + i*5, this.y-15, this.w , this.h);
    }
    if (this.barAmount >= 1) {
      this.barInfo$$.innerText = `x ${this.barAmount}`
      this.barImg$$.style.display = "flex"
    } else{
      this.barInfo$$.innerText = ``
      this.barImg$$.style.display = "none"
    }
    if (this.hookAmount >= 1) {
      this.hookInfo$$.innerText = `x ${this.hookAmount}`
      this.hookImg$$.style.display = "flex"
    } else{
      this.hookInfo$$.innerText = ``
      this.hookImg$$.style.display = "none"
    }
    if (this.stepsAmount >= 1) {
      this.stepInfo$$.innerText = `x ${this.stepsAmount}`
      this.stepImg$$.style.display = "flex"
    } else{
      this.stepInfo$$.innerText = ``
      this.stepImg$$.style.display = "none"
    }
    if(this.fireAmount>=1){    
      this.fireInfo$$.innerText = `x ${this.fireAmount}`
      this.fireImg$$.style.display = "flex"
      this.charger.draw(this.x + 5, this.y + 10, this.fireAmount, 20, 19, "orange", "orange")
    } else{
      this.fireInfo$$.innerText = ``
      this.fireImg$$.style.display = "none"
    }

    if(this.charging >=1){
      this.charger.draw(this.x + 5, this.y + 10, this.charging, 16, 15, "yellow", "red")
    }
    if(this.electroAmount >=1){
      this.charger.draw(this.x + 5, this.y + 10, this.electroAmount, 12, 13, "blue", "green")
    }
    if(this.electroAmount <=0) {this.electricShieldIsActive = false; H = 0}
    if(this.electroAmount > 1) H = 72
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

    if(this.electricShieldIsActive){
      this.ctx.drawImage(
        this.electricShieldImg,
        (this.electricShieldImg.frame * this.electricShieldImg.width) / 8,
        0,
        this.electricShieldImg.width / 8,
        this.electricShieldImg.height ,
        this.x - 8,
        this.y - 4,
        this.w * 2,
        this.h * 2
      );
      this.electroAmount -= 0.05;
    }
    if(this.swordEquipped && R === 82){
      this.ctx.drawImage(this.swordBack, this.x, this.y + 6 , this.w-3, this.h-3);
    }

  }

  move() {
    this.canClimb ? W = 87 : 0;
    if(!finalBoss){
      this.velocidadX = this.vx += this.r;
      if(this.velocidadX <= 0.5 && this.velocidadX >= -0.5 && this.r !==0){
        this.r = 0;
        this.vx = 0;
        this.img.frame = 0;
      }
    this.vy += this.g
    this.x += this.velocidadX;
    this.y += this.vy;
    bulletDirection = this.vx/2
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
    if (this.y <= 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
      this.g = 0;
    }
    if (this.x <= 0) { 
      this.x = 0;
      this.vx = 0;
    }
    if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }
  } else{ //!final else
    this.velocidadX = this.vx += this.r;
    if(this.velocidadX <= 0.5 && this.velocidadX >= -0.5 && this.r !==0){
      this.r = 0;
      this.vx = 0;
      this.img.frame = 0;
    }
    this.vy += this.g
    this.x += this.velocidadX;
    this.y += this.vy;
    bulletDirection = this.vx/2
      this.frameTick++
      if (this.frameTick > 15 - this.walkingSpeed) {   
        this.img.frame++;
        this.frameTick = 0;
      }
    if (this.img.frame > 4) {
      this.img.frame = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
      this.g = 0;
    }
    if (this.x <= 0) { 
      this.x = 0;
      this.vx = 0;
    }
    if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }
  } //!final boss
  if(this.electricShieldIsActive){
    this.electricShieldImgTick++;
    if(this.electricShieldImgTick >3){
      this.electricShieldImg.frame++;
      this.electricShieldImgTick = 0;
    }
    if(this.electricShieldImg.frame > 7){
      this.electricShieldImg.frame = 0;
    }
  }
  this.bulletArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
  this.bulletFireArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
  this.bulletBarArray.forEach((bullet) => {bullet.move();}); //paso 4: mueve cada bullet que se dispare
  this.bulletPlatformArray.forEach((bullet) => {bullet.move();}); // paso 3: dibujo cada bullet que se dispare
  this.hooksArray.forEach((bullet) => {bullet.move();}); // paso 3: dibujo cada bullet que se dispare
  this.swordArray.forEach((bullet) => {bullet.move();}); // paso 3: dibujo cada bullet que se dispare
  if(this.swordPowerUp >=10){
    this.swordPower1 = true;
    this.swordCooldown = 500;
    setTimeout(() => {
    this.swordPower1 = false;
    this.swordPowerUp = 0;
    this.swordCooldown = 0;
    }, 10000);
  }
}

//consultar constantes para el código de cada teclahjkl-
  keyDown(key) {
    if(finalBoss) W = 87;
    if (key === W ) {
      this.keySwitchCounter = 0;
      if(this.canClimb){
        this.vy = -playerSpeed;
      } 
     if(finalBoss) this.shootUp = true;
    }
    if (key === A ) {
      this.frameTick++;
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pangRunLeft.png";
        this.vx = -playerSpeed;
      } else {
        this.walkingSpeed = 10
        this.vx = -playerSpeed + 0.8;
      }
      this.frameAmount = 5;
    }
    if (key === D ) {
      this.keySwitchCounter++
      if(!finalBoss){
        this.vx = playerSpeed;
      } else {
        this.walkingSpeed = 10;
        this.vx = playerSpeed - 0.8;

      }
    if(finalBoss && this.keySwitchCounter >= 2) {
      this.shootUp = false;
    }
    this.img.src = "../public/Imagenes/pangRunRight.png";
    this.frameAmount = 5;
    }
    if (key === S ) {//todo: bloqueo para el limite inferior
      this.vy = playerSpeed;
      this.y = this.y + this.h;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
    }

    if(key === Q){
      this.shootDodgeQ()
      this.r = 0.4;
      this.vx = -6;
      this.img.frame = 0;
      Q = 0;
      E = 0;
      setTimeout(() => {
        Q = 81;
        E = 69;
      }, dodgeCooldown);
    }
    if(key === E){
      this.shootDodgeE()
      this.r = -0.4;
      this.vx = 6;
      this.img.frame = 0;
      Q = 0;
      E = 0;
      setTimeout(() => {
        Q = 81;
        E = 69;
      }, dodgeCooldown);
    }

    if(key === B ){
      if(basicWeaponLevel >= 0)this.shoot();
      if(basicWeaponLevel >= 1)this.shootDouble()
      if(basicWeaponLevel >= 2)this.shootTriple()
      if(basicWeaponLevel >= 3)this.shootCuatruple()
      if(basicWeaponLevel >= 4)this.shootQuintuple()
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pangStandShoot.png";
        this.frameAmount = 2;
      }
      this.img.frame = 1;
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
    if(key === J){
      if(this.hookAmount > 0){
      this.shootHook();
      this.hookShoot.play()
          this.hookAmount--;
        } 
      }
    if(key === H){
      if(this.clickedH === false){
        this.electricShieldIsActive = true;
        this.clickedH = true;
        this.electroSoundOn.play()
      } else if(this.clickedH === true){
        this.electricShieldIsActive = false;
        this.clickedH = false;
        this.electroAmount = this.electroAmount
      }
      }
      if(key === R){
        this.swingSword();
        if(this.swordLevel >=1){
          setTimeout(() => {
            this.swingSword();
          }, 200);
        }
          this.swingSwordState = !this.swingSwordState
        R = 0
        setTimeout(() => {
          R = 82;
        }, 800 - this.swordCooldown);
        }
  }
  keyUp(key) {
    if (key === W) {
      this.vy = 0;
      W = 0;  //esto parece que soluciona un bug con la escalera, que si pulsas muy rapido y te sales a un lado, puedes flotar un rato
    }
    if (key === A) {
      this.vx = 0;
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pangStandShoot.png";
        this.frameAmount = 2;
        this.img.frame = 0;
      }
    this.walkingSpeed = 0;
      }
    if (key === D) {
      this.vx = 0;
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 0;
    }
    this.walkingSpeed = 0;

      }
    if (key === S) {
      this.vy = 0;
    }

    if (key === B ) {
      if(!finalBoss){
      this.img.src = "../public/Imagenes/pangStandShoot.png";
      this.frameAmount = 2;
      this.img.frame = 0;
      }
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
    if(!this.immuneState){
      const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
      const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
    }
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
    if(this.shootUp){
      const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, bulletDirection);
      this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, bulletDirection, 3, 0.001);
      this.bulletArray.push(bullet);
    }
    this.shootSound.play()
  }
  shootDouble() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(!finalBoss){
      const bullet1 = new BasicWeapon(this.ctx, this.x - 3, this.y, bulletDirection);
      this.bulletArray.push(bullet1);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet1 = new BasicWeapon(this.ctx, this.x +3, this.y, bulletDirection, 3, -0.1);
      this.bulletArray.push(bullet1);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    }
    this.shootSound.play()
  }
  shootTriple() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(!finalBoss){
      const bullet1 = new BasicWeapon(this.ctx, this.x - 6, this.y, bulletDirection, -0.3 - basicWeaponSpeed/2);
      const bullet2 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, 0.3+ basicWeaponSpeed/2);
      this.bulletArray.push(bullet1, bullet2);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet1 = new BasicWeapon(this.ctx, this.x , this.y, bulletDirection, 3, -0.2);
      const bullet2 = new BasicWeapon(this.ctx, this.x - 3, this.y, bulletDirection, 3, -0.3);
      this.bulletArray.push(bullet1, bullet2);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    }
    this.shootSound.play()

  }
  shootCuatruple() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(!finalBoss){
    } else{
      
    }
    this.shootSound.play()
    const bullet6 = new BasicWeapon(this.ctx, this.x-2, this.y +5, bulletDirection, 0, -1, true);
    this.bigWeaponBubblesMaxAmount  += 1
    setTimeout(() => {
      this.bigWeaponBubblesMaxAmount -= 1; 
    }, 5000);
    if(this.bigWeaponBubblesMaxAmount < 0) this.bigWeaponBubblesMaxAmount = 0;
    this.bulletArray.push(bullet6);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }
  shootQuintuple(){
    if(!finalBoss){
    } else{
      
    }
    this.shootSound.play()
    if(this.bigWeaponBubblesMaxAmount <= 4){
      this.bigWeaponBubblesMaxAmount  += 1
      const bullet7 = new BasicWeapon(this.ctx, this.x - 10, this.y - 10, bulletDirection, -0.01, -0.09, true, 450);
      const bullet8 = new BasicWeapon(this.ctx, this.x + 14, this.y - 10, bulletDirection, 0.01, -0.09, true, 450);
      this.bulletArray.push(bullet7, bullet8);//paso 2: crea un array vacío en el constructor y luego haz 
      setTimeout(() => {
        this.bigWeaponBubblesMaxAmount -= 1; 
      }, 5000);
    }
  }

  shootDodgeQ() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    this.shootSound.play()
    const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, 0, -3, 0.001);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }
  shootDodgeE() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    this.shootSound.play()
    const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, 0, 3, 0.001);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }

  shootFire(){
    const bulletFire = new WeaponFire(this.ctx, this.x, this.y)
    bulletFire.fireShootSOund.play()
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
  shootHook(){
    let hook = new WeaponHook(this.ctx, this.x, this.y)
    this.hooksArray.push(hook);
  }

    swingSword(){
        if(this.swingSwordState){
          if(this.vy > 0 || this.vy < 0){
            this.vy = jumpHeight
            this.g = 0.18
          }
          if(!this.electricShieldIsActive){
            let sword = new WeaponSword(this.ctx, this.x - 10, this.y - 20, this.swingSwordState, 0 )
            this.swordArray.push(sword)
          } else {
            let sword = new WeaponSword(this.ctx, this.x - 23, this.y - 42, this.swingSwordState, 0, CTXW/10, CTXW /5 )
            this.swordArray.push(sword)
          }
          if(this.swordPower1){
            const bullet1 = new BasicWeapon(this.ctx, this.x +8, this.y, bulletDirection, -2.8,  -0.1, false, 20);
            const bullet2 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, -3, -0.6, false, 20 );
            const bullet3 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, -2.8, -1.3, false, 20 );
            const bullet4 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, -2.3, -2, false, 20 );
            this.bulletArray.push(bullet1, bullet2,bullet3,  bullet4 );
          }
        } else {
        if(!this.electricShieldIsActive){
          let sword = new WeaponSword(this.ctx, this.x, this.y - 20, this.swingSwordState, 4 )
          this.swordArray.push(sword)
        } else {
          let sword = new WeaponSword(this.ctx, this.x, this.y - 42, this.swingSwordState, 4, CTXW/10, CTXW /5   )
          this.swordArray.push(sword)
        }
        if(this.swordPower1){
          const bullet1 = new BasicWeapon(this.ctx, this.x +8, this.y, bulletDirection, 2.8,  -0.1 , false, 20);
          const bullet2 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, 3, -0.6 , false, 20);
          const bullet3 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, 2.8, -1.3 , false, 20);
          const bullet4 = new BasicWeapon(this.ctx, this.x + 8, this.y, bulletDirection, 2.3, -2 , false, 20);
          this.bulletArray.push(bullet1, bullet2,bullet3,  bullet4 );
        }
      }
    }
}