
function level10( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, coins, gatlings){
  addPlatforms10(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem10(ctx, levelBalls)
  addBubble10(ctx, bubbles)
  addCoin10(ctx, coins)
  addGatling10(ctx, gatlings)
}
function levelBallItem10(ctx, levelBalls) {  
  let randomNumber =  getRandomNumber(1000)
      const levelBall1 = new LevelBall(ctx, 60 + randomNumber, 0)
      levelBalls.push(levelBall1)
}

function addBubble10(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 100, -10, 50, 50)
  const bubble2 = new Bubble(ctx, 300, -50, 50, 50)
  const bubble3 = new Bubble(ctx, 500, -100, 100, 100)
  const bubble4 = new Bubble(ctx, 700, -150, 50, 50)
  const bubble5 = new Bubble(ctx, 900, -200, 50, 50)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5);
}

function addPlatforms10(ctx, platforms, healings, boxes, stairs,bars){
    const platform1 = new Platform(ctx, 100, 300, 150, 15, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true);
    const platform2 = new Platform(ctx, CTXW-250, 300, 150, 15, "../public/Imagenes/obstacles/platformSolid7.png", false, false, true);
    const platform3 = new Platform(ctx, CTXW/2 -250, 420, 80, 15, "../public/Imagenes/obstacles/platformSolid7.png", true, false, true);
    const platform4 = new Platform(ctx, CTXW/2 + 250, 420, 80, 15, "../public/Imagenes/obstacles/platformSolid7.png", true, false, true);
    platforms.push( platform1, platform2, platform3, platform4);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, CTXW/2 + 10, 300,  3, false, 3)
    boxes.push(box1,)
    const stair1 = new Stair(ctx, 5, CTXH - 280,  80, 280);
    const stair2 = new Stair(ctx, CTXW-85, CTXH - 280,  80, 280);
    stairs.push(stair1, stair2);
    const bar1 = new Bars(ctx, CTXW-65, 40, 35, 5, );
    bars.push(bar1)
}

function addCoin10(ctx, coins){
  let coin1 =  new Coins(ctx, 150, 20)
  let coin2 =  new Coins(ctx, 1200, 40)
  let coin3 =  new Coins(ctx, CTXW/2, 40, 70, 70, 30)
  coins.push(coin1, coin2, coin3)
}
function addGatling10(ctx, gatlings){
  let gat = new BubbleGatling(ctx)
  gatlings.push(gat)
  }