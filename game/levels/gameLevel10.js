
function level10( ctx, bubbles, platforms, stairs,healings,bars, boxes,  levelBalls, coins){
  addPlatforms10(ctx, platforms, healings, boxes, stairs, bars)
  levelBallItem10(ctx, levelBalls)
  addBubble10(ctx, bubbles)
  addCoin10(ctx, coins)
}
function levelBallItem10(ctx, levelBalls) {  
  let randomNumber =  getRandomNumber(3)
  switch (randomNumber) {
    case 1:
      const levelBall1 = new LevelBall(ctx, 60, 0)
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

function addBubble10(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 10, -10)
  const bubble2 = new Bubble(ctx, 50, -100)
  const bubble3 = new Bubble(ctx, 100, -200)
  const bubble4 = new Bubble(ctx, 150, -500)
  const bubble5 = new Bubble(ctx, 200, -600)
  bubbles.push(bubble1,bubble2,bubble3,bubble4,bubble5);
}

function addPlatforms10(ctx, platforms, healings, boxes, stairs,bars){
    const platform1 = new Platform(ctx, 10, 80, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 60, 95, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, false, true);
    const platform3 = new Platform(ctx, 70, 123, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform4 = new Platform(ctx, 150, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, false, true);
    const platform5 = new Platform(ctx, CTXW-55, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, true, true);
    const platform6 = new Platform(ctx, CTXW-85, 60, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    platforms.push( platform1,platform2, platform3,platform4, platform5,platform6);
    const healingItem = new Healing(ctx, 20, 70)
    healings.push(healingItem)
    const box1 = new Box(ctx, 155, 30,  3, false, 5)
    boxes.push(box1,)
    const stair1 = new Stair(ctx, CTXW-20, CTXH - 60,  20, 60);
    stairs.push(stair1);
    const bar1 = new Bars(ctx, CTXW-85, 40, 35, 5, );
    bars.push(bar1)

}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer10(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}

function addSpikes10(ctx, stairs){
  const stair1 = new Spikes(ctx, 100, 136)
  stairs.push(stair1)
}

function addStair10(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}


function boxItem10(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Bo10(ctx, 20, 20,  3, false, 5)
  boxes.push(box1,)
}

function flamethrowerItem10(ctx, flamethrowers) {  
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}
function machinegunItem10(ctx, machineguns) {  
  const machinegun = new Machinegun(ctx)
  machineguns.push(machinegun)
}

function healingItem10(ctx, healings) {  
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}

function barItem10(ctx, bars){
  const bar = new Bars(ctx);
  bars.push(bar)
}

function auraItem10(ctx, auras) {  
  const aura = new Aura(ctx)
  auras.push(aura)
}
function blasterItem10(ctx, blasters) {  
  const blaster = new MegaFireBlaster(ctx)
  blasters.push(blaster)
}

function addCoin10(ctx, coins){
  let coin1 =  new Coins(ctx, 10, 20)
  let coin2 =  new Coins(ctx, 30, 40)
  let coin3 =  new Coins(ctx, 10, 40)
  coins.push(coin1, coin2, coin3)
}