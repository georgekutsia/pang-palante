
function level15( ctx, platforms, bubbles, levelBalls,  darkBubbles, cannons, boxes){
  addPlatforms15(ctx, platforms)
  addBoxes15(ctx, boxes)
  // addHealings15(ctx, healings)
  levelBallItem15(ctx, levelBalls)
  addBubble15(ctx, bubbles)
  // addGatling15(ctx, gatlings)
  addDarkBubble15(ctx, darkBubbles)
  // addSpikes15(ctx, spikes)
  addCannon15(ctx, cannons)
}
function levelBallItem15(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-15, 0)
      levelBalls.push(levelBall2)
}

function addBubble15(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 230, 20, 50, 50, -0.04, -0.08, 0.00017, true, 20000)
    bubbles.push(bubble1);
}

function addPlatforms15(ctx, platforms){
    const platform1 = new Platform(ctx, 45, CTXH-225, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform2 = new Platform(ctx, 75, CTXH-50, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform3 = new Platform(ctx, 25, CTXH-60, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform4 = new Platform(ctx, 5, CTXH-90, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 0.5, 0, 1, 160);
    const platform5 = new Platform(ctx, 140, 35, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform6 = new Platform(ctx, CTXW-30, 70, 30, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    platforms.push( platform1, platform2, platform3,platform4,platform5,platform6);
}

function addGatling15(ctx, gatlings){
  let gat1 = new BubbleGatling(ctx, 0.1, CTXW-80)
  gatlings.push(gat1)
  }


  function addDarkBubble15(ctx, darkBubbles){
    setInterval(() => {
      let bu = new DarkBubble(ctx, 1, 90, 20, 20, 0.1, 0.00001, 0.000001)
      darkBubbles.push(bu)
    }, 3000);
  }

  function addSpikes15(ctx, spikes){
    const spike1 = new Spikes(ctx, 1, CTXH - 10, 30, 10, true, 0.3)
    const spike2 = new Spikes(ctx, 220, CTXH - 10, 30, 10, true, 0.3)
    spikes.push(spike1, spike2)
  }
  
function addHealings15(ctx, healings){
  const healingItem = new Healing(ctx, 20, 70)
  healings.push(healingItem)
}

  function addBoxes15(ctx, boxes){
    const box1 = new Box(ctx, CTXW-220, CTXH-270,  3, false, 0, false)
    const box2 = new Box(ctx, CTXW-220, CTXH-210,  3, false, 0, false)
    const box3 = new Box(ctx, CTXW-520, CTXH-150,  3, false, 0, false)
    const box4 = new Box(ctx, CTXW-220, CTXH-90,  3, false, 0, false)
    boxes.push( box1,box2,box3,box4)
  }

  function barItem15(ctx, bars){
    const bar1 = new Bars(ctx, CTXW-20, 20)
    const bar2 = new Bars(ctx, CTXW-30, 20)
    const bar3 = new Bars(ctx, CTXW-40, 20)
    const bar4= new Bars(ctx, 4, 20)
    const bar5 = new Bars(ctx, 20, 20)
    bars.push(bar1, bar2, bar3, bar4, bar5)
  }

  function addCannon15(ctx, cannons){
    let can = new BubbleCannon(ctx, 0, 60, 15, 0.0001)
    let can1 = new BubbleCannon(ctx, 0, 100, 14, 0.0001)
    cannons.push(can, can1)
  }
