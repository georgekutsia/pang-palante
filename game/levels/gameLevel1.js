function level1(ctx, bubbles, platforms, levelBalls, boxes){
  addPlatforms1(ctx, platforms)
  levelBallItem1(ctx, levelBalls)
  addBubble1(ctx, bubbles)
  addBox1(ctx, boxes)
}

function levelBallItem1(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, CTXW/2 -CTXW / 33 + 7, 0)
  levelBalls.push(levelBall)
}

function addBubble1(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 90, -350, CTXW / 10, CTXW / 10)
  bubbles.push(bubble1);
}


function addPlatforms1(ctx, platforms){
    let randomNumber =  getRandomNumber(4)
    switch (randomNumber) {
      case 1:
        const platform1 = new Platform(ctx, 75, CTXH-120, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
        const platform2 = new Platform(ctx, CTXW/2 - 62, CTXH-120, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
        const platform3 = new Platform(ctx, CTXW-200, CTXH-120, 125, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push( platform1,platform2, platform3);

        break;
    case 2:
      const platform4 = new Platform(ctx, 375, CTXH-120, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform5 = new Platform(ctx, CTXW/2 - 95, CTXH-210, 195, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
      const platform6 = new Platform(ctx, CTXW-500, CTXH-120, 125, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push(platform4,platform5, platform6);
      break
    case 3:
      const platform7 = new Platform(ctx, 300, CTXH-120, 200, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform8 = new Platform(ctx, CTXW-500, CTXH-120, 200, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push(platform7,platform8);
      break
    case 4:
      const platform9 = new Platform(ctx, 75, CTXH-120, 150, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform10 = new Platform(ctx, 400, CTXH-220, 150, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
      const platform11 = new Platform(ctx, CTXW-550, CTXH-220, 150, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform12 = new Platform(ctx, CTXW-200, CTXH-120, 150, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
      platforms.push(platform9,platform10,platform11,platform12);
      break
      default:
        break;
    }
}

function addBox1(ctx, boxes){
  for (let i = 0; i < getRandomNumber(3); i++) {    
    const box1 = new Box(ctx, 10 + getRandomNumber(1200), 30 + getRandomNumber(80),  3, false, 7)
    boxes.push(box1)
  }
}