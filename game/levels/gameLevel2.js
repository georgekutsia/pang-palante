
function level2(ctx, bubbles, platforms, boxes,  levelBalls){

  addPlatforms2(ctx, platforms)
  addBox2(ctx, boxes)
  levelBallItem2(ctx, levelBalls)
  addBubble2(ctx, bubbles)
}

function levelBallItem2(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, CTXW/2 -CTXW / 33, 0)
  levelBalls.push(levelBall)
}
function addBubble2(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 90, -350, CTXW / 10, CTXW / 10)
  const bubble2 = new Bubble(ctx, 90, -550, CTXW / 10, CTXW / 10)
  bubbles.push(bubble1,bubble2);
}

function addPlatforms2(ctx, platforms){
  let randomNumber =  getRandomNumber(2)
  switch (randomNumber) {
    case 2:
    const platform1 = new Platform(ctx, 30, CTXH - 180, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 260, CTXH - 120, 175, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform3 = new Platform(ctx, CTXW/2 -90, CTXH - 180, 180, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, CTXW-435, CTXH - 120, 175, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform5 = new Platform(ctx, CTXW-165, CTXH - 180, 135, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);

    platforms.push( platform1,platform2, platform3, platform4, platform5);
      break;
      case 1:
      const platform6 = new Platform(ctx, 100, CTXH - 300, 200, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
      const platform7 = new Platform(ctx, 400, CTXH - 230, 200, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      const platform8 = new Platform(ctx, 700, CTXH - 160, 200, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      const platform9 = new Platform(ctx, 1000, CTXH -90, 200, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      platforms.push( platform6, platform7, platform8,platform9);
    default:
      break;
  }
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

      function addBox2(ctx, boxes){
        for (let i = 0; i < getRandomNumber(3); i++) {    
          const box1 = new Box(ctx, 10 + getRandomNumber(1200), 30 + getRandomNumber(180),  3, false, 7)
          boxes.push(box1)
        }
      }
