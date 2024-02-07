
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
      const levelBall2 = new LevelBall(ctx, 215, 0)
      levelBalls.push(levelBall2)
}

function addBubble7(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 165, 40)
  const bubble2 = new Bubble(ctx, 82, 40)
  bubbles.push(bubble1,bubble2);
}

function addPlatforms7(ctx, platforms){
  const platform1 = new Platform( ctx, 35, CTXH-13,  35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform2 = new Platform( ctx, 35, CTXH-18,  35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform3 = new Platform( ctx, 130, CTXH-13,  35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform4 = new Platform( ctx, 130, CTXH-18,  35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform5 = new Platform( ctx, 235, CTXH-13,  35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform6 = new Platform( ctx, 235, CTXH-18,  35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);

  platforms.push( platform1,platform2,platform3,platform4,platform5,platform6);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer7(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 35, CTXH-8, 5, 10)
  const bouncer2 = new Bouncer(ctx, 65, CTXH-8, 5, 10)
  const bouncer3 = new Bouncer(ctx, 130, CTXH-8, 5, 10)
  const bouncer4 = new Bouncer(ctx, 160, CTXH-8, 5, 10)
  const bouncer5 = new Bouncer(ctx, 235, CTXH-8, 5, 10)
  const bouncer6 = new Bouncer(ctx, 265, CTXH-8, 5, 10)
  const bouncer7 = new Bouncer(ctx, 25, 85, 15, 5)
  const bouncer8 = new Bouncer(ctx, 90, 90, 15, 5)
  const bouncer9 = new Bouncer(ctx, 130, 80, 15, 5)
  const bouncer10 = new Bouncer(ctx, 170, 70, 15, 5)
  const bouncer11 = new Bouncer(ctx, 210, 70, 25, 5)
  bouncers.push(bouncer1,bouncer2,bouncer3,bouncer4,bouncer5,bouncer6,bouncer7,bouncer8, bouncer9,bouncer10, bouncer11)
}

function addSpikes7(ctx, spikes){
  const spike1 = new Spikes(ctx, 45, CTXH-10,  CTXW / 18)
  const spike2 = new Spikes(ctx, 140, CTXH-10, CTXW / 18)
  const spike3 = new Spikes(ctx, 245, CTXH-10, CTXW / 18)
  spikes.push(spike1,spike2,spike3)
}


function boxItem7(ctx, boxes) {   
  const box0 = new Box(ctx, 5, 20,  1, false, 1, false)
  const box1 = new Box(ctx, 45, 38,  3, false, 1, false)
  const box2 = new Box(ctx, 45, 56,  1, false, 7, false)
  const box3 = new Box(ctx, 140, 38,  3, false, 1, false)
  const box4 = new Box(ctx, 140, 56,  1, false, 7, false)
  const box5 = new Box(ctx, 245, 38,  3, false, 1, false)
  const box6 = new Box(ctx, 245, 56,  1, false, 7, false)
  boxes.push(box0,box1,box2,box3,box4,box5,box6)
}

function addStair7(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 1, CTXH-40,  20, 40);
  stairs.push(stair1,);
}