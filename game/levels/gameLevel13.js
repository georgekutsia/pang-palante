
function level13( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, darkBubbles){
  addPlatforms13(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem13(ctx, levelBalls)
  addBubble13(ctx, bubbles)
  addDarkBubble13(ctx, darkBubbles)
  addHealings13(ctx, healings)
  setTimeout(() => {
    platforms.forEach(platform =>platform.isSolid = true)
  }, 30000);
}
function levelBallItem13(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 153, 0)
      levelBalls.push(levelBall2)
}

function addBubble13(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, CTXW/2 - 150, 150, 80, 80, -0.08, -0.1, 0.0002, true, 20000)
    const bubble2 = new Bubble(ctx, CTXW/2 - 80, 200, 80, 80, -0.08, -0.1, 0.0002, true, 20000)
    const bubble3 = new Bubble(ctx, CTXW/2 + 20, 200, 80, 80, 0.08, -0.1, 0.0002, true, 20000)
    const bubble4 = new Bubble(ctx, CTXW/2 + 90, 150, 80, 80, 0.08, -0.1, 0.0002, true, 20000)
    bubbles.push(bubble1, bubble2,bubble3,bubble4);
}

function addPlatforms13(ctx, platforms, healings, boxes, stairs,bars){
    const platform0 = new Platform(ctx, 1, 350, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform1 = new Platform(ctx, 200, 450, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 400, 550, 125, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    const platform3 = new Platform(ctx, CTXW - 525, 550, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, CTXW - 325, 450, 125, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform5 = new Platform(ctx, CTXW - 125, 350, 125, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    platforms.push(platform0, platform1,platform2,platform3,platform4,platform5);
    const box1 = new Box(ctx, CTXW/2 - 20, 40,  3, true, 0, false)
    boxes.push(box1)
}

  function addDarkBubble13(ctx, darkBubbles){
    let bu = new DarkBubble(ctx, 130, 20, 28, 28, 0, 0, 0, 0, true, false)
    darkBubbles.push(bu)
  }

  function addHealings13(ctx, healings){
    const healingItem1 = new Healing(ctx, 20, 10)
    const healingItem2 = new Healing(ctx, CTXW-55, 10)
    healings.push(healingItem1, healingItem2)
  }