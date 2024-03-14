
function level14( ctx, bubbles, platforms,healings, boxes, levelBalls, darkBubbles, spikes, bars, auras, levers){
  addPlatforms14(ctx, platforms)
  addBoxes14(ctx, boxes)
  addHealings14(ctx, healings)
  levelBallItem14(ctx, levelBalls)
  addBubble14(ctx, bubbles)
  addDarkBubble14(ctx, darkBubbles)
  addSpikes14(ctx, spikes)
  barItem14(ctx, bars)
  auraItem14(ctx, auras)
  levers14(ctx, levers)
}
function levelBallItem14(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-35, 0)
      levelBalls.push(levelBall2)
}

function addBubble14(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, CTXW/2 - 30, 30, 60, 60, -0.08, -0.1, 0.0002, true, 20000)
    const bubble2 = new Bubble(ctx, CTXW/2 + 10, 30, 60, 60, 0.08, -0.1, 0.0002, true, 20000)
    bubbles.push(bubble1, bubble2);
}

function addPlatforms14(ctx, platforms){
    const platform0 = new Platform(ctx, 210, 230, 125, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform1 = new Platform(ctx, 240, CTXH-200, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true, 2, 0, 340, 760);
    const platform2 = new Platform(ctx, 60, CTXH-100, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 1.6, 0, 60, 600);
    const platform3 = new Platform(ctx, 700, CTXH-280, 125, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true, 1.6, 0, 600, 1150);
    const platform4 = new Platform(ctx, 1000, CTXH-380, 125, 15, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true, 1.6, 0, 200, 700);
    const platform5 = new Platform(ctx, CTXW-155, 280, 145, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    const platform6 = new Platform(ctx, CTXW-125, 120, 80, 15, "../public/Imagenes/obstacles/platformSolid5.png", true, false, true);
    platforms.push(platform0, platform1, platform2,platform3,platform4,platform5,platform6);
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
    const spike1 = new Spikes(ctx, 10, CTXH - 40, 80, 40, true, 1.3)
    const spike2 = new Spikes(ctx, CTXW-150, CTXH - 40, 80, 40, true, -1.3)
    spikes.push(spike1, spike2)
  }
  
function addHealings14(ctx, healings){
  const healingItem = new Healing(ctx, 1050, 280)
  healings.push(healingItem)
}

  function addBoxes14(ctx, boxes){
    const box1 = new Box(ctx, 250, 35,  3, true, 0, false)
    const box2 = new Box(ctx, CTXW-290, 40,  2, false, 9, false, 3)
    boxes.push(box1,box2)
  }

  function barItem14(ctx, bars){
    const bar1 = new Bars(ctx, CTXW-140, 240)
    const bar2 = new Bars(ctx, CTXW-90, 240)
    const bar3 = new Bars(ctx, CTXW-40, 240)
    bars.push(bar1, bar2, bar3)
  }

  function auraItem14(ctx, auras) {  
    const aura = new Aura(ctx, 750, 350)
    auras.push(aura)
  }
  function levers14(ctx, levers) {  
    const leve = new Lever(ctx, 280, 450)
    const leve1 = new Lever(ctx, CTXW-110, 100)
    const leve2 = new Lever(ctx, 750, 350)
    const leve3 = new Lever(ctx, 255, 20)
    levers.push(leve, leve1, leve2, leve3)
  }

