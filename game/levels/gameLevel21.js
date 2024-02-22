// level(this.ctx, this.bubbles, this.platforms, this.bouncers,this.spikes, this.stairs, this.flamethrowers, this.machineguns, this.healings, this.bars, this.auras, this.boxes, this.blasters, this.levelBalls)
//? 1- flamethrowers, 2-healings,  3- auras,  4-machineguns,  5- bars, 6-blasters, 7-coins, 8-steps, 9-hooks,10- electros


function levelMiniBoss1( ctx, bubbles, platforms, bouncers,spikes, stairs, flamethrowers, machineguns, healings, auras, boxes, blasters, levelBalls){
  addPlatformsMiniBoss1(ctx, platforms)
  // addBouncerMiniBoss1(ctx, bouncers)
  // addSpikesMiniBoss1(ctx, spikes)
  // addStairMiniBoss1(ctx, stairs)
  // flamethrowerItemMiniBoss1(ctx, flamethrowers)

  // auraItemMiniBoss1(ctx, auras)
  // boxItemMiniBoss1(ctx, boxes)
  // blasterItemMiniBoss1(ctx, blasters)
  // blasterItemMiniBoss1(ctx, blasters)
  // blasterItemMiniBoss1(ctx, blasters)
  // machinegunItem(ctx, machineguns)
  // levelBallItemMiniBoss1(ctx, levelBalls)
  // addBubbleMiniBoss1(ctx, bubbles)
}
function levelBallItemMiniBoss1(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2, 0)
  levelBalls.push(levelBall)
}

function addBubbleMiniBoss1(ctx, bubbles){ 
  const bubble = new Bubble(ctx)
  bubbles.push(bubble);
}

function addPlatformsMiniBoss1(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 10, 100, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 240, 100, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform3 = new Platform(ctx, 140, 140, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncerMiniBoss1(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikesMiniBoss1(ctx, spikes){
  const spike1 = new Spikes(ctx, 100, 136)
  spikes.push(spike1)
}

function addStairMiniBoss1(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItemMiniBoss1(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new BoxMiniBoss1(ctx, 20, 20,  3, false, 5)
  boxes.push(box1,)
}

function flamethrowerItemMiniBoss1(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItemMiniBoss1(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItemMiniBoss1(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}
function barItemMiniBoss1(ctx, bars){
  const bar = new Bars(ctx);
  bars.push(bar)
}

function auraItemMiniBoss1(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItemMiniBoss1(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}

function addExplosionMiniBoss1(ctx,explosions){
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

function addMiniboss1(){
  finalBoss = true;
  dodgeCooldown = dodgeCooldown/2
  minionsTalking.miniBossTalk1()

}