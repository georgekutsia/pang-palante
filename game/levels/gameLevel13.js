
function level13( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, darkBubbles){
  addPlatforms13(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem13(ctx, levelBalls)
  addBubble13(ctx, bubbles)
  addDarkBubble13(ctx, darkBubbles)
  addHealings13(ctx, healings)
  setTimeout(() => {
    console.log("bulala")
    platforms.forEach(platform =>platform.isSolid = false)
  }, 300);
}
function levelBallItem13(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 153, 0)
      levelBalls.push(levelBall2)
}

function addBubble13(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 130, 30, 30, 30, -0.08, -0.1, 0.0002, true, 20000)
    const bubble2 = new Bubble(ctx, 130, 30, 30, 30, 0.08, -0.1, 0.0002, true, 20000)
    const bubble3 = new Bubble(ctx, 125, 30, 30, 30, -0.08, -0.1, 0.0002, true, 20000)
    const bubble4 = new Bubble(ctx, 135, 30, 30, 30, 0.08, -0.1, 0.0002, true, 20000)
    bubbles.push(bubble1, bubble2,bubble3,bubble4);
}

function addPlatforms13(ctx, platforms, healings, boxes, stairs,bars){
    const platform0 = new Platform(ctx, 1, 90, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform1 = new Platform(ctx, 20, 110, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 255, 110, 25, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    const platform3 = new Platform(ctx, 45, 125, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, 220, 125, 25, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform5 = new Platform(ctx, 275, 90, 25, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    platforms.push(platform0, platform1,platform2,platform3,platform4,platform5);
    const box1 = new Box(ctx, 23, 35,  3, true, 0, false)
    const box2 = new Box(ctx, 230, 40,  2, false, 0, false)
    boxes.push(box1,box2)
}

  function addDarkBubble13(ctx, darkBubbles){
    let bu = new DarkBubble(ctx, 130, 20, 0, 0, 0, 0, 0, 0, true, false)
    darkBubbles.push(bu)
  }

  function addHealings13(ctx, healings){
    const healingItem1 = new Healing(ctx, 2, 10)
    const healingItem2 = new Healing(ctx, CTXW-15, 10)
    healings.push(healingItem1, healingItem2)
  }