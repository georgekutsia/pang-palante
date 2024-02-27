class ExplosionBullet {
  constructor(ctx, x, y,  w, h, vx, vy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w  || this.ctx.canvas.width/ 29;
    this.h = h || this.ctx.canvas.width/ 29;
    this.vx = vx || -0.065; // minimo ajuste para que el fuego vaya recto de verdad, ya que al aumentar de tamaño solo se expande hacia al derecha
    this.vy = vy || 0;
    this.g = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/explosion1.png";
    this.img.frame = 0;
    this.tick = 0;
    this.damage = 0.5;
    this.fireShotSmall = new Audio("/public/sounds/shooting/fireShotSmall.mp3")
    this.fireShotSmall.volume = 0.1;
    this.fireExplosionSmall = new Audio("/public/sounds/shooting/fireExplosionSmall.mp3")
    this.fireExplosionSmall.volume = 0.05;
    this.exploded = false;
    this.dispose = true;
    this.canCollide = true;
    this.shot = true;
  }

  draw() {
    if(this.shot){
    this.fireShotSmall.play();
    this.shot = false;
    }
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 11,
      0,
      this.img.width / 11,
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
    if(this.tick >= 3){
      this.img.frame++;
      this.tick = 0
      }
    if(this.img.frame > 3 && !this.exploded){
      this.img.frame = 0;
    } else if(this.img.frame > 12 && this.exploded){
      this.dispose = false;
    }
  }

  collides(objetivo) {
    if(this.canCollide){
      const colX = this.x  <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x ;
      const colY =this.y + this.h -5 > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
    }
  }
  collidesBoss(objetivo) {
      const colX = this.x  <= objetivo.x + objetivo.w  && this.x - this.w > objetivo.x ;
      const colY =this.y + this.h -5 > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
  }
  isVisible() {
    return this.dispose;
  }
}