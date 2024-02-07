
function level6( ctx, bubbles, platforms,bouncers, stairs,healings, bars, boxes,  spikes, levelBalls, stairs){
  addPlatforms6(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem6(ctx, levelBalls)
  addBubble6(ctx, bubbles)
  addBouncer6(ctx,bouncers)
  addSpikes6(ctx, spikes)
  boxItem6(ctx, boxes)
  addStair6(ctx, stairs)
}
function levelBallItem6(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-20, 0)
      levelBalls.push(levelBall2)
}

function addBubble6(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 65, 80)
  const bubble2 = new Bubble(ctx, 72, 40)
  const bubble3 = new Bubble(ctx, 275, 60)
  const bubble4 = new Bubble(ctx, 275, 60)
  const bubble5 = new Bubble(ctx, 275, 60)
  const bubble6 = new Bubble(ctx, 275, 60)
  const bubble7 = new Bubble(ctx, 275, 60)
  const bubble8 = new Bubble(ctx, 230, 100, 10, 10, -1.5)
  const bubble9 = new Bubble(ctx, 250, 100 , 10, 10, -1.5)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5, bubble6,bubble7,bubble8,bubble9);
}

function addPlatforms6(ctx, platforms){
  const platform1 = new Platform( ctx, 200, 90,  65, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform( ctx, 20, 110,  25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform( ctx, 260, 50,  35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform( ctx, 265, 100,  35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, false);
  const platform5 = new Platform( ctx, 90, 110,  35, 5, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true);

  platforms.push( platform1,platform2,platform3,platform4, platform5);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer6(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 5, 85, 20, 5)
  const bouncer2 = new Bouncer(ctx, 35, 60, 20, 5)
  const bouncer3 = new Bouncer(ctx, 65, 40, 20, 5)
  const bouncer4 = new Bouncer(ctx, 115, 70, 20, 5)
  const bouncer5 = new Bouncer(ctx, 175, 20, 3, 60)
  const bouncer6 = new Bouncer(ctx, 145, 90, 25, 5)
  const bouncer7 = new Bouncer( ctx, 90, 40,  3, 75);
  const bouncer8 = new Bouncer( ctx, 110, 1,  3, 85);
  const bouncer9 = new Bouncer(ctx, 145, 50, 25, 5)
  bouncers.push(bouncer1,bouncer2, bouncer3,bouncer4,bouncer5,bouncer6,bouncer7,bouncer8,bouncer9)
}

function addSpikes6(ctx, spikes){
  // const spike1 = new Spikes(ctx, 45, CTXH-10,  CTXW / 18)
  // const spike2 = new Spikes(ctx, 140, CTXH-10, CTXW / 18)
  // const spike3 = new Spikes(ctx, 245, CTXH-10, CTXW / 18)
  // spikes.push(spike1,spike2,spike3)
}


function boxItem6(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 5, 20,  1, false, 2, false)
  const box2 = new Box(ctx, 65, 50,  2, false, 1, false)
  const box3 = new Box(ctx, 120, 5,  3, false, 1, false)
  const box4 = new Box(ctx, 275, 55,  3, false, 5, false)
  const box5 = new Box(ctx, 275, 55,  3, false, 5, false)
  const box6 = new Box(ctx, 275, 55,  3, false, 5, false)
  const box7 = new Box(ctx, 275, 55,  3, false, 5, false)
  boxes.push(box1,box2,box3,box4,box5,box6,box7)
}

function addStair6(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 1, CTXH-40,  20, 40);
  const stair2 = new Stair(ctx, 240, 50,  20, 40);
  stairs.push(stair1,stair2,);
}