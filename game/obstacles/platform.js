class Platform {
  // anchura 125 requiere 3 impactos.    145 require 4     195 requiere 5     245 require 6
  constructor(ctx, x, y, w, h, obstacleImg, isSolid, isBrakable, isBouncable, vx, vy, xLimit1, xLimit2, yLimit1, yLimit2, canBeElectrified) {
    this.ctx = ctx;
    this.x = x || 100;
    this.w = w || this.ctx.canvas.width / 13;
    this.h = h || this.ctx.canvas.width / 30;
    this.y = y || this.ctx.canvas.height - this.h - 20;
    this.img = new Image();
    this.img.src = obstacleImg || "/public/Imagenes/obstacles/platformSolid2.png";
    this.electroImg = new Image();
    this.electroImg.src = "/public/Imagenes/electrifiedPlatform1.png";
    this.electroTick = 0;
    this.electroImg.frame= 0;
    this.electroShocked = false;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.xLimit1   = xLimit1   || -40
    this.xLimit2 = xLimit2 || CTXW + 40
    this.yLimit1 = yLimit1 || CTXH
    this.yLimit2 = yLimit2 || CTXH
    this.speedX = vx || 0;
    this.speedY = vy || 0;
    this.color = "#ff0000"; // Color predeterminado, puedes ajustarlo según tus necesidades
    this.red =  (this.w + this.h) ; // solo usamos como numero fijo a recoger el rojo, que dependerá de la anchura total de la plataforma
    this.green = Math.random() * 140;
    this.blue = Math.random() * 140;
    this.life =  this.red /2;   
    this.isSolid = isSolid || false;
    this.isBrakable = isBrakable || false;
    this.isBouncable = isBouncable || false;
    this.goingToBreak = false;
    this.isElectrified = false;
    this.canBeElectrified = canBeElectrified ||false;
    this.braking = 150;
    //la vida de la plataforma depende de su tamaño, lo que significa que depende de Red, que es la anchura más la altura multiplicada por 2. 
    this.divisibleWithLife = this.life / 25 //como le restamos vida de 25 en 25, obtenemos cuantas veces se le podrá restar antes de llegar a 0 o menos//! a veces hay que restar 25 por un fallo
    this.redLeft = (255 - this.red) / this.divisibleWithLife //restamos a 255 el numero/tamaño de red y se obtiene cuanto hay que sumar hasta llegar al máximo
    //en RGB que sería lo necesario para llegar al color blanco. Luego lo dividimos por la cantidad de veces que podremos hacerlo hasta que desaparezca
    //la plataforma. Así obtenemos una cifra estable que se sumará y la última suma será la justa y necesaria hasta llegar a 255.
    this.greenLeft = (255 - this.green) / (this.divisibleWithLife -1) //le restamos 1 para que llegue al 255 en la paleta de colores en el disparo anterior a desaparecer
    this.blueLeft = (255 - this.blue) / (this.divisibleWithLife -1)
  }

  draw() {
    // Dibujar la plataforma en el canvas y aplicar tintado
    this.ctx.save();
    this.ctx.globalCompositeOperation = "source-atop";
    if(this.isSolid){
      this.ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    } else {
      this.ctx.fillStyle = `black`;
    }
    this.ctx.fillRect(this.x + 3 , this.y, this.w -6, this.h);
    this.ctx.restore();
    // Dibujar la imagen encima del color tintado
    if(this.goingToBreak){
        if(this.braking <= 100){
          this.img.src = "../public/Imagenes/obstacles/platformSolidBreaking1.png"
        }
        if(this.braking <= 0){
          this.x = -300
        }
    }

    if(this.electroShocked){

      this.ctx.drawImage(
        this.electroImg,
        (this.electroImg.frame * this.electroImg.width) / 5,
        0,
        this.electroImg.width / 5,
        this.electroImg.height ,
        this.x +1 ,
        this.y -5,
        this.w ,
        this.h+10 
      );
    }

    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

  }

  move() {
    // Método para actualizar la posición de la plataforma y cambiar su color
    this.x += this.vx;
    this.y += this.vy;
    if(this.vx && this.x + this.w >= this.xLimit2){
        this.vx = -this.speedX|| -0.5;
    } else if (this.vx && this.x <= this.xLimit1){
      this.vx = this.speedX|| 0.5;
    }
    if(this.vy && this.y + this.h >= this.yLimit2){
      this.vy = -this.speedY
    } else if(this.vy && this.y <= this.yLimit1){
      this.vy = this.speedY
    }

    if(this.electroShocked){
      this.electroTick++;
      if(this.electroTick >6){
        this.electroImg.frame++;
        this.electroTick = 0;
      }
      if(this.electroImg.frame > 4){
        setTimeout(() => {
          this.electroImg.frame = 0;
        }, 1000);
    }
  }
  }
  
  calculateNewColor() {
    // Calcular un nuevo color basado en la posición de la plataforma
      this.life -= 25;
      this.red += Math.floor(this.redLeft)    //Math.floor no lo lleva exacta exactamente hasta 255, pero no importa mucho
      this.green += Math.floor(this.greenLeft);
      this.blue += Math.floor(this.blueLeft);
  }

  isVisible() {
    return this.x > -40 && this.x <= this.ctx.canvas.width + 40;
  }

  collides(objetivo) {
    const colX = this.x  <= objetivo.x + objetivo.w && this.x + this.w  >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
