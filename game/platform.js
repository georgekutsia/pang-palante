class Platform {
  constructor(ctx, x, y, w, h, obstacleImg) {
    this.ctx = ctx;
    this.x = x || 100;
    this.w = w || this.ctx.canvas.width / 13;
    this.h = h || this.ctx.canvas.width / 30;
    this.y = y || this.ctx.canvas.height - this.h - 20;
    this.img = new Image();
    this.img.src = obstacleImg || "../public/Imagenes/obstacles/platformSolid2.png";
    this.vx = 0;
    this.color = "#ff0000"; // Color predeterminado, puedes ajustarlo según tus necesidades
    this.red =  (this.w + this.h) * 4; // solo usamos como numero fijo a recoger el rojo, que dependerá de la anchura total de la plataforma
    this.green = Math.random() * 140;
    this.blue = Math.random() * 140;
    this.life =  this.red /2;   
    //la vida de la plataforma depende de su tamaño, lo que significa que depende de Red, que es la anchura más la altura multiplicada por 2. 
    this.divisibleWithLife = this.life / 25 //como le restamos vida de 25 en 25, obtenemos cuantas veces se le podrá restar antes de llegar a 0 o menos
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
    this.ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    this.ctx.fillRect(this.x + 3 , this.y, this.w -6, this.h);
    this.ctx.restore();
    
    // Dibujar la imagen encima del color tintado
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // const newColor = this.calculateNewColor();
    // this.color = newColor;c
  }

  move() {
    // Método para actualizar la posición de la plataforma y cambiar su color
    this.x += this.vx;
    // Cambiar el color de forma gradual mientras se mueve
  }
  
  calculateNewColor() {
    // Calcular un nuevo color basado en la posición de la plataforma
      this.life -= 25;      
      this.red += Math.floor(this.redLeft)    //Math.floor no lo lleva exacta exactamente hasta 255, pero no importa mucho
      this.green += Math.floor(this.greenLeft);
      this.blue += Math.floor(this.blueLeft);
  }

  isVisible() {
    return this.x > -2 && this.x <= this.ctx.canvas.width;
  }

  collides(objetivo) {
    const colX = this.x + 7 <= objetivo.x + objetivo.w && this.x + this.w - 3 >= objetivo.x;
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}
