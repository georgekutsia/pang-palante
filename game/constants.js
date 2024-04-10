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




let trainingRoom = 0;// configura en cual sala está entreando 
let moved = false //para mover info de un lado a otro
let recharge = 400;
let jumpCooldown = 500;
let dodgeCooldown = 2400;
let bulletDirection = 0;
let weaponBarSolidTick = 350;//el tiempo que se pasa la barra en estado sólido
let fireSizing = 0.3 //el aumento de ancho y alto de la bala de fuego a medida que sube
let barLife = 2; // las veces que puede la bola chocar con la barra antes de desaparecer
let immuneTime = 2000;
let shieldsDuration = 4000;
let jumpDownDistance = 0;
let bubbleSpeedY = 10;
let bubbleSpeedX = 3;
let GAMELEVEL = 0;
let infiniteLeveling = 0;
let coins = 3200;
let shopBulletWithFire = false;
let ballBroke = true;
let retry = 2;  // cuantas vecs se puede reinentar el juego
let priceRetry = 150
let basicWeaponLevel  = 0; //para mejorar cuantas balas dispara el arma básica
let basicWeaponLevelingChanged = 0;
let basicWeaponSpeed = 0;
let barResistanceLevel = 0;
let megablasterLevel = 0;
let electricShieldlevel = 0;
let playerIsImmune = false;  // vuelve los collides de muchas cosas en false;
let ayudasInfoArray = [];
let swordRounds = -1;
let stabDuration = 100; //cuanto dura cuando haces el estoque, para poder dejar la espada fija un rato si quires de
let stabLevel = 0;
let stabSpeed = 4;
let stabSpeedLevel = 0;
let swordSwingCooldown = 4000;
let stabRechargeLevel = 0;
let stabRecharge = 6000;
let electrifiedBurbalas = false;
const CTXW = ctx.canvas.width
const CTXH = ctx.canvas.height;
let timeStopIsActive = false;
let timeStopped = false;
let jumpHeight = -16.5;
let gameSpeed = 60;
let playerSpeed = 10;
let gravitySpeed = 0;
let boots = false;
let globalAlphaForSword = 0.3;
let globalAlphaForBasicWeapon = 0.3;
let powerToGetForSword = 20;
let electrifiedGatlingTime = 5000;
let weaponImgSizing = 0;
let brokenBoxes = 0; //para contar cuantas cajas se rompen
let bullsEyeForHealth = 0;
let amountOfBullsEyeForHealth = 15;
let totalShootsPerLevel = 0; //cuenta cuantos disparos se hice en un nivel, para compararlo si el total de bullsEyeForHealth es igual, o si es distinto, para dar vida adicional al cambiar de nivel
let totalShootsPerLevelSucces = 0;
let maxLife = 6;
let maxLifePrice = 120;
let shopShootLifePrice = 80;
let fireWeaponSpeedXWhenCollides = 0;
let fireWeaponSpeedYWhenCollides = 0.01;
let fireDesaceleration = false;
let bulletCollidesFireActive = false;
let itemTakenImages = "../public/Imagenes/itemTakenSparkle.png";
let healingDamageIsActivated = false;
let barDamageIsActivated = true;
let amountOfDamageForBar = 0;


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
  "/public/Imagenes/background/map17.webp",
  "/public/Imagenes/background/map18.webp",
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
const changeFrases = [
  "Bien hecho! sigue así",
  "Cada vez lo haces mejor!",
  "No te rindas! Ya lo tienes!",
  "Eres Imparable! Dale caña",
  "Das miedo! avanza más!",
  "Cuidado donde apuntas!",
  "Esto se pondrá dificil!",
  "He visto marines menos hábiles!",
  "Una respiro y a seguir",
  "Eres el orgullo de la patria!",
  "Que la adrenalina potencie tus disparos!",
  "¡Estás on fire! ¡Sigue así!",
  "¡Tienes el control! ¡No te detengas!",
  "¡Tus habilidades son impresionantes!",
  "¡Eres una máquina! ¡Sigue adelante!",
  "¡No hay obstáculo que te detenga!",
  "¡Tu determinación es inspiradora!",
  "¡Eres un verdadero guerrero!",
  " ¡Continúa luchando!",
  "¡Tu perseverancia es admirable!",
  "¡Demuestra tu valentía y sigue adelante!",
  "¡Eres una fuerza imparable! ",
  "¡Mantén el ritmo!",
];
const changeListaImagenes = [
  "/public/Imagenes/background/changeLevel1.webp",
  "/public/Imagenes/background/changeLevel2.webp",
  "/public/Imagenes/background/changeLevel3.webp",
  "/public/Imagenes/background/changeLevel4.webp",
  "/public/Imagenes/background/changeLevel5.webp",
  "/public/Imagenes/background/changeLevel6.webp",
  "/public/Imagenes/background/changeLevel7.webp",
  "/public/Imagenes/background/changeLevel8.webp",
  "/public/Imagenes/background/changeLevel9.webp",
  "/public/Imagenes/background/changeLevel10.webp",
]
const changeGameOverImgs = [
  "/public/Imagenes/background/gameOverImg1.webp",
  "/public/Imagenes/background/gameOverImg2.webp",
  "/public/Imagenes/background/gameOverImg3.webp",
  "/public/Imagenes/background/gameOverImg4.webp",
  "/public/Imagenes/background/gameOverImg5.webp",
  "/public/Imagenes/background/gameOverImg6.webp",
  "/public/Imagenes/background/gameOverImg7.webp",
  "/public/Imagenes/background/gameOverImg8.webp",
  "/public/Imagenes/background/gameOverImg9.webp",
  "/public/Imagenes/background/gameOverImg10.webp",
]

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))