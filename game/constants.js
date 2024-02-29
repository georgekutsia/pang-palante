let UP = 38;
let DOWN = 40;
let LEFT = 37;
let RIGHT = 39;
let SPACE = 32;
let N = 78; // 78 sandstorm
let M = 77; //77  megablaster
let ALT = 16; // jump
let Z = 90; //fire
let X = 88; // water
let C = 0; //67 fire machinegun
let V = 0; //86 water machinegun
let B = 66;//66  // hook 
let Q = 81;  // dodge left
let E = 69; // dodge right
let R = 82; //82  discount
let T = 84 //84   time shield
let P = 80; //80  venom
let O = 79; //79
let J = 74 //74   time bombs
let F = 70 //70   rockets
let G = 71 //71    teleport to hook
let H = 72 //72   
let K = 75 // 75

let A = 65;
let W = 0; //87
let S = 83;
let D = 68;

  let finalBoss = false;
  let miniBoss1 = false;

  let miniBossVx = 0;// para qeu burningColors se mantenga pegada a la nave mientras se mueve
  let miniBossVy = 0;// para qeu burningColors se mantenga pegada a la nave mientras se mueve

let electroShockSound = new Audio("/public/sounds/electrofire/electrifingBall.mp3")
electroShockSound.volume = 0.1
let electroPlatformSound = new Audio("/public/sounds/electrofire/electrifingPlatforms.mp3")
electroPlatformSound.volume = 0.05
let electroBarSound = new Audio("/public/sounds/electrofire/electrifing.mp3")
electroBarSound.volume = 0.01;
let buyBig = new Audio("/public/sounds/buyBig.mp3")
buyBig.volume = 0.1;
let buySmall = new Audio("/public/sounds/buySmall1.mp3")
buySmall.volume = 0.1;

let trainingRoom = 0;// configura en cual sala está entreando 
let moved = false //para mover info de un lado a otro
let recharge = 400;
let jumpHeight = -3.5;
let playerSpeed = 2;
let jumpCooldown = 500;
let dodgeCooldown = 2400;
let bulletDirection = 0;
let weaponBarSolidTick = 350;//el tiempo que se pasa la barra en estado sólido
let fireSizing = 0.1 //el aumento de ancho y alto de la bala de fuego a medida que sube
let barLife = 2; // las veces que puede la bola chocar con la barra antes de desaparecer
let immuneTime = 2000;
let electricShieldTime = 5000;
let jumpDownDistance = 0;
let bubbleSpeedY = 2.5;
let bubbleSpeedX = 0.5;
let GAMELEVEL = 0;
let infiniteLeveling = 0;
let coins = 3000;
let ballBroke = true;
let retry = 2;  // cuantas vecs se puede reinentar el juego
let basicWeaponLevel  = 1; //para mejorar cuantas balas dispara
let basicWeaponLevelingChanged = 0;
let basicWeaponSpeed = 0;
let barResistanceLevel = 0;
let electricShieldlevel = 0;
let shootFail = 0; //se acumula durante el nivel. si todas las balas aciertan, queda en 0. si el resultado es diferente, es que ha fallado

let ayudasInfoArray = [];
const CTXW = ctx.canvas.width
const CTXH = ctx.canvas.height
const gameSpeed = 60;


//cuando se ralentice  this.g de player en 0.6, this.playerSpeed =  4 y gameSpeed en 20;