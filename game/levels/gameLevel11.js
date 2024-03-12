
function level11( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, levers){
  addPlatforms11(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem11(ctx, levelBalls)
  addBubble11(ctx, bubbles)
  addLever11(ctx, levers)
}

function levelBallItem11(ctx, levelBalls) {  
  let randomNumber =  getRandomNumber(1200)
    const levelBall1 = new LevelBall(ctx, 40 + randomNumber, 0)
    levelBalls.push(levelBall1)
}

function addBubble11(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 100, -10, 50, 50)
  const bubble2 = new Bubble(ctx, 300, -50, 50, 50)
  const bubble3 = new Bubble(ctx, 500, -100, 100, 100)
  const bubble4 = new Bubble(ctx, 700, -150, 50, 50)
  const bubble5 = new Bubble(ctx, 900, -200, 50, 50)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5);
}

function addPlatforms11(ctx, platforms, healings, boxes, stairs,bars){
    const platform1 = new Platform(ctx, 115, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 265, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform3 = new Platform(ctx, 325, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, 495, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform5 = new Platform(ctx, 555, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    const platform11 = new Platform(ctx, 15, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform12 = new Platform(ctx, 160, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform13 = new Platform(ctx, 140, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform14 = new Platform(ctx, 160, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform15 = new Platform(ctx, 275, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    platforms.push( platform1, platform2, platform3, platform4, platform5, platform11, platform12, platform13, platform14, platform15,);
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



