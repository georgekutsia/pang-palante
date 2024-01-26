
function level8( ctx, bubbles, platforms,bouncers, stairs,healings, bars, boxes,  spikes, levelBalls, stairs){
  addPlatforms8(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem8(ctx, levelBalls)
  addBubble8(ctx, bubbles)
  addBouncer8(ctx,bouncers)
  addSpikes8(ctx, spikes)
  boxItem8(ctx, boxes)
  addStair8(ctx, stairs)
}
function levelBallItem8(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-20, 0)
      levelBalls.push(levelBall2)
}

function addBubble8(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 100, 30, 40, 40, 0, 0, 0.03)
  const bubble2 = new Bubble(ctx, 100, 30)
  const bubble3 = new Bubble(ctx, 110, 30)
  const bubble4 = new Bubble(ctx, 120, 30)
  const bubble5 = new Bubble(ctx, 130, 30, 40, 40, 0, 0, 0.03)
  const bubble6 = new Bubble(ctx, 140, 30)
  const bubble7 = new Bubble(ctx, 150, 30)
  const bubble8 = new Bubble(ctx, 160, 30)
  const bubble9 = new Bubble(ctx, 170, 30, 40, 40, 0, 0, 0.03)
  const bubble10 = new Bubble(ctx, 180, 30)
  const bubble11 = new Bubble(ctx, 130, 30)
  const bubble12 = new Bubble(ctx, 105, 30)
  const bubble13 = new Bubble(ctx, 115, 30, 20, 20, 0, 0, 0.1)
  const bubble14 = new Bubble(ctx, 125, 30)
  const bubble15 = new Bubble(ctx, 135, 30)
  const bubble16 = new Bubble(ctx, 145, 30, 20, 20, 0, 0, 0.1)
  const bubble17 = new Bubble(ctx, 155, 30)
  const bubble18 = new Bubble(ctx, 165, 30)
  const bubble19 = new Bubble(ctx, 175, 30, 20, 20, 0, 0, 0.1)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5, 
    bubble6,bubble7,bubble8,bubble9,bubble10,bubble11,bubble12,
    bubble13,bubble14,bubble15,bubble16,bubble17,bubble18,bubble19);
}

function addPlatforms8(ctx, platforms){
  const platform1 = new Platform( ctx, 30, 40,  35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, false);
  const platform2 = new Platform( ctx, 30, 40,  35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, false);
  const platform3 = new Platform( ctx, 120, 40,  65, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, false, false);
  const platform4 = new Platform( ctx, 120, 40,  65, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, false, false);
  const platform5 = new Platform( ctx, 250, 10,  35, 5, "../public/Imagenes/obstacles/platformSolid6.png", false, false, false);

  platforms.push( platform1,platform2,platform4, platform5);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer8(ctx, bouncers){
  // const bouncer1 = new Bouncer(ctx, 5, 85, 20, 5)
  // const bouncer2 = new Bouncer(ctx, 35, 60, 20, 5)
  // const bouncer3 = new Bouncer(ctx, 65, 40, 20, 5)
  // const bouncer4 = new Bouncer(ctx, 115, 70, 20, 5)
  // const bouncer5 = new Bouncer(ctx, 175, 20, 3, 60)
  // const bouncer6 = new Bouncer(ctx, 145, 90, 25, 5)
  // const bouncer7 = new Bouncer( ctx, 90, 40,  3, 75);
  // const bouncer8 = new Bouncer( ctx, 110, 1,  3, 85);
  // const bouncer9 = new Bouncer(ctx, 145, 50, 25, 5)
  // bouncers.push(bouncer1,bouncer2, bouncer3,bouncer4,bouncer5,bouncer6,bouncer7,bouncer8,bouncer9)
}

function addSpikes8(ctx, spikes){
  // const spike1 = new Spikes(ctx, 45, CTXH-10,  CTXW / 18)
  // const spike2 = new Spikes(ctx, 140, CTXH-10, CTXW / 18)
  // const spike3 = new Spikes(ctx, 245, CTXH-10, CTXW / 18)
  // spikes.push(spike1,spike2,spike3)
}


function boxItem8(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 5, 20,  1, false, 6, false)
  const box2 = new Box(ctx, 65, 50,  2, false, 1, false)
  // const box3 = new Box(ctx, 120, 5,  3, false, 1, false)
  // const box4 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box5 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box6 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box7 = new Box(ctx, 275, 55,  3, false, 5, false)
  boxes.push(
    box1,
    box2,
    // box3,box4,box5,box6,box7
    )
}

function addStair8(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 1, CTXH-40,  20, 40);
  const stair2 = new Stair(ctx, 240, 50,  20, 40);
  stairs.push(stair1,stair2,);
}