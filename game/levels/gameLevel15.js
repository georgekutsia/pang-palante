
function level15( ctx, bubbles, levelBalls, darkBubbles, steps, platforms, healings, coins){
  levelBallItem15(ctx, levelBalls)
  addBubble15(ctx, bubbles)
  addDarkBubble15(ctx, darkBubbles)
  addSteps15(ctx, steps)
  addPlatforms15(ctx, platforms)
  addHealing15(ctx, healings)
  addCoins15(ctx, coins)
}
function levelBallItem15(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW/2-20, 0)
      levelBalls.push(levelBall2)
}

function addBubble15(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, CTXW/2 -545, 100, 80, 80, -0.004, 0.08, 0.000017, true, 40000)
    const bubble2 = new Bubble(ctx, CTXW/2 -75, 100, 80, 80, -0.00001, 0.08, 0.000017, true, 40000)
    const bubble3 = new Bubble(ctx, CTXW/2 + 395, 100, 80, 80, 0.004, 0.08, 0.000017, true, 40000)
    bubbles.push(bubble1, bubble2, bubble3);
}


  function addDarkBubble15(ctx, darkBubbles){
      let bu = new DarkBubble(ctx, 1, 90, 20, 20, 0.5, 0.3, 0.000001, 0, true, true)
      darkBubbles.push(bu)
  }


function addSteps15(ctx, steps){
  for (let i = 0; i < 3; i++) {
    const step = new Steps(ctx, CTXW/2 - 100 + i*100, CTXH - 100 - i*10)
    steps.push(step)
  }
  const step1 = new Steps(ctx, 20, 250)
  const step2 = new Steps(ctx, CTXW - 80, 250)
  steps.push(step1, step2)
}
function addCoins15(ctx, coins){
  let coin = new Coins(ctx, 200, CTXH - 50, 40, 40, 5);
  coins.push(coin)
}

function addHealing15(ctx, healings){
  const hea1 = new Healing(ctx, 10, 200)
  const hea2 = new Healing(ctx, CTXW - 80, 200)
  const hea3 = new Healing(ctx, 40, 200)
  const hea4 = new Healing(ctx, CTXW - 50, 200)
  healings.push(hea1, hea2, hea3, hea4)
}

function addPlatforms15(ctx, platforms){
  const platform1 = new Platform(ctx, 10, 300, 80, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
  const platform2 = new Platform(ctx, CTXW-90, 300, 80, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  const platform3 = new Platform(ctx, 10, 200, 80, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  const platform4 = new Platform(ctx, CTXW-90, 200, 80, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  platforms.push(platform1, platform2, platform3, platform4)
}