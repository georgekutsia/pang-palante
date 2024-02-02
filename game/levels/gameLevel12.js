
function level12( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, gatlings){
  addPlatforms12(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem12(ctx, levelBalls)
  addBubble12(ctx, bubbles)
  addGatling12(ctx, gatlings)

}
function levelBallItem12(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 153, 0)
      levelBalls.push(levelBall2)
}

function addBubble12(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 80, 30, 15, 15, 0.1, -2.5)
    const bubble2 = new Bubble(ctx, 140, 30, 30, 30, 0.1, -2.5)
    const bubble3 = new Bubble(ctx, 200, 30, 15, 15, 0.1, -2.5)
    bubbles.push(bubble1,bubble2,bubble3);
}

function addPlatforms12(ctx, platforms, healings, boxes, stairs,bars){
    const platform1 = new Platform(ctx, 20, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 255, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);

    platforms.push( platform1,platform2,);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 23, 35,  3, true, 0, true)
    const box2 = new Box(ctx, 110, 40,  2, true, 0, true)
    const box3 = new Box(ctx, 258, 35,  1, true, 0, true)
    const box4 = new Box(ctx, 190, 40,  3, true, 0, true)
    const box5 = new Box(ctx, 258, 35,  2, true, 0, true)
    const box6 = new Box(ctx, CTXW/2, 35,  1, true, 0, true)
    const box7 = new Box(ctx, CTXW/2, 55,  1, true, 0, true)
    boxes.push(box1,box2,box3,box4,box5,box6,box7)
    const stair1 = new Stair(ctx, CTXW-20, CTXH - 50,  20, 50);
    const stair2 = new Stair(ctx, 0, CTXH - 50,  20, 50);
    stairs.push(stair1, stair2);
}

function addGatling12(ctx, gatlings){
  let gat1 = new BubbleGatling(ctx, 0.1, CTXW-80)
  gatlings.push(gat1)
  }
