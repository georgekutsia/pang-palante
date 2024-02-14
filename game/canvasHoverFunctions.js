canvas.addEventListener('mousemove', (event) => officeHover(event, game.player));

function officeHover(event, player) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  if (
    mouseX >= player.x &&
    mouseX <= player.x + 50 &&
    mouseY >= player.y &&
    mouseY <= player.y + 250
    
  ) {
    alert("¡Estás aquí!");
  console.log(game.player)

    player.shootFire();
  }
}
