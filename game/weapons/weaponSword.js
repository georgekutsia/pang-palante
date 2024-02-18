class WeaponSword {
  constructor(ctx, x, y, swingDirection, frame, w, h) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx =  0; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/swordSwing3.png";
    this.img.frame = frame || 0;;
    this.w = w || this.ctx.canvas.width/ 13;
    this.h = h ||  this.ctx.canvas.width/ 8;
    this.tick = 0;
    this.damage = 0.05;
    this.fireShootSOund = new Audio("/public/sounds/electrofire/fireShootSound.mp3")
    this.fireShootSOund.volume = 0.05;
    this.dispose = true;
    this.swingDirection =  swingDirection || false;
  }

  draw() {
    if(this.swingDirection){
    this.img.src = "/public/Imagenes/swordSwing3.png";
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
    this.img.src = "/public/Imagenes/swordSwing4.png";
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
  move() {
    this.x += game.player.vx;
    this.y += game.player.vy;
    this.tick++
    if(this.swingDirection){
      if(this.tick >= 3){
        this.img.frame++;
        this.tick = 0
      }
      if(this.img.frame > 2){
        this.dispose = false
      }
    }

    if(!this.swingDirection){
      if(this.tick >= 3){
        this.img.frame--;
        this.tick = 0
      }
      if(this.img.frame < 0){
        this.dispose = false;
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