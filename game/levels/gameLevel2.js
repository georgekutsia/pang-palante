
function level2(ctx, bubbles, platforms, boxes,  levelBalls){

  addPlatforms2(ctx, platforms)
  boxItem2(ctx, boxes)
  levelBallItem2(ctx, levelBalls)
  addBubble2(ctx, bubbles)
}

function levelBallItem2(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2 -ctx.canvas.width / 33, 0)
  levelBalls.push(levelBall)
}
function addBubble2(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 90, -350, ctx.canvas.width / 10, ctx.canvas.width / 10)
  bubbles.push(bubble1);
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

function boxItem2(ctx, boxes) {   
  //ctx, x, y, tipo de caja,si es random=true o si es especifico= false,  loot específico
  const box1 = new Box(ctx, 20, 20,  3, false, 5)
  boxes.push(box1,)
}
