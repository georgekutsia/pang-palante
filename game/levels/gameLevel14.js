
function level14( ctx, bubbles, platforms,healings, boxes, levelBalls, darkBubbles, spikes, bars){
  addPlatforms14(ctx, platforms)
  addBoxes14(ctx, boxes)
  addHealings14(ctx, healings)
  levelBallItem14(ctx, levelBalls)
  addBubble14(ctx, bubbles)
  addDarkBubble14(ctx, darkBubbles)
  addSpikes14(ctx, spikes)
  barItem14(ctx, bars)
}
function levelBallItem14(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-35, 0)
      levelBalls.push(levelBall2)
}

function addBubble14(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 130, 30, 40, 40, -0.08, -0.1, 0.0002, true, 20000)
    const bubble2 = new Bubble(ctx, 130, 30, 40, 40, 0.08, -0.1, 0.0002, true, 20000)
    bubbles.push(bubble1, bubble2);
}

function addPlatforms14(ctx, platforms){
    const platform0 = new Platform(ctx, 1, 70, 25, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform1 = new Platform(ctx, 1, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true, 0.6, 0, 40, 160);
    const platform2 = new Platform(ctx, 35, 125, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 0.6, 0, 20, 100);
    const platform3 = new Platform(ctx, 230, 70, 25, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true, 0.6, 0, 180, 260);
    const platform4 = new Platform(ctx, CTXW-55, 40, 45, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    platforms.push(platform0, platform1, platform2,platform3,platform4);


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
    const spike1 = new Spikes(ctx, 1, CTXH - 10, 30, 10, true, 0.3)
    const spike2 = new Spikes(ctx, 220, CTXH - 10, 30, 10, true, 0.3)
    spikes.push(spike1, spike2)
  }
  
function addHealings14(ctx, healings){
  const healingItem = new Healing(ctx, 30, 10)
  healings.push(healingItem)
}

  function addBoxes14(ctx, boxes){
    const box1 = new Box(ctx, 23, 35,  3, true, 0, false)
    const box2 = new Box(ctx, 230, 40,  2, false, 0, false)
    boxes.push(box1,box2)
  }

  function barItem14(ctx, bars){
    const bar1 = new Bars(ctx, CTXW-20, 20)
    const bar2 = new Bars(ctx, CTXW-30, 20)
    const bar3 = new Bars(ctx, CTXW-40, 20)
    const bar4= new Bars(ctx, 4, 20)
    const bar5 = new Bars(ctx, 20, 20)
    bars.push(bar1, bar2, bar3, bar4, bar5)
  }