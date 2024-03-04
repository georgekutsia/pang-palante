class BasicWeapon {
  constructor(ctx, x, y, direction, vx, vy, isBig, basicBulletDuration) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = vx || 0;
    this.vy = vy || -13;
    this.direction = direction;
    this.radius =  CTXW / 90; // radio del círculo
    this.color = getRandomColor(); // función para obtener un color aleatorio
    this.tick = 0;
    this.isBig = isBig || false;
    this.basicBulletDuration =  basicBulletDuration || 250;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.radius, this.y + this.radius, this.radius-1, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    const outerRadius = this.radius; // Puedes ajustar el tamaño del borde aquí
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.radius, this.y + this.radius, outerRadius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1; // Puedes ajustar el grosor del borde aquí
    if(this.isBig) {
      this.radius = CTXW / 47
    this.ctx.lineWidth = 3;
    }
    this.ctx.stroke();
    this.ctx.closePath();

  }

  move() {
    this.x += this.vx;
    this.y += this.vy
    if(!this.isBig) {
      this.y -= basicWeaponSpeed;
    }
    if (this.y + 2 * this.radius >= this.ctx.canvas.height) {
      this.vy = -3;
    }
    this.tick++;
    if (this.tick >= this.basicBulletDuration) {
      this.y = -200;
    }
  }

  collides(objetivo) {
    if(ballBroke){  //importante para no impactar muchas vecs sobre la bola mientras esté rota y cambiar de nivel 1 en 1 
      const colX = this.x <= objetivo.x + objetivo.w && this.x + 2 * this.radius > objetivo.x;
      const colY = this.y + 2 * this.radius > objetivo.y && this.y < objetivo.y + objetivo.h;
      return colX && colY;
    }
  }
  collidesMiniboss1(objetivo) {
    if(ballBroke){  //importante para no impactar muchas vecs sobre la bola mientras esté rota y cambiar de nivel 1 en 1 
      const colX = this.x <= objetivo.x + objetivo.w && this.x + 2 * this.radius > objetivo.x;
      const colY = this.y + 2 * this.radius > objetivo.y && this.y < objetivo.y + objetivo.h/2;
      return colX && colY;
    }
  }

  isVisible() {
    return this.y >= -2  && this.y < CTXH && this.x >= 0 && this.x < CTXW;
  }
}

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}