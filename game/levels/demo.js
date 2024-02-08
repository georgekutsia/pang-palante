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

function addDemo1(ctx, platforms){
  mostrarVariosTextosPocoAPoco1()
  const platform1 = new Platform(ctx, 50, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 120, 100, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, true, true);
  const platform3 = new Platform(ctx, 190, 80, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", true, false, true);
  platforms.push( platform1,platform2, platform3);
}




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


function addDemo3(ctx, platforms){
  mostrarVariosTextosPocoAPoco1()
  const platform1 = new Platform(ctx, 150, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 150, 100, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  platforms.push( platform1,platform2);
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