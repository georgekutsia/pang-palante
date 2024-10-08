class BasicWeapon {
  constructor(ctx, x, y, direction, vx, vy, isBig, basicBulletDuration, electrified = game.player.electricBurbalasIsActive, timeStop) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = vx || 0;
    this.vy = vy || -11;
    this.direction = direction;
    this.radius =  CTXW / (200) ; // radio del círculo
    this.color = getRandomColor(); // función para obtener un color aleatorio
    this.tick = 0;
    this.isBig = isBig || false;
    this.basicBulletDuration =  basicBulletDuration || 250;
    this.dispose = true;
    this.electrified = electrified;
    this.electricBurbalas = new Image();
    this.electricBurbalas.src = "/public/Imagenes/electricBurbalas1.png";F
    this.electricBurbalas.frameX = 0;
    this.electricBurbalas.frameY = 0;
    this.electricBurbalasTick = 0;
    this.timeStop = timeStop || false;
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

    if(this.electrified){
      this.ctx.drawImage(
        this.electricBurbalas,
        (this.electricBurbalas.frameX * this.electricBurbalas.width) / 5,
        (this.electricBurbalas.frameY * this.electricBurbalas.height) / 2,
        this.electricBurbalas.width / 5,
        this.electricBurbalas.height / 2,
        this.x - this.radius * 5,
        this.y - this.radius * 5,
        this.radius * 12,
        this.radius * 12
        );
      }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy
    if(!this.isBig) {
      this.y -= basicWeaponSpeed;
    }
    if (this.y + 2 * this.radius >= this.ctx.canvas.height) {
      this.vy = -this.vy;
    }
    this.tick++;
    if (this.tick >= this.basicBulletDuration || this.y <= -10 || this.x <= -30 || this.x  >= CTXW + 50) {
      bullsEyeForHealth = 0;
      amountOfDamageForBar = 0;
      game.cadenaAnim.img.framex = -1;
      game.cadenaAnim.img.framey = 0;
      this.dispose = false;
      game.player.life.healingDamages = []
    }
    this.electricBurbalasTick++;
    if(this.electricBurbalasTick > 1){
      this.electricBurbalas.frameX++
      this.electricBurbalasTick = 0;
    }
    if(this.electricBurbalas.frameX > 5){
      this.electricBurbalas.frameY ++
      this.electricBurbalas.frameX = 0;
    } 
    if(this.electricBurbalas.frameY > 2){
      this.electricBurbalas.frameY = 0;
      this.electricBurbalas.frameX = 0;
      this.electricBurbalasTick = 0;
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
      const colX = this.x <= objetivo.x + objetivo.w && this.x + 2 * this.radius > objetivo.x;
      const colY = this.y  > objetivo.y + objetivo.h/4 && this.y < objetivo.y + objetivo.h - objetivo.h/4;
      return colX && colY;
  }

  isVisible() {
    return this.dispose
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