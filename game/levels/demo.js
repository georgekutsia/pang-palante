
//!demo1
function addDemo1Electro(ctx, platforms, electros){
  let elec = new Electro(ctx, 30, CTXH-250);
  const platform0 = new Platform(ctx, 10, CTXH-200, 90, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 1, 200, 0, 0, true);
  platforms.push( platform0);
  electros.push(elec)
}

function addDemo1(ctx, platforms){
  const platform1 = new Platform(ctx, 250, CTXH-100, 145, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform2 = new Platform(ctx, 500, CTXH-180, 145, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, true, true);
  const platform3 = new Platform(ctx, 750, CTXH-260, 145, 15, "../public/Imagenes/obstacles/platformSolid4.png", true, false, true);
  const platform4 = new Platform(ctx, 1000, CTXH-340, 200, 75, "../public/Imagenes/obstacles/platformSolid5.png", true, false, true, 0, 0, 140, 230, 0, 0, true);
  platforms.push( platform1,platform2, platform3, platform4);
}

//!demo 2
function addDemo2(ctx, platforms, bouncers, stairs, levers){
  const bouncer1 = new Bouncer(ctx,320, CTXH-300, 60, 10)
  const bouncer2 = new Bouncer(ctx, 480, CTXH - 240, 60, 10)
  const bouncer3 = new Bouncer(ctx, 660, CTXH - 320 , 60, 10)
  bouncers.push(bouncer1, bouncer2, bouncer3)
  let lev = new Lever(ctx, CTXW-60, 245)
  levers.push(lev);
  const stair1 = new Stair(ctx, 10, CTXH-200,  70, 200);
  stairs.push(stair1,);
  const platform0 = new Platform(ctx, 80, CTXH-200, 135, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform1 = new Platform(ctx, CTXW/2 + 120, 300, 65, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, CTXW/2 + 120, CTXW/2 + 400, 0, 0, true);
  const platform2 = new Platform(ctx, CTXW-90, 300, 90, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  platforms.push( platform0,platform1, platform2);
}

//!demo3
function addDemo3(ctx, platforms, levers, bubbles, levelBalls, boxes){
  const levelBall = new LevelBall(ctx, 190, 0)
  levelBalls.push(levelBall)
    const bubble = new Bubble(ctx, 25, 35, 101, 101, 0.3, 0.000001, 0.000001, true, 27000, 0)
    bubbles.push(bubble);
  let lev1 = new Lever(ctx, 25, 45)
  let lev2 = new Lever(ctx, 30, CTXH-50)
  levers.push(lev1, lev2);
  const platform1 = new Platform(ctx, 10, 150, 80, 15, "../public/Imagenes/obstacles/platformSolid1.png", true, false, true);
  const platform2 = new Platform(ctx, 10, 350, 235, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform3 = new Platform(ctx, 150, CTXH-100, 90, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true, 2, 0, 200, 600);
  const platform4 = new Platform(ctx, 600, CTXH-200, 90, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true, 1, 0, 550, 800);
  const platform5 = new Platform(ctx, 1000, CTXH-200, 90, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 1, 0, 0, 150, CTXH-200 );
  const platform6 = new Platform(ctx, 800, 100, 100, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 400, 800, 0, 0, true);
  platforms.push(platform1, platform2, platform3,platform4,platform5,platform6);


  const box0 = new Box(ctx, CTXW-200, 300,  3, false, 10, false, 1)
  boxes.push(box0,)
}


//!demo4
function addDemo4(ctx, platforms, levers, bubbles, levelBalls, boxes){

  const box1 = new Box(ctx, 200, 160,  3, false, 2)
  const box2 = new Box(ctx, 200, 230,  2, false, 7)
  const box3 = new Box(ctx, 400, 180,  3, false, 1)
  const box4 = new Box(ctx, 400, 250,  2, false, 1)
  const box5 = new Box(ctx, CTXW-440, 180,  3, false, 1)
  const box6 = new Box(ctx, CTXW-440, 250,  2, false, 1)
  const box7 = new Box(ctx, CTXW-240, 160,  3, false, 2)
  const box8 = new Box(ctx, CTXW-240, 230,  2, false, 7)
  const box9 = new Box(ctx, CTXW/2-20, 105,  1, false, 5)
  const box10 = new Box(ctx, CTXW/2-20, 185,  1, false, 5)
  boxes.push(box1,box2, box3, box4, box5, box6, box7, box8, box9, box10)

  const levelBall1 = new LevelBall(ctx, CTXW/2 - 10, 0)
  levelBalls.push(levelBall1)
  const bubble1 = new Bubble(ctx, CTXW-110, 20, 100, 100, -0.00003, -0.000000001, -0.000001, true, 50000, 0)
  const bubble2 = new Bubble(ctx, 5, 20, 100, 100, -0.00003, -0.000000001, -0.000001, true, 50000, 0)
  const bubble3 = new Bubble(ctx, 5, CTXH-100, 80, 80, -0.00003, 0.0000001, 0.000001, true, 544444, 0)
  const bubble4 = new Bubble(ctx, CTXW-100, CTXH-100, 80, 80, -0.00003, 0.0000001, 0.000001, true, 544444, 0)
  bubbles.push(bubble1, bubble2, bubble3, bubble4);
  let lev1 = new Lever(ctx, CTXW-30, 0)
  let lev2 = new Lever(ctx, 15, 0)
  let lev3 = new Lever(ctx, CTXW/2-10, 0)
  levers.push(lev1, lev2, lev3);
  const platform1 = new Platform(ctx, 30, CTXH-200, 100, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 200, CTXH-100, 100, 15, "../public/Imagenes/obstacles/platformSolid2.png", false, false, true);
  const platform3 = new Platform(ctx, CTXW-130, CTXH-200, 100, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true,);
  const platform4 = new Platform(ctx, CTXW-300, CTXH-100, 100, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true);
  platforms.push( platform1, platform2, platform3,platform4);
}
//!demo5
function addDemo5(ctx, platforms, levers, levelBalls, boxes, darkBubbles, spikes, healings){
  const box0 = new Box(ctx, CTXW/2 - 100, 20,  3, false, 1, false, 3)
  const box1 = new Box(ctx, CTXW/2, 20,  3, false, 1, false, 3)
  const box2 = new Box(ctx, CTXW/2 +100, 20,  3, false, 1, false, 3)
  const box3 = new Box(ctx, 40, 200,  1, false, 8)
  const box4 = new Box(ctx, CTXW-90, 200,  1, false, 8, true, 2)
  const box5 = new Box(ctx, 210, 40,  0, false, 10, true, 3)
  const box6 = new Box(ctx, CTXW - 280, 40,  0, false, 10, true, 3)
  boxes.push(box0, box1, box2, box3,box4,box5,box6)
  const levelBall1 = new LevelBall(ctx, CTXW-230, 0)
  levelBalls.push(levelBall1)
  let lev1 = new Lever(ctx, CTXW-90, 245)
  let lev2 = new Lever(ctx, 40, 245)
  let lev3 = new Lever(ctx, CTXW/2, CTXH-310)
  levers.push(lev1, lev2, lev3);
  const platform1 = new Platform(ctx, 10, CTXH - 200, 135, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true);
  const platform2 = new Platform(ctx, 160, CTXH - 100, 145, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 10, 300, 0, 0, true);
  const platform3 = new Platform(ctx, CTXW/2 -20, CTXH - 300, 80, 15, "../public/Imagenes/obstacles/platformSolid6.png", false , false, true);
  const platform4 = new Platform(ctx, CTXW-295, CTXH - 100, 145, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 1100, CTXW, 0, 0, true);
  const platform5 = new Platform(ctx, CTXW-145, CTXH-200, 135, 15, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true,);
  platforms.push(platform1, platform2, platform3, platform4,platform5);
  let bu = new DarkBubble(ctx, CTXW/2 - 10, 115, 70, 70, 4, 0.0000001, 0.000002,)
  darkBubbles.push(bu)
  const spike1 = new Spikes(ctx, 170, CTXH-135, 130, 50)
  const spike2 = new Spikes(ctx, CTXW-290, CTXH-135, 130, 50)
  spikes.push(spike1, spike2)
  const heal1 = new Healing(ctx, CTXW - 270, 200, 0.0005)
  const heal2 = new Healing(ctx, CTXW - 220, 200, 0.0005)
  const heal3 = new Healing(ctx, 200, 200, 0.0005)
  const heal4 = new Healing(ctx, 250, 200, 0.0005)
  healings.push(heal1, heal2, heal3, heal4)
}



// ! demo6
function addDemo6(ctx, platforms, levers, levelBalls, boxes, gatlings, cannons){

  const box0 = new Box(ctx, 600, 100,  3, false, 4)
  const box1 = new Box(ctx, 700, 180,  3, false, 1)
  const box2 = new Box(ctx, 800, 100,  2, false, 2)
  const box3 = new Box(ctx, 900, 180,  3, false, 1)
  const box4 = new Box(ctx, 1000, 100,  3, false, 2)
  const box5 = new Box(ctx, 1100, 180,  1, false, 1)
  const box6 = new Box(ctx, 1200, 100,  0, false, 2)
  boxes.push(box0, box1,box2,box3,box4,box5,box6)
  const levelBall1 = new LevelBall(ctx,220, 0)
  levelBalls.push(levelBall1)
  let lev1 = new Lever(ctx, CTXW-60, 200)
  let lev2 = new Lever(ctx, 460, 300)
  levers.push(lev1, lev2);
  const platform1 = new Platform(ctx, 330, 600, 60, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true, 0, 0.6, 0, 0, CTXH-400, CTXH - 70);
  const platform2 = new Platform(ctx, 450, 320, 60, 15, "../public/Imagenes/obstacles/platformSolid8.png", false, false, true, 0, 0, 500, 1290, 0, 0, true);
  const platform3 = new Platform(ctx, CTXW-80, 320, 80, 15, "../public/Imagenes/obstacles/platformSolid3.png", false, false, true,);
  // const platform4 = new Platform(ctx, CTXW-95, 120, 45, 5, "../public/Imagenes/obstacles/platformSolid4.png", false, false, true, 0, 0, 10, 230, 0, 0, true);
  platforms.push( platform1,  platform2, platform3);
  let gat = new BubbleGatling(ctx, 0.1, 250)
  gatlings.push(gat)
  let can0 = new BubbleCannon(ctx, 0, 70, 8, 0.00001,  0, 0, 0, 100, 120, 100, 15000)
  let can1 = new BubbleCannon(ctx, 0, 200, 14, 0.00001, 0, 0, 0, 0, 0, 120, 15000)
  let can2 = new BubbleCannon(ctx, 0, 250, 14, 0.00001, 0, 0, 0, 0, 0, 140, 15000)
  let can3 = new BubbleCannon(ctx, 0, 300, 14, 0.00001, 0, 0, 0, 0, 0, 160, 15000)
  cannons.push(can0, can1, can2, can3)
}

//! 7
function addDemo7(ctx, platforms, swords){
  let swor = new Sword(ctx, 100, 50)
  swords.push(swor)

  const platform1 = new Platform(ctx, 30, 60, 35, 5, "../public/Imagenes/obstacles/platformSolid1.png", true, true, true, 0, 0.6, 0, 0, 40, 130);
  const platform2 = new Platform(ctx, 90, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, true, true, 0, 0.4, 0, 0, 70, 110,);
  const platform3 = new Platform(ctx, 150, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, true, true, 0, 0.7, 0, 0, 40, 135,);
  const platform4 = new Platform(ctx, 210, 50, 35, 5, "../public/Imagenes/obstacles/platformSolid4.png", true, true, true, 0, 0.5, 0, 0, 40, 145,);
  platforms.push( platform1,  platform2, platform3, platform4, );
}


function boxMoveDemo7(ctx, boxes){
  const box0 = new Box(ctx, -20, 30,  3, true, 1, true, 1, 0.4)
  const box1 = new Box(ctx, 310, 60,  4, true, 1, false, 1, -0.4)
  boxes.push(box0, box1)
}



// itemsDemo(this.ctx, this.stairs, this.bubbles, this.darkBubbles, this.spikes, this.gatlings, this.hooks, this.flamethrowers, this.bars, this.boxes, this.blasters, this.electros, this.coins, this.healings, this.platforms, this.chests, this.swords, this.auras, this.steps)

function itemsDemo(ctx, stairs, bubbles, darkBubbles, spikes, gatlings, hooks, flamethrowers, bars, boxes, blasters, electros, coins, healings, platforms, chests, swords, auras, steps){

    const platform1 = new Platform(ctx, 50, CTXH-120, 160, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true,);
    const platform2 = new Platform(ctx, CTXW/2 + 100, CTXH-140, 150, 15, "../public/Imagenes/obstacles/platformSolid1.png", false, false, true,);
    platforms.push(platform1, platform2)

    let che = new Chest(ctx, 800, CTXH-250);
    chests.push(che)
    // let swa = new Sword(ctx, 800, 300)
    // swords.push(swa)
    const aura = new Aura(ctx, 225, CTXH-50)
    auras.push(aura)
    let stair = new Stair(ctx, 950, CTXH - 140, 70, 140)
    stairs.push(stair)
    let bubbb =  new Bubble(ctx, 10, 20, 20, 20, 3, 2)
    bubbles.push(bubbb)
    // let darkB =  new DarkBubble(ctx, 10, 20, 90, 90, 3, 2)
    // darkBubbles.push(darkB)
    let spa =  new Spikes(ctx, 10, CTXH-40)
    spikes.push(spa)
    let gat =  new BubbleGatling(ctx)
    gatlings.push(gat)
    let hoo =  new Hook(ctx, 10, CTXH - 150)
    hooks.push(hoo)
    let lan =  new Flamethrower(ctx, 35, CTXH - 150)
    let lan1 =  new Flamethrower(ctx, 65, CTXH - 150)
    let lan2 =  new Flamethrower(ctx, 95, CTXH - 150)
    let lan3 =  new Flamethrower(ctx, 125, CTXH - 150)
    let lan4 =  new Flamethrower(ctx, 155, CTXH - 150)
    flamethrowers.push(lan, lan1, lan2, lan3, lan4)
    let ba =  new Bars(ctx, 75, CTXH - 60, 10, 30)
    bars.push(ba)
    let box =  new Box(ctx, 500, 30, 3)
    boxes.push(box)
    let blast = new MegaFireBlaster(ctx, 640, CTXH-190)
    blasters.push(blast);  
    let electro =  new Electro(ctx, 150, CTXH - 50, 10, 30)
    electros.push(electro)
    let coin =  new Coins(ctx, CTXW-150, CTXH - 150, 30, 30, 3)
    let coin1 =  new Coins(ctx, CTXW-110, CTXH - 150, 30, 30, 3)
    let coin2 =  new Coins(ctx, CTXW-60, CTXH - 150, 50, 50, 10)
    coins.push(coin, coin1, coin2)
    let heal =  new Healing(ctx, CTXW-250, CTXH - 200,)
    let heal1 =  new Healing(ctx, CTXW-290, CTXH - 200,)
    let heal2 =  new Healing(ctx, CTXW-330, CTXH - 200,)
    healings.push(heal, heal1, heal2)

    let ste = new Steps(ctx, 350, 600)
    steps.push(ste)
}