
function level16( ctx, bubbles, levelBalls, platforms, healings,auras, hooks, blasters, electros, coins, cannons){
  levelBallItem16(ctx, levelBalls)
  addBubble16(ctx, bubbles)
  addPlatforms16(ctx, platforms)
  addItems16(ctx, healings, auras, hooks, blasters, electros,coins)
  addCannon16(ctx, cannons)

}
function levelBallItem16(ctx, levelBalls) {  
  const levelBall2 = new LevelBall(ctx, CTXW/2-20, 0)
      levelBalls.push(levelBall2)
}

function addBubble16(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, 10, 220, 35, 35, 14, 0.0008, 0.000017, true, 40000)
    const bubble2 = new Bubble(ctx, CTXW -75, 350, 35, 35, 14, 0.0008, 0.000017, true, 40000)
    const bubble3 = new Bubble(ctx, 10, 450, 35, 35, 14, 0.0008, 0.000017, true, 40000)
    bubbles.push(bubble1, bubble2, bubble3);
}


  function addCannon16(ctx, cannons){
    let can1 = new BubbleCannon(ctx, 0, 100, 30, 0.00001, 0.000001, 0, 5, 0, 0, 20, 12500)
    let can2 = new BubbleCannon(ctx, 0, 250, 10, 0.00001, 0.000001, 0, 5, 0, 0, 40, 12500)
    let can3 = new BubbleCannon(ctx, 0, 370, 10, 0.00001, 0.000001, 0, 5, 0, 0, 60, 12500)
    let can4 = new BubbleCannon(ctx, 0, 480, 10, 0.00001, 0.000001, 0, 5, 0, 0, 80, 12500)
    cannons.push(can1, can2, can3, can4)
  }


function addItems16(ctx, healings, auras, hooks, blasters, electros,coins){
  const hea1 = new Healing(ctx, 940, 100)
  const hea2 = new Healing(ctx, CTXW - 210, 200)
  const hea3 = new Healing(ctx, 40, 300)
  healings.push(hea1, hea2, hea3)
  const aura = new Aura(ctx, 295, CTXH-150)
  auras.push(aura);
  let hoo =  new Hook(ctx, 810, 150);
  hooks.push(hoo);
  let blast = new MegaFireBlaster(ctx, 670, CTXH-290);
  blasters.push(blast);  
  let electro =  new Electro(ctx, 180, 150, 10, 30);
  electros.push(electro)
  let coin =  new Coins(ctx, 430, 240, 30, 30, 3);
  let coin1 =  new Coins(ctx, CTXW/2 + 100, CTXH - 150, 30, 30, 3);
  let coin2 =  new Coins(ctx, CTXW - 100, 300, 50, 50, 10);
  coins.push(coin, coin1, coin2);
}



function addPlatforms16(ctx, platforms){
  for (let i = 0; i < 6; i++) {
  const platform1 = new Platform(ctx, 20 + i*250, 550, 100, 15, "../public/Imagenes/obstacles/platformSolid5.png", false, false, true);
  platforms.push(platform1)
  }
  for (let i = 0; i < 5; i++) {
  const platform1 = new Platform(ctx, 150 + i*250, 430, 100, 15, "../public/Imagenes/obstacles/platformSolid7.png", false, false, true);
  platforms.push(platform1)
  }
  for (let i = 0; i < 6; i++) {
  const platform1 = new Platform(ctx, 20 + i*250, 300, 100, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  platforms.push(platform1)
  }
  for (let i = 0; i < 5; i++) {
  const platform1 = new Platform(ctx, 150 + i*250, 180, 100, 15, "../public/Imagenes/obstacles/platformSolid6.png", false, false, true);
  platforms.push(platform1)
  }
}