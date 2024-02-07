// function clearing(player, bubbles, stairs, darkBubbles, platforms, flamethrowers, machineguns, auras, boxes, blasters, levelBalls, gatlings, cannons, healings, bars, steps, puffBubbles){
//   player.bulletArray = player.bulletArray.filter((e) =>e.isVisible()); //elimina cada bullet que ya no es visible y vacía el array
//   player.bulletFireArray = player.bulletFireArray.filter((e) =>e.isVisible()); //elimina cada bullet de fuego que ya no es visible y vacía el array
//   player.bulletBarArray = player.bulletBarArray.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
//   player.hooksArray = player.hooksArray.filter((e) =>e.isVisible()); //elimina cada bullet de cadena que ya no es visible y vacía el array
//   bubbles = bubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   stairs = stairs.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   darkBubbles = darkBubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   platforms = platforms.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   flamethrowers = flamethrowers.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   machineguns = machineguns.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   auras = auras.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   boxes = boxes.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   blasters = blasters.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   levelBalls = levelBalls.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   gatlings = gatlings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   cannons = cannons.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   healings = healings.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   bars = bars.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   steps = steps.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
//   puffBubbles = puffBubbles.filter((e) => e.isVisible()); //elimina cada obstáculo que ya no es visible y vacía el array
// }
// function drawing( background, stairs,spikes, explosions, platforms, bouncers, player, points, puffBubbles, boxes, bubbles, darkBubbles, flamethrowers, machineguns, auras, blasters, healings, gatlings,cannons, bars, steps,levelBalls  ){
//   background.draw(); //dibuja el background
//   stairs.forEach((e) => e.draw());
//   spikes.forEach((e) => e.draw());
//   explosions.forEach((e) => e.draw());
//   platforms.forEach((e) => e.draw());
//   bouncers.forEach((e) => e.draw());
//   player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
//   points.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
//   puffBubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
//   boxes.forEach((e) => e.draw()); //dibuja cada obstáculo
//   bubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
//   darkBubbles.forEach((e) => e.draw()); //dibuja cada obstáculo
//   flamethrowers.forEach((e) => e.draw()); //dibuja cada obstáculo
//   machineguns.forEach((e) => e.draw()); //dibuja cada obstáculo
//   auras.forEach((e) => e.draw()); //dibuja cada obstáculo
//   blasters.forEach((e) => e.draw()); //dibuja cada obstáculo
//   healings.forEach((e) => e.draw()); //dibuja cada obstáculo
//   gatlings.forEach((e) => e.draw()); //dibuja cada obstáculo
//   cannons.forEach((e) => e.draw()); //dibuja cada obstáculo
//   bars.forEach((e) => e.draw()); //dibuja cada obstáculo
//   steps.forEach((e) => e.draw()); //dibuja cada obstáculo
//   levelBalls.forEach((e) => e.draw()); //dibuja cada obstáculo
// }

// function moving(background, stairs,spikes, explosions, platforms, bouncers, player, points, puffBubbles, boxes, bubbles, darkBubbles, flamethrowers, machineguns, auras, blasters, healings, gatlings,cannons, bars, steps,levelBalls  ){
//   background.draw(); //dibuja el background
//   stairs.forEach((e) => e.move());
//   spikes.forEach((e) => e.move());
//   explosions.forEach((e) => e.move());
//   platforms.forEach((e) => e.move());
//   bouncers.forEach((e) => e.move());
//   player.move(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
//   points.move(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
//   puffBubbles.forEach((e) => e.move()); //dibuja cada obstáculo
//   boxes.forEach((e) => e.move()); //dibuja cada obstáculo
//   bubbles.forEach((e) => e.move()); //dibuja cada obstáculo
//   darkBubbles.forEach((e) => e.move()); //dibuja cada obstáculo
//   flamethrowers.forEach((e) => e.move()); //dibuja cada obstáculo
//   machineguns.forEach((e) => e.move()); //dibuja cada obstáculo
//   auras.forEach((e) => e.move()); //dibuja cada obstáculo
//   blasters.forEach((e) => e.move()); //dibuja cada obstáculo
//   healings.forEach((e) => e.move()); //dibuja cada obstáculo
//   gatlings.forEach((e) => e.move()); //dibuja cada obstáculo
//   cannons.forEach((e) => e.move()); //dibuja cada obstáculo
//   bars.forEach((e) => e.move()); //dibuja cada obstáculo
//   steps.forEach((e) => e.move()); //dibuja cada obstáculo
//   levelBalls.forEach((e) => e.move()); //dibuja cada obstáculo
// }