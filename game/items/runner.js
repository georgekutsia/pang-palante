class Runner {  
constructor(ctx, x, y, g, w, h) {
    this.ctx = ctx;
    this.x =  x || 0; //el obstáculo aparece desde arriba del canvas 
    this.y = y  || this.ctx.canvas.height - 80; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.w = w || this.ctx.canvas.width / 17;  //anchura calculada respecto al canvas
    this.h = h || this.ctx.canvas.width / 17;  //altura calculada respecto al canvas
    this.vy = 0;
    this.vx = 3;
    this.vyInBubble = -2
    this.g = g || 0.05;
    this.tick = 0;
    this.img = new Image();   //crear nueva imágene ne canvas
    this.img.src = "/public/Imagenes/koren1.png";  //definir cual es la nueva imagen
    this.img.frame = 0;
    this.trappedInBubble = false;
    this.trapBubbles = [];
    this.dispose = true;
    this.helpMessages = 0;
    this.helpMe = [
      "¡Necesito ayuda! ¡Te recompensaré!",
      "¡Por favor, ayúdame! Te pagaré bien",
      "¡Auxilio! Te lo pagaré con gusto",
      "¡Socorro! Recompensaré tu ayuda",
      "¡Estoy en apuros! ¡Seré generoso!",
      "¡Ayúdame, por favor! Te pagaré lo justo",
      "¡Sálvame! Te compensaré adecuadamente",
      "¡Necesito asistencia! Puedo pagarte pastuki",
      "¡SOS! ¡Estoy dispuesto a recompensarte!",
      "¡Socorro! Te ofreceré una retribución justa",
    ];
    this.help = this.helpMe[Math.floor(Math.random() * this.helpMe.length)]; 
  }
  draw() {
    this.trapBubbles.forEach((trap) => trap.draw())
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / 6,
      0,
      this.img.width / 6,
      this.img.height ,
      this.x,
      this.y,
      this.w,
      this.h
    );
    switch (this.helpMessages) {
        case 0 : 
          this.ctx.font = "22px Arial";
          this.ctx.save();
          ctx.fillStyle = "rgb(251, 209, 209)";
          this.ctx.fillText(this.help, this.x - 99, this.y - 2);
          this.ctx.fillText(this.help, this.x - 101, this.y - 4);
          this.ctx.fillStyle = "black";
          this.ctx.fillText(this.help, this.x - 100, this.y - 3);
          this.ctx.restore();
        break;
        case 1:
            this.help = "OH NOOOOOOO!!!"
            this.ctx.font = "22px Arial";
            this.ctx.save();
            ctx.fillStyle = "rgb(251, 209, 209)";
            this.ctx.fillText(this.help, this.x - 49, this.y - 2);
            this.ctx.fillText(this.help, this.x - 51, this.y - 4);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(this.help, this.x - 50, this.y - 3);
            this.ctx.restore();
        break;
        case 2:
            this.help = "¡Casi no la cuento!"
            this.ctx.font = "22px Arial";
            this.ctx.save();
            ctx.fillStyle = "rgb(251, 209, 209)";
            this.ctx.fillText(this.help, this.x - 49, this.y - 2);
            this.ctx.fillText(this.help, this.x - 51, this.y - 4);
            this.ctx.fillStyle = "black";
            this.ctx.fillText(this.help, this.x - 50, this.y - 3);
            this.ctx.restore();
        break;
      default:
        break;
    }

  }
  move() {
    this.vy += this.g;  //efecto gravedad, aumenta la velocidad a medida que baja
    this.y += this.vy;
    this.x += this.vx;
    this.tick++
    if(this.tick >= 7){
      this.img.frame++;
      this.tick = 0;
      if(this.img.frame > 5){
        this.img.frame = 0;
      }
    }
    this.trapBubbles.forEach((trap) => trap.move())
    if(this.y + this.h >= CTXH + 10){
      this.vy = 0;
      this.y =this.ctx.canvas.height - 85; // el obstáculo sale de una altura específica o de alguna altura randóm
    this.img.src = "/public/Imagenes/koren1.png";  //definir cual es la nueva imagen
    this.vyInBubble = -2;
    }
    if(this.x >= CTXW +10  && this.y >= this.ctx.canvas.height - 90){
      gainingCoins(10);
      this.dispose = false;
    } else if(this.x >= CTXW +10 && this.y <= this.ctx.canvas.height - 90 || this.y + this.h <= 0){
      losingMoney(game.player, 20) 
      this.dispose = false;

    }
    if(this.x >= CTXW - 250){
      this.helpMessages = 2
    }
  }
  trapped(){
    this.trappedInBubble = true;
    this.g = 0;
    this.vy = this.vyInBubble;
    this.img.src = "/public/Imagenes/koren1Trapped.png";
    this.helpMessages = 1;
    let bub = new Bubble(ctx, this.x - 10, this.y - 10, this.w * 1.3, this.h * 1.3 , this.vx, this.vy, 0.01, false, false, 0, false, 0, true);
    this.trapBubbles.push(bub);
  }

  darkBubbleHit(){
    this.vy = -1;
    this.vx = 0;
    this.g = 0.01;
    this.img.src = "/public/Imagenes/koren1Trapped.png";
    setInterval(() => {
      this.w -= 0.1;
      this.h -= 0.1;
    }, 10);
  }
  notTrapped(){
    this.vyInBubble = -2;
    this.vy = 3;
    this.g = 0.05;
    this.trapBubbles = [];
    this.trappedInBubble = false;
    this.helpMessages = 2;
  }
  isVisible(){
    return  this.dispose;  //determina cuándo es visible el obstáculo
  }
  collides(objetivo) {  //chequéa la colisión. 
    const colX = this.x <= objetivo.x + objetivo.w  && this.x + this.w > objetivo.x;   
    const colY = this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }
}

