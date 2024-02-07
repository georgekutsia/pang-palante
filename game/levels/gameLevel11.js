
function level11( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, levers){
  addPlatforms11(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem11(ctx, levelBalls)
    addBubble11(ctx, bubbles)
    addLever11(ctx, levers)
}
function levelBallItem11(ctx, levelBalls) {  
  let randomNumber =  getRandomNumber(3)
  switch (randomNumber) {
    case 1:
      const levelBall1 = new LevelBall(ctx, 40, 0)
      levelBalls.push(levelBall1)
      break;
    case 2:
      const levelBall2 = new LevelBall(ctx, 150, 0)
      levelBalls.push(levelBall2)
      break;
    case 3:
      const levelBall3 = new LevelBall(ctx, 250, 0)
      levelBalls.push(levelBall3)
      break;
    default:
      break;
  }
}

function addBubble11(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 10, 30, 15, 15, 0.1, -14.5)
    const bubble2 = new Bubble(ctx, 50, 30, 15, 15, 0.1, -14.5)
    const bubble3 = new Bubble(ctx, 100, 30, 30, 30, 0.1, -14.5)
    const bubble4 = new Bubble(ctx, 150, 30, 15, 15, 0.1, -14.5)
    const bubble5 = new Bubble(ctx, 200, 30, 15, 15, 0.1, -14.5)
    const bubble6 = new Bubble(ctx, CTXW - 30, 150, 30, 30, -0.1, -1.5)
    bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5,bubble6);
}

function addPlatforms11(ctx, platforms, healings, boxes, stairs,bars){
    const platform1 = new Platform(ctx, 15, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 65, 100, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform3 = new Platform(ctx, 125, 100, 50, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, 195, 100, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform5 = new Platform(ctx, 255, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    const platform11 = new Platform(ctx, 5, 55, 20, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform12 = new Platform(ctx, 120, 55, 20, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform13 = new Platform(ctx, 140, 55, 20, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform14 = new Platform(ctx, 160, 55, 20, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform15 = new Platform(ctx, 275, 55, 20, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    platforms.push( platform1,platform2, platform3,platform4, platform5,platform11,platform12, platform13,platform14, platform15,);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 40, 125,  3, false)
    const box2 = new Box(ctx, 80, 50,  2, false)
    const box3 = new Box(ctx, 205, 70,  1, false)
    boxes.push(box1,box2,box3,)
    const stair1 = new Stair(ctx, CTXW-20, CTXH - 50,  20, 50);
    stairs.push(stair1);
    const bar1 = new Bars(ctx, CTXW-85, 40, 35, 5, );
    bars.push(bar1)
}
function addLever11(ctx, levers){
  let lever1 = new Lever(ctx, 10, 40 )
  let lever2 = new Lever(ctx, CTXW-20, 40)
  levers.push(lever1, lever2);
}



