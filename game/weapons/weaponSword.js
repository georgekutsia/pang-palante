class WeaponSword {
  constructor(ctx, x, y, swingDirection, frame, w, h, stab, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx =  0; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/swordSwing10.png";
    this.img.frame = frame || 0;;
    this.w = w || this.ctx.canvas.width/ 13;
    this.h = h ||  this.ctx.canvas.width/ 8;
    this.tick = 0;
    this.damage = 0.05;
    this.dispose = true;
    this.swingDirection =  swingDirection || false;
    this.stab = stab || false;
    this.direction = direction || false;
    this.rounds = 0; // cuantos rouns ha hecho la espada


    this.stabSound = new Audio("/public/sounds/shooting/stabSwordSound.mp3")
    this.stabSound.volume = 0.1

    this.swingSound = new Audio("/public/sounds/shooting/swingSwordSound.mp3")
    this.swingSound.volume = 0.1
  }

  draw() {
    setTimeout(() => {
      this.dispose = false;
    }, stabDuration);
    if(this.stab){
      this.direction ? this.img.src = "/public/Imagenes/swordStabRight.png" : this.img.src ="/public/Imagenes/swordStabLeft.png";
      this.direction ? this.vx = 1 : this.vx = -1
      this.stabSound.play()
        this.ctx.drawImage(
          this.img,
          this.x,
          this.y,
          this.w,
          this.h
          );
    }
    if(!this.stab){
      this.swingSound.play()
    if(this.swingDirection){
    this.img.src = "/public/Imagenes/swordSwing10.png";
      this.ctx.drawImage(
        this.img,
        (this.img.frame * this.img.width) / 4,
        0,
        this.img.width / 4,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
        );
      }
      if(!this.swingDirection){
    this.img.src = "/public/Imagenes/swordSwing11.png";
        this.ctx.drawImage(
          this.img,
          (this.img.frame * this.img.width) / 4,
          0,
          this.img.width / 4,
          this.img.height,
          this.x,
          this.y,
          this.w,
          this.h
          );
        }
    }

  }
  move() {
    this.x += game.player.vx;
    this.y += game.player.vy;
    if(this.stab){
      setTimeout(() => {
        this.x += this.vx
        this.y += this.vy
      }, 100);
    }
    this.tick++
    if(this.swingDirection){
      if(this.tick >= 3){
        this.img.frame++;
        this.tick = 0
      }
      if(this.img.frame > 4){
        if(this.rounds <= swordRounds){
          this.img.frame = 0;
          this.rounds ++;
        } else {
          swordRounds = 0;
          this.dispose;
        }
      }
    }

    if(!this.swingDirection){
      if(this.tick >= 3){
        this.img.frame--;
        this.tick = 0
      }
      if(this.img.frame < 0){
        if(this.rounds <= swordRounds){
          this.img.frame = 4  ;
          this.rounds ++;
        } else {
          swordRounds = 0;
          this.dispose;
        }
      }
    }
  }
  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
  
  isVisible() {
    return  this.dispose;
  }
}