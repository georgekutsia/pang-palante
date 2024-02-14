function levelDemo1( ctx, bubbles, platforms, bouncers,spikes, stairs, flamethrowers, machineguns, healings, auras, boxes, blasters, levelBalls){    
    addPlatforms1987(ctx, platforms)
  // addBouncer1987(ctx, bouncers)
  // addSpikes1987(ctx, spikes)
  // addStair1987(ctx, stairs)
  // flamethrowerItem1987(ctx, flamethrowers)

  // auraItem1987(ctx, auras)
  // boxItem1987(ctx, boxes)
  // blasterItem1987(ctx, blasters)
  // blasterItem1987(ctx, blasters)
  // blasterItem1987(ctx, blasters)
  // machinegunItem(ctx, machineguns)
  // levelBallItem1987(ctx, levelBalls)
  // addBubble1987(ctx, bubbles)
}
function levelBallItem1987(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2, 0)
  levelBalls.push(levelBall)
}

function addBubble1987(ctx, bubbles){ 
  const bubble = new Bubble(ctx)
  bubbles.push(bubble);
}




//!demo1
function addDemo1Electro(ctx, platforms, electros){
  let elec = new Electro(ctx, 10, 50);
  const platform0 = new Platform(ctx, 10, 95, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true, 0, 0, 1, 200, 0, 0, true);
  platforms.push( platform0);
  electros.push(elec)
}
function addDemo1(ctx, platforms){
  const platform1 = new Platform(ctx, 50, 125, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 120, 105, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, true, true);
  const platform3 = new Platform(ctx, 190, 85, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", true, false, true);
  const platform4 = new Platform(ctx, 240, 65, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", true, false, true, 0, 0, 140, 230, 0, 0, true);
  platforms.push( platform1,platform2, platform3, platform4);

}

//!demo 2
function addDemo2(ctx, platforms, bouncers, stairs, levers){
  const bouncer1 = new Bouncer(ctx, 80, 80, 20, 5)
  const bouncer2 = new Bouncer(ctx,120, 100, 20, 5)
  const bouncer3 = new Bouncer(ctx, 170, 80, 20, 5)
  const bouncer4 = new Bouncer(ctx, 210, 60, 20, 5)
  bouncers.push(bouncer1, bouncer2, bouncer3, bouncer4)
  let lev = new Lever(ctx, CTXW-30, 45)
  levers.push(lev);
  const stair1 = new Stair(ctx, 1, CTXH-50,  20, 50);
  stairs.push(stair1,);
  const platform0 = new Platform(ctx, 20, 100, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform1 = new Platform(ctx, CTXW-45, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  platforms.push( platform0,platform1);

}

//!demo3
function addDemo3(ctx, platforms, levers, bubbles, levelBalls){
  const levelBall = new LevelBall(ctx, 100, 0)
  levelBalls.push(levelBall)
    const bubble = new Bubble(ctx, 5, 5, 25, 25, 0.08, 0.000001, 0.000001, true, 17000, 0)
    bubbles.push(bubble);
  let lev1 = new Lever(ctx, 15, 45)
  let lev2 = new Lever(ctx, 30, CTXH-20)
  levers.push(lev1, lev2);
  const platform1 = new Platform(ctx, 1, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
  const platform2 = new Platform(ctx, 1, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
  const platform3 = new Platform(ctx, 150, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 1, 0, 90, 240);
  const platform4 = new Platform(ctx, 80, 70, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true, 1, 0, 90, 210);
  const platform5 = new Platform(ctx, 240, 60, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 0.4, 0, 0, 50, 110 );
  const platform6 = new Platform(ctx, 30, 60, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, );
  platforms.push(platform1, platform2, platform3,platform4,platform5,platform6);
}


//!demo4
function addDemo4(ctx, platforms, levers, bubbles, levelBalls, boxes){

  const box1 = new Box(ctx, 60, 60,  3, false, 2)
  const box2 = new Box(ctx, 60, 30,  2, false, 7)
  const box3 = new Box(ctx, 120, 80,  3, false, 1)
  const box4 = new Box(ctx, 120, 50,  2, false, 1)
  const box5 = new Box(ctx, 160, 80,  3, false, 1)
  const box6 = new Box(ctx, 160, 50,  2, false, 1)
  const box7 = new Box(ctx, 220, 60,  3, false, 2)
  const box8 = new Box(ctx, 220, 30,  2, false, 7)
  const box9 = new Box(ctx, CTXW/2-10, 35,  1, false, 5)
  const box10 = new Box(ctx, CTXW/2-10, 55,  1, false, 5)
  boxes.push(box1,box2, box3, box4, box5, box6, box7, box8, box9, box10)

  const levelBall1 = new LevelBall(ctx, 220, 0)
  levelBalls.push(levelBall1)
  const bubble1 = new Bubble(ctx, CTXW-35, 20, 25, 25, -0.00003, -0.000000001, -0.000001, true, 42000, 0)
  const bubble2 = new Bubble(ctx, 5, 20, 25, 25, -0.00003, -0.000000001, -0.000001, true, 42000, 0)
  const bubble3 = new Bubble(ctx, 5, CTXH-50, 20, 20, -0.00003, 0.0000001, 0.000001, true, 544444, 0)
  const bubble4 = new Bubble(ctx, CTXW-30, CTXH-50, 20, 20, -0.00003, 0.0000001, 0.000001, true, 544444, 0)
  bubbles.push(bubble1, bubble2, bubble3, bubble4);
  let lev1 = new Lever(ctx, CTXW-30, 0)
  let lev2 = new Lever(ctx, 15, 0)
  let lev3 = new Lever(ctx, CTXW/2-10, 0)
  levers.push(lev1, lev2, lev3);
  const platform1 = new Platform(ctx, 10, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 40, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, CTXW-45, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true,);
  const platform4 = new Platform(ctx, CTXW-95, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  platforms.push( platform1, platform2, platform3,platform4);
}
//!demo5
function addDemo5(ctx, platforms, levers, levelBalls, boxes, darkBubbles, spikes, healings){

  const box0 = new Box(ctx, 140, 20,  3, false, 1, false, 4)
  const box1 = new Box(ctx, 105, 20,  3, false, 1, false, 4)
  const box2 = new Box(ctx, 175, 20,  3, false, 1, false, 4)
  const box3 = new Box(ctx, 15, 50,  1, false, 1)
  const box4 = new Box(ctx, CTXW-30, 50,  1, false, 10, true, 2 )
  const box5 = new Box(ctx, 60, 40,  0, false, 8, true, 3)
  const box6 = new Box(ctx, CTXW - 80, 40,  0, false, 8, true, 3)
  boxes.push(box0, box1, box2, box3,box4,box5,box6)
  

  const levelBall1 = new LevelBall(ctx, CTXW-30, 0)
  levelBalls.push(levelBall1)
  let lev1 = new Lever(ctx, CTXW-30, 45)
  let lev2 = new Lever(ctx, 15, 45)
  let lev3 = new Lever(ctx, CTXW/2-10, 45)
  levers.push(lev1, lev2, lev3);
  const platform1 = new Platform(ctx, 1, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 40, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 0, 0, 1, 110, 0, 0, true);
  const platform3 = new Platform(ctx, CTXW-36, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true,);
  const platform4 = new Platform(ctx, CTXW-95, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 0, 150, 300, 0, 0, true);
  const platform5 = new Platform(ctx, CTXW-45, 30, 35, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 0, 150, 300, 0, 0, true);
  platforms.push( platform1, platform2, platform3,platform4,platform5);
  let bu = new DarkBubble(ctx, CTXW/2 - 20, 50, 30, 30, 0.00000001, 0.0000001, 0.000002,)
  darkBubbles.push(bu)
  const spike1 = new Spikes(ctx, 55, 110)
  const spike2 = new Spikes(ctx, CTXW-90, 110)
  spikes.push(spike1, spike2)
  const heal1 = new Healing(ctx, 55, 90, 0.00001)
  const heal2 = new Healing(ctx, 70, 90, 0.00001)
  const heal3 = new Healing(ctx, 210, 90, 0.00001)
  const heal4 = new Healing(ctx, 225, 90, 0.00001)
  healings.push(heal1, heal2, heal3, heal4)
}




function addDemo6(ctx, platforms, levers, levelBalls, boxes, gatlings){

  const box1 = new Box(ctx, 60, 60,  3, false, 2)
  const box2 = new Box(ctx, 60, 30,  2, false, 3)
  const box3 = new Box(ctx, 90, 60,  3, false, 3)
  const box4 = new Box(ctx, 120, 60,  3, false, 3)
  const box5 = new Box(ctx, 150, 60,  1, false, 3)

  boxes.push(box1,box2,box3,box4,box5,)

  const levelBall1 = new LevelBall(ctx,220, 0)
  levelBalls.push(levelBall1)
  let lev1 = new Lever(ctx, CTXW-30, 0)
  let lev2 = new Lever(ctx, 15, 0)
  let lev3 = new Lever(ctx, CTXW/2-10, 0)
  levers.push(lev1, lev2, lev3);
  const platform1 = new Platform(ctx, 10, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 40, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 0, 0, 80, 190, 0, 0, true);
  const platform3 = new Platform(ctx, CTXW-45, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true,);
  const platform4 = new Platform(ctx, CTXW-95, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 0, 10, 230, 0, 0, true);
  platforms.push( platform1, platform2, platform3,platform4);
  let gat = new BubbleGatling(ctx)
  gatlings.push(gat)

}






function addBouncer1987(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikes1987(ctx, spikes){
  const spike1 = new Spikes(ctx, 100, 136)
  spikes.push(spike1)
}

function addStair1987(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItem1987(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Bo1987(ctx, 20, 20,  3, false, 5)
  boxes.push(box1,)
}

function flamethrowerItem1987(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem1987(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem1987(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}
function barItem1987(ctx, bars){
  const bar = new Bars(ctx);
  bars.push(bar)
}

function auraItem1987(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem1987(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}

function addExplosion1987(ctx,explosions){
  let explo = new Explosion(ctx)
  explosions.push(explo)
}

function addGatling(ctx, gatlings){
let gat = new BubbleGatling(ctx)
gatlings.push(gat)
}

function addDarkBubble(ctx, darkBubbles){
  let bu = new DarkBubble(ctx)
  darkBubbles.push(bu)
}

function addSteps(ctx, steps){
  let step = new Steps(ctx);
  steps.push(step);
}

function addLever(ctx, levers){
  let lev = new Lever(ctx)
  levers.push(lev);
}