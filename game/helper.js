function infoIntro1(){
    infoPlayer1$$.style.display = "block"
    setTimeout(() => {
      infoPlayer1$$.style.display = "none"
      infoPlayer2$$.style.display = "block"
      setTimeout(() => {
        infoPlayer2$$.style.display = "none"
        demoFunctions.mostrarVariosTextosPocoAPoco1()
      }, 6000);
    }, 4500);
  }



function inftroGame1(){
  demoFriend4$$.style.display = "block"
  setTimeout(() => {
    demoFriend4$$.style.opacity = "1"
  }, 100);
  textoPianoPiano("gameIntro-text1");
  setTimeout(() => {
  textoPianoPiano("gameIntro-text2");
  boss1$$.style.display = "block"
  setTimeout(() => {
  boss1$$.style.opacity = "1"
  }, 200);
  
  }, 2000);
  setTimeout(() => {
    document.getElementById("gameIntro-text1").style.display = "none";
    document.getElementById("gameIntro-text2").style.display = "none";
  textoPianoPiano("gameIntro-text3");
  minion1$$.style.display = "block";
  minion2$$.style.display = "block";
  minion3$$.style.display = "block";
  minion4$$.style.display = "block";
  minion5$$.style.display = "block";
  minion6$$.style.display = "block";
  setTimeout(() => {
    minion1$$.style.opacity = "1";
  }, 200)
  setTimeout(() => {
    minion2$$.style.opacity = "1";
  }, 300)
  setTimeout(() => {
    minion3$$.style.opacity = "1";
  }, 400)
  setTimeout(() => {
    minion4$$.style.opacity = "1";
  }, 500)
  setTimeout(() => {
    minion5$$.style.opacity = "1";
  }, 600)
  setTimeout(() => {
    minion6$$.style.opacity = "1";
  }, 700)
  }, 6000);
  setTimeout(() => {
  textoPianoPiano("gameIntro-text4");
  }, 8000);
  setTimeout(() => {
    minion1$$.style.opacity = "0";
    minion2$$.style.opacity = "0";
    minion3$$.style.opacity = "0";
    minion4$$.style.opacity = "0";
    minion5$$.style.opacity = "0";
    minion6$$.style.opacity = "0";
    setTimeout(() => {
      boss1$$.style.opacity = "0"
      minion1$$.style.display = "none";
      minion2$$.style.display = "none";
      minion3$$.style.display = "none";
      minion4$$.style.display = "none";
      minion5$$.style.display = "none";
      minion6$$.style.display = "none";
      setTimeout(() => {
      boss1$$.style.display = "none"
      }, 500);
    }, 500);
  }, 13000);

  setTimeout(() => {
  demoFriend4$$.style.opacity = "0"
  demoFriend5$$.style.display = "block"
  setTimeout(() => {
  demoFriend4$$.style.display = "none"
    demoFriend5$$.style.opacity = "1"
    setTimeout(() => {
      poltra$$.style.display = "flex";
      setTimeout(() => {
      poltra$$.style.opacity = "1";
      }, 800);
      setTimeout(() => {
      poltra$$.style.right = "1vw";
      poltra$$.style.top = "0.5vw";
      poltra$$.style.width = "calc(35px + 2vw"
          setTimeout(() => {
            poltra$$.style.display = "none";
              toggleShop$$.style.display = "block";
              setTimeout(() => {
              toggleShop$$.style.opacity = "1";
              }, 20);
          }, 1000);
      }, 2500);
    }, 300);
  }, 500);
    document.getElementById("gameIntro-text3").style.display = "none";
    document.getElementById("gameIntro-text4").style.display = "none";
      textoPianoPiano("gameIntro-text5");
        setTimeout(() => {
      textoPianoPiano("gameIntro-text6");
        }, 2000);
        setTimeout(() => {
          document.getElementById("gameIntro-text5").style.display = "none";
          document.getElementById("gameIntro-text6").style.display = "none";
          demoFriend5$$.style.display = "none";
          demoFriend3$$.style.display = "block";
        textoPianoPiano("gameIntro-text7");
          setTimeout(() => {
            demoFriend3$$.style.opacity = "0";
            document.getElementById("gameIntro-text7").style.display = "none";
            setTimeout(() => {
              demoFriend3$$.style.display = "none";
            }, 1000);
          }, 3000);
        }, 4000);
  }, 14000);
}


function eventInfo(event$$) {
  if (!ayudasInfoArray.includes(event$$.alt)) {
  event$$.style.display = "block";

ayudasInfoArray.push(event$$.alt)
const index = ayudasInfoArray.indexOf(event$$.alt);

  let isActive = false; 

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.classList.add("closeButton");
  closeButton.style.display = "block";
  
  closeButton.addEventListener("click", function() {
    event$$.style.right = "35%";
    event$$.style.display = "none";
    if (index !== -1) {
      ayudasInfoArray.splice(index, 1);
    }
    closeButton.remove();
    moveButton.remove();
  });
  const moveButton = document.createElement("button");
  moveButton.textContent = ">";
  moveButton.classList.add("moveButton"); // Añadir clase moveButton
  moveButton.style.display = "block";
  moveButton.style.backgroundColor = "transparent";

  moveButton.addEventListener("click", function() {
    if (!moved) {
      event$$.style.right = "18%";
      closeButton.style.right = "12%";
      moveButton.style.right = "12%";
      moveButton.textContent = "<";
      moved = true;
    } else {
      event$$.style.right = "35%";
      closeButton.style.right = "29%";
      moveButton.style.right = "29%";
      moveButton.textContent = ">";
      moved = false;
    }
  });

  document.body.appendChild(closeButton);
  document.body.appendChild(moveButton);

  event$$.addEventListener("click", () => {
    if (!isActive) {
      event$$.style.transform = "scale(2)";
      event$$.style.top = "5vw";
      isActive = true; 
    } else {
      event$$.style.transform = ""; 
      event$$.style.top = ""; 
      isActive = false; 
    }
  });

  
  setTimeout(() => {
    event$$.style.display = "none";
    event$$.style.right = "35%";
    closeButton.remove();
    moveButton.remove();
  }, 15500);
}
}


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
  if(coins >= 20 && game.player.fireAmount <= 28){
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
})


shopSuperGun1$$.addEventListener("click", function(){
  if(coins >=90 && basicWeaponLevel < 1){
    if(basicWeaponLevel < 1 && basicWeaponLevelingChanged === 0) {
      coins -=90;
      basicWeaponLevelingChanged++;
      buySmall.play()
    }
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
    if(basicWeaponLevel < 2 && basicWeaponLevelingChanged === 1) {
      coins -=90;
      basicWeaponLevelingChanged++;
      buySmall.play()
    }
    basicWeaponLevel = 2;
    shopSuperGun2$$.innerText = "Nivel 2"
    shopSuperGun2$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun1$$.style.fontSize = " calc(10px + 0.18vw)"
    shopSuperGun2$$.style.fontSize = " calc(10px + 0.18vw)"
    bulletBlock1$$.style.display = "flex"


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
    if(basicWeaponLevel < 3 && basicWeaponLevelingChanged === 2) {
      coins -=110;
      basicWeaponLevelingChanged++;
      buySmall.play()
    }
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
    if(basicWeaponLevel < 4 && basicWeaponLevelingChanged === 3) {
      coins -=120;
      basicWeaponLevelingChanged++;
      buySmall.play()
    }
    basicWeaponLevel  = 4 ;
    shopSuperGun4$$.innerText = "Nivel 4"
    shopSuperGun$$.innerHTML = "Nivel 0"
    shopSuperGun4$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun3$$.style.fontSize = " calc(10px + 0.18vw)"
    shopSuperGun4$$.style.fontSize = " calc(10px + 0.18vw)"
    bulletBlock2$$.style.display = "flex";
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
    basicWeaponSpeed = 3
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 3</span>   <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Vel</span>   <br> 60<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 3 && coins >= 60){
    buySmall.play()
    basicWeaponSpeed = 5
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 4</span>  <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Vel</span>   <br> 70<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 5 && coins >= 70){
    buySmall.play()
    basicWeaponSpeed = 8
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 5</span>  <i class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Vel</span>   <br> 80<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 8 && coins >= 80){
    buySmall.play()
    basicWeaponSpeed = 12
    shopSpeedGun$$.innerHTML = ` <span style="color:rgb(243, 160, 234)"><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 6   </span>`
  } 
})
shopBarResistance$$.addEventListener("click", function(){
  if( coins >= 50 && barResistanceLevel === 0){
    buySmall.play()
    barResistanceLevel = 1;
    coins -=50;
    barLife = 3;
    shopBarResistance$$.innerHTML = `  <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 3</span>  <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Res</span>  <br> 55<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 60 && barResistanceLevel === 1){
    buySmall.play()
    barResistanceLevel = 2;
    coins -=60;
    barLife = 4;
    shopBarResistance$$.innerHTML = `<span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 4</span>  <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Res</span>  <br> 60<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 70 && barResistanceLevel === 2){
    buySmall.play()
    barResistanceLevel = 3;
    coins -=70;
    barLife = 5;
    shopBarResistance$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 5</span>  <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i><span id="velocidad-text"> Res</span>  <br> 65<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 80 && barResistanceLevel === 3){
    buySmall.play()
    barResistanceLevel = 4;
    coins -=80;
    barLife = 6;
    shopBarResistance$$.innerHTML = ` <span style="color:rgb(243, 160, 234)"><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-anchor"></i> x 6</span> <br> `
  } 
})
shopElectricShield$$.addEventListener("click", function(){
  if( coins >= 130 && electricShieldlevel === 0){
    electricShieldlevel = 1;
    game.player.electroAmount += 10;
    coins -=130;
    buyBig.play()
    H = 72;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+1<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 30 && electricShieldlevel === 1){
    electricShieldlevel = 2;
    game.player.electroAmount += 10;
    coins -= 30;
    buySmall.play()
    shieldsDuration = 6000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+2<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 35 && electricShieldlevel === 2){
    electricShieldlevel = 3;
    game.player.electroAmount += 10;
    coins -= 35;
    buySmall.play()
    shieldsDuration = 7000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i>Electro</span>  <br> 50<i class="fa-solid fa-coins"></i>+3<i class="fa-solid fa-plug-circle-plus"></i>`
  } else if( coins >= 40 && electricShieldlevel === 3){
    electricShieldlevel = 4;
    game.player.electroAmount += 10;
    coins -= 40;
    buySmall.play()
    shieldsDuration = 8000;
    shopElectricShield$$.disabled = true; 
    shopElectro$$.style.display = "block"
    shopElectricShield$$.innerHTML = ` </i> <span id="electro-text" style="color:rgb(243, 160, 234)" ><i style="font-size:calc(10px + 0.6vw)" class="fa-solid fa-bolt-lightning"></i></span>  <i class="fa-solid fa-plug-circle-plus"></i>  4 `
  } 
})

shopElectro$$.addEventListener("click", function(){
  if(coins >=30 &&     game.player.electroAmount <= 85){
    buySmall.play()
    game.player.electroAmount += 10;
    coins-=30
  }
})

shopBoots$$.addEventListener("click", function(){
  if(coins >=65 && boots === false){
    buyBig.play()
    boots = true;
    coins-=65;
    shopBoots$$.innerHTML = `<i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-shoe-prints"> </i> <i class="fa-solid fa-check"></i>`;
    shopBoots$$.disabled = true;
  }
})


shopRetry$$.addEventListener("click", function(){
  if(coins >= priceRetry){
    buyBig.play()
    retry ++;
    coins-= priceRetry; 
    priceRetry += 50;
    shopRetry$$.innerHTML = `</i> <span id="retry-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-arrow-rotate-left"></i> Retry</span>  <br> ${priceRetry}<i class="fa-solid fa-coins"></i>`
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
game.player.stepImg$$.addEventListener("click", ()=>{
  eventInfo(munStep$$)
})
game.player.swordImg$$.addEventListener("click", ()=>{
  // eventInfo(munStep$$)
})