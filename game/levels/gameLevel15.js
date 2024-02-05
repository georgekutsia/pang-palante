
function level15( ctx, bubbles, levelBalls,  darkBubbles, cannons, boxes){
  // addPlatforms15(ctx, platforms)
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
      const levelBall2 = new LevelBall(ctx, CTXW-35, 0)
      levelBalls.push(levelBall2)
}

function addBubble15(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 230, 30, 50, 50, -0.04, -0.08, 0.0002, true, 20000)
    bubbles.push(bubble1);
}

function addPlatforms15(ctx, platforms){
    const platform1 = new Platform(ctx, 1, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform2 = new Platform(ctx, 35, 125, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 1);
    platforms.push( platform1, platform2);
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
    const box2 = new Box(ctx, CTXW-70, CTXH-53,  3, false, 0, false)
    const box3 = new Box(ctx, CTXW-70, CTXH-35,  3, false, 0, false)
    boxes.push(box2,box3)
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
    let can = new BubbleCannon(ctx, 0, 60, 10, 0.00001)
    cannons.push(can)
  }
