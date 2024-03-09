
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
      const levelBall2 = new LevelBall(ctx, CTXW-80, 0)
      levelBalls.push(levelBall2)
}

function addBubble6(ctx, bubbles){ 
  const bubble0 = new Bubble(ctx, 105, 100, 80, 80, 0.00001, 0.00001, 0.00001, true, 30000 )
  const bubble1 = new Bubble(ctx, CTXW - 75, CTXH-100, 20, 20, -9 )
  const bubble2 = new Bubble(ctx,CTXW - 65, CTXH-100, 20, 20, -9 )
  const bubble3 = new Bubble(ctx, CTXW -55, CTXH-100, 20, 20, -9 )
  const bubble4 = new Bubble(ctx, CTXW -45, CTXH-100, 20, 20, -9 )
  const bubble5 = new Bubble(ctx, CTXW -35, CTXH-100, 20, 20, -9 )
  const bubble6 = new Bubble(ctx, CTXW -25, CTXH-100, 20, 20, -9 )
  const bubble7 = new Bubble(ctx, CTXW-140, CTXH-220 , 110, 110, -1.5)
  bubbles.push(bubble0, bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7);
}

function addPlatforms6(ctx, platforms){
  const platform0 = new Platform( ctx, 110, CTXH - 280,  335, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform( ctx, CTXW - 350, 260,  195, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform( ctx, CTXW-400, CTXH-180,  135, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform( ctx, CTXW-135, 200,  135, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform5 = new Platform( ctx, CTXW-185, CTXH-180,  185, 15, "../public/Imagenes/obstacles/platformSolid6.png", true, false, false);

  platforms.push(platform0,platform2,platform3,platform4, platform5);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer6(ctx, bouncers){
  const bouncer1 = new Bouncer( ctx, 240, 130,  15, 275, 0, 0, "/public/Imagenes/obstacles/platfomJump1.png");
  const bouncer2 = new Bouncer(ctx, 25, 280, 80, 15, 0, 0, "/public/Imagenes/obstacles/platfomJump2.png")
  const bouncer3 = new Bouncer(ctx, 200, 200, 40, 15,0, 0,  "/public/Imagenes/obstacles/platfomJump3.png")
  const bouncer5 = new Bouncer(ctx, 355, 20, 15, 260,0, 0,  "/public/Imagenes/obstacles/platfomJump4.png")
  const bouncer6 = new Bouncer(ctx, 500, 290, 80, 15,0, 0,  "/public/Imagenes/obstacles/platfomJump3.png")
  const bouncer7 = new Bouncer(ctx, 650, 230, 80, 15,0, 0,  "/public/Imagenes/obstacles/platfomJump2.png")
  const bouncer8 = new Bouncer( ctx, 810, 290,  120, 15, 0, 0, "/public/Imagenes/obstacles/platfomJump4.png" );
  const bouncer9 = new Bouncer(ctx, 655, 520, 80, 15, 0, 0, "/public/Imagenes/obstacles/platfomJump1.png")
  bouncers.push(bouncer1, bouncer2, bouncer3,  bouncer5, bouncer6, bouncer7, bouncer8, bouncer9)
}

function addSpikes6(ctx, spikes){
  // const spike1 = new Spikes(ctx, 45, CTXH-10,  CTXW / 18)
  // const spike2 = new Spikes(ctx, 140, CTXH-10, CTXW / 18)
  // const spike3 = new Spikes(ctx, 245, CTXH-10, CTXW / 18)
  // spikes.push(spike1,spike2,spike3)
}


function boxItem6(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box = new Box(ctx, 820, 370,  0, false, 1, false, 3);
  const box0 = new Box(ctx, 520, 370,  0, false, 1, false, 3);
  const box1 = new Box(ctx, 20, 70,  1, false, 2, false);
  const box2 = new Box(ctx, 390, 235,  2, false, 1, false, 2);
  const box3 = new Box(ctx, 390, 180,  3, false, 1, false, 2);
  const box31 = new Box(ctx, 390, 125,  3, false, 1, false, 2);
  const box32 = new Box(ctx, 390, 75,  3, false, 1, false, 2);
  const box4 = new Box(ctx, CTXW-120, 220,  3, false, 5, false);
  const box5 = new Box(ctx, CTXW-120, 250,  3, false, 5, false);
  const box6 = new Box(ctx, CTXW-120, 280,  3, false, 5, false);
  const box7 = new Box(ctx, CTXW-120, 310,  3, false, 5, false);
  boxes.push(box, box0, box1,box2,box3, box31, box32, box4,box5,box6,box7)
}

function addStair6(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 10, CTXH-280,  100, 280);
  const stair2 = new Stair(ctx, CTXW-260, CTXH-180,  80, 180);
  stairs.push(stair1,stair2,);
}