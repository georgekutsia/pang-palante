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
function bounceFromBox(elem1, elem2){
  if (elem1.y <= elem2.y + 5 ) {
    elem1.vy = -1;
  }
  if(elem1.y >= elem2.y + elem2.h -5){
    elem1.vy = 1;
  }
  if(elem1.x <= elem2.x +5){
    elem1.vx = -0.3;
  } 
  if(elem1.x >= elem2.x +elem2.w - 5){
    elem1.vx = 0.3;
  }
}
function basicBulletBounce(elem1, elem2){
  if(elem1.direction){
    elem1.vx = elem1.direction;
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
  bubble.x = -200
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
  if ( player.y <= bouncer.y && player.x <= bouncer.x + bouncer.w && player.x + player.w > bouncer.x - 30) {
    player.vy = -3;
    player.y = bouncer.y - player.h;
  }
  if (player.y + player.h >= bouncer.y + bouncer.h) {//colisión por la parte inferior de la plataforma
    player.vy = 0;
  }
  if (player.x >= bouncer.x + bouncer.w - 6) {//colisión por la derecha
    player.g = 0.2;
    player.vx = 1.5;
    setTimeout(() => {
      player.vx = 0;
    }, 500);
  }
  if (player.x - 1 <= bouncer.x) {//colisión por la izquierda
    player.g = 0.2;
    player.vx = -1.5
    setTimeout(() => {
      player.vx = 0;
    }, 500);
  }
}

function platformPlayerCollision(player, platform){
  if (player.y <= platform.y - 10 &&player.x <= platform.x + platform.w &&player.x + player.w > platform.x) {
    if (platform.isBrakable) {platform.braking--;platform.goingToBreak = true;}
    player.y = platform.y - player.h;
    jumpDownDistance = 0;
    player.x += platform.vx; // si le digo que es igual player.vx = platform.vx, se ve el jugador moviendose por cómo estan configurados los frames de movimiento
    player.vy = platform.vy;
    player.ableToJump = true;
    ALT = 16;
  }
  if (player.y + player.h >= platform.y + platform.h) {//colisión por la parte inferior de la plataforma
    player.vy = 0;
    jumpDownDistance = 0;

  }
  if (player.x >= platform.x + platform.w ||player.x <= platform.x
  ) {
    //colisión por los lados de la plataforma
    jumpDownDistance = 0;
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



function checkHookCollisions(hookArray, obstacles, barHit, player) {
  hookArray.forEach((hook) => {
    obstacles.forEach((obstacle) => {
      if (hook.collidesTop(obstacle)) {
          ALT = 16;
          jumpHeight = -18;
          player.vy = -6;
          hook.solidState = true;
          hook.y = obstacle.y + obstacle.h;
          hook.vy = 0;
        barHit.play();
          hook.img.src = "../public/Imagenes/weaponBarSolid.png";
      }
    });
  });
}

function bigWeaponBubble (ctx, bullet, player){ //la burbuja gigante que dispara player
  const bullet1 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, -2, 2);
  const bullet2 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, 2, -2);
  const bullet3 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, 2, 2);
  const bullet4 = new BasicWeapon(ctx, bullet.x, bullet.y, 0, -2, -2);
  player.bulletArray.push(bullet1, bullet2,bullet3,bullet4)
}

function darkBubbleExplosion(darkBubbleExplosion, bubble, bubbles, puffBubbles){
  darkBubbleExplosion.play()
  const bub1 = new Bubble(ctx, bubble.x, bubble.y, 15, 15, -1.5, -0.5)
  const bub2 = new Bubble(ctx, bubble.x + 5, bubble.y, 15, 15, -1, -0.5)
  const bub3 = new Bubble(ctx, bubble.x + 10, bubble.y, 15, 15, -0.5, -0.5)
  const bub4 = new Bubble(ctx, bubble.x + 15, bubble.y, 15, 15, 0.01, -0.5)
  const bub5 = new Bubble(ctx, bubble.x + 20, bubble.y, 15, 15, 0.5, -0.5)
  const bub6 = new Bubble(ctx, bubble.x + 30, bubble.y, 15, 15, 1, -0.5)
  const bub7 = new Bubble(ctx, bubble.x + 35, bubble.y, 15, 15, 1.5, -0.5)
  bubbles.push(bub1, bub2, bub3, bub4, bub5, bub6, bub7)
  const puffBubble = new BubblePuff(ctx, bubble.x ,bubble.y, bubble.w, bubble.h );
  puffBubbles.push(puffBubble);
  bubble.x = -300
}





