// level(this.ctx, this.bubbles, this.platforms, this.bouncers,this.spikes, this.stairs, this.flamethrowers, this.machineguns, this.healings, this.bars, this.auras, this.boxes, this.blasters, this.levelBalls)

function levelInfinite( ctx, bubbles, platforms, bouncers,spikes, stairs, flamethrowers, machineguns, healings, auras, boxes, blasters, levelBalls, gatlings, darkBubbles){
  addPlatformsInfinite(ctx, platforms, stairs)
  levelBallItemInfinite(ctx, levelBalls)
  addBubbleInfinite(ctx, bubbles)
  addPlatformInMove(ctx,  platforms)
if(infiniteLeveling >= 3){boxItemInfinite(ctx, boxes)}
if(infiniteLeveling >= 5){boxItemInfinite(ctx, boxes);amountOfBoxes = 2; randomAcordingToLevel = 5}
if(infiniteLeveling >= 10){addTrapPlatformInfinite(ctx, platforms, spikes); amountOfBoxes = 3; randomAcordingToLevel = 7}
if(infiniteLeveling >= 13){addGatling(ctx, gatlings)}
if(infiniteLeveling >= 16){addDarkBubble(ctx, darkBubbles); randomAcordingToLevel = 9}
if(infiniteLeveling >= 19){addStairAndPlatformsInfinite1(ctx, stairs, platforms)}
if(infiniteLeveling >= 21){addStairAndPlatformsInfinite2(ctx, stairs, platforms)}
  // addBouncerInfinite(ctx, bouncers)
  console.log("randomlevel", randomAcordingToLevel)
  console.log("boxes", amountOfBoxes)
}
function levelBallItemInfinite(ctx, levelBalls) {  
let randomNumber =  getRandomNumber(9)
switch (randomNumber) {
  case 1:
  const levelBall1 = new LevelBall(ctx, 30, 0)
  levelBalls.push(levelBall1)
  break;
  case 2:
  const levelBall2 = new LevelBall(ctx, 60, 0)
  levelBalls.push(levelBall2)
  break;
  case 3:
  const levelBall3 = new LevelBall(ctx, 90, 0)
  levelBalls.push(levelBall3)
  break;
  case 4:
  const levelBall4 = new LevelBall(ctx, 120, 0)
  levelBalls.push(levelBall4)
  break;
  case 5:
  const levelBall5 = new LevelBall(ctx, 150, 0)
  levelBalls.push(levelBall5)
  break;
  case 6:
  const levelBall6 = new LevelBall(ctx, 180, 0)
  levelBalls.push(levelBall6)
  break;
  case 7:
  const levelBall7 = new LevelBall(ctx, 210, 0)
  levelBalls.push(levelBall7)
  break;
  case 8:
  const levelBall8 = new LevelBall(ctx, 240, 0)
  levelBalls.push(levelBall8)
  break;
  case 9:
  const levelBall9 = new LevelBall(ctx, 270, 0)
  levelBalls.push(levelBall9)
  break;
  default:
break;
  }
}


function addBubbleInfinite(ctx, bubbles){ 
  let randomNumber =  getRandomNumber(randomAcordingToLevel)
switch (randomNumber) {
  case 1:
    const bubble1 = new Bubble(ctx, 0, 0, 20, 20)
    bubbles.push(bubble1);  
  break;   
  case 2:
    const bubble2 = new Bubble(ctx, 0, 0, 30, 30)
    bubbles.push(bubble2);   
  break;
  case 3:
    const bubble3 = new Bubble(ctx, 0, 0, 60, 60)
    bubbles.push(bubble3);  
  break;
  case 4:
    const bubble4 = new Bubble(ctx, CTXW/2, 0, 30, 30, -1, 0.1 )
    const bubble44 = new Bubble(ctx, CTXW/2, 0, 30, 30, 1, 0.1 )
    bubbles.push(bubble4, bubble44);
  break;
  case 5:
    const bubble5 = new Bubble(ctx, CTXW/3, -100, 60, 60, 1 )
    const bubble55 = new Bubble(ctx, CTXW/3, -100, 60, 60, -1 )
    bubbles.push(bubble5,bubble55);
  break;
  case 6:
    for (let i = 0; i < amountOfSmallBubbles; i++) {
      const bubble6 = new Bubble(ctx, 0, 0, 5, 5, 0.1, 1 )
      bubbles.push(bubble6);
    }
  break;
  case 7:
    for (let i = 0; i < amountOfMiddleBubbles; i++) {
      const bubble7 = new Bubble(ctx, 0, 0, 20, 20, 0.1, 1 )
      bubbles.push(bubble7);
    }  
  break;
  case 8:
    for (let i = 0; i < amountOfBigBubbles; i++) {
      const bubble8 = new Bubble(ctx, 0, 0, 40, 40, 0.1, 1 )
      bubbles.push(bubble8);
    }  
  break;
  case 9:
    const bubble10 = new Bubble(ctx)
    bubbles.push(bubble3);
    const bubble11 = new Bubble(ctx)
    bubbles.push(bubble3);
    const bubble12 = new Bubble(ctx)
    bubbles.push(bubble10,bubble11, bubble12);
  break;
  default:
    break;
}
}

// hasta 9 niveles distintos según el progreso. quizás los primeros 3 hasta nivel 3, luego 5 hasta nivel 8, luego hasta 7 hasta nivel 12 y luego todo
function addPlatformsInfinite(ctx, platforms, stairs){
let randomNumber =  getRandomNumber(randomAcordingToLevel)
switch (randomNumber) {
case 1:
  const platform1 = new Platform(ctx, 10, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, ctx.canvas.width/2 - 22, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, 240, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
platforms.push( platform1,platform2, platform3);
break;
case 2:
const platform4 = new Platform(ctx, 50, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
const platform5 = new Platform(ctx, ctx.canvas.width/2 - 22, 90, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
const platform6 = new Platform(ctx, 200, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
platforms.push(platform4,platform5, platform6);
break
case 3:
const platform7 = new Platform(ctx, 30, 110, 55, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
const platform8 = new Platform(ctx, 210, 110, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
platforms.push(platform7,platform8);
break
case 4:
  const platform9 = new Platform(ctx, 1, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform10 = new Platform(ctx, 100, 80, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform11 = new Platform(ctx, 160, 80, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform12 = new Platform(ctx, ctx.canvas.width - 35, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  platforms.push(platform9,platform10,platform11,platform12);
break
case 5:
  const platform13 = new Platform(ctx, 1, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform14 = new Platform(ctx, 80, 110, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform15 = new Platform(ctx, 180, 110, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform16 = new Platform(ctx, ctx.canvas.width - 35, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push(platform13,platform14,platform15,platform16);
break
case 6:
const platform17 = new Platform(ctx, 20, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
const platform18 = new Platform(ctx, 80, 110, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
const platform19 = new Platform(ctx, 180, 110, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
const platform20 = new Platform(ctx, ctx.canvas.width - 55, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
platforms.push(platform17,platform18,platform19,platform20);
const stair1 = new Stair(ctx, 1, CTXH-60,  20, 60);
const stair2 = new Stair(ctx, CTXW-20, CTXH-60,  20, 60);
stairs.push(stair1,stair2);
break
case 7:
  addStairAndPlatformsInfinite2(ctx,stairs,platforms)
  addStairAndPlatformsInfinite1(ctx,stairs,platforms)
break
default:
break;
}

}

//no se que hacer con bouncer
function addBouncerInfinite(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

//boxes tras nivel 3
function boxItemInfinite(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  for (let i = 0; i < amountOfBoxes; i++) {
    let typeOfBox = Math.floor(Math.random() * 3 + 1);
    let corX = Math.random() * CTXW;
    let corY = Math.random() * 30;
    const box1 = new Box(ctx, corX, corY,  typeOfBox, true)
    boxes.push(box1,)
  }
}

//estos stairs tras nivel 15
function addStairAndPlatformsInfinite1(ctx,stairs,platforms){
  let randomNumber =  getRandomNumber(3)
  let corX = Math.random() * CTXW - 35;
switch (randomNumber) {
case 1:
  const platform22 = new Platform(ctx, corX - 25, 110, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const stair22 = new Stair(ctx, corX, 50,  20, 60);
  platforms.push(platform22);
  stairs.push(stair22);
  break;
  case 2:
    const platform2 = new Platform(ctx, corX - 35, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const stair2 = new Stair(ctx, corX, CTXH-60,  20, 60);
    platforms.push(platform2);
    stairs.push(stair2);
  break;
  case 3:
    const platform3 = new Platform(ctx, corX - 18, 90, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const stair3 = new Stair(ctx, corX, CTXH-60,  20, 60);
    platforms.push(platform3);
    stairs.push(stair3);
  break;
  default:
    break;
  }
}
function addStairAndPlatformsInfinite2(ctx,stairs,platforms){
  let randomNumber =  getRandomNumber(3)
  let corX = Math.random() * CTXW-35;
  switch (randomNumber) {
  case 1:
  const platform11 = new Platform(ctx, corX, 110, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const stair11 = new Stair(ctx, corX, 50,  20, 60);
  platforms.push(platform11);
  stairs.push(stair11);
  break;
  case 2:
    const platform1 = new Platform(ctx, corX + 20, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const stair1 = new Stair(ctx, corX, CTXH-60,  20, 60);
    platforms.push(platform1);
    stairs.push(stair1);
    break;
    case 3:
      const platform3 = new Platform(ctx, corX - 18, 120, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const stair3 = new Stair(ctx, corX, CTXH-90,  20, 60);
      platforms.push(platform3);
      stairs.push(stair3);
    break;
  default:
    break;
  }
}

//trap platform tras nivel 8
function addTrapPlatformInfinite(ctx, platforms, spikes){
  let randomNumber =  getRandomNumber(1)
  let size = getRandomNumber(3)
  let sizing = 35
  switch(size){
    case 1: sizing = 35; break;
    case 2: sizint = 45; break;
    case 3: sizing = 55; break;
  }
  let corX = Math.random() * CTXW-35;
  let corY = Math.random() * 30 + 5;
  switch (randomNumber) {
  case 3:
  const platform1 = new Platform(ctx, corX, CTXH - corY, sizing, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const spike1 = new Spikes(ctx, corX + 5, CTXH - corY - 10, sizing -10)
  platforms.push(platform1);
  spikes.push(spike1)
    break;
  case 2:
  const platform2 = new Platform(ctx, corX, CTXH - corY, sizing, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
  const spike2 = new Spikes(ctx, corX + 5, CTXH - corY - 10, sizing -10)
  platforms.push(platform2);
  spikes.push(spike2)
    break;
  case 1:
  const platform3 = new Platform(ctx, corX, CTXH - corY, sizing, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true, true);
  const spike3 = new Spikes(ctx, corX + 5, CTXH - corY - 10, sizing -10)
  platforms.push(platform3);
  spikes.push(spike3)
    break;
    case 4:
    const platform4 = new Platform(ctx, corX, CTXH - corY, sizing, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true, true);
    const spike4 = new Spikes(ctx, corX + 5, CTXH - corY - 10, sizing -10)
    platforms.push(platform4);
    spikes.push(spike4)
    break;
    default:
      break;
  }
}


//gatling a tras nivel 13
  function addGatling(ctx, gatlings){
    let randomNumber =  getRandomNumber(1)
      switch(randomNumber) {
      case 1:
        let gat1 = new BubbleGatling(ctx)
        gatlings.push(gat1)
      break;
      case 2:
        let gat2 = new BubbleGatling(ctx)
        let gat3 = new BubbleGatling(ctx, 0.3)
        gatlings.push(gat2, gat3)
      break;
    }
  }

  //dark bubble tras nivel 16
  function addDarkBubble(ctx, darkBubbles){
    let bu = new DarkBubble(ctx)
    darkBubbles.push(bu)
  }

function addPlatformInMove(ctx, platforms){
  const platform1 = new Platform(ctx, 210, 130, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true, 0.3);
  platforms.push( platform1);
}

let randomAcordingToLevel = 3;
let amountOfSmallBubbles = 10;
let amountOfMiddleBubbles = 6;
let amountOfBigBubbles = 3;
let amountOfBoxes = 1;

