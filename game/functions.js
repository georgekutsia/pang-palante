function bounceFromObstacles(elem1, elem2, extraBounce = 0){
  if (elem1.y +  elem1.h/2 <= elem2.y   ) {
    elem1.vy =  -Math.abs(elem1.w/20 + 7 + extraBounce) ;
  }
  if (elem1.y +  elem1.h/2 >= elem2.y   ) {
    elem1.vy =  Math.abs(elem1.w/20 + 7 + extraBounce) ;
  }
  if(elem1.x + elem1.w/2 <= elem2.x ){
    elem1.vx = -Math.abs(elem1.w/40 + extraBounce) ;
  }
  if(elem1.x + elem1.w/2> elem2.x + elem2.w ){
    elem1.vx = Math.abs(elem1.w/40 + extraBounce) ;
  }
}

function basicBulletBounce(elem1, elem2){
  if(elem1.direction){
    elem1.vx = elem1.direction;
  }
  if (elem1.y + elem1.radius >= elem2.y) {
    elem1.vy = -elem1.vy;
  }

  if(elem1.x + elem1.radius<= elem2.x){
    elem1.vx = -elem1.vx;
    elem1.direction = elem1.vx // para que tras rebotar en una plataforma vertical y volver en otra dirección a rebotar sobre plataforma horizontal, mantenga la dirección
  } 
  if(elem1.x >= elem2.x +elem2.w){
    elem1.vx = elem1.vx;
    elem1.direction = elem1.vx; // para que tras rebotar en una plataforma vertical y volver en otra dirección a rebotar sobre plataforma horizontal, mantenga la dirección

  }
}

function bubblePuff(bubble, puffBubbles, bubbles, ctx){
  const elx = bubble.x;
  const ely = bubble.y;
  bubble.x = -200
  const puffBubble = new BubblePuff(ctx, elx, ely, bubble.w, bubble.h)
  puffBubbles.push(puffBubble)      // 0.8 es la direccion y velocidad a la que salen las nuevas, el otro es la dirección
  const smallBubble1 = new Bubble(ctx,  elx, ely, bubble.w/2, bubble.h/2, -bubbleSpeedX, -1 , bubble.g + 0.01, false, false, bubble.damage / 2 )// al explotar una burbuja, crea otra en su lugar, usando su ubicación y dimensiones para hacerla más pequeña
  const smallBubble2 = new Bubble(ctx, elx, ely,  bubble.w/2, bubble.h/2, bubbleSpeedX, -1 , bubble.g + 0.01, false, false, bubble.damage / 2 )
  bubbles.push(smallBubble1, smallBubble2)
}


function invertImage(ctx, x, y, w, h, img) {
  ctx.clearRect(x, y, w, h);
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}




function flamethrowerItem(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
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
 function getRandomNumberDecimals(number, aditional) {
   return Math.floor(Math.random() * number)+ aditional;
}


function  itemDropOnPlatform (items, platforms){
  items.forEach((item) => {  
    platforms.forEach((platform) => {
      if(item.collides(platform)){
        item.y =  platform.y - item.h
        item.vy = platform.vy;
        item.vx = platform.vx;
      }
    })
  })
}   
function  itemDropOnStairs (items, platforms){
  items.forEach((item) => {  
    platforms.forEach((platform) => {
      if(item.collides(platform)){
        item.vy = platform.vy;
        item.vx = platform.vx
        item.g = 0.3
      }
    })
  })
}   

function itemDropOn(platforms, boxes, stairs,flamethrowers, machineguns, healings,bars, blasters,  auras, coins, steps, levers, hooks, electros, swords){
  itemDropOnPlatform(flamethrowers, platforms);
  itemDropOnPlatform(machineguns, platforms);
  itemDropOnPlatform(healings, platforms);
  itemDropOnPlatform(bars, platforms);
  itemDropOnPlatform(blasters, platforms);
  itemDropOnPlatform(auras, platforms);
  itemDropOnPlatform(coins, platforms);
  itemDropOnPlatform(steps, platforms);
  itemDropOnPlatform(levers, platforms);
  itemDropOnPlatform(hooks, platforms);
  itemDropOnPlatform(electros, platforms);
  itemDropOnPlatform(swords, platforms);


  itemDropOnPlatform(flamethrowers, boxes);
  itemDropOnPlatform(machineguns, boxes);
  itemDropOnPlatform(healings, boxes);
  itemDropOnPlatform(bars, boxes);
  itemDropOnPlatform(auras, boxes);
  itemDropOnPlatform(blasters, boxes);
  itemDropOnPlatform(coins, boxes);
  itemDropOnPlatform(steps, boxes);
  itemDropOnPlatform(levers, boxes);
  itemDropOnPlatform(hooks, boxes);
  itemDropOnPlatform(electros, boxes);
  itemDropOnPlatform(swords, boxes);

  itemDropOnStairs(flamethrowers, stairs);
  itemDropOnStairs(machineguns, stairs);
  itemDropOnStairs(healings, stairs);
  itemDropOnStairs(bars, stairs);
  itemDropOnStairs(blasters, stairs);
  itemDropOnStairs(auras, stairs);
  itemDropOnStairs(blasters, stairs);
  itemDropOnStairs(coins, stairs);
  itemDropOnStairs(steps, stairs);
  itemDropOnStairs(levers, stairs);
  itemDropOnStairs(hooks, stairs);
  itemDropOnStairs(electros, stairs);
  itemDropOnStairs(swords, stairs);
}


function bigWeaponBubble (ctx, bullet, player){ //la burbuja gigante que dispara player
  const bullet1 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, -12, 12);
  const bullet2 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, 12, -12);
  const bullet3 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, 12, 12);
  const bullet4 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, -12, -12);
  player.bulletArray.push(bullet1, bullet2,bullet3,bullet4)
}

function darkBubbleExplosion(darkBubbleExplosion, bubble, bubbles, puffBubbles){
  darkBubbleExplosion.play()
  const bub1 = new Bubble(ctx, bubble.x, bubble.y, 15, 15, -1.5, -0.5)
  const bub2 = new Bubble(ctx, bubble.x - 50, bubble.y, 15, 15, -1, -0.5)
  const bub3 = new Bubble(ctx, bubble.x - 10, bubble.y, 15, 15, -0.5, -0.5)
  const bub4 = new Bubble(ctx, bubble.x + 30, bubble.y, 15, 15, 0.01, -0.5)
  const bub5 = new Bubble(ctx, bubble.x + 70, bubble.y, 15, 15, 0.5, -0.5)
  const bub6 = new Bubble(ctx, bubble.x + 110, bubble.y, 15, 15, 1, -0.5)
  const bub7 = new Bubble(ctx, bubble.x + 150, bubble.y, 15, 15, 1.5, -0.5)
  bubbles.push(bub1, bub2, bub3, bub4, bub5, bub6, bub7)
  const puffBubble = new BubblePuff(ctx, bubble.x ,bubble.y, bubble.w, bubble.h );
  puffBubbles.push(puffBubble);
  bubble.x = -300
}



