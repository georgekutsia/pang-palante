function level1(ctx, bubbles, platforms, levelBalls){
  addPlatforms1(ctx, platforms)
  levelBallItem1(ctx, levelBalls)
  addBubble1(ctx, bubbles)
}

function levelBallItem1(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2 -ctx.canvas.width / 33 + 7, 0)
  levelBalls.push(levelBall)
}

function addBubble1(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 90, -350, ctx.canvas.width / 10, ctx.canvas.width / 10)
  bubbles.push(bubble1);
}


function addPlatforms1(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima, si rebotará la burbuja, velocida en x, velocidad en y 
  // const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true);
  const platform1 = new Platform(ctx, 10, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, ctx.canvas.width/2 - 22, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, 240, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
  platforms.push( platform1,platform2, platform3);
}
