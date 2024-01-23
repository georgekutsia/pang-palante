
function level1(gameTime, ctx, bubbles, platforms, bouncers,spikes, stairs, flamethrowers, machineguns, healings, auras, boxes, blasters, levelBalls){
  addPlatforms1(ctx, platforms)
  levelBallItem1(ctx, levelBalls)
  addBubble1(ctx, bubbles)
}

function addPlatforms1(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 10, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 115, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, 240, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer1(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikes1(ctx, stairs){
  const stair1 = new Spikes(ctx, 100, 136)
  stairs.push(stair1)
}

function addStair1(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItem1(ctx, boxes) {  
  const box1 = new Box(ctx, 100, 20,  3)
  const box2 = new Box(ctx, 130, 20,  2)
  const box3 = new Box(ctx, 160, 20,  1)
  boxes.push(box1, box2, box3)
}


function addBubble1(ctx, bubbles){ 
  const bubble = new Bubble(ctx)
  bubbles.push(bubble);
}


function flamethrowerItem1(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem1(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem1(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}

function auraItem1(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem1(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}
function levelBallItem1(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2 -ctx.canvas.width / 33, 0)
  levelBalls.push(levelBall)
}