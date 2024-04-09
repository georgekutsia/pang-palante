
function level17( ctx, platforms, bubbles, levelBalls,  darkBubbles, cannons, boxes, healings, flamethrowers){
  addPlatforms17(ctx, platforms)
  addBoxes17(ctx, boxes)
  addHealings17(ctx, healings)
  levelBallItem17(ctx, levelBalls)
  addBubble17(ctx, bubbles)
  addDarkBubble17(ctx, darkBubbles)
  addCannon17(ctx, cannons)
  flamethrowerItem17(ctx, flamethrowers) 

}
function levelBallItem17(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-120, 0)
      levelBalls.push(levelBall2)
}

function addBubble17(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, CTXW/2 -150, 20, 220, 220, -0.04, -0.08, 0.000017, true, 40000)
    bubbles.push(bubble1);
}

function addPlatforms17(ctx, platforms){
    const platform1 = new Platform(ctx, 100, 150, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform11 = new Platform(ctx, 100, 165, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform12 = new Platform(ctx, 100, 180, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform13 = new Platform(ctx, 100, 195, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform14 = new Platform(ctx, 100, 210, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform2 = new Platform(ctx,  CTXW-300, 150, 125, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
    const platform3 = new Platform(ctx, 25, CTXH-60, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform4 = new Platform(ctx, 30, CTXH-260, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 2.5, 0, 50, 500);
    const platform5 = new Platform(ctx, 900, CTXH-160, 125, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 1.5, 0, 300, 1100);
    platforms.push( platform1,platform11,platform12, platform13, platform14, platform2, platform3,platform4,platform5);
}


  function addDarkBubble17(ctx, darkBubbles){
    setInterval(() => {
      let bu = new DarkBubble(ctx, 1, 90, 20, 20, 0.1, 0.00001, 0.000001)
      darkBubbles.push(bu)
    }, 3000);
  }

  
function addHealings17(ctx, healings){
  const healingItem1 = new Healing(ctx, 110, 400)
  const healingItem2 = new Healing(ctx, 980, 470)
  const healingItem3 = new Healing(ctx, 1190, 370)
  healings.push(healingItem1, healingItem2, healingItem3)
}

  function addBoxes17(ctx, boxes){
    const box1 = new Box(ctx, CTXW-220, CTXH-270,  3, false, 0, false)
    const box2 = new Box(ctx, CTXW-220, CTXH-210,  3, false, 0, false)
    const box3 = new Box(ctx, CTXW-220, CTXH-150,  3, false, 0, false)
    const box4 = new Box(ctx, CTXW-220, CTXH-90,  3, false, 0, false)
    boxes.push( box1,box2,box3,box4)
  }

  function barItem17(ctx, bars){
    const bar1 = new Bars(ctx, CTXW-20, 20)
    const bar2 = new Bars(ctx, CTXW-30, 20)
    const bar3 = new Bars(ctx, CTXW-40, 20)
    const bar4= new Bars(ctx, 4, 20)
    const bar5 = new Bars(ctx, 20, 20)
    bars.push(bar1, bar2, bar3, bar4, bar5)
  }

  function addCannon17(ctx, cannons){
    let can = new BubbleCannon(ctx, 0, 60, 15, 0.0001)
    let can1 = new BubbleCannon(ctx, 0, 100, 14, 0.0001)
    cannons.push(can, can1)
  }

  function flamethrowerItem17(ctx, flamethrowers) {  
    const flamethrower1 = new Flamethrower(ctx, 200, 50)
    const flamethrower2 = new Flamethrower(ctx, 150, 50)
    const flamethrower3 = new Flamethrower(ctx, 100, 50)
    flamethrowers.push(flamethrower1, flamethrower2, flamethrower3)
  }