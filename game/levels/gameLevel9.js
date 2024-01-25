
function level9( ctx, bubbles, platforms,bouncers, stairs,healings, bars, boxes,  levelBalls, spikes){
  addPlatforms9(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem9(ctx, levelBalls)
  addBubble9(ctx, bubbles)
  addBouncer9(ctx,bouncers)
  addSpikes9(ctx, spikes)
  boxItem9(ctx, boxes)
}
function levelBallItem9(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 150, 0)
      levelBalls.push(levelBall2)
}

function addBubble9(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 65, 40)
  const bubble2 = new Bubble(ctx, 72, 40)
  const bubble3 = new Bubble(ctx, 180, 80)
  const bubble4 = new Bubble(ctx, 220, 50, 30, 30, 0, 0, 0)
  bubbles.push(bubble1,bubble2,bubble3,bubble4);
}

function addPlatforms9(ctx, platforms){
  const platform1 = new Platform(ctx, 1, 113, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform2 = new Platform(ctx, 70, 113, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform3 = new Platform(ctx, 140, 113, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform4 = new Platform(ctx, 210, 113, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);
  const platform5 = new Platform(ctx, 35, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform6 = new Platform(ctx, 105, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform7 = new Platform(ctx, 175, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform8 = new Platform(ctx, CTXW - 25, 130, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform9  = new Platform(ctx, CTXW - 45, 100, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform10  = new Platform(ctx, 1, 55, 15, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform11  = new Platform(ctx, 30, 35, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform12  = new Platform(ctx, 65, 40, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, false, false);
  const platform13  = new Platform(ctx, 100, 40, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform14  = new Platform(ctx, 130, 40, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  platforms.push( platform1,platform2,platform3,platform4, platform5,platform6,platform7,platform8,platform9,platform10,platform11,platform12,platform13,platform14);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer9(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 20, 75, 10, 10)
  const bouncer2 = new Bouncer(ctx, CTXW - 230, 90, 30, 10)
  const bouncer3 = new Bouncer(ctx, CTXW - 170, 70, 10, 10)
  const bouncer4 = new Bouncer(ctx,  CTXW - 140, 90, 10, 10)
  const bouncer5 = new Bouncer(ctx, CTXW - 90, 70, 10, 10)
  const bouncer6 = new Bouncer(ctx, CTXW - 50, 60, 20, 10)
  const bouncer7 = new Bouncer(ctx, CTXW - 10, 75, 10, 10)
  bouncers.push(bouncer1,bouncer2,bouncer3,bouncer4,bouncer5,bouncer6,bouncer7)
}

function addSpikes9(ctx, spikes){
  const spike1 = new Spikes(ctx, 45, 109,  CTXW / 18)
  const spike2 = new Spikes(ctx, 115, 109, CTXW / 18)
  const spike3 = new Spikes(ctx, 185, 109, CTXW / 18)
  spikes.push(spike1,spike2,spike3)
}


function boxItem9(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  for (let i = 0; i < 10; i++) {
  const box1 = new Box(ctx, 230, 1,  3, false, 1)
  boxes.push(box1)
  }
}
