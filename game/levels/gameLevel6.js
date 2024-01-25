
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
      const levelBall2 = new LevelBall(ctx, 215, 0)
      levelBalls.push(levelBall2)
}

function addBubble6(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 65, 40)
  const bubble2 = new Bubble(ctx, 72, 40)
  bubbles.push(bubble1,bubble2);
}

function addPlatforms6(ctx, platforms){
  const platform1 = new Platform( ctx, 35, CTXH-13,  35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const platform2 = new Platform( ctx, 35, CTXH-18,  35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, true, true);


  platforms.push( platform1,platform2);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer6(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 35, CTXH-8, 5, 10)
  const bouncer2 = new Bouncer(ctx, 65, CTXH-8, 5, 10)
  bouncers.push(bouncer1,bouncer2)
}

function addSpikes6(ctx, spikes){
  const spike1 = new Spikes(ctx, 45, CTXH-10,  CTXW / 18)
  const spike2 = new Spikes(ctx, 140, CTXH-10, CTXW / 18)
  const spike3 = new Spikes(ctx, 245, CTXH-10, CTXW / 18)
  spikes.push(spike1,spike2,spike3)
}


function boxItem6(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box0 = new Box(ctx, 5, 20,  3, false, 1, false)

  boxes.push(box0)
}

function addStair6(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 1, CTXH-40,  20, 40);
  stairs.push(stair1,);
}