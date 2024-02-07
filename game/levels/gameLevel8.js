
function level8( ctx, bubbles, platforms, stairs, boxes, levelBalls, stairs, hooks, levers){
  addPlatforms8(ctx, platforms)
  levelBallItem8(ctx, levelBalls)
  addBubble8(ctx, bubbles)
  boxItem8(ctx, boxes)
  addStair8(ctx, stairs)
  addHook8(ctx, hooks)
  addLever(ctx, levers)
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
  const platform3 = new Platform( ctx, 120, 40,  65, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, false);
  const platform2 = new Platform( ctx, 200, 120,  65, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, false);
  const platform4 = new Platform( ctx, 260, 80,  35, 5, "../public/Imagenes/obstacles/platformSolid6.png", false, false, false);
  const platform5 = new Platform( ctx, CTXW/2 - 32, 90,  55, 5, "../public/Imagenes/obstacles/platformSolid6.png", true, false, false);
  platforms.push( platform1,platform2, platform3, platform4, platform5);
}





function boxItem8(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 5, 20,  1, false, 6, false)
  const box2 = new Box(ctx, 65, 50,  2, false, 1, false)
  const box3 = new Box(ctx, CTXW-30, 35,  2, false, 7, false)
  // const box4 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box5 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box6 = new Box(ctx, 275, 55,  3, false, 5, false)
  // const box7 = new Box(ctx, 275, 55,  3, false, 5, false)
  boxes.push(
    box1,
    box2,
    box3,
    // box4,box5,box6,box7
    )
}

function addStair8(ctx, stairs) {                  
  const stair1 = new Stair(ctx, 1, CTXH-40,  20, 40);
  const stair2 = new Stair(ctx, 240, 80,  20, 40);
  stairs.push(stair1,stair2,);
}

function addHook8(ctx, hooks){
  let hook = new Hook(ctx, CTXW/2, 85)
  let hook1 = new Hook(ctx, CTXW/2-10, 85)
  let hook2 = new Hook(ctx, CTXW/2-20, 85)
  let hook3 = new Hook(ctx, CTXW/2-30, 85)
  let hook4 = new Hook(ctx, CTXW/2+10, 85)
  hooks.push(hook, hook1, hook2, hook3, hook4)
}

function addLever(ctx, levers){
  let leve = new Lever(ctx, 40, 25)
  levers.push(leve)
}