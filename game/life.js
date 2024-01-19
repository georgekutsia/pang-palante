class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 5;
    this.y = 0;
    this.img = new Image();
    this.img.src = "../public/Imagenes/puffBubble1.png";
    this.img.frame = 0;
    this.w = 10;
    this.h = 10;
    this.total = 5;
    this.img = new Image();
    this.img.src = "../public/Imagenes/stats/heart.png"
  }

  draw() {
    this.ctx.save(); // guarda los estilos previos antes de ejecutar los siguientes para que no salgan los estilos estos en todos lados
    this.ctx.font = "30px Arial"
    this.ctx.fillStyle = "orange";
    for (let i = 0; i < this.total; i++) {
      this.ctx.drawImage(this.img, this.x + 10*i, this.y, this.w, this.h);
    }
    this.ctx.restore(); //reestablece el estilo al estado principal.
  }
  isVisible() {
    return  this.x > -2 && this.x <= this.ctx.canvas.width;  //determina cuándo es visible el obstáculo
  }
}
