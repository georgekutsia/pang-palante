
function level14( ctx, bubbles, platforms,healings, boxes,  levelBalls, gatlings, darkBubbles, spikes){
  addPlatforms14(ctx, platforms, healings, boxes)
  levelBallItem14(ctx, levelBalls)
  addBubble14(ctx, bubbles)
  addGatling14(ctx, gatlings)
  addDarkBubble14(ctx, darkBubbles)
  addSpikes14(ctx, spikes)
}
function levelBallItem14(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 153, 0)
      levelBalls.push(levelBall2)
}

function addBubble14(ctx, bubbles){ 
    // const bubble1 = new Bubble(ctx, 130, 30, 30, 30, -0.08, -0.1, 0.0002, true, 20000)
    // const bubble2 = new Bubble(ctx, 130, 30, 30, 30, 0.08, -0.1, 0.0002, true, 20000)
    // bubbles.push(bubble1, bubble2);
}

function addPlatforms14(ctx, platforms, healings, boxes){
    const platform1 = new Platform(ctx, 1, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 35, 125, 25, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true, 1);
    platforms.push( platform1, platform2);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 23, 35,  3, true, 0, false)
    const box2 = new Box(ctx, 230, 40,  2, false, 0, false)
    boxes.push(box1,box2)
}

function addGatling14(ctx, gatlings){
  let gat1 = new BubbleGatling(ctx, 0.1, CTXW-80)
  gatlings.push(gat1)
  }


  function addDarkBubble14(ctx, darkBubbles){
    let bu = new DarkBubble(ctx, 133, 65)
    darkBubbles.push(bu)
  }

  function addSpikes14(ctx, spikes){
    const spike1 = new Spikes(ctx, 20, CTXH - 10, 30, 10, true, 1)
    const spike2 = new Spikes(ctx, 220, CTXH - 10, 30, 10, true, 1)
    spikes.push(spike1, spike2)
  }
  