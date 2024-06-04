class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x =420;
    this.h = this.ctx.canvas.width / 19;
    this.y = this.ctx.canvas.height - this.h;
    this.w = this.ctx.canvas.width / 23;
    this.life = new Life(ctx)
    this.charger = new Charger(ctx)
    this.vx = 0;
    this.vy = 0;
    this.g = 2;
    this.r = 0; //rozamiento
    this.auraIsActive = false;
    this.frameTick = 1;
    this.bulletArray = [];
    this.bulletFireArray = [];
    this.bulletBarArray = [];
    this.bulletPlatformArray = [];
    this.hooksArray = [];
    this.swordArray = []; //
    this.itemTakens = [];
    this.swordSparkles = []
    this.frameAmount = 8;
    this.fading = 0; //necesario para el parpadeo del personaje cuando es inmune
    this.charging = 0;  // acumula la carga, lo que dibuja el semicírculo
    this.chargingFires = false; //   se pone en true mientras carga el disparo fuerte de fuego
    this.megaFireBlaster = true; //al ponerse en true, se puede activar la K
    this.megaFireBlasterAmount = 31; //la carga del blaster. cada 10, es una bola
    this.electroAmount = 10; //cantidad de carga eléctrica que tiene
    this.fireAmount = 10; //cantidad de fuegos que puedes disparar con N
    this.hookAmount = 0; // la cantidad de hooks con J
    this.barAmount = 120; //la cantidad de barras disponibles con M
    this.stepsAmount = 0; //cantidad de plataformas que puedes crear con O / P
    this.ableToJump = false;
    this.wasNotDamaged = true;
    this.bigWeaponBubblesMaxAmount = 0;
    this.platformCreator = true;
    this.hookedOnPlatform = false;
    this.img = new Image();
    this.img.src = "../public/Imagenes/pangPjNuevoDerecha2.png";
    this.basicWeapon = new Image();
    this.basicWeapon.src = "../public/Imagenes/basicWeaponLevl1.png";
    this.img.frame = 3;
    this.auraImg = new Image();
    this.auraImg.src = "/public/Imagenes/aura1.png";
    this.electricShieldImg = new Image();
    this.electricShieldImg.src = "/public/Imagenes/electricShield.png";
    this.electricShieldImg.frame = 0;
    this.electricShieldIsActive = false;
    this.electricShieldImgTick = 0;
    this.electricBurbalasIsActive = false;
    this.clickedH = false;
    this.shootUp = true;
    this.canClimb= false;
    this.diagonalShoot = false;
    this.walkingSpeed = 0;
    this.itemJustTaken = false;
    this.extraX =  0;
    this.extraY =  0;
    this.extraW =  0;
    this.extraH =  0;
    this.burbalaGatling = 0;
    this.this = false;

    this.weaponFire = new Image();
    this.weaponFire.src = "/public/Imagenes/weaponFire.png";
    this.dodgeQ = new Image();
    this.dodgeQ.src = "/public/Imagenes/q.png";
    this.dodgeE = new Image();
    this.dodgeE.src = "/public/Imagenes/e.png";
    this.machinegunPaint = new Image();
    this.machinegunPaint.src = "/public/Imagenes/machinegunPaint.png";
    this.barItem = new Image();
    this.barItem.src = "/public/Imagenes/barItem2.png";
    this.swordBack = new Image();
    this.swordBack.src = "/public/Imagenes/swordBack.png";
    this.swordCharging = new Image();
    this.swordCharging.src = "/public/Imagenes/espadaCargando2.png";
    this.swordLeftStab = new Image();
    this.swordLeftStab.src = "/public/Imagenes/dodgeLeftSwordImg.png";
    this.swordRightStab = new Image();
    this.swordRightStab.src = "/public/Imagenes/dodgeRightSwordImg.png";
    this.swordSparkleActive = true;
    this.swingSwordState = true;
    this.swordEquipped = false;
    this.swordLevel = 1;
    this.swordPowerUp = 0;
    this.swordPower1 = false;
    this.swordCooldown = 0;
    this.keySwitchCounter = 0;
    this.stabDirection = true;
    this.tickFireElectro = 0;
    this.weaponUpgrading = true;

    this.barInfo$$ = document.getElementById("bar-info")
    this.fireInfo$$ = document.getElementById("fire-info")
    this.hookInfo$$ = document.getElementById("hook-info")
    this.stepInfo$$ = document.getElementById("step-info")
    this.swordInfo$$ = document.getElementById("sword-info")
    this.barImg$$ = document.getElementById("bar-img")
    this.fireImg$$ = document.getElementById("fire-img")
    this.hookImg$$ = document.getElementById("hook-img")
    this.stepImg$$ = document.getElementById("step-img")
    this.swordImg$$ = document.getElementById("sword-img")
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
//   handleShoot = (event) => {//*
//     event.preventDefault(); 
//     if(basicWeaponLevel >= 0)this.shoot();
//     if(basicWeaponLevel >= 1)this.shootDouble()
//     if(basicWeaponLevel >= 2)this.shootTriple()
//     if(basicWeaponLevel >= 3)this.shootCuatruple()
//     if(basicWeaponLevel >= 4)this.shootQuintuple()
//     this.img.src = "../public/Imagenes/pjShoot3.png";
//     this.frameAmount = 4;
//     this.img.frame = 1;
//     B = 0;
//     setTimeout(() => {
//       this.img.frame = 0;
//     }, 50); // para que parezca que dispara y se levanta al poco tiempo
//     setTimeout(() => {
//       B = 66;
//     }, recharge);
//     }
//   handleShootU = () =>{ //*
//     this.img.src = "../public/Imagenes/pjShoot3.png";
//     this.frameAmount = 4;
//     this.img.frame = 0;
//   }
//   handleFIre = (event) => {//*
//     event.preventDefault(); 
//     if(this.fireAmount > 0){ 
//       this.fireAmount -= 1;
//       this.shootFire();
//       if(this.fireAmount <= 0){
//         N = 0;
//       }
//     }
//   }
//   handleCadena = (event) => {
//     event.preventDefault(); 
//     this.shootBar();
//     this.barAmount--;
//     if(this.barAmount <= 0)this.barAmount = 0;
//     M = 0
//       setTimeout(() => {
//         M = 77
//       }, 100);
//   }
//   handleMegablaster = (event) => {
//     event.preventDefault(); 
//     if (this.megaFireBlaster) {
//       A = 65;
//       D = 68;
//       this.chargingFires = false;
//       this.megaFireBlaster = true; // No estoy seguro de tu lógica, pero asegúrate de que se active correctamente
//       this.chargingFires = true;
//       this.charging++;
//       blasterCharging.volume = 1;
//       blasterCharging.play();

//       if (this.charging >= this.megaFireBlasterAmount) {
//         this.charging = this.megaFireBlasterAmount;
//         blasterCharging.volume = 0;
//       }
//     }
//   }

//   handleMegablasterU = (event) => {
//     event.preventDefault(); 
//     if (this.megaFireBlaster) {
//       A = 0;
//       D = 0;
//       this.chargingFires = false;
//       this.megaFireBlaster = false;
//       if (this.charging >= 3) {
//         for (let i = 0; i < this.charging; i++) {
//           blasterExplosion.play();
//           blasterCharging.volume = 0;

//           if (i % 10 === 0 && i % 20 !== 0) {
//             const bulletFire = new WeaponFire(this.ctx, this.x + this.w - i, this.y, this.ctx.canvas.width / 20, this.ctx.canvas.width / 18)
//             this.bulletFireArray.push(bulletFire);
//           }

//           if (i % 20 === 0 && i >= 10) {
//             const bulletFire = new WeaponFire(this.ctx, this.x + i, this.y, this.ctx.canvas.width / 20, this.ctx.canvas.width / 18)
//             this.bulletFireArray.push(bulletFire);
//           }
//         }
//         this.charging -= this.charging;
//       }
//     }
//   }

//   handleJump = (event) => {
//     event.preventDefault(); 
//     if (this.vy === 0 || this.ableToJump === true) {
//       this.vy = jumpHeight;
//       this.g = 2; + gravitySpeed
//       this.ableToJump = false;
//       setTimeout(() => {
//         this.jumpBtn$$.addEventListener("touchstart", this.handleJumpTouchStart);
//       }, jumpCooldown);
//     }
//   };
//   handleUp = (event) => {
//   if(W === 87){
//     event.preventDefault(); 
//     this.vy = -playerSpeed;
//   }
//     }
//     handleRight = (event) => {
//       event.preventDefault(); 
//       this.vx = playerSpeed;
//       this.img.src = "../public/Imagenes/pangPjNuevoDerecha2.png";
//       this.frameAmount = 8;
//     }
//     handleLeft = (event) => {
//   event.preventDefault(); 
//       this.frameTick++;
//       this.vx = -playerSpeed;
//       this.img.src = "../public/Imagenes/pangPjNuevoIzquierda2";
//       this.frameAmount = 8;
//     }
//     handleDown = (event) => {
//    event.preventDefault(); 
//        this.vy = playerSpeed;
//        this.y = this.y + jumpDownDistance;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
// }
// handleUpU = (event) => { //*
//   event.preventDefault(); 
//     this.vy = 0;
//     W = 0;
// }
// handleDownU = (event) => {//*
//   event.preventDefault(); 
//   this.vx = 0;
//   this.vy = 0;
//   this.img.src = "../public/Imagenes/pjShoot3.png";
//   this.frameAmount = 4;
//   this.img.frame = 0;
// }
// handleLeftU = (event) =>{//*
//   event.preventDefault(); 
//   this.vx = 0;
//   this.img.src = "../public/Imagenes/pjShoot3.png";
//   this.frameAmount = 4;
//   this.img.frame = 0;
// }
// handleRightU = (event) =>{//*
//   event.preventDefault(); 
//   this.vx = 0;
//   this.img.src = "../public/Imagenes/pjShoot3.png";
//   this.frameAmount = 4;
//   this.img.frame = 0;
// }

// handleLeftDodge = (event) =>{//*
//   event.preventDefault(); 
//   if(Q === 81){
//     this.shootDodgeQ()
//     this.r = 0.4;
//     this.vx = -6;
//     this.img.frame = 0;
//     Q = 0;
//     E = 0;
//     setTimeout(() => {
//       Q = 81;
//       E = 69;
//     }, dodgeCooldown);
//   }
// }
// handleRightDodge = (event) =>{ //*
//   event.preventDefault(); 
//   if(Q === 81){
//     this.shootDodgeE()
//     this.r = -0.4;
//     this.vx = 6;
//     this.img.frame = 0;
//     Q = 0;
//     E = 0;
//     setTimeout(() => {
//       Q = 81;
//       E = 69;
//     }, dodgeCooldown);
//  }
// }
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
      this.ctx.globalAlpha = 0.5;
      this.ctx.drawImage(this.dodgeE, this.x + this.w , this.y + this.h/2, this.w/2, this.h/2);
      this.ctx.drawImage(this.dodgeQ, this.x-this.w/1.6, this.y + this.h/2, this.w/2 , this.h/2);
      this.ctx.globalAlpha = 1;
    }
    if(F === 70 && this.swordEquipped){
      this.ctx.drawImage(this.swordLeftStab, this.x - this.w, this.y +this.h/2, this.w, this.h/2);
      this.ctx.drawImage(this.swordRightStab, this.x + this.w,  this.y +this.h/2 , this.w , this.h/2);
    }
    for (let i = 0; i < this.charging /10 -1; i++) {
      if(this.charging >= 11)
      this.ctx.drawImage(this.weaponFire, this.x-this.w + i*20, this.y-25, this.w/4 , this.h/2);
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
      this.charger.draw(this.x + 25, this.y + 40, this.fireAmount, 70, 68, "orange", "orange")
    } else{
      this.fireInfo$$.innerText = ``
      this.fireImg$$.style.display = "none"
    }


    
    if (this.swordEquipped === true) {    
      this.ctx.globalAlpha = globalAlphaForSword;
      this.ctx.drawImage(this.swordCharging, CTXW - 50, 10, 50, 150);
      const gradient = this.ctx.createLinearGradient(CTXW - 30, 18, CTXW - 20, 45 + this.swordPowerUp * 5);
      gradient.addColorStop(0, 'violet');
      gradient.addColorStop(0.5, 'yellow'); 
      gradient.addColorStop(0.8, 'red'); 
      
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(CTXW - 30, 18, 10, this.swordPowerUp * 5);
      this.ctx.globalAlpha = 1;

      if (this.swordLevel >= 0) this.swordInfo$$.innerText = ` lvl ${this.swordLevel}`;
      this.swordImg$$.style.display = "flex";
  } else {
      this.swordInfo$$.innerText = ``;
      this.swordImg$$.style.display = "none";
  }
  
    if(this.charging >=1){
      this.charger.draw(this.x + 24, this.y + 33, this.charging, 52, 51, "black", "red")
    }
    if(this.electroAmount >=1){
      this.charger.draw(this.x + 25, this.y + 30, this.electroAmount/1.5, 39, 38, "blue", "green")
    }
    if(this.weaponUpgrading){
      this.ctx.globalAlpha = globalAlphaForBasicWeapon;
      this.ctx.drawImage(this.basicWeapon, CTXW-100 - weaponImgSizing, CTXH - 100 - weaponImgSizing, 100 + weaponImgSizing, 100 + weaponImgSizing);
      this.ctx.globalAlpha = 1;
    }
    if(this.electroAmount <=0) {this.electricShieldIsActive = false; H = 0; this.electricBurbalasIsActive = false;}
    if(this.electroAmount > 1) H = 72
    if(playerIsImmune){
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
        this.x - 35,
        this.y - 20,
        this.w * 2,
        this.h * 2
      );
      this.electroAmount -=  (10 - shieldsDuration/1000)/100; // para que a mayor duración de escudo, mas lento se descargue la electricidad
    }
    if(this.swordEquipped && R === 82){
      this.ctx.drawImage(this.swordBack, this.x + 5, this.y + 25, this.w/1.4, this.h/1.4);
    }

    if(this.itemJustTaken){
      let sparkle = new ItemTaken(this.ctx, this.extraX, this.extraY, this.extraW, this.extraH);
      this.itemTakens.push(sparkle)
        this.extraX =  0;
        this.extraY =  0;
        this.extraW =  0;
        this.extraH =  0;
      this.itemJustTaken = false;
    }




    this.itemTakens.forEach((sparkle) => {sparkle.draw();}); // paso 3: dibujo cada bullet que se dispare
    this.swordSparkles.forEach((swo) => {swo.draw();}); // paso 3: dibujo cada bullet que se dispare
  }

  move() {
    // if(this.life.total >=  9){
    //   jumpCooldown = 300;
    //   jumpHeight  = -16;
    //   playerSpeed = 14.2;
    // } else{
    //   jumpCooldown = 500;
    //   jumpHeight  = -16;
    //   playerSpeed = 8;
    // }

    if(this.vx && this.x + this.h <=  CTXH - 5 || this.vy && this.x + this.h <=  CTXH - 5){
      this.g = 0.8 + gravitySpeed
    }
    if(!finalBoss){
      this.velocidadX = this.vx += this.r;
      if(this.velocidadX <= 1.5 && this.velocidadX >= -1.5 && this.r !==0){
        this.r = 0;
        this.vx = 0;
        this.img.frame = 0;
      }
    this.vy += this.g + gravitySpeed
    this.x += this.velocidadX;
    this.y += this.vy;
    bulletDirection = this.vx/2

    if(this.vx){
      this.frameTick++
      if (this.frameTick > 5  ) {
        this.img.frame++;
        this.frameTick = 0;
      }
    }
    if (this.img.frame > 7) {
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
    this.vy += this.g + gravitySpeed
    this.x += this.velocidadX;
    this.y += this.vy;
    bulletDirection = this.vx/2
      this.frameTick++
      if (this.frameTick > 15 - this.walkingSpeed) {   
        this.img.frame++;
        this.frameTick = 0;
      }
    if (this.img.frame > this.frameAmount-1) {
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
  this.swordArray.forEach((sparkle) => {sparkle.move();}); // paso 3: dibujo cada bullet que se dispare
  this.itemTakens.forEach((sparkle) => {sparkle.move();}); // paso 3: dibujo cada bullet que se dispare
  this.swordSparkles.forEach((sparkle) => {sparkle.move();}); // paso 3: dibujo cada bullet que se dispare

  if(this.swordPowerUp >= powerToGetForSword){
    this.swordPowerUp = powerToGetForSword;
    this.swordPower1 = true;
    this.swordCooldown = 2500;
    if(this.swordSparkleActive){
      let swordSparkle1 = new BurningColors(this.ctx, CTXW - 38, -30, 80, 80)
        this.swordSparkles.push(swordSparkle1)
      for (let i = 0; i < 9; i++) {
        let swordSparkle2 = new BurningColors(this.ctx, CTXW - 43, -40 + i*9, 110, 120)
        this.swordSparkles.push( swordSparkle2)
      }
      this.swordSparkleActive = false;
    }
    setTimeout(() => {
    this.swordPower1 = false;
    this.swordPowerUp = 0;
    this.swordCooldown = 0;
    this.swordSparkleActive = true;
    this.swordSparkles = []
    }, 10000);
  }
}

//consultar constantes para el código de cada teclahjkl-
  keyDown(key) {
    if(finalBoss) {W = 87; }
    if (key === W ) {
      this.keySwitchCounter = 0;
      if(this.canClimb){
        this.img.src = "../public/Imagenes/pjStairs1.png";
        this.frameAmount = 4;
          this.img.frame++
          if(this.img.frame > 3){
            this.img.frame = 0;
          }
        if(this.vy != 0){
          this.frameTick++;
        }
        this.vy = -playerSpeed;
      } 
    if(finalBoss) this.shootUp = true;
    } 
    if (key === A ) {
      this.stabDirection = false;
      this.frameTick++;
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pangPjNuevoIzquierda2.png";
        this.vx = -playerSpeed;
      } else {
        this.img.frame = 0;
        this.img.src = "../public/Imagenes/pangPjNuevoDerecha2.png";
        this.walkingSpeed = 10
        this.vx = -playerSpeed + 0.8;
      }
      this.frameAmount = 8;
    }
    if (key === D ) {
      this.stabDirection = true;
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
    this.img.frame = 0;
    this.img.src = "../public/Imagenes/pangPjNuevoDerecha2.png";
    this.frameAmount = 8;
    }
    if (key === S ) {//todo: bloqueo para el limite inferior
      this.vy = playerSpeed;
      this.y = this.y + this.h;  // para que al estar encima de la escalera, hago un salto hacia abajo y deje de tener posición fija
    }

    if(key === Q){
      this.shootDodgeQ()
      this.r = 1.4;
      this.vx = -25;
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
      this.r = -1.4;
      this.vx = 25;
      this.img.frame = 0;
      Q = 0;
      E = 0;
      setTimeout(() => {
        Q = 81;
        E = 69;
      }, dodgeCooldown);
    }

    if(key === B ){
      if(this.burbalaGatlingIsActive){
        this.burbalaGatling++;
        if(this.burbalaGatling >= 10){
          recharge = 50;
          setTimeout(() => {
            recharge = 500;
            this.burbalaGatlingIsActive = false;
            this.burbalaGatling = 0;
            setTimeout(() => {
            this.burbalaGatlingIsActive = true;
            }, 10000);
          }, 5000);
        }
      }
      totalShootsPerLevel++
      if(basicWeaponLevel >= 0)this.shoot();
      if(basicWeaponLevel >= 1)this.shootDouble()
      if(basicWeaponLevel >= 2)this.shootTriple()
      if(basicWeaponLevel >= 3)this.shootCuatruple()
      if(basicWeaponLevel >= 4)this.shootQuintuple()
      if(!finalBoss){
        if(this.vx <0){
        this.img.src = "../public/Imagenes/pangPjNuevoIzquierda3.png";
        this.frameAmount = 8;
        } else if(this.vx > 0){
        this.img.src = "../public/Imagenes/pangPjNuevoDerecha3.png";
        this.frameAmount = 8;
        } else if(this.vx = 0){
          this.img.src = "../public/Imagenes/pjShoot3.png";
          this.frameAmount = 4;
        }
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
      // let runn = new Runner(ctx)
      // game.runners.push(runn)
      // let spec = new ShowSpecialItem(ctx, this.x, this.y, 140, 140)
      // game.showSpecialItems.push(spec)
      this.shootBar();
      this.barAmount--;
      if(this.barAmount <= 0)this.barAmount = 0;
      M = 0
        setTimeout(() => {
          M = 77
        }, 500);
    }
    if(key === ALT && this.vy === 0 || key === ALT && this.ableToJump === true){
      // gainingCoins(4)
      if(!finalBoss){
        this.img.frame = 0;
        this.img.src = "../public/Imagenes/pjJump1.png";
        this.frameAmount = 1;
        setTimeout(() => {
          this.img.frame = 0;
          this.frameAmount = 4;
          this.img.src = "../public/Imagenes/pjShoot3.png";
        }, 300);
      } else {
        this.img.frame = 0;
      this.img.src = "../public/Imagenes/pangPjNuevoDerecha2.png";
      this.frameAmount = 8;
      }
      this.img.frame = 0;
      this.vy = jumpHeight;
      this.g = 1 + gravitySpeed;
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
      blasterCharging.volume = 1;
      blasterCharging.play()
      if(this.charging >= this.megaFireBlasterAmount){
        this.charging = this.megaFireBlasterAmount;
      blasterCharging.volume = 0;
      }
    }
    if(key === J){
      if(this.hookAmount > 0){
          this.shootHook();
          hookShoot.play()
          this.hookAmount--;
          J = 0;
          setTimeout(() => {
            J = 74;
          }, 1000);
        } 
      }
    if(key === H){
      if(this.clickedH === false){
        this.electricShieldIsActive = true;
          if(electrifiedBurbalas){
            this.electricBurbalasIsActive = true;
          }
        this.clickedH = true;
        electroSoundOn.play()
      } else if(this.clickedH === true){
        this.electricShieldIsActive = false;
        if(electrifiedBurbalas){
          this.electricBurbalasIsActive = false;
        }
        this.clickedH = false;
        this.electroAmount = this.electroAmount
      }
      }
      if(key === R){
        this.swingSword();
        this.swingSwordState = !this.swingSwordState
        if(this.swordLevel >=3){
            this.swingSword();
        }
        R = 0
        setTimeout(() => {
          R = 82;
        }, swordSwingCooldown - this.swordCooldown);
        }

        if(key === F){
          this.stabSword();
          F = 0;
          setTimeout(() => {
            F = 70;
          }, stabRecharge);
        }
        if(key === P){
          this.shootStep(65, CTXW);
        }
        if(key === O){
          this.shootStep(-68, 0);
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
        this.img.src = "../public/Imagenes/pjShoot3.png";
        this.frameAmount = 4;
        this.img.frame = 0;
      }
    this.walkingSpeed = 0;
      }
    if (key === D) {
      this.vx = 0;
      if(!finalBoss){
        this.img.src = "../public/Imagenes/pjShoot3.png";
      this.frameAmount = 4;
      this.img.frame = 0;
    }
    this.walkingSpeed = 0;

      }
    if (key === S) {
      this.vy = 0;
    }

    if (key === B ) {
      if(this.this){
        this.burbalaGatling = 0;
      }
      if(!finalBoss){
      this.img.src = "../public/Imagenes/pjShoot3.png";
      this.frameAmount = 4;
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
          blasterExplosion.play();
          blasterCharging.volume = 0;
          if(i % 10 === 0  && i % 20 !==0 ){
            const bulletFire = new WeaponFire(this.ctx, this.x + i*2, this.y - 30)
            this.bulletFireArray.push(bulletFire);
          }
          if(i % 20 === 0 && i >= 10){
            const bulletFire = new WeaponFire(this.ctx, this.x - i *2, this.y - 30)
            this.bulletFireArray.push(bulletFire);
          }
        }
        this.charging -= this.charging;
      }
    }
  }
  
  
  collides(objetivo) {
    if(!playerIsImmune){
      const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x ;
      const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
    }
  }
  
  loseLife(damage, immuneState){
    this.life.total -= damage;
    playerIsImmune = immuneState;
    playerDamageSound1.play();
    setTimeout(() => {  // para desactivar immune y que el personaje deje de parpadear
        playerIsImmune = false;
        this.fading = 0;
    }, immuneTime);
  }
  
  gainLife(amount){
    this.life.total += amount;
    this.life.isHealing = true;
  }
  shoot() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(this.shootUp){
          if(finalBoss){
            this.img.src = "../public/Imagenes/pangPjNuevoDerecha3.png";
          }
      const bullet = new BasicWeapon(this.ctx, this.x + this.w/1.8, this.y, bulletDirection);
      this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet = new BasicWeapon(this.ctx, this.x + 5, this.y, bulletDirection, 13 + basicWeaponSpeed, 0.001 + basicWeaponSpeed );
      this.bulletArray.push(bullet);
    }
    shootSound.play()
  }
  shootDouble() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(this.shootUp){
      const bullet1 = new BasicWeapon(this.ctx, this.x + this.w/4, this.y, bulletDirection);
      this.bulletArray.push(bullet1);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet1 = new BasicWeapon(this.ctx, this.x +3, this.y, bulletDirection, 13 + basicWeaponSpeed, -0.5 + basicWeaponSpeed);
      this.bulletArray.push(bullet1);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    }
    shootSound.play()
  }
  shootTriple() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    if(this.shootUp){
      const bullet1 = new BasicWeapon(this.ctx, this.x - this.w +10, this.y, bulletDirection, -1 - basicWeaponSpeed/2);
      const bullet2 = new BasicWeapon(this.ctx, this.x + this.w, this.y, bulletDirection, 1 + basicWeaponSpeed/2);
      this.bulletArray.push(bullet1, bullet2);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    } else{
      const bullet1 = new BasicWeapon(this.ctx, this.x , this.y, bulletDirection, 13+ basicWeaponSpeed, -0.9 + basicWeaponSpeed);
      const bullet2 = new BasicWeapon(this.ctx, this.x - 3, this.y, bulletDirection, 13 + basicWeaponSpeed, -1.5 + basicWeaponSpeed);
      this.bulletArray.push(bullet1, bullet2);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
    }
    shootSound.play()

  }
  shootCuatruple() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    shootSound.play()
    if(this.bigWeaponBubblesMaxAmount <= 7){
      this.bigWeaponBubblesMaxAmount  += 1
    const bullet6 = new BasicWeapon(this.ctx, this.x-2, this.y +5, bulletDirection, 0, -2, true);
    this.bigWeaponBubblesMaxAmount  += 1
    setTimeout(() => {
      this.bigWeaponBubblesMaxAmount -= 4; 
    }, 5000);
    if(this.bigWeaponBubblesMaxAmount < 0) this.bigWeaponBubblesMaxAmount = 0;
    this.bulletArray.push(bullet6);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }
  }
  shootQuintuple(){
    shootSound.play()
    if(this.bigWeaponBubblesMaxAmount <= 7){
      this.bigWeaponBubblesMaxAmount  += 1
      const bullet7 = new BasicWeapon(this.ctx, this.x - 10, this.y - 10, bulletDirection, -0.7, -0.3, true, 450);
      const bullet8 = new BasicWeapon(this.ctx, this.x + 14, this.y - 10, bulletDirection, 0.7, -0.3, true, 450);
      this.bulletArray.push(bullet7, bullet8);//paso 2: crea un array vacío en el constructor y luego haz 
      setTimeout(() => {
        this.bigWeaponBubblesMaxAmount -= 4; 
      }, 5000);
    }
  }

  shootDodgeQ() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    shootSound.play()
    const bullet = new BasicWeapon(this.ctx, this.x - 80, this.y, 0, -15, 0.001, false, 0, false, true);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }
  shootDodgeE() {// paso 1: invoca el disparo desde la posicion del personaje o su cercanía
    shootSound.play()
    const bullet = new BasicWeapon(this.ctx, this.x + 80, this.y, 0, 15, 0.001, false, 0, false, true);
    this.bulletArray.push(bullet);//paso 2: crea un array vacío en el constructor y luego haz un push de cada bullet;
  }

  shootFire(){
    if(this.shootUp){
      const bulletFire = new WeaponFire(this.ctx, this.x + 15, this.y)
      this.bulletFireArray.push(bulletFire);
    } else {
      const bulletFire = new WeaponFire(this.ctx, this.x + 15, this.y, 40, 40, 2, -0.1)
      this.bulletFireArray.push(bulletFire)
    }
  }
  shootBar(){
    if(this.barAmount > 0){
    const bulletBar = new WeaponBar(this.ctx, this.x + this.w/2, this.y)
    this.bulletBarArray.push(bulletBar);
    }
  }
  shootHook(){
    let hook = new WeaponHook(this.ctx, this.x, this.y)
    this.hooksArray.push(hook);
  }
  slowIncreaseFireElectro(howMuch){
    let inter =  setInterval(() => {
      this.electroAmount++;
      this.fireAmount++;
    }, 50);
    setTimeout(() => {
      clearInterval(inter);
    }, howMuch);
  }


  stabSword(){
      if(this.stabDirection){
        let stab = new WeaponSword(this.ctx, this.x - 120, this.y - 20 , true, 0, 300, 80, true, true );
        this.swordArray.push(stab);
        this.r = -1;
        this.vx = 16 + playerSpeed;
      } else {
        let stab = new WeaponSword(this.ctx, this.x - 110, this.y - 20, true, 0, 300, 80, true, false );
        this.swordArray.push(stab);
        this.r = 1;
        this.vx = -16 - playerSpeed;
      }
    }
    swingSword(){
      if(this.vy !=0){
        this.vy = jumpHeight
        this.g = 0.8 + gravitySpeed
      }
        if(this.swingSwordState){
          if(!this.electricShieldIsActive){
            let sword = new WeaponSword(this.ctx, this.x - 60, this.y - 70, this.swingSwordState, 0, 0, 0, false )
            this.swordArray.push(sword)
          } else {
            let sword = new WeaponSword(this.ctx, this.x - 90, this.y - 150, this.swingSwordState, 0, CTXW/10, CTXW /5, false )
            this.swordArray.push(sword)
          }
          if(this.swordPower1){
            const bullet1 = new BasicWeapon(this.ctx, this.x +8, this.y - 40, bulletDirection, -14,  -0.2, false, 20);
            const bullet2 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, -15, -2, false, 20 );
            const bullet3 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, -15, -4, false, 20 );
            const bullet4 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, -13, -6, false, 20 );
            this.bulletArray.push(bullet1, bullet2, bullet3, bullet4 );
          }
        } else {
        if(!this.electricShieldIsActive){
          let sword = new WeaponSword(this.ctx, this.x, this.y - 70, this.swingSwordState, 4 )
          this.swordArray.push(sword)
        } else {
          let sword = new WeaponSword(this.ctx, this.x + 20, this.y - 150, this.swingSwordState, 4, CTXW/10, CTXW /5   )
          this.swordArray.push(sword)
        }
        if(this.swordPower1){
          const bullet1 = new BasicWeapon(this.ctx, this.x +8, this.y - 40, bulletDirection, 14,  -0.2, false, 20);
          const bullet2 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, 15, -2 , false, 20);
          const bullet3 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, 15, -4, false, 20);
          const bullet4 = new BasicWeapon(this.ctx, this.x + 8, this.y - 40, bulletDirection, 13, -6, false, 20);
          this.bulletArray.push(bullet1, bullet2, bullet3, bullet4 );
        }
      }
    }
    shootStep(stepPlace, where) {
      if(this.platformCreator && this.stepsAmount > 0){
        this.stepsAmount--;
        const plat = new Platform(ctx, this.x + stepPlace, this.y - 10, 65, 10, "/public/Imagenes/obstacles/stepsSolid2.png", true, true, true, 0, 0, where, where, 1, 1, true, true );
        game.platforms.push(plat);
        setTimeout(() => {
          const index = this.platforms.indexOf(plat);
          if (index !== -1) {
            game.platforms.splice(index, 1);
          }
        }, 10000);
      }
    }  
}