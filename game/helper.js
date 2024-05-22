function infoIntro1(){
  if(demoStartedSoNoImage === false){
    demoStartedSoNoImage = true;
    infoPlayer1$$.style.display = "block"
    saltarInstrucciones(infoIntro1);
    timeouts.push(setTimeout(() => {
      infoPlayer1$$.style.display = "none"
      infoPlayer2$$.style.display = "block"
      timeouts.push(setTimeout(() => {
        infoPlayer2$$.style.display = "none"
        demoFunctions.mostrarVariosTextosPocoAPoco1()
      }, 6000));
    }, 4500));
  } else {
    demoFunctions.mostrarVariosTextosPocoAPoco1()

  }
  }



function introGame(){
  if(GAMELEVEL === 1){
  demoFriend4$$.style.display = "block"
  saltarInstrucciones(introGame)
  timeouts.push(setTimeout(() => {
    demoFriend4$$.style.opacity = "1"
  }, 100));
  textoPianoPiano("gameIntro-text1");
  timeouts.push(setTimeout(() => {
  textoPianoPiano("gameIntro-text2");
  boss1$$.style.display = "block"
  timeouts.push(setTimeout(() => {
  boss1$$.style.opacity = "1"
  }, 200));
  }, 2000));
  timeouts.push(setTimeout(() => {
    document.getElementById("gameIntro-text1").style.display = "none";
    document.getElementById("gameIntro-text2").style.display = "none";
  textoPianoPiano("gameIntro-text3");
  minion1$$.style.display = "block";
  minion2$$.style.display = "block";
  minion3$$.style.display = "block";
  minion4$$.style.display = "block";
  minion5$$.style.display = "block";
  minion6$$.style.display = "block";
  timeouts.push(setTimeout(() => {
    minion1$$.style.opacity = "1";
  }, 200))
  timeouts.push(setTimeout(() => {
    minion2$$.style.opacity = "1";
  }, 300))
  timeouts.push(setTimeout(() => {
    minion3$$.style.opacity = "1";
  }, 400))
  timeouts.push(setTimeout(() => {
    minion4$$.style.opacity = "1";
  }, 500))
  timeouts.push(setTimeout(() => {
    minion5$$.style.opacity = "1";
  }, 600))
  timeouts.push(setTimeout(() => {
    minion6$$.style.opacity = "1";
  }, 700))
  }, 6000));
  timeouts.push(setTimeout(() => {
  textoPianoPiano("gameIntro-text4");
  }, 8000));
  timeouts.push(setTimeout(() => {
    minion1$$.style.opacity = "0";
    minion2$$.style.opacity = "0";
    minion3$$.style.opacity = "0";
    minion4$$.style.opacity = "0";
    minion5$$.style.opacity = "0";
    minion6$$.style.opacity = "0";
    timeouts.push(setTimeout(() => {
      boss1$$.style.opacity = "0"
      minion1$$.style.display = "none";
      minion2$$.style.display = "none";
      minion3$$.style.display = "none";
      minion4$$.style.display = "none";
      minion5$$.style.display = "none";
      minion6$$.style.display = "none";
      timeouts.push(setTimeout(() => {
      boss1$$.style.display = "none"
      }, 500));
    }, 500));
  }, 13000));
  timeouts.push(setTimeout(() => {
  demoFriend4$$.style.opacity = "0"
  demoFriend5$$.style.display = "block"
  timeouts.push(setTimeout(() => {
  demoFriend4$$.style.display = "none"
    demoFriend5$$.style.opacity = "1"
    timeouts.push(setTimeout(() => {
      poltra$$.style.display = "flex";
      timeouts.push(setTimeout(() => {
      poltra$$.style.opacity = "1";
      }, 800));
      timeouts.push(setTimeout(() => {
      poltra$$.style.right = "1vw";
      poltra$$.style.top = "0.5vw";
      poltra$$.style.width = "calc(35px + 2vw"
          timeouts.push(setTimeout(() => {
            poltra$$.style.display = "none";
              toggleShop$$.style.display = "block";
              timeouts.push(setTimeout(() => {
              toggleShop$$.style.opacity = "1";
              }, 20));
          }, 1000));
      }, 2500));
    }, 300));
  }, 500));
    document.getElementById("gameIntro-text3").style.display = "none";
    document.getElementById("gameIntro-text4").style.display = "none";
      textoPianoPiano("gameIntro-text5");
        timeouts.push(setTimeout(() => {
      textoPianoPiano("gameIntro-text6");
        }, 2000));
        timeouts.push(setTimeout(() => {
          document.getElementById("gameIntro-text5").style.display = "none";
          document.getElementById("gameIntro-text6").style.display = "none";
          demoFriend5$$.style.display = "none";
          demoFriend3$$.style.display = "block";
        textoPianoPiano("gameIntro-text7");
          timeouts.push(setTimeout(() => {
            demoFriend3$$.style.opacity = "0";
            document.getElementById("gameIntro-text7").style.display = "none";
            timeouts.push(setTimeout(() => {
            demoFriend3$$.style.display = "none";
            btnInstruccionesSaltar$$.style.display = "none";
            timeouts = [];
            }, 1000));
          }, 3000));
        }, 4500));
  }, 14000));
}
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
    faShakeWhenBuy(this);
    setTimeout(() => {
      game.player.auraIsActive = false;
    }, 7000);
  }
})

function faShakeWhenBuy(button) {
  button.classList.add('fa-shake');
  game.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
  setTimeout(() => {
    button.classList.remove('fa-shake');
  }, 100); 
}

shopFire$$.addEventListener("click", function(){
  if(coins >= 20 && game.player.fireAmount <= 28){
    buySmall.play();
    game.player.fireAmount += 3;
    coins -= 20; 
    N = 78;
    faShakeWhenBuy(this);
  }
});

shopBar$$.addEventListener("click", function(){
  if(coins >= 25){
    buySmall.play()
    game.player.barAmount += 3;
    coins -= 25; 
    M = 77;
    faShakeWhenBuy(this);
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
  faShakeWhenBuy(this);
})


shopSuperGun1$$.addEventListener("click", function(){
  if(coins >=90 && basicWeaponLevel < 1){
    basicWeaponImgChange();
    faShakeWhenBuy(this);
    if(basicWeaponLevel < 1 && basicWeaponLevelingChanged === 0) {
      coins -=90;
      basicWeaponLevelingChanged++;
      buySmall.play()
      game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl2.png";
    }
    basicWeaponLevel = 1;
    shopSuperGun1$$.innerText = "NVL 1"
    shopSuperGun1$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun2$$.style.display = "block"
  } else if(basicWeaponLevel >= 1){
    basicWeaponLevel  = 1;    
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl2.png";
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"
  }
})
shopSuperGun2$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(coins >=100 && basicWeaponLevel < 2){
    basicWeaponImgChange()
    if(basicWeaponLevel < 2 && basicWeaponLevelingChanged === 1) {
      coins -=90;
      basicWeaponLevelingChanged++;
      buySmall.play()
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl3.png";

    }
    basicWeaponLevel = 2;
    shopSuperGun2$$.innerText = "NVL 2"
    shopSuperGun2$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun1$$.style.fontSize = " calc(10px + 0.18vw)"
    shopSuperGun2$$.style.fontSize = " calc(10px + 0.18vw)"
    bulletBlock1$$.style.display = "flex"
    shopSuperGun3$$.style.display = "block"
    shopSuperGun1$$.style.transition = "none"
    shopSuperGun2$$.style.transition = "none"
    shopSuperGun1$$.style.minWidth = "0px"
    shopSuperGun2$$.style.minWidth = "0px"
  } else if(basicWeaponLevel >= 2){
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl3.png";
    basicWeaponLevel  = 2;
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"


  }
})
shopSuperGun3$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(coins >=110 && basicWeaponLevel < 3){
    basicWeaponImgChange()
    if(basicWeaponLevel < 3 && basicWeaponLevelingChanged === 2) {
      coins -=110;
      basicWeaponLevelingChanged++;
      buySmall.play()
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl4.png";

    }
    basicWeaponLevel  = 3;
    shopSuperGun3$$.innerText = "NVL 3"
    shopSuperGun3$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun4$$.style.display = "block"
  } else if(basicWeaponLevel >= 3){
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl4.png";

    basicWeaponLevel  = 3;
    shopSuperGun$$.style.border = "none"
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun4$$.style.border = "none"
  }
})

shopSuperGun4$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(coins >=120 && basicWeaponLevel < 4){
    basicWeaponImgChange()
    if(basicWeaponLevel < 4 && basicWeaponLevelingChanged === 3) {
      coins -=120;
      basicWeaponLevelingChanged++;
      buySmall.play();
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl5.png";

    }
    basicWeaponLevel  = 4 ;
    shopSuperGun4$$.innerText = "NVL 4"
    shopSuperGun$$.innerHTML = "NVL 0"
    shopSuperGun4$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun3$$.style.fontSize = " calc(10px + 0.18vw)"
    shopSuperGun4$$.style.fontSize = " calc(10px + 0.18vw)"
    bulletBlock2$$.style.display = "flex";
    shopSuperGun3$$.style.transition = "none"
    shopSuperGun4$$.style.transition = "none"
    shopSuperGun3$$.style.minWidth = "0px"
    shopSuperGun4$$.style.minWidth = "0px"
  } else if(basicWeaponLevel >= 4){
    game.player.basicWeapon.src = "/public/Imagenes/basicWeaponLevl5.png";
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
  faShakeWhenBuy(this);
  if(basicWeaponSpeed === 0 && coins >= 50){
    buySmall.play()
    coins -=50;
    basicWeaponSpeed = 3
    shopSpeedGun$$.innerHTML = ` <span><i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <span id="velocidad-text"> </span>60<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 3 && coins >= 60){
    coins -=60;
    buySmall.play()
    basicWeaponSpeed = 5
    shopSpeedGun$$.innerHTML = ` <span><i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <span id="velocidad-text"> </span>70<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 5 && coins >= 70){
    coins -=70;
    buySmall.play()
    basicWeaponSpeed = 8
    shopSpeedGun$$.innerHTML = ` <span><i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <span id="velocidad-text"> </span>80<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 8 && coins >= 80){
    coins -=80;
    buySmall.play()
    basicWeaponSpeed = 12
    shopSpeedGun$$.style.color = "rgb(164, 5, 164)"
    shopSpeedGun$$.innerHTML = ` <span ><i style="font-size:calc(10px + 0.5vw)" class="fa-solid fa-gauge-simple-high"></i> </span>  <span id="velocidad-text"> MAX </span>`
    shopSpeedGun$$.disabled = true
  } 
})
shopSwordStab$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(stabLevel === 0 && coins >= 70){
    buySmall.play()
    coins -=70;
    stabDuration = 600;
    stabLevel++;
    shopSwordStab$$.innerHTML = ` <i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i><i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <span id="velocidad-text"> </span> 75 <i class="fa-solid fa-coins"></i> `
  } else if(stabLevel === 1 &&  coins >= 75){
    coins -=75;
    stabDuration = 900;
    stabLevel++;
    buySmall.play()
    shopSwordStab$$.innerHTML = ` <i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i><i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <span id="velocidad-text"> </span> 80 <i class="fa-solid fa-coins"></i> `
  } else if(stabLevel === 2 &&  coins >= 85){
    coins -=85;
    stabDuration = 1100;
    stabLevel++;
    buySmall.play()
    shopSwordStab$$.style.color = "rgb(164, 5, 164)"
    shopSwordStab$$.innerHTML = ` <i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i><i class="fa-solid fa-gauge-simple-high"></i> </span> MAX `
    shopSwordStab$$.disabled = true
  } 
})
shopSwordSpeed$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(stabSpeedLevel === 0 && coins >= 45){
    buySmall.play()
    coins -=45;
    stabSpeed += 8;
    stabSpeedLevel++;
    shopSwordSpeed$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i> <i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"> </i><span id="velocidad-text"></span>  75 <i class="fa-solid fa-coins"></i> `
  } else if(stabSpeedLevel === 1 &&  coins >=  75){
    coins -= 75;
    stabSpeed += 8;
    stabSpeedLevel++;
    buySmall.play()
    shopSwordSpeed$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i> <i class="fa-solid fa-gauge-simple-high"></i> </span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"> </i><span id="velocidad-text"></span>  115 <i class="fa-solid fa-coins"></i> `
  } else if(stabSpeedLevel === 2 &&  coins >= 115){
    coins -= 115;
    stabSpeed += 8;
    stabSpeedLevel++;
    buySmall.play()
    shopSwordSpeed$$.style.color = "rgb(164, 5, 164)"
    shopSwordSpeed$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i> <i class="fa-solid fa-gauge-simple-high"></i> </span>  </i><span id="velocidad-text"></span> MAX `
    shopSwordSpeed$$.disabled = true
  } 
})
shopSwordRecharge$$.addEventListener("click", function(){
  faShakeWhenBuy(this);
  if(stabRechargeLevel === 0 && coins >= 75){
    buySmall.play()
    coins -=75;
    stabRecharge -= 1000;
    swordSwingCooldown -= 500;
    stabRechargeLevel++;
    shopSwordRecharge$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i>  <i class="fa-solid fa-clock"></i> - 1s </span> <span id="velocidad-text"></span> 90 <i class="fa-solid fa-coins"></i> `
  } else if(stabRechargeLevel === 1 &&  coins >=  90){
    coins -= 90;
    stabRecharge -= 1000;
    swordSwingCooldown -= 500;
    stabRechargeLevel++;
    buySmall.play()
    shopSwordRecharge$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i>  <i class="fa-solid fa-clock"></i> - 1s </span> <span id="velocidad-text"></span> 115 <i class="fa-solid fa-coins"></i> `
  } else if(stabRechargeLevel === 2 &&  coins >= 115){
    coins -= 115;
    stabRecharge -= 1000;
    swordSwingCooldown -= 500;
    stabRechargeLevel++;
    buySmall.play()
    shopSwordRecharge$$.style.color = "rgb(164, 5, 164)"
    shopSwordRecharge$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)"  class="fa-solid fa-khanda"></i>  <i class="fa-solid fa-clock"></i> </span> <span id="velocidad-text"></span> - 3s  `
    shopSwordRecharge$$.disabled = true
  } 
})

shopBarResistance$$.addEventListener("click", function(){
  if( coins >= 50 && barResistanceLevel === 0){
  faShakeWhenBuy(this);
    buySmall.play()
    barResistanceLevel = 1;
    coins -=50;
    barLife = 3;
    shopBarResistance$$.innerHTML = `<span><i class="fa-solid fa-anchor"></i> x 4</span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"> </i><span id="velocidad-text"></span> 60<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 60 && barResistanceLevel === 1){
  faShakeWhenBuy(this);
    buySmall.play()
    barResistanceLevel = 2;
    coins -=60;
    barLife = 4;
    shopBarResistance$$.innerHTML = `<span><i class="fa-solid fa-anchor"></i> x 5</span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"> </i><span id="velocidad-text"></span> 70<i class="fa-solid fa-coins"></i>`
  } else if( coins >= 70 && barResistanceLevel === 2){
  faShakeWhenBuy(this);
    buySmall.play()
    barResistanceLevel = 3;
    coins -=70;
    barLife = 5;
    shopBarResistance$$.innerHTML = ` <span><i class="fa-solid fa-anchor"></i> x 6</span> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"> </i><span id="velocidad-text"></span> 80<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 80 && barResistanceLevel === 3){
  faShakeWhenBuy(this);
    buySmall.play()
    barResistanceLevel = 4;
    coins -=80;
    barLife = 6;
    shopBarResistance$$.disabled = true;
    shopBarResistance$$.style.color = "rgb(164, 5, 164)"
    shopBarResistance$$.innerHTML = ` <span ><i style="font-size: calc(14px + 0.4vw)" class="fa-solid fa-anchor"></i> x 6</span> <br> `
  } 
})


shopMegablasterAmount$$.addEventListener("click", function(){
  if( coins >= 75 && megablasterLevel === 0){
  faShakeWhenBuy(this);
    buySmall.play()
    megablasterLevel = 1;
    coins -=75;
    game.player.megaFireBlasterAmount += 30
    shopMegablasterAmount$$.innerHTML = `<i  style="font-size: calc(8px + 0.6vw)" class="fa-solid fa-fire-burner"></i> 95 <i class="icons-size1 fa-solid fa-coins"></i> `
  } else if( coins >= 95 && megablasterLevel === 1){
  faShakeWhenBuy(this);
    buySmall.play()
    megablasterLevel = 2;
    coins -= 95;
    shopMegablasterAmount$$.disabled = true;
    shopMegablasterAmount$$.style.color = "rgb(164, 5, 164)"
    shopMegablasterAmount$$.innerHTML = ` <i  style="font-size: calc(8px + 0.6vw)" class="fa-solid fa-fire-burner"></i> MAX </i> `
  } 
})
shopDetection$$.addEventListener("click", function(){
  if(detectionActivated === false){
  faShakeWhenBuy(this);
  detectionActivated = true;
    game.player.megaFireBlasterAmount += 30
    shopDetection$$.innerHTML = ` <i  style="font-size: calc(8px + 0.6vw)" class="fa-solid fa-eye"></i> `
  } else if(detectionActivated ===true){
    detectionActivated = false;
    game.player.megaFireBlasterAmount += 30
    shopDetection$$.innerHTML = ` <i  style="font-size: calc(8px + 0.6vw)" class="fa-solid fa-eye-slash"></i> `
  }
})


shopElectricShield$$.addEventListener("click", function(){
  if( coins >= 130 && electricShieldlevel === 0){
  faShakeWhenBuy(this);
    electricShieldlevel = 1;
    game.player.electroAmount += 10;
    coins -=130;
    buyBig.play()
    H = 72;
    shieldsDuration = 5000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i> </span> 65<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 65 && electricShieldlevel === 1){
  faShakeWhenBuy(this);
    electricShieldlevel = 2;
    game.player.electroAmount += 10;
    coins -= 65;
    buySmall.play()
    shieldsDuration = 6000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i> </span> 85<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 85 && electricShieldlevel === 2){
  faShakeWhenBuy(this);
    electricShieldlevel = 3;
    game.player.electroAmount += 10;
    coins -= 85;
    buySmall.play()
    shieldsDuration = 7000;
    shopElectricShield$$.innerHTML = `</i> <span id="electro-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i> </span> 105<i class="fa-solid fa-coins"></i> `
  } else if( coins >= 105 && electricShieldlevel === 3){
  faShakeWhenBuy(this);
    electricShieldlevel = 4;
    game.player.electroAmount += 10;
    coins -= 105;
    buySmall.play()
    shieldsDuration = 8000;
    shopElectricShield$$.disabled = true; 
    shopElectro$$.style.display = "block";
    shopElectricShield$$.style.color = "rgb(164, 5, 164)";
    shopElectricShield$$.innerHTML = ` </i> <span id="electro-text"  ><i style="font-size:calc(10px + 0.5vw)" class="fa-solid fa-bolt-lightning"></i></span> + 4s `
  } 
})

shopElectro$$.addEventListener("click", function(){
  if(coins >=30 && game.player.electroAmount <= 85){
  faShakeWhenBuy(this);
    buySmall.play()
    game.player.electroAmount += 10;
    coins-=30
  }
})




shopElectroBullet$$.addEventListener("click", function(){
  if(coins >=110 && electrifiedBurbalas === false){
  faShakeWhenBuy(this);
    buyBig.play()
    electrifiedBurbalas = true;
    coins-=110;
    shopElectroBullet$$.style.color = "rgb(164, 5, 164)";
    shopElectroBullet$$.innerHTML = `<i class="fa-solid fa-circle-dot"></i> -> <i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-bolt-lightning"></i> </span>  `;
    shopElectroBullet$$.disabled = true;
  }
})
shopBoots$$.addEventListener("click", function(){
  if(coins >=105 && boots === false){
  faShakeWhenBuy(this);
    buyBig.play();
    boots = true;
    coins-=105;
    shopBoots$$.style.color = "rgb(164, 5, 164)";
    shopBoots$$.innerHTML = `<i style="font-size: calc(8px + 0.6vw)" class="fa-solid fa-shoe-prints"> </i> &nbsp<i style="font-size: calc(8px + 1vw)"  class="fa-solid fa-check"></i>`;
    shopBoots$$.disabled = true;
  }
})
shopFireSpeed$$.addEventListener("click", function(){
  if(coins >=180 && fireDesaceleration === false){
  faShakeWhenBuy(this);
    buyBig.play();
    boots = true;
    coins-=180;
    fireDesaceleration = true;
    shopFireSpeed$$.style.color = "rgb(164, 5, 164)";
    shopFireSpeed$$.innerHTML = `<i  style="font-size: calc(8px + 0.4vw)"  class=" fa-solid fa-gauge-simple-high"></i> <i style="font-size: calc(8px + 0.4vw)" class=" fa-solid fa-fire-flame-simple"></i> <i  style="font-size: calc(8px + 1vw)"  class="fa-solid fa-check"></i> `;
    shopFireSpeed$$.disabled = true;
  }
})

shopBulletWithFire$$.addEventListener("click", function(){
  if(coins >=115 && shopBulletWithFire === false){
  faShakeWhenBuy(this);
    buyBig.play();
    shopBulletWithFire = true;
    coins-=115;
    shopBulletWithFire$$.style.color = "rgb(164, 5, 164)";
    shopBulletWithFire$$.innerHTML = `<i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-circle-dot"></i> -> <i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-fire-flame-curved"></i> <i style="font-size: calc(8px + 1vw)"  class="fa-solid fa-check"></i>`;
    shopBulletWithFire$$.disabled = true;
  }
})

shopLife$$.addEventListener("click", function(){
  if(coins >= 120){
    coins-=120;
    maxLife += 2;
    maxLifePrice += 30;
    game.player.life.total++
    faShakeWhenBuy(this);
    shopLife$$.innerHTML = `</i> <span id="boots-text"><i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span>${maxLifePrice} <i class="fa-solid fa-coins"></i>`;
    if(maxLifePrice >= 211) {
      shopLife$$.disabled = true; 
      shopLife$$.style.color = "rgb(164, 5, 164)";
      shopLife$$.innerHTML = `</i> <span id="boots-text"><i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span>+ 8 MAX`;
    }
  }
})

shopShootLife$$.addEventListener("click", function(){
  if(coins >= 80){
    coins-=80;
    amountOfBullsEyeForHealth -= 2;
    shopShootLifePrice += 30;
    faShakeWhenBuy(this);
    shopShootLife$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i> <i style="font-size: calc(8px + 0.3vw)" class="fa-solid fa-angles-up fonts-i"></i> <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span> ${shopShootLifePrice} <i class="fa-solid fa-coins"> </i> `;
    if(shopShootLifePrice >= 169) {
      shopShootLife$$.disabled = true; 
      shopShootLife$$.style.color = "rgb(164, 5, 164)";
      shopShootLife$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i>  <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span> MAX`;
    }
  }
})
shopShootLifeActivation$$.addEventListener("click", function(){
  if(coins >= 100){
    coins-=100;
    faShakeWhenBuy(this);
      shopShootLifeActivation$$.disabled = true; 
      shopShootLife$$.disabled = false; 
      healingDamageIsActivated = true;
      shopShootLifeActivation$$.style.color = "rgb(164, 5, 164)";
      shopShootLifeActivation$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i>  <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span> <i style="font-size: calc(8px + 0.7vw)"  class="fa-solid fa-check"></i>`;
  }
})
shopShootBarActivation$$.addEventListener("click", function(){
  if(coins >= 85){
    coins-=85;
    barDamageIsActivated = true;
    faShakeWhenBuy(this);
      shopShootBarActivation$$.disabled = true; 
      shopShootLife$$.disabled = false; 
      shopShootBarActivation$$.style.color = "rgb(164, 5, 164)";
      shopShootBarActivation$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i>  <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-heart-pulse"> </i> </span> <i style="font-size: calc(8px + 0.7vw)"  class="fa-solid fa-check"></i>`;
  }
})
shopShootTimeActivation$$.addEventListener("click", function(){
  if(coins >= 90){
    coins-=90;
    timeStopIsActive = true;
    faShakeWhenBuy(this);
      shopShootTimeActivation$$.disabled = true; 
      shopShootLife$$.disabled = false; 
      shopShootTimeActivation$$.style.color = "rgb(164, 5, 164)";
      shopShootTimeActivation$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i>  <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-clock"> </i> </span> <i style="font-size: calc(8px + 0.7vw)"  class="fa-solid fa-check"></i>`;
  }
})
shopShootGatlingActivation$$.addEventListener("click", function(){
  if(coins >= 105){
    coins-=105;
    game.player.burbalaGatlingIsActive = true;
    faShakeWhenBuy(this);
    shopShootGatlingActivation$$.disabled = true; 
    shopShootLife$$.disabled = false; 
    shopShootGatlingActivation$$.style.color = "rgb(164, 5, 164)";
    shopShootGatlingActivation$$.innerHTML = `</i> <span id="boots-text"><i class="fa-solid fa-circle-dot"></i>  <i style="font-size: calc(8px + 0.4vw)"  class="fa-solid fa-joint"> </i> </span> <i style="font-size: calc(8px + 0.7vw)"  class="fa-solid fa-check"></i>`;
  }
})


shopRetry$$.addEventListener("click", function(){
  if(coins >= priceRetry){
  faShakeWhenBuy(this);
    buyBig.play()
    retry ++;
    coins-= priceRetry; 
    priceRetry += 30;
    shopRetry$$.innerHTML = `<button data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Comprar 1 repetición de nivel" class="shop-btns" id="shop-retry"> </i> </span> ${priceRetry}<i class="fa-solid fa-coins"></i> </i> <span id="retry-text"><i style="font-size: calc(8px + 0.4vw)" class="fa-solid fa-arrow-rotate-left"></i> </button>`
  }
})


toggleShop$$.addEventListener("click", ()=>{
  if(shopBtnsAll$$.style.display === "flex"){
    shopBtnsAll$$.style.display = "none";
  } else {
    shopBtnsAll$$.style.display = "flex";
  }
})


game.player.barImg$$.addEventListener("click", ()=>{
  showModal(`Barras <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Barras de lanzamiento <span style="color: blue; font-size: 20px;">M</span>, una  munición especial que resiste ${barLife} impactos de burbujas de colores y es totalmente resistente a las burbujas oscuras. <br/>&nbsp&nbsp En la tienda puedes comprar tanto barras como mejorar su resistencia, para que aguante más impactos de burbujas de colores  <br/>&nbsp&nbsp Se pueden cargar las barras con el escudo eléctrico del personaje, haciéndolas más resistentes y que duren más tiempo. Cuanto más esté en contacto con la electricidad, mayor el efect.`).then(() => {
    game.start();
  });
  return;
})
game.player.fireImg$$.addEventListener("click", ()=>{
  showModal(`Lanzallamas <span style="font-style: italic; font-size: 18px;">Item para recoger</span> `, `&nbsp&nbsp Cargas para el lanzallamas. Para usar el lanzallamas pulsa la tecla <span style="color: blue; font-size: 20px;">N</span>  <br/>&nbsp&nbsp El fuego puede quemar algunos objetos, pero no afecta a las plataformas. <br/>&nbsp&nbsp Al chocar con burbujas, las evapora poco a poco, evitando así que exploten en más burbujas pequeñas. Ten en cuenta también que cuanto más grande sea la burbuja, menos le afecta el daño del fuego.`).then(() => {
    game.start();
  });
  return;
})
game.player.hookImg$$.addEventListener("click", ()=>{
  showModal(`Ganchos <span style="font-style: italic; font-size: 18px;">Munición</span>`, `&nbsp&nbsp Una munición especial que te impulsa hasta ciertos objetos sobre los que tiene la capacidad de engancharse <span style="color: blue; font-size: 20px;">J</span>. Úsalos para esquivar, moverte rápido y obtener ventaja en una gran variedad de situaciones.`).then(() => {
    game.start();
  });
  return;
})
game.player.stepImg$$.addEventListener("click", ()=>{
  showModal(`Steps`, `&nbsp&nbsp Coloca  (<span style="color: blue; font-size: 20px;">O </span>a la izquierda - <span style="color: blue; font-size: 20px;">P</span> a la derecha) plataformas pequeñas y endebles, pero que puedes usar para llegar a lugares complicados. <br/>&nbsp&nbsp  Se romperán rápido, pero te pueden proteger en algunas situaciones y también se pueden activar con electricidad`).then(() => {
    game.start();
  });
  return;
})
game.player.swordImg$$.addEventListener("click", ()=>{
  showModal(`Espada`, `&nbsp&nbsp Espada Bubujaglória. Un arma especial del G.C.A.M. que te permite hacer ataques físicos especiales. Si recoges varias espadas, se fusionan, aumentando sus habilidades. <br/>&nbsp&nbsp Pulsa <span style="color: blue; font-size: 20px;">R</span> para hacer un barrido superior. Empieza con un barrido a un lado y en la siguiente acción lo hará al otro lado. Si haces el barrido en salto, también te impulsa un poco más hacia arriba. <br/>&nbsp&nbsp Si pulsas  <span style="color: blue; font-size: 20px;">F</span> harás una estocada en la dirección del último movimiento. La estocada es un ataque poderoso que puede explotar varias burbujas a la vez al contacto y también te protege. <br/>&nbsp&nbsp A medida que golpeas con la espada, cargas su poder especial, y al cargar del todo podrás disparar  Burbalas adicionals con cada barrido. `).then(() => {
    game.start();
  });
  return; 
})






toggleShopExtra$$.addEventListener('mouseenter', function() {
  this.classList.add('fa-bounce');
});

toggleShopExtra$$.addEventListener('mouseleave', function() {
  this.classList.remove('fa-bounce');
});


toggleShopExtra$$.addEventListener("click", function(){
  if(extraShop$$.style.display === "block" && !game.interval){//game.interval hace que no se acelere el juego
    extraShop$$.style.opacity ="0";
    extraShop$$.style.top ="1%";
    extraShop$$.style.right = "5%";
    setTimeout(() => {
    extraShop$$.style.display = "none";
  }, 400);
  game.start();
} else{
  extraShop$$.style.display = "block"
  setTimeout(() => {
    extraShop$$.style.translate = "(-50%, -50%)";
    extraShop$$.style.opacity ="1";
    extraShop$$.style.top ="10%";
    extraShop$$.style.right = "40%";
  }, 50);
    game.stop();
  }
})

extraShopCloseX$$.forEach(button => {
  button.addEventListener("click", function() {
    extraShop$$.style.opacity ="0";
    extraShop$$.style.top ="1%";
    extraShop$$.style.right = "5%";
    setTimeout(() => {
    extraShop$$.style.display = "none";
  }, 400);
  if(!game.interval) game.start();
  });
});

function shopButtonsWhenSwordEquipped(){
  shopSwordStab$$.disabled = false;
  shopSwordSpeed$$.disabled = false;
  shopSwordRecharge$$.disabled = false;
}