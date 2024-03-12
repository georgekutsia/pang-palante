

function level9( ctx, bubbles, platforms, boxes, levelBalls, hooks, levers){
  addPlatforms9(ctx, platforms)
  levelBallItem9(ctx, levelBalls)
  addBubble9(ctx, bubbles)
  boxItem9(ctx, boxes)
  addHook9(ctx, hooks)
  addLever9(ctx, levers)
}
function levelBallItem9(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, 160, 0)
      levelBalls.push(levelBall2)
}

function addBubble9(ctx, bubbles){ 
  const bubble = new Bubble(ctx, 10, 420, 50, 50)
  const bubble0 = new Bubble(ctx, 30, 420, 40, 40)
  const bubble1 = new Bubble(ctx, CTXW/2-180, 10, 40, 40, 0, 0, 0.03)
  const bubble2 = new Bubble(ctx, CTXW/2-160, 10)
  const bubble3 = new Bubble(ctx, CTXW/2-140, 20)
  const bubble4 = new Bubble(ctx, CTXW/2-140, 20, 100, 100)
  const bubble5 = new Bubble(ctx, CTXW/2-120, 30, 40, 40, 0, 0, 0.03)
  const bubble6 = new Bubble(ctx, CTXW/2-120, 30)
  const bubble7 = new Bubble(ctx, CTXW/2-100, 30)
  const bubble8 = new Bubble(ctx, CTXW/2-100, 30)
  const bubble9 = new Bubble(ctx, CTXW/2-80, 30, 40, 40, 0, 0, 0.03)
  const bubble10 = new Bubble(ctx, CTXW/2-80, 30)
  const bubble11 = new Bubble(ctx, CTXW/2-60, 30, 100, 100)
  const bubble12 = new Bubble(ctx, CTXW/2-50, 30)
  const bubble13 = new Bubble(ctx, CTXW/2-40, 30, 20, 20, 0, 0, 0.1)
  const bubble14 = new Bubble(ctx, CTXW/2-30, 30)
  const bubble15 = new Bubble(ctx, CTXW/2-20, 30)
  const bubble16 = new Bubble(ctx, CTXW/2-10, 30, 20, 20, 0, 0, 0.1)
  const bubble17 = new Bubble(ctx, CTXW/2, 30)
  const bubble18 = new Bubble(ctx, CTXW/2 +10, 30)
  const bubble19 = new Bubble(ctx, CTXW/2 + 20, 30, 20, 20, 0, 0, 0.1)
  bubbles.push(bubble, bubble0, bubble1,bubble2,bubble3,bubble4,bubble5, 
    bubble6,bubble7,bubble8,bubble9,bubble10,bubble11,bubble12,
    bubble13,bubble14,bubble15,bubble16,bubble17,bubble18,bubble19);
}

function addPlatforms9(ctx, platforms){
  const platform0 = new Platform( ctx, 230, 200,  100, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform1 = new Platform( ctx, 30, 440,  100, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform3 = new Platform( ctx, CTXW/2 - 130, 150,  250, 10, "../public/Imagenes/obstacles/platformSolid3.png", true, false, false);
  const platform2 = new Platform( ctx, 400, 320,  100, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform4 = new Platform( ctx, CTXW-110, 380,  80, 15, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true);
  const platform5 = new Platform( ctx, CTXW/2 - 100, CTXH-250,  170, 15, "../public/Imagenes/obstacles/platformSolid6.png", true, false, true);
  const platform6 = new Platform( ctx, CTXW-310, 450,  80, 15, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true);
  platforms.push(platform0, platform1,platform2, platform3, platform4, platform5, platform6);
}

function boxItem9(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 55, 120,  3, false, 6, false)
  const box2 = new Box(ctx, 425, 50,  2, false, 1, false)
  const box3 = new Box(ctx, CTXW-300, 35,  2, false, 7, false)
  const box4 = new Box(ctx, CTXW-90, 120,  3, false, 6, false)
  boxes.push( box1, box2, box3, box4, )
}


function addHook9(ctx, hooks){
  let hook = new Hook(ctx, CTXW/2 + 5, 285)
  let hook1 = new Hook(ctx, CTXW/2-100, 285)
  let hook2 = new Hook(ctx, CTXW/2-65, 285)
  let hook3 = new Hook(ctx, CTXW/2-30, 285)
  let hook4 = new Hook(ctx, CTXW/2+40, 285)
  hooks.push(hook, hook1, hook2, hook3, hook4)
}

function addLever9(ctx, levers){
  let leve = new Lever(ctx, 250, 145)
  let leve1 = new Lever(ctx, CTXW/2, 45)
  levers.push(leve, leve1)
}