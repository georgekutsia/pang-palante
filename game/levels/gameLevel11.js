
function level11( ctx, bubbles, platforms,healings,bars, boxes,  levelBalls, levers, chests, electros, bouncers){
  addPlatforms11(ctx, platforms, healings, boxes, bars)
  levelBallItem11(ctx, levelBalls)
  addBubble11(ctx, bubbles)
  addLever11(ctx, levers)
  addChest11(ctx, chests)
  addElectro11(ctx, electros)
  addBouncer11(ctx, bouncers) //
}

function levelBallItem11(ctx, levelBalls) {  
    const levelBall1 = new LevelBall(ctx, CTXW-100, 0)
    levelBalls.push(levelBall1)
}

function addBubble11(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 800, 350, 70, 70)
  const bubble2 = new Bubble(ctx, 300, -50, 70, 70)
  const bubble3 = new Bubble(ctx, 100, -100, 70, 70)

  bubbles.push(bubble1,bubble2,bubble3);
}

function addPlatforms11(ctx, platforms, healings, boxes, bars){
    const platform1 = new Platform(ctx, 115, CTXH-100, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 100, 500, 0, 0, true);
    const platform2 = new Platform(ctx, 300, 200, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 110, 500, 0, 0, true);
    const platform3 = new Platform(ctx, 500, CTXH-200, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 560, 560, 250, 470, true, true);
    const platform4 = new Platform(ctx, 850, 280, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 760, 790, 210, 280, true, true);
    const platform5 = new Platform(ctx, 10, CTXH-270, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 400, 800, 0, 0, true);
    const platform6 = new Platform(ctx, 620, 190, 80, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 200, 300, 0, 0, true);
    const platform7 = new Platform(ctx, 620, 280, 80, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 900, 1200, 280, 460, true, true);
    const platform8 = new Platform(ctx, CTXW-70, CTXH-130, 70, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, );
    const platform9 = new Platform(ctx, CTXW-30, CTXH-230, 30, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, );
    platforms.push( platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9);
    const healingItem = new Healing(ctx, 320, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 980, 170,  3, false, 10, true, 1, 0, 0, true)
    const box2 = new Box(ctx, 980, 100,  2, false, 10, true, 1, 0, 0, true)
    const box3 = new Box(ctx, 980, 30,  1, false, 10, true,  1, 0, 0, true)
    boxes.push(box1,box2,box3,)
    const bar1 = new Bars(ctx, CTXW-180, CTXH-50, 35, 5);
    const bar2 = new Bars(ctx, CTXW-80, CTXH-50, 35, 5);
    const bar3 = new Bars(ctx, CTXW-130, CTXH-50, 35, 5);
    bars.push(bar1, bar2, bar3)
}
function addLever11(ctx, levers){
  let lever1 = new Lever(ctx, 10, 40 )
  let lever2 = new Lever(ctx, CTXW-320, CTXH-50)
  let lever3 = new Lever(ctx, CTXW-40, CTXH-250)
  levers.push(lever1, lever2, lever3);
}

function addChest11(ctx, chests){
  let che = new Chest(ctx, 620, 10);
  chests.push(che)
}

function addElectro11(ctx, electros){
  let electro = new Electro(ctx, 120, 500)
  electros.push(electro)

}
function addBouncer11(ctx, bouncers){
  let bouncer0 = new Bouncer(ctx, 600, 50, 10, 260, false)
  let bouncer1 = new Bouncer(ctx, 100, 170, 10, 150, false)
  let bouncer2 = new Bouncer(ctx, 700, 130, 10, 70, false)
  let bouncer3 = new Bouncer(ctx, 1150, 1, 10, 300, false)
  let bouncer4 = new Bouncer(ctx, 1200, 410, 10, 260, false)
  bouncers.push(bouncer0, bouncer1, bouncer2, bouncer3, bouncer4);
}