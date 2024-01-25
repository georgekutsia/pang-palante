
function level4( ctx, bubbles, platforms,  stairs,  healings, bars,  boxes,  levelBalls){
  addPlatforms4(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem4(ctx, levelBalls)
  addBubble4(ctx, bubbles)
}
function levelBallItem4(ctx, levelBalls) {  
  let randomNumber =  getRandomNumber(3)
  switch (randomNumber) {
    case 1:
      const levelBall1 = new LevelBall(ctx, 40, 0)
      levelBalls.push(levelBall1)
      break;
    case 2:
      const levelBall2 = new LevelBall(ctx, 150, 0)
      levelBalls.push(levelBall2)
      break;
    case 3:
      const levelBall3 = new LevelBall(ctx, 250, 0)
      levelBalls.push(levelBall3)
      break;
    default:
      break;
  }
}

function addBubble4(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 10, -10)
  const bubble2 = new Bubble(ctx, 50, -100)
  const bubble3 = new Bubble(ctx, 100, -200)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5);
}

function addPlatforms4(ctx, platforms, healings, boxes, stairs,bars){
      const platform7 = new Platform(ctx, 145, 100, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform8 = new Platform(ctx, 115, 55, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform9 = new Platform(ctx, 10, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, false, true);
      const platform10 = new Platform(ctx, 10, 60, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, false, true);
      const platform11 = new Platform(ctx, 10, 70, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, false, true);
      platforms.push( platform7,platform8, platform9,platform10,platform11);
      const healingItem1 = new Healing(ctx, 20, 50)
      const healingItem2 = new Healing(ctx, CTXW/2, 80)
      healings.push(healingItem1,healingItem2)
      const box1 = new Box(ctx, 125, 3,  3, false, 5)
      const box2 = new Box(ctx, CTXW-60, 40,  2, false, 2)
      const box3 = new Box(ctx, CTXW-60, 70,  3, false, 3)
      boxes.push(box1,box2,box3)
      const stair2 = new Stair(ctx, CTXW/2, 55,  15, 50);
      const stair3 = new Stair(ctx, CTXW/2 + 40, 100,  15, 50);
      stairs.push(stair2,stair3);
      const bar2 = new Bars(ctx, 35, 50, 35, 5);
      bars.push(bar2)
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer4(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikes4(ctx, stairs){
  const stair1 = new Spikes(ctx, 100, 136)
  stairs.push(stair1)
}

function addStair4(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItem4(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Bo4(ctx, 20, 20,  3, false, 5)
  boxes.push(box1,)
}

function flamethrowerItem4(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem4(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem4(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}

function barItem4(ctx, bars){
  const bar = new Bars(ctx);
  bars.push(bar)
}

function auraItem4(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem4(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}
