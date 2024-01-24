
function level3( ctx, bubbles, platforms, stairs, boxes,healings, levelBalls){
  addPlatforms3(ctx, platforms)
  addStair3(ctx, stairs)
  healingItem3(ctx, healings)
  boxItem3(ctx, boxes)
  levelBallItem3(ctx, levelBalls)
  addBubble3(ctx, bubbles)
}
function levelBallItem3(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width - 40, 0)
  levelBalls.push(levelBall)
}


function addBubble3(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 130, -50, ctx.canvas.width / 4, ctx.canvas.width / 4, -1)
  bubbles.push(bubble1);
}

function addPlatforms3(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 45, 75, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 1, 40, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform3 = new Platform(ctx, 200, 120, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  const platform4 = new Platform(ctx, 250, 73, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3, platform4);
}

function addStair3(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  const stair1 = new Stair(ctx, 10, ctx.canvas.height - 50,  20, 50);
  const stair2 = new Stair(ctx, 230, 73,  20, 50);
  stairs.push(stair1, stair2,);
}


function boxItem3(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 260, 80,  3, false, 5)
  boxes.push(box1,)
}


function healingItem3(ctx, healings) {  
  const healingItem = new Healing(ctx, 1, 27, 0)
  healings.push(healingItem)
}
