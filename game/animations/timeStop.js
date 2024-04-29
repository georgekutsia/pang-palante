class TimeStop {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width - 80;
    this.y = 10;
    this.w = this.ctx.canvas.width / 20;
    this.h = this.ctx.canvas.width / 20;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/public/Imagenes/timeStopImg.png";
    this.img.frame = 0;
    this.tick = 0;
    this.dispose = true;
    this.moving = true; // Agregado: propiedad para controlar el movimiento
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 12,
      0,
      this.img.width / 12,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    if (this.tick > 0.5) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 11) {
      this.img.frame = 0;
    }

    this.detectPlaceToMove(); // Corregido: llamada al método detectPlaceToMove
  }

  isVisible() {
    return this.dispose;
  }

  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + this.w >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }

  detectPlaceToMove() {
    if (this.moving) {
      if (this.x !== game.player.x && this.x < game.player.x) this.vx = 2;
      if (this.x !== game.player.x && this.x > game.player.x) this.vx = -2;
      
      if (this.x >= game.player.x && this.x <= game.player.x + 3 && this.y >= game.player.y && this.y <= game.player.y + 3) {
        alert("destin");
        this.moving = false; // Detener el movimiento cuando alcanza el destino
      }
    }
  }
}

function gainingCoins(amount) {
  game.player.life.amountOfGainedCoins = amount;
  game.player.life.isGaining = true;
  coins += amount;
}
