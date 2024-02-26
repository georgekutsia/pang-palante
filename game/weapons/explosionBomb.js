class ExplosionBomb {
  constructor(ctx, x, y,  w, h, vx, vy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w  || this.ctx.canvas.width/ 29;
    this.h = h || this.ctx.canvas.width/ 29;
    this.vx = vx || -0.065; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = vy || 0;
    this.g = 0.05
    this.img = new Image();
    this.img.src = "/public/Imagenes/explosion3.png";
    this.img.frame = 0;
    this.tick = 0;
    this.damage = 1;
    this.fireShootSOund = new Audio("/public/sounds/electrofire/fireShootSound.mp3")
    this.fireShootSOund.volume = 0.05;
    this.exploded = false;
    this.dispose = true;
    this.canCollide = false;
  }

  draw() {

    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 10,
      0,
      this.img.width / 10,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.vy += this.g
    this.x += this.vx;
    this.y += this.vy;
    this.tick++
    setTimeout(() => {
      this.dispose = false;
    }, 4000);
    if(this.tick >= 5){
      this.img.frame++;
      this.tick = 0
      }
    if(this.img.frame > 3 && !this.exploded){
      this.img.frame = 0;
      this.canCollide = true;
      
    } else if(this.img.frame > 12 && this.exploded){
      this.dispose = false;
    }

    if(this.y + this.h >= CTXH-1){
      this.exploded = true;
      this.vx = 0;
      this.vy = 0;
      this.g = 0;
    }
  }
  collides(objetivo) {
    if(this.canCollide){
      const colX = this.x  <= objetivo.x  && this.x + this.w > objetivo.x ;
      const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
    }
  }
  collidesBoss(objetivo) {
    if(this.canCollide){
    const colX = this.x + this.w >= objetivo.x && this.x <= objetivo.x + objetivo.w;
    const colY = this.y + this.h > objetivo.y + 40 && this.y < objetivo.y + objetivo.h/2;
      return colX && colY;
    }
  }
  isVisible() {
    return this.dispose;
  }
}