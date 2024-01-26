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
    let randomNumber =  getRandomNumber(4)
    switch (randomNumber) {
      case 1:
        const platform1 = new Platform(ctx, 10, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
        const platform2 = new Platform(ctx, ctx.canvas.width/2 - 22, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
        const platform3 = new Platform(ctx, 240, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push( platform1,platform2, platform3);

        break;
    case 2:
      const platform4 = new Platform(ctx, 50, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform5 = new Platform(ctx, ctx.canvas.width/2 - 22, 90, 45, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
      const platform6 = new Platform(ctx, 200, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push(platform4,platform5, platform6);
      break
    case 3:
      const platform7 = new Platform(ctx, 30, 110, 55, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform8 = new Platform(ctx, 210, 110, 55, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push(platform7,platform8);
      break
    case 4:
      const platform9 = new Platform(ctx, 1, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
      const platform10 = new Platform(ctx, 100, 80, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform11 = new Platform(ctx, 10, 80, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      const platform12 = new Platform(ctx, ctx.canvas.width - 35, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
      platforms.push(platform9,platform10,platform11,platform12);
      break
      default:
        break;
    }

}

function addExplosion(ctx,explosions){
  let explo = new Explosion(ctx)
  explosions.push(explo)
}