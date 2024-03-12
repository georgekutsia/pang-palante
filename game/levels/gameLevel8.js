
function level8(ctx, bubbles, platforms,bouncers, stairs,healings, bars, boxes,  levelBalls, spikes, levers){
  addPlatforms8(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem8(ctx, levelBalls)
  addBubble8(ctx, bubbles)
  addBouncer8(ctx,bouncers)
  addSpikes8(ctx, spikes)
  boxItem8(ctx, boxes)
  addLever8(ctx, levers)
}

function levelBallItem8(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 150, 0)
      levelBalls.push(levelBall2)
}

function addBubble8(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 165, 40, 60, 60)
  const bubble2 = new Bubble(ctx, 372, 40, 60, 60)
  const bubble3 = new Bubble(ctx, 680, 80, 60, 60)
  const bubble4 = new Bubble(ctx, 920, 50, 60, 60)
  bubbles.push(bubble1,bubble2,bubble3,bubble4);
}

function addPlatforms8(ctx, platforms){
  const platform1 = new Platform(ctx, 100, CTXH-300, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform2 = new Platform(ctx, 400, CTXH-300, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform3 = new Platform(ctx, 700, CTXH-300, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform4 = new Platform(ctx, CTXW-95, CTXH-350, 90, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform5 = new Platform(ctx, 250, CTXH-200, 135, 20, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform6 = new Platform(ctx, 550, CTXH-200, 135, 20, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform7 = new Platform(ctx, 850, CTXH-200, 135, 20, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform8 = new Platform(ctx, CTXW-95, CTXH-100, 90, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform9  = new Platform(ctx, 15, CTXH-290, 65, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0,  200, 1200, 0, 0, true);
  const platform10  = new Platform(ctx, CTXW -180, 210, 65, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0,  200, 1200, 0, 0, true);
  const platform11  = new Platform(ctx, 530, 145, 80, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  platforms.push( platform1,platform2,platform3,platform4, platform5,platform6,platform7,platform8,platform9,platform10, platform11);
}

function addBouncer8(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, CTXW-300, CTXH-175, 35, 20)
  bouncers.push(bouncer1)
}

function addSpikes8(ctx, spikes){
  const spike1 = new Spikes(ctx, 260, CTXH-220,  CTXW / 12, 30)
  const spike2 = new Spikes(ctx, 560, CTXH-220, CTXW / 12, 30)
  spikes.push(spike1,spike2)
}


function boxItem8(ctx, boxes) {   
  for (let i = 0; i < 3; i++) {
  const box1 = new Box(ctx, 270, 80,  3, false, 10)
  const box2 = new Box(ctx, 900, 80,  3, false, 10)
  boxes.push(box1, box2)
  }
}

function addLever8(ctx, levers){
  let lever = new Lever(ctx, 550, 130)
  levers.push(lever)
}


function bubbles4popup(ctx, bubbles){
    const bubble1 = new Bubble(ctx, 365, 40, 60, 60)
    const bubble2 = new Bubble(ctx, 472, 40, 60, 60)
    const bubble3 = new Bubble(ctx, 780, 80, 60, 60)
    const bubble4 = new Bubble(ctx, 1020, 50, 60, 60)
    bubbles.push(bubble1,bubble2,bubble3,bubble4);
}