function bounceFromObstacles(elem1, elem2){
  if (elem1.y <= elem2.y + 5 ) {
    elem1.vy = -3;
  }
  if(elem1.y >= elem2.y + elem2.h -5){
    elem1.vy = 3;
  }
  if(elem1.x <= elem2.x +5){
    elem1.vx = -0.5;
  } 
  if(elem1.x >= elem2.x +elem2.w - 5){
    elem1.vx = 0.5;
  }
}
function basicBulletBounce(elem1, elem2){
  if(elem1.bulletDirection){
    elem1.vx = elem1.direction;
    elem1.bulletDirection = false;
  }
  if (elem1.y <= elem2.y) {
    elem1.vy = bubbleSpeedY;
  }
  if(elem1.y >= elem2.y + elem2.h){
    elem1.vy = -bubbleSpeedY;
  }
  if(elem1.x <= elem2.x){
    elem1.vx = -bubbleSpeedY;
  } 
  if(elem1.x >= elem2.x +elem2.w){
    elem1.vx = bubbleSpeedY;
  }
}

function bubblePuff(bubble, puffBubbles, bubbles, ctx){
  const elx = bubble.x;
  const ely = bubble.y;
  bubble.x = -100
  const puffBubble = new BubblePuff(ctx, elx, ely, bubble.w, bubble.h)
  puffBubbles.push(puffBubble)      // 0.8 es la direccion y velocidad a la que salen las nuevas, el otro es la dirección
  const smallBubble1 = new Bubble(ctx,  elx, ely, bubble.w/2, bubble.h/2,-0.8, -1, bubble.g + 0.01, bubble.damage / 2 )// al explotar una burbuja, crea otra en su lugar, usando su ubicación y dimensiones para hacerla más pequeña
  const smallBubble2 = new Bubble(ctx, elx, ely,  bubble.w/2, bubble.h/2, 0.8, -1,bubble.g + 0.01, bubble.damage / 2 )
  bubbles.push(smallBubble1, smallBubble2)
}


function invertImage(ctx, x, y, w, h, img) {
  ctx.clearRect(x, y, w, h);
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}




function randomLootFromBox(ctx, flamethrowers, healings, bars, auras,machineguns, x, y){
  const randomItem = Math.floor(Math.random() *5) + 1;
  if(randomItem === 1){
    const flamethrower = new Flamethrower(ctx, x, y  )
    flamethrowers.push(flamethrower)
  } else if(randomItem === 2){
    const healingItem = new Healing(ctx, x, y )
    healings.push(healingItem)
  } else if(randomItem === 3){
    const aura = new Aura(ctx, x, y)
    auras.push(aura)
  }else if(randomItem === 4){
    const machinegun = new Machinegun(ctx, x, y)
    machineguns.push(machinegun)
  } else if(randomItem === 5 ){
    const bar = new Bars(ctx, x, y)
    bars.push(bar)
  }
}
function specificLootFromBox(ctx, specificLoot, flamethrowers, healings, bars, auras,machineguns, x, y){
  if(specificLoot === 1){
    const flamethrower = new Flamethrower(ctx, x, y  )
    flamethrowers.push(flamethrower)
  } else if(specificLoot === 2){
    const healingItem = new Healing(ctx, x, y )
    healings.push(healingItem)
  } else if(specificLoot === 3){
    const aura = new Aura(ctx, x, y)
    auras.push(aura)
  }else if(specificLoot === 4){
    const machinegun = new Machinegun(ctx, x, y)
    machineguns.push(machinegun)
  }else if(specificLoot === 5){
    const bar = new Bars(ctx, x, y)
    bars.push(bar)
  }
}

function flamethrowerItem(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}
function barItem(ctx, bars){
  const bar = new Bars(ctx);
  bars.push(bar)
}

function auraItem(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}
function levelBallItem(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx)
  levelBalls.push(levelBall)
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 160);
  const green = Math.floor(Math.random() * 160);
  const blue = Math.floor(Math.random() * 160);
  const rgbColor = `rgb(${red},${green},${blue})`;
  return rgbColor;
}

 function getRandomNumber(number) {
   return Math.floor(Math.random() * number) + 1;
}


function  itemDropOnPlatform (items, platforms){
  items.forEach((item) => {  
    platforms.forEach((platform) => {
      if(item.collides(platform)){
        item.y =  platform.y - item.h
        item.vy = 0;
      }
    })
  })
}   
function  itemDropOnStairs (items, platforms){
  items.forEach((item) => {  
    platforms.forEach((platform) => {
      if(item.collides(platform)){
        item.vy = 0.;
        item.g = 0.3
      }
    })
  })
}   



function bouncerPlayerCollision(player, bouncer){
  player.vy = 0;
  if (
    player.y <= bouncer.y &&
    player.x <= bouncer.x + bouncer.w &&
    player.x + player.w > bouncer.x - 30
  ) {
    player.vy = -3;
    player.y = bouncer.y - player.h;
  }
  if (player.y + player.h >= bouncer.y + bouncer.h) {//colisión por la parte inferior de la plataforma
    player.vy = 0;
  }
  if (player.x >= bouncer.x + bouncer.w - 6) {
    //colisión por la derecha
    player.g = 0.2;
    player.vx = 2;
    setTimeout(() => {
      player.vx = 0;
    }, 500);
  }
  if (player.x - 1 <= bouncer.x) {//colisión por la izquierda
    player.g = 0.2;
    player.vx = -2;
    setTimeout(() => {
      player.vx = 0;
    }, 500);
  }
}

function platformPlayerCollision(player, platform){
  if (
    player.y <= platform.y - 10 &&
    player.x <= platform.x + platform.w &&
    player.x + player.w > platform.x
  ) {
    if (platform.isBrakable) {
      platform.braking--;
      platform.goingToBreak = true;
    }
    player.y = platform.y - player.h;
    player.x += platform.vx; // si le digo que es igual player.vx = platform.vx, se ve el jugador moviendose por cómo estan configurados los frames de movimiento
    player.vy = platform.vy;
    player.bulala = true;
    ALT = 16;
  }
  if (player.y + player.h >= platform.y + platform.h) {
    //colisión por la parte inferior de la plataforma
    player.vy = 0;
  }
  if (
    player.x >= platform.x + platform.w - 6 ||
    player.x <= platform.x
  ) {
    //colisión por los lados de la plataforma
    player.vy = 0;
    player.vx = 0;
    player.g = 0.2;
  }
}

function barCollidesObstacle(bar, obstacle, barHit, player){
    bar.solidState = true;
    bar.y = obstacle.y + obstacle.h;
    bar.vy = 0;
    barHit.play();
    player.shootBarSound.volume = 0;
    bar.img.src = "../public/Imagenes/weaponBarSolid.png";
}

function checkBarCollisions(bulletBarArray, obstacles, collisionHandler, player) {
  bulletBarArray.forEach((bar) => {
    obstacles.forEach((obstacle) => {
      if (bar.collidesTop(obstacle)) {
        barCollidesObstacle(bar, obstacle, collisionHandler, player);
      }
    });
  });
}