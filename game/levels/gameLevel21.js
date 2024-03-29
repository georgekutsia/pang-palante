// level(this.ctx, this.bubbles, this.platforms, this.bouncers,this.spikes, this.stairs, this.flamethrowers, this.machineguns, this.healings, this.bars, this.auras, this.boxes, this.blasters, this.levelBalls)
//? 1- flamethrowers, 2-healings,  3- auras,  4-machineguns,  5- bars, 6-blasters, 7-coins, 8-steps, 9-hooks,10- electros


function levelBallItemMiniBoss1(ctx, levelBalls) {  
  const levelBall = new LevelBall(ctx, CTXW/2, 0)
  levelBalls.push(levelBall)
}

function addPlatformsMiniBoss1(ctx, platforms){
  let y = getRandomNumber(200)
  let w = getRandomNumber(90)
  let breakable = Math.random() > 0.5;
  let jumpable = Math.random() > 0.5;
  const platform1 = new Platform(ctx, CTXW , CTXH-90 - y, 70 + w, 15, "../public/Imagenes/obstacles/platformSolid2.png", breakable, jumpable, true, -1.3, 0);
  platforms.push( platform1 );

}

function addBouncerMiniBoss1(ctx, bouncers){
  let y = getRandomNumber(70)
  let h = getRandomNumber(10)
  let w = getRandomNumber(15)
  const bouncer1 = new Bouncer(ctx, CTXW + 20, CTXH-100 - y, 100 + w, 15+h, true, -1.3)
  bouncers.push(bouncer1)
}

function boxItemMiniBoss1(ctx, boxes) {   
  let y = getRandomNumber(60)
  const box1 = new Box(ctx, CTXW + 40,  CTXH-100 - y,  3, true, 3, false, 0, -1.3)
  boxes.push(box1,)
}


function addLever(ctx, levers){
  let lev = new Lever(ctx);
  levers.push(lev);
}

function addMiniboss1(ctx, levelBalls){
  finalBoss = true;
  miniBoss1 = true;
  dodgeCooldown = dodgeCooldown/2;
  minionsTalking.miniBossTalk1();
  levelBallItemMiniBoss1(ctx, levelBalls)
}