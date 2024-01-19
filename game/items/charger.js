
class Charger {
  constructor(ctx) {
    this.ctx = ctx;
    ctx.font = "40px Verdana";
    this.outerRadius = 20;
    this.innerRadius = 19;
    this.aFinal = (Math.PI / 180) * 360;   // Ángulo final (360 grados)
  }
  
  draw(x, y, recharging) {
      this.ctx.save();
      var gradient = this.ctx.createLinearGradient(x - recharging, y,   x + 300, y );
      gradient.addColorStop(0, 'yellow'); 
      gradient.addColorStop(1, 'red');
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.outerRadius, (Math.PI / 180) * (360-recharging*2), this.aFinal, false);
      this.ctx.arc(x, y, this.innerRadius, this.aFinal, (Math.PI / 180) * (360-recharging*2), true);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
  }

  move() {

  }

  rechargingWeapons() {

}}