
function level2(ctx, bubbles, platforms, boxes,  levelBalls){

  addPlatforms2(ctx, platforms)
  boxItem2(ctx, boxes, bubbles)
  levelBallItem2(ctx, levelBalls)
  addBubble2(ctx, bubbles)
}

function levelBallItem2(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, ctx.canvas.width/2 -ctx.canvas.width / 33, 0)
  levelBalls.push(levelBall)
}
function addBubble2(ctx, bubbles){ 
  const bubble1 = new Bubble(ctx, 90, -350, ctx.canvas.width / 10, ctx.canvas.width / 10)
  const bubble2 = new Bubble(ctx, 90, -550, ctx.canvas.width / 10, ctx.canvas.width / 10)
  bubbles.push(bubble1,bubble2);
}

function addPlatforms2(ctx, platforms){
  let randomNumber =  getRandomNumber(2)
  switch (randomNumber) {
    case 1:
    const platform1 = new Platform(ctx, 10, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
    const platform2 = new Platform(ctx, 60, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true);
    const platform3 = new Platform(ctx, ctx.canvas.width/2 -20, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
    const platform4 = new Platform(ctx, 205, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
    const platform5 = new Platform(ctx, 255, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
    platforms.push( platform1,platform2, platform3, platform4, platform5);
      break;
      case 2:
      const platform6 = new Platform(ctx, 20, 75, 35, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
      const platform7 = new Platform(ctx, 80, 90, 35, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      const platform8 = new Platform(ctx, 140, 105, 35, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      const platform9 = new Platform(ctx, 200, 120, 35, 5, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
      platforms.push( platform6, platform7, platform8,platform9);
    default:
      break;
  }
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function boxItem2(ctx, boxes, bubbles) {   
  let randomNumber =  getRandomNumber(4)
  switch (randomNumber) {
    case 4:
      const box1 = new Box(ctx, 20, 20,  3, false, 5)
      boxes.push(box1)
      break;
    case 2:
      const box2 = new Box(ctx, 50, 20,  3, false, 5)
      boxes.push(box2)
      break;
    case 3:
      const box3= new Box(ctx, 80, 20,  3, false, 5)
      boxes.push(box3)
      break;
    case 1:
      const box4 = new Box(ctx, 90, 20,  3, false, 5)
      const box5 = new Box(ctx, CTXW - 40, 20,  3, false, 2)
      boxes.push(box4, box5)
      const bubble3 = new Bubble(ctx, 90, -1550, CTXW / 10, CTXH / 10)
      bubbles.push(bubble3);
      break;
  
    default:
      break;
  }

}
