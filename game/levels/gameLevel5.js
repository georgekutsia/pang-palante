
function level5( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, auras){
  addPlatforms5(ctx, platforms, healings, boxes, stairs, bars, auras)
  levelBallItem5(ctx, levelBalls)
  addBubble5(ctx, bubbles)
}
function levelBallItem5(ctx, levelBalls) {  
  const levelBall1 = new LevelBall(ctx, 30 + getRandomNumber(CTXW - 30), 0)
  levelBalls.push(levelBall1)
}

function addBubble5(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 100, -10)
  const bubble2 = new Bubble(ctx, 250, -110)
  const bubble3 = new Bubble(ctx, 400, -210)
  const bubble4 = new Bubble(ctx, 550, -310)
  const bubble5 = new Bubble(ctx, 700, -410)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5);
}

function addPlatforms5(ctx, platforms, healings, boxes, stairs,bars, auras){
    const platform1 = new Platform(ctx, 10, CTXH-230, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 200, CTXH-220, 235, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform3 = new Platform(ctx, 250, CTXH-110, 135, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform5 = new Platform(ctx, CTXW-285, CTXH - 160, 195, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, true, true);
    const platform6 = new Platform(ctx, CTXW-535, CTXH - 250, 195, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform7 = new Platform(ctx, CTXW-735, CTXH - 350, 165, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);

    platforms.push( platform1,platform2, platform3, platform5, platform6, platform7);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 155, 30,  3, false, 5)
    boxes.push(box1,)
    const stair1 = new Stair(ctx, CTXW-90, CTXH - 160,  80, 160);
    stairs.push(stair1);
    const bar1 = new Bars(ctx, CTXW-285, 60 );
    bars.push(bar1)
    const aura = new Aura(ctx, CTXW/2, 60 );
    auras.push(aura)

}
