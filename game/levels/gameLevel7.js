
function level7( ctx, bubbles, platforms,bouncers, stairs,healings, bars, boxes,  spikes, levelBalls, stairs){
  addPlatforms7(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem7(ctx, levelBalls)
  addBubble7(ctx, bubbles)
  addBouncer7(ctx,bouncers)
  addSpikes7(ctx, spikes)
  boxItem7(ctx, boxes)
  addStair7(ctx, stairs)
}
function levelBallItem7(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-145, 0)
      levelBalls.push(levelBall2)
}

function addBubble7(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 165, 40, 40, 40)
  const bubble2 = new Bubble(ctx, 282, 40, 40, 40)
  const bubble3 = new Bubble(ctx, 482, 40, 40, 40)
  const bubble4 = new Bubble(ctx, 782, 40, 40, 30)
  bubbles.push(bubble1,bubble2, bubble3, bubble4);
}

function addPlatforms7(ctx, platforms){
  const platform1 = new Platform( ctx, 248, CTXH-55,  165, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform2 = new Platform( ctx, 248, CTXH-75,  165, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform3 = new Platform( ctx, 648, CTXH-55,  165, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform4 = new Platform( ctx, 648, CTXH-75,  165, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform5 = new Platform( ctx, 1048, CTXH-55,  165, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform6 = new Platform( ctx, 1048, CTXH-75,  165, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform7 = new Platform( ctx, 130, CTXH-250,  50, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform8 = new Platform( ctx, 410, CTXH-260,  50, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform9 = new Platform( ctx, 610, CTXH-290,  50, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform10 = new Platform( ctx, 910, CTXH-320,  50, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform11 = new Platform( ctx, 1210, CTXH-350,  140, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);

  platforms.push( platform1,platform2,platform3,platform4,platform5,platform6, platform7, platform8, platform9, platform10, platform11);
}

function addBouncer7(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 250, CTXH-40, 10, 40)
  const bouncer2 = new Bouncer(ctx, 400, CTXH-40, 10, 40)
  const bouncer3 = new Bouncer(ctx, 650, CTXH-40, 10, 40)
  const bouncer4 = new Bouncer(ctx, 800, CTXH-40, 10, 40)
  const bouncer5 = new Bouncer(ctx, 1050, CTXH-40, 10, 40)
  const bouncer6 = new Bouncer(ctx, 1200, CTXH-40, 10, 40)

  bouncers.push(bouncer1,bouncer2,bouncer3,bouncer4,bouncer5,bouncer6)
}

function addSpikes7(ctx, spikes){
  const spike1 = new Spikes(ctx, 265, CTXH-30,)
  const spike2 = new Spikes(ctx, 680, CTXH-30)
  const spike3 = new Spikes(ctx, 1070, CTXH-30)
  spikes.push(spike1,spike2,spike3)
}


function boxItem7(ctx, boxes) {   
  const box0 = new Box(ctx, 25, 50,  2, false, 1, true,)
  const box1 = new Box(ctx, 300, 90,  3, false, 1, false)
  const box2 = new Box(ctx, 300, 150,  1, false, 7, false)
  const box3 = new Box(ctx, CTXW/2, 90,  3, false, 1, true)
  const box4 = new Box(ctx, CTXW/2, 150,  1, false, 7, false)
  const box5 = new Box(ctx, 1100, 90,  3, false, 1, false)
  const box6 = new Box(ctx, 1100, 150,  1, false, 7, true)
  boxes.push(box0,box1,box2,box3,box4,box5,box6)
}

function addStair7(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 10, CTXH-160,  80, 160);
  stairs.push(stair1,);
}