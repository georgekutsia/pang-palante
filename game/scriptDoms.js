const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado

let arrowBubbles$$ = document.getElementById("arrow-bubbles")
let saltarNivel$$ = document.getElementById("saltar-nivel");
let iconsBtns$$ = document.querySelectorAll(".icons-left")
let startInfinite$$ = document.getElementById("pang-startInfinite");
let startDemo$$ = document.getElementById("pang-demo");
let start$$ = document.getElementById("pang-start");
let restart$$ = document.getElementById("pang-restart");
let retry$$ = document.getElementById("pang-retry");
let retryAmount$$ = document.getElementById("retry-amount");
let demoOverBackground$$ = document.getElementById("demoOver-background");
let gameOverBackground$$ = document.getElementById("gameOver-background");
let gameOverBackgroundText$$ = document.getElementById("gameOver-backgroundText");
let gameOverX$$ = document.getElementById("gameOver-X");
let instruccionesBtn$$ = document.getElementById("instrucciones-btn");
let instruccionesInfo1$$ = document.getElementById("instrucciones-info-1");
let instruccionesInfo2$$ = document.getElementById("instrucciones-info-2");
let instruccionesInfo3$$ = document.getElementById("instrucciones-info-3");
let instruccionesInfo4$$ = document.getElementById("instrucciones-info-4");
let changingLevelImg$$ = document.getElementById("changing-level-img");
let levelChangeText1$$ = document.getElementById("level-change-text1");
let levelChangeText2$$ = document.getElementById("level-change-text2");
let levelChangeText3$$ = document.getElementById("level-change-text3");
let levelChangeText4$$ = document.getElementById("level-change-text4");

let infoPlayer1$$ = document.querySelector(".introAyuda1")
let infoPlayer2$$ = document.querySelector(".introAyuda2")
let munAmetralladora$$ = document.querySelector(".munAmetralladora")
let munCadena$$ = document.querySelector(".munCadena")
let munEscudo$$ = document.querySelector(".munEscudo")
let munLanzallamas$$ = document.querySelector(".munLanzallamas")
let munMegablaster$$ = document.querySelector(".munMegablaster")
let munSalud$$ = document.querySelector(".munSalud")
let munHook$$ = document.querySelector(".munHook")
let munStep$$ = document.querySelector(".munStep")
let munElectro$$ = document.querySelector(".munElectro")
let toggleShop$$ = document.getElementById("toggle-shop")

// shop btns
let shopBtnsAll$$ = document.getElementById("shop-btn")
let shopShield$$ = document.getElementById("shop-shield")
let shopFire$$ = document.getElementById("shop-fire")
let shopBar$$ = document.getElementById("shop-bar")
let shopElectro$$ = document.getElementById("shop-electro")
let shopMegablasterAmount$$ = document.getElementById("shop-megablasterAmount")
let shopSuperGun$$ = document.getElementById("shop-superGun")
let shopSuperGun1$$ = document.getElementById("shop-superGun1")
let shopSuperGun2$$ = document.getElementById("shop-superGun2")
let shopSuperGun3$$ = document.getElementById("shop-superGun3")
let shopSuperGun4$$ = document.getElementById("shop-superGun4")
let shopBarResistance$$ = document.getElementById("shop-barResistane")
let shopSwordStab$$ = document.getElementById("shop-sword-stab")
let shopSwordSpeed$$ = document.getElementById("shop-sword-speed")
let shopSwordRecharge$$ = document.getElementById("shop-sword-recharge")
let shopBulletWithFire$$ = document.getElementById("shop-bulletWithFire")
let shopElectricShield$$ = document.getElementById("shop-electricShield")
let shopFireSpeed$$ = document.getElementById("shop-fireSpeed")
let shopBoots$$ = document.getElementById("shop-boots")
let shopElectroBullet$$ = document.getElementById("shop-electro-bullet")
let shopLife$$ = document.getElementById("shop-life")
let shopShootLife$$ = document.getElementById("shop-shootLife")
let shopShootLifeActivation$$ = document.getElementById("shop-shootLife-activation")
let shopShootBarActivation$$ = document.getElementById("shop-shootBar-activation")
let shopShootTimeActivation$$ = document.getElementById("shop-shootTime-activation")
let shopShootGatlingActivation$$ = document.getElementById("shop-shootGatling-activation")
let shopRetry$$ = document.getElementById("shop-retry")
let bulletBlock1$$ = document.getElementById("bullet-block1")
let bulletBlock2$$ = document.getElementById("bullet-block2")

let toggleShopExtra$$ = document.getElementById('toggle-shop-extra');
let extraShop$$ = document.getElementById("extra-shop")

let demoFriend1$$ = document.querySelector(".demoFriend1")
let demoFriend2$$ = document.querySelector(".demoFriend2")
let demoFriend3$$ = document.querySelector(".demoFriend3")
let demoFriend4$$ = document.querySelector(".demoFriend4")
let demoFriend5$$ = document.querySelector(".demoFriend5")

let extraShopCloseX$$ = document.querySelectorAll(".extra-shop-close-x");


let minion1$$ = document.querySelector(".minion1")
let minion2$$ = document.querySelector(".minion2")
let minion3$$ = document.querySelector(".minion3")
let minion4$$ = document.querySelector(".minion4")
let minion5$$ = document.querySelector(".minion5")
let minion6$$ = document.querySelector(".minion6")
let boss1$$ = document.querySelector(".boss1")



// let sincrongeniero$$ = document.querySelector(".sincrongeniero")


let poltra$$ = document.getElementById("poltra-scrap0")


let miniBoss1TalkImg$$ = document.getElementById("miniBoss1")

let shopSpeedGun$$ = document.getElementById("shop-speedGun")
let actionsDiv$$ = document.getElementById("actions-div")
let movesDiv$$ = document.getElementById("moves-div")

let ammosCount$$ = document.getElementById("ammos-count")

let btnInstrucciones$$ = document.getElementById("btn-instrucciones-repetir")
let btnInstruccionesSaltar$$ = document.getElementById("btn-instrucciones-saltar")
let btnCambiarSala$$ = document.getElementById("cambiar-sala")
let introAyudaFinal1$$ = document.querySelector(".introAyudaFinal1")

let mapChangeLevel$$ =  document.getElementById("changing-level-map")
