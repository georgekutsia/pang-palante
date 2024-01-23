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
  const smallBubble1 = new Bubble(ctx, -0.8, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.01, bubble.damage / 2 )// al explotar una burbuja, crea otra en su lugar, usando su ubicación y dimensiones para hacerla más pequeña
  const smallBubble2 = new Bubble(ctx, 0.8, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.01, bubble.damage / 2 )
  bubbles.push(smallBubble1, smallBubble2)
}


function invertImage(ctx, x, y, w, h, img) {
  ctx.clearRect(x, y, w, h);
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}




function randomLootFromBox(ctx, flamethrowers, healings, auras,machineguns, x, y){
  const randomItem = Math.floor(Math.random() *4) + 1;
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
  }
}
function specificLootFromBox(ctx, specificLoot, flamethrowers, healings, auras,machineguns, x, y){
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
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red},${green},${blue})`;
  return rgbColor;
}
