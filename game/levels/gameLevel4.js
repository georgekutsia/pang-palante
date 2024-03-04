
function level4( ctx, bubbles, platforms,  stairs,  healings, bars,  boxes,  levelBalls){
  addPlatforms4(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem4(ctx, levelBalls)
  addBubble4(ctx, bubbles)
}
function levelBallItem4(ctx, levelBalls) {  
      const levelBall1 = new LevelBall(ctx, 30 + getRandomNumber(CTXW - 30), 0)
      levelBalls.push(levelBall1)
}

function addBubble4(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 250, -100)
  const bubble2 = new Bubble(ctx, 500, -500)
  const bubble3 = new Bubble(ctx, 850, -1000)
  bubbles.push(bubble1,bubble2,bubble3);
}

function addPlatforms4(ctx, platforms, healings, boxes, stairs,bars){
      const platform7 = new Platform(ctx, CTXW-500, CTXH-350, 205, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform8 = new Platform(ctx, CTXW-300, CTXH-180, 205, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform9 = new Platform(ctx, 50, CTXH - 380, 135, 15, "../public/Imagenes/obstacles/platformSolid4.png", true, false, true);
      const platform10 = new Platform(ctx, 50, CTXH - 340, 135, 15, "../public/Imagenes/obstacles/platformSolid3.png", true, false, true);
      const platform11 = new Platform(ctx, 50, CTXH - 300, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", true, false, true);
      platforms.push( platform7, platform8, platform9, platform10, platform11);
      const healingItem1 = new Healing(ctx, 70, 200)
      const healingItem2 = new Healing(ctx, CTXW/2, 80)
      healings.push(healingItem1,healingItem2)
      const box1 = new Box(ctx, 125, 30,  3, false, 5)
      const box2 = new Box(ctx, CTXW-260, 40,  2, false, 2)
      const box3 = new Box(ctx, CTXW-460, 70,  3, false, 3)
      boxes.push(box1,box2,box3)
      const stair2 = new Stair(ctx, CTXW -100, CTXH - 180,  70, 180);
      const stair3 = new Stair(ctx, CTXW -300, CTXH - 350,  70, 180);
      stairs.push(stair2,stair3);
      const bar2 = new Bars(ctx, 140, 200);
      bars.push(bar2)
}

