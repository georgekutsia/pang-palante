
function level12( ctx, platforms,healings, bars, boxes,  levelBalls, gatlings, levers){
  addPlatforms12(ctx, platforms, healings, boxes, bars)
  levelBallItem12(ctx, levelBalls)
  addGatling12(ctx, gatlings)
  addLever12(ctx, levers)
}
function levelBallItem12(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW/2 - 20, 0)
      levelBalls.push(levelBall2)
}

function addPlatforms12(ctx, platforms, healings, boxes){
    const platform1 = new Platform(ctx, 55, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid2.png", true, true, true);
    const platform2 = new Platform(ctx, 255, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, true, true);
    const platform3 = new Platform(ctx, 455, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid3.png", true, true, true);
    const platform4 = new Platform(ctx, 655, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid4.png", true, true, true);
    const platform5 = new Platform(ctx, 855, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid5.png", true, true, true);
    const platform6 = new Platform(ctx, 1055, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid6.png", true, true, true);
    const platform7 = new Platform(ctx, 1255, 400, 110, 15, "../public/Imagenes/obstacles/platformSolid7.png", true, true, true);

    const platform8 = new Platform(ctx, 150, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid7.png", true, true, true);
    const platform9 = new Platform(ctx, 350, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid6.png", true, true, true);
    const platform10 = new Platform(ctx, 550, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid5.png", true, true, true);
    const platform11 = new Platform(ctx, 750, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, true, true);
    const platform12 = new Platform(ctx, 950, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid2.png", true, true, true);
    const platform13 = new Platform(ctx, 1150, 480, 110, 15, "../public/Imagenes/obstacles/platformSolid3.png", true, true, true);

    platforms.push( platform1, platform2,  platform3,  platform4,  platform5,  platform6, platform7,  platform8, platform9, platform10, platform11, platform12, platform13);
    const healingItem = new Healing(ctx, 320, 370)
    const healingItem1 = new Healing(ctx, 600, 450)
    const healingItem2 = new Healing(ctx, 1090, 370)
    healings.push(healingItem, healingItem1, healingItem2)
    const box1 = new Box(ctx, 150, 135,  3, true, 0, true)
    const box2 = new Box(ctx, 450, 240,  2, true, 0, true)
    const box3 = new Box(ctx, CTXW/2 + 10, 250,  3, true, 0, true)
    const box31 = new Box(ctx, CTXW/2 - 20, 135,  3, true, 0, true)
    const box32 = new Box(ctx, CTXW/2 - 50, 250,  3, true, 0, true)
    const box4 = new Box(ctx, CTXW - 490, 240,  3, true, 0, true)
    const box5 = new Box(ctx, CTXW - 190, 135,  2, true, 0, true)
    boxes.push(box1,box2,box3,box31, box32, box4,box5, )
}

function addGatling12(ctx, gatlings){
  let gat1 = new BubbleGatling(ctx, 1.3, CTXW-80, 0, 3);
  let gat2 = new BubbleGatling(ctx, 1.1, CTXW-80, 0, 3);
  let gat3 = new BubbleGatling(ctx, 0.7, 80, 60, 1);
  gatlings.push(gat1, gat2, gat3);
  }

function addLever12(ctx, levers){
  let lever1 = new Lever(ctx, 70, 350 )
  let lever2 = new Lever(ctx, CTXW/2 , 350)
  let lever3 = new Lever(ctx, CTXW-80, 350)
  let lever4 = new Lever(ctx, CTXW-430, 450)
  let lever5 = new Lever(ctx, 380, 450)
  levers.push(lever1, lever2, lever3, lever4, lever5);
}