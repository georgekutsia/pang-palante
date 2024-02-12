
class Charger {
  constructor(ctx) {
    this.ctx = ctx;
    ctx.font = "40px Verdana";
    this.outerRadius = 20;
    this.innerRadius = 19;
    this.aFinal = (Math.PI / 180) * 360;   // Ángulo final (360 grados)
  }
  draw(x, y, recharging, outerRadius, innerRadius, color1,color2) {
      this.ctx.save();
      var gradient = this.ctx.createLinearGradient(x - recharging, y,   x + 300, y );
      gradient.addColorStop(0, color1); 
      gradient.addColorStop(0.3, color2);
      gradient.addColorStop(1, "black");
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 0.1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, outerRadius, (Math.PI / 180) * (360-recharging*6), this.aFinal, false);
      this.ctx.arc(x, y, innerRadius, this.aFinal, (Math.PI / 180) * (360-recharging*6), true);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
  }
}