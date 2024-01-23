
function level2(gameTime, ctx, bubbles, platforms, bouncers,spikes, stairs, flamethrowers, machineguns, healings, auras, boxes, blasters, levelBalls){
  addPlatforms2(ctx, platforms)
  // addBouncer2(ctx, bouncers)
  // addSpikes2(ctx, spikes)
  // addStair2(ctx, stairs)
  // flamethrowerItem2(ctx, flamethrowers)

  // auraItem2(ctx, auras)
  boxItem2(ctx, boxes)
  // blasterItem2(ctx, blasters)
  // blasterItem2(ctx, blasters)
  // blasterItem2(ctx, blasters)
  // machinegunItem(ctx, machineguns)
  levelBallItem2(ctx, levelBalls)
  addBubble2(ctx, bubbles)
}

function addPlatforms2(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 10, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 60, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform3 = new Platform(ctx, ctx.canvas.width/2 -20, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform(ctx, 205, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform5 = new Platform(ctx, 255, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3, platform4, platform5);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer2(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikes2(ctx, stairs){
  const stair1 = new Spikes(ctx, 100, 136)
  stairs.push(stair1)
}

function addStair2(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItem2(ctx, boxes) {  
  const box1 = new Box(ctx, 20, 20,  3, 3)
  boxes.push(box1,)
}


function addBubble2(ctx, bubbles){ 
  const bubble = new Bubble(ctx)
  bubbles.push(bubble);
}


function flamethrowerItem2(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem2(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem2(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}

function auraItem2(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem2(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}
function levelBallItem2(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2 -ctx.canvas.width / 33, 0)
  levelBalls.push(levelBall)
}