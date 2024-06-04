
function level3( ctx, bubbles, platforms, stairs, boxes,healings, levelBalls){
  addPlatforms3(ctx, platforms)
  addStair3(ctx, stairs)
  healingItem3(ctx, healings, bubbles)
  addBox3(ctx, boxes)
  levelBallItem3(ctx, levelBalls)
  addBubble3(ctx, bubbles)
}

function levelBallItem3(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, CTXW - 180, 0)
  levelBalls.push(levelBall)
}

function addBubble3(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 130, -50, 110, 110, -1)
  bubbles.push(bubble1);
}

function addPlatforms3(ctx, platforms){
  const platform1 = new Platform(ctx, 200, CTXH - 165, 155, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform2 = new Platform(ctx, 15, 370, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, CTXW -455, 390, 205, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform(ctx, CTXW - 250, CTXH-120, 175, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1, platform2, platform3, platform4);
}

function addStair3(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  const stair1 = new Stair(ctx, 110, CTXH - 160,  80, 160);
  const stair2 = new Stair(ctx, CTXW - 250, CTXH - 280,  80, 160);
  stairs.push(stair1, stair2);
}


function addBox3(ctx, boxes) {   
    for (let i = 0; i < 1 + getRandomNumber(3); i++) {    
      const box1 = new Box(ctx, 10 + getRandomNumber(1200), 30 + getRandomNumber(180),  3, false, 7)
      boxes.push(box1)
    }
}


function healingItem3(ctx, healings, bubbles) {  
  let randomNumber =  getRandomNumber(3)
 switch (randomNumber) {
  case 1:
    const healingItem1 = new Healing(ctx, 1, 27, 0)
    healings.push(healingItem1)
    break;
  case 2:
    const healingItem2 = new Healing(ctx, CTXW/2, 27, 0)
    healings.push(healingItem2)
    break;
  case 3:
    const healingItem3 = new Healing(ctx, 20, 27, 0)
    const healingItem4 = new Healing(ctx, 275, 57, 0)
    healings.push(healingItem3, healingItem4)
    const bubble1 = new Bubble(ctx, 130, -150, CTXW / 7, CTXW / 7, -1)
    bubbles.push(bubble1);
    break;
  default:
    break;
 }
}
