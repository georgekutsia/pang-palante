class BasicWeapon {
  constructor(ctx, x, y, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vy = -3;
    this.vx = 0;
    this.direction = direction;
    this.radius = this.ctx.canvas.width / 90; // radio del círculo
    this.color = getRandomColor(); // función para obtener un color aleatorio
    this.tick = 0;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x + this.radius, this.y + this.radius, this.radius-1, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y + 2 * this.radius >= this.ctx.canvas.height) {
      this.vy = -3;
    }
    this.tick++;
    if (this.tick >= 250) {
      this.y = -200;
    }
  }

  collides(objetivo) {
    const colX = this.x <= objetivo.x + objetivo.w && this.x + 2 * this.radius > objetivo.x;
    const colY = this.y + 2 * this.radius > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }

  isVisible() {
    return this.y >= -2 * this.radius;
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