function infoIntro1(){
  if(infoPlayer1$$.style.display === "block"){
    infoPlayer1$$.style.display = "none"
    infoPlayer2$$.style.display = "none"
  } else{
    infoPlayer1$$.style.display = "block"
    setTimeout(() => {
      infoPlayer1$$.style.display = "none"
      infoPlayer2$$.style.display = "block"
      setTimeout(() => {
        infoPlayer2$$.style.display = "none"
      }, 5000);
    }, 7000);
  }
}




infoPlayerBtn1$$.addEventListener("click", function(){
  infoIntro1()
})

function eventInfo(event$$){
  event$$.style.display = "block"
  setTimeout(() => {
  event$$.style.display = "none"
  }, 5500);
}


//shop bts

shopShield$$.addEventListener("click", function(){
  if(coins >= 50){
    buySmall.play()
    game.player.auraIsActive = true;
    coins -= 50;
    setTimeout(() => {
      game.player.auraIsActive = false;
    }, 7000);
  }
})
shopFire$$.addEventListener("click", function(){
  if(coins >= 20 && game.player.fireAmount <=29){
    buySmall.play()
    game.player.fireAmount += 3;
    coins -= 20; 
    N = 78;
  }
})
shopBar$$.addEventListener("click", function(){
  if(coins >= 25){
    buySmall.play()
    game.player.barAmount += 2;
    coins -= 25; 
    M = 77;
  }
})


//basic gun 

shopSuperGun$$.addEventListener("click", function(){
  basicWeaponLevel=0;
  shopSuperGun$$.style.border = "3px solid rgb(154, 130, 184)"
  shopSuperGun1$$.style.border = "none"
  shopSuperGun2$$.style.border = "none"
  shopSuperGun3$$.style.border = "none"
  shopSuperGun4$$.style.border = "none"
  basicWeaponLevelingChanged++ //! 
})


shopSuperGun1$$.addEventListener("click", function(){
  if(coins >=90 && basicWeaponLevel < 1){
    buySmall.play()
    coins -=90;
    basicWeaponLevel = 1;
    shopSuperGun1$$.innerText = "Nivel 1"
    shopSuperGun1$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun2$$.style.display = "block"
  } else if(basicWeaponLevel >= 1){
    basicWeaponLevel  = 1;    
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"
  }
})
shopSuperGun2$$.addEventListener("click", function(){
  if(coins >=100 && basicWeaponLevel < 2){
    buySmall.play()
    coins -=100;
    basicWeaponLevel = 2;
    shopSuperGun2$$.innerText = "Nivel 2"
    shopSuperGun2$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun3$$.style.display = "block"
  } else if(basicWeaponLevel >= 2){
    basicWeaponLevel  = 2;
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"
  }
})
shopSuperGun3$$.addEventListener("click", function(){
  if(coins >=110 && basicWeaponLevel < 3){
    buySmall.play()
    coins -=110;
    basicWeaponLevel  = 3;
    shopSuperGun3$$.innerText = "Nivel 3"
    shopSuperGun3$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun4$$.style.display = "block"
  } else if(basicWeaponLevel >= 3){
    basicWeaponLevel  = 3;
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun4$$.style.border = "none"
  }
})

shopSuperGun4$$.addEventListener("click", function(){
  if(coins >=120 && basicWeaponLevel < 4){
    buySmall.play()
    coins -=120;
    basicWeaponLevel  = 4 ;
    shopSuperGun4$$.innerText = "Nivel 4"
    shopSuperGun4$$.style.color = "rgb(254, 0, 224)"
  } else if(basicWeaponLevel >= 4){
    basicWeaponLevel  = 4;
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "3px solid rgb(154, 130, 184)"
  }
})


// speed gun
shopSpeedGun$$.addEventListener("click", function(){
  if(basicWeaponSpeed === 0 && coins >= 50){
    buySmall.play()
    coins -=50;
    basicWeaponSpeed = 1
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 3</span>   <br> <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Velocidad</span>   <br> 60<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 1 && coins >= 60){
    buySmall.play()
    basicWeaponSpeed = 2
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 4</span>  <br> <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Velocidad</span>   <br> 70<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 2 && coins >= 70){
    buySmall.play()
    basicWeaponSpeed = 3
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 5</span>  <br> <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Velocidad</span>   <br> 80<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 3 && coins >= 80){
    buySmall.play()
    basicWeaponSpeed = 4
    shopSpeedGun$$.innerHTML = ` <span style="color:rgb(243, 160, 234)"><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 6   </span>`
  } 
})
shopBarResistance$$.addEventListener("click", function(){
  if( coins >= 50 && barResistanceLevel === 0){
    buySmall.play()
    barResistanceLevel = 1;
    coins -=50;
    shopBarResistance$$.innerHTML = `  <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 3</span> <br> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Resistance</span>  <br> 55<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 60 && barResistanceLevel === 1){
    buySmall.play()
    barResistanceLevel = 2;
    coins -=60;
    barLife = 3;
    shopBarResistance$$.innerHTML = `<span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 4</span> <br> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Resistance</span>  <br> 60<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 70 && barResistanceLevel === 2){
    buySmall.play()
    barResistanceLevel = 3;
    coins -=70;
    barLife = 5;
    shopBarResistance$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 5</span> <br> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text">Resistance</span>  <br> 65<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 80 && barResistanceLevel === 3){
    buySmall.play()
    barResistanceLevel = 4;
    coins -=80;
    barLife = 7;
    shopBarResistance$$.innerHTML = ` <span style="color:rgb(243, 160, 234)"><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 6</span> <br> `
  } 
})
shopElectricShield$$.addEventListener("click", function(){
  if( coins >= 130 && electricShieldlevel === 0){
    electricShieldlevel = 1;
    game.player.electricCharge += 10;
    coins -=130;
    buyBig.play()
    H = 72;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+1<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 30 && electricShieldlevel === 1){
    electricShieldlevel = 2;
    game.player.electricCharge += 10;
    coins -= 30;
    buySmall.play()
    electricShieldTime = 6000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+2<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 35 && electricShieldlevel === 2){
    electricShieldlevel = 3;
    game.player.electricCharge += 10;
    coins -= 35;
    buySmall.play()
    electricShieldTime = 7000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+3<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 40 && electricShieldlevel === 3){
    electricShieldlevel = 4;
    game.player.electricCharge += 10;
    coins -= 40;
    buySmall.play()
    electricShieldTime = 8000;
    shopElectricShield$$.disabled = true; 
    shopElectro$$.style.display = "block"
    shopElectricShield$$.innerHTML = ` </i> <span id="electro-text" style="color:rgb(243, 160, 234)" ><i style="font-size:calc(10px + 0.6vw)" class="fa-solid fa-bolt-lightning"></i></span>  <i class="fa-solid fa-plug-circle-plus"></i>  4 `
  } 
})


shopElectro$$.addEventListener("click", function(){
  if(coins >=50){
    buySmall.play()
    game.player.electricCharge += 10;
  }
})

toggleShop$$.addEventListener("click", ()=>{
  if(shopBtnsAll$$.style.display === "flex"){
    shopBtnsAll$$.style.display = "none";
  } else {
    shopBtnsAll$$.style.display = "flex";
  }
})


game.player.hookImg$$.addEventListener("click", ()=>{
  eventInfo(munHook$$)
})
game.player.fireImg$$.addEventListener("click", ()=>{
  eventInfo(munLanzallamas$$)
})
game.player.barImg$$.addEventListener("click", ()=>{
  eventInfo(munCadena$$)
})