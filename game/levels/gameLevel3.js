
function level3( ctx, bubbles, platforms, stairs, boxes,healings, levelBalls){
  addPlatforms3(ctx, platforms)
  addStair3(ctx, stairs)
  healingItem3(ctx, healings, bubbles)
  boxItem3(ctx, boxes)
  levelBallItem3(ctx, levelBalls)
  addBubble3(ctx, bubbles)
}

function levelBallItem3(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width - 80, 0)
  levelBalls.push(levelBall)
}

function addBubble3(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 130, -50, ctx.canvas.width / 7, ctx.canvas.width / 7, -1)
  bubbles.push(bubble1);
}

function addPlatforms3(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 45, 75, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 1, 40, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform3 = new Platform(ctx, 200, 120, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform(ctx, 250, 73, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3, platform4);
}

function addStair3(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  const stair1 = new Stair(ctx, 10, ctx.canvas.height - 50,  20, 50);
  const stair2 = new Stair(ctx, 230, 73,  20, 50);
  stairs.push(stair1, stair2);
}


function boxItem3(ctx, boxes) {   
  let randomNumber =  getRandomNumber(3)
switch (randomNumber) {
  case 1:
    const box1 = new Box(ctx, 60, 20,  3, false, 5)
    boxes.push(box1,)
    break;
  case 2:
    const box2 = new Box(ctx, 160, 40,  3, false, 3)
    boxes.push(box2)
    break;
  case 3:
    const box3 = new Box(ctx, 260, 80,  3, false, 5)
    boxes.push(box3)
    break;
  default:
    break;
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
    const healingItem3 = new Healing(ctx, 1, 27, 0)
    const healingItem4 = new Healing(ctx, 275, 57, 0)
    healings.push(healingItem3, healingItem4)
    const bubble1 = new Bubble(ctx, 130, -450, ctx.canvas.width / 7, ctx.canvas.width / 7, -1)
    bubbles.push(bubble1);
    break;
  default:
    break;
 }
}
