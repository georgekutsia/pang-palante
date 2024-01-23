class LevelBall {  
constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x =  x || Math.random() * this.ctx.canvas.width; //el obstáculo aparece desde arriba del canvas 
    this.y =   y || 0; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = this.ctx.canvas.width / 33;  //anchura calculada respecto al canvas
    this.h = this.ctx.canvas.width / 18;  //altura calculada respecto al canvas
    this.vy = 0;
    this.g = 0.1;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "../../public/Imagenes/levelBall1.png";  //definir cual es la nueva imagen
    this.imgBallShield = new Image();   //crear nueva imágene ne canvas
    this.imgBallShield.src = "../../public/Imagenes/ballShield.png";  //definir cual es la nueva imagen
    this.isActive = false;
    this.winCondition = false;;


  //cuando se rompe la bola
    this.ballBreaks = new Image();
    this.ballBreaks.src = "../../public/Imagenes/levelBall1Breaking.png"
    this.ballBreaks.frame = 0;
    this.ballBreaksTick = 0;
    this.ballBroke = false;

  //cuando resiste el daño de las balas y sale el escudo de plasma
    this.ballShieldForce = new Image(); 
    this.ballShieldForce.src = "../../public/Imagenes/ballShieldForce.png"; 
    this.ballShieldForce.frame = 0;
    this.ballShieldForceTick = 0;
    this.ballShieldForceTickTimer = 0;
    this.ballShieldForceResist = false;;

    //el efecto de romperse cuando ya no tiene ball shield
    this.ballShieldBreak = new Image(); 
    this.ballShieldBreak.src = "../../public/Imagenes/ballShieldForceBreak.png"; 
    this.ballShieldBreak.frame = 0;
    this.ballShieldBreakTick = 0;
    this.ballShieldBreaking = false;
  }
  draw() {
    if(!this.ballBroke) {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);  // dibuja el obstáculo
    }
    if(!this.isActive) {
      this.ctx.drawImage(this.imgBallShield, this.x-3, this.y+4, this.w+5, this.w + 5);  // dibuja el obstáculo
    }

    if(this.ballShieldForceResist){
      this.ballShieldForceTickTimer++;
      if(this.ballShieldForceTickTimer >= 100) {
        this.ballShieldForceResist = false;
      this.ballShieldForceTickTimer = 0;
    }
      this.ctx.drawImage(
        this.ballShieldForce,
        (this.ballShieldForce.frame * this.ballShieldForce.width) / 4,
        0,
        this.ballShieldForce.width / 4,
        this.ballShieldForce.height ,
        this.x-5,
        this.y + 3,
        this.w *2,
        this.w * 2
      );
    }
    if(this.ballShieldBreaking){
      this.ctx.drawImage(
        this.ballShieldBreak,
        (this.ballShieldBreak.frame * this.ballShieldBreak.width) / 9,
        0,
        this.ballShieldBreak.width / 9,
        this.ballShieldBreak.height ,
        this.x-5,
        this.y + 3,
        this.w *2,
        this.w * 2
      );
    }
    if(this.ballBroke){
      this.ctx.drawImage(
        this.ballBreaks,
        (this.ballBreaks.frame * this.ballBreaks.width) / 6,
        0,
        this.ballBreaks.width / 6,
        this.ballBreaks.height ,
        this.x,
        this.y ,
        this.w,
        this.h
        );
      }
  }
  move() {
    if(this.ballShieldForceResist){
      this.ballShieldForceTick++
      if(this.ballShieldForceTick > 4){
        this.ballShieldForce.frame++
        this.ballShieldForceTick = 0
      }
      if(this.ballShieldForce.frame > 3){
        this.ballShieldForce.frame = 0;
      }
    }

    if(this.ballShieldBreaking){
      this.ballShieldBreakTick++;
      if(this.ballShieldBreakTick > 4){
        this.ballShieldBreak.frame++
        this.ballShieldBreakTick = 0
        if(this.ballShieldBreak.frame >8 ){
          this.ballShieldBreak.frame = 0;
          this.ballShieldBreaking =false;
        }
      }
    }
    if(this.ballBroke){
      this.ballBreaksTick++;
      if(this.ballBreaksTick > 4){
        this.ballBreaks.frame++;
        this.ballBreaksTick = 0;
      }
    }
  }
  isVisible(){
    return  this.x > -2 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

