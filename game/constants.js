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
let R = 0; //82  discount
let T = 84 //84   time shield
let P = 80; //80  venom
let O = 79; //79
let J = 74 //74   time bombs
let F = 0 //70   rockets
let G = 71 //71    teleport to hook
let H = 72 //72   
let K = 75 // 75

let A = 65;
let W = 0; //87
let S = 83;
let D = 68;

  let finalBoss = false;
  let miniBoss1 = false;
  let replicationTime = 2400; 
  let replicationSeconds = replicationTime/60;
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
let jumpHeight = -16.5;
let playerSpeed = 10;
let jumpCooldown = 500;
let dodgeCooldown = 2400;
let bulletDirection = 0;
let weaponBarSolidTick = 350;//el tiempo que se pasa la barra en estado sólido
let fireSizing = 0.3 //el aumento de ancho y alto de la bala de fuego a medida que sube
let barLife = 2; // las veces que puede la bola chocar con la barra antes de desaparecer
let immuneTime = 2000;
let shieldsDuration = 5000;
let jumpDownDistance = 0;
let bubbleSpeedY = 10;
let bubbleSpeedX = 3;
let GAMELEVEL = 0;
let infiniteLeveling = 0;
let coins = 1200;
let ballBroke = true;
let retry = 2;  // cuantas vecs se puede reinentar el juego
let priceRetry = 150
let basicWeaponLevel  = 0; //para mejorar cuantas balas dispara
let basicWeaponLevelingChanged = 0;
let basicWeaponSpeed = 0;
let barResistanceLevel = 0;
let electricShieldlevel = 0;
let shootFail = 0; //se acumula durante el nivel. si todas las balas aciertan, queda en 0. si el resultado es diferente, es que ha fallado
let playerIsImmune = false;  // vuelve los collides de  muchas cosas en false;
let ayudasInfoArray = [];
let swordRounds = -1;
let stabDuration = 3400; //cuanto dura cuando haces el estoque, para poder dejar la espada fija un rato si quires de
let stabRecharge = 6000;
const CTXW = ctx.canvas.width
const CTXH = ctx.canvas.height
let gameSpeed = 60;
let boots = false;
let globalAlphaForSword = 0.3;
let itemTakenImages = "../public/Imagenes/itemTakenSparkle.png";
const mapArray = [
  "/public/Imagenes/background/map1.webp",
  "/public/Imagenes/background/map2.webp",
  "/public/Imagenes/background/map3.webp",
  "/public/Imagenes/background/map4.webp",
  "/public/Imagenes/background/map5.webp",
  "/public/Imagenes/background/map6.webp",
  "/public/Imagenes/background/map7.webp",
  "/public/Imagenes/background/map8.webp",
  "/public/Imagenes/background/map9.webp",
  "/public/Imagenes/background/map10.webp",
  "/public/Imagenes/background/map11.webp",
  "/public/Imagenes/background/map12.webp",
  "/public/Imagenes/background/map13.webp",
  "/public/Imagenes/background/map14.webp",
  "/public/Imagenes/background/map15.webp",
  "/public/Imagenes/background/map16.webp",
]
const miniBossHitWeapons = [
  "../public/Imagenes/puffBubble2.png",
  "../public/Imagenes/puffBubble3.png",
  "../public/Imagenes/puffBubble4.png",
  "../public/Imagenes/puffBubble5.png",
  "../public/Imagenes/puffBubble6.png",
  "../public/Imagenes/puffBubble7.png",
  "../public/Imagenes/puffBubble8.png",
  "../public/Imagenes/puffBubble9.png",
  "../public/Imagenes/puffBubble10.png",
  "../public/Imagenes/puffBubble11.png",

]
//cuando se ralentice  this.g de player en 0.6, this.playerSpeed =  4 y gameSpeed en 20;


let coinsSoundYa = new Audio("/public/sounds/items/gainCoinsSound.mp3")
coinsSoundYa.volume = 0.3