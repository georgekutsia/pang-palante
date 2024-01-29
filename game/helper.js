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
    }, 5000);
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
    game.player.auraIsActive = true;
    coins -= 50;
    setTimeout(() => {
      game.player.auraIsActive = false;
    }, 7000);
  }
})
shopFire$$.addEventListener("click", function(){
  if(coins >= 20 && game.player.fireAmount <=29){
    game.player.fireAmount += 3;
    coins -= 20; 
    N = 78;
  }
})


//basic gun 

shopSuperGun1$$.addEventListener("click", function(){
  if(coins >=150 && basicWeaponLevel < 1){
    coins -=150;
    basicWeaponLevel = 1;
    shopSuperGun1$$.innerText = "Nivel 1"
    shopSuperGun1$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun2$$.style.display = "block"
  } else if(basicWeaponLevel >= 1){
    basicWeaponLevel  = 1;    
    shopSuperGun1$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"
  }
})
shopSuperGun2$$.addEventListener("click", function(){
  if(coins >=160 && basicWeaponLevel < 2){
    coins -=160;
    basicWeaponLevel = 2;
    shopSuperGun2$$.innerText = "Nivel 2"
    shopSuperGun2$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun3$$.style.display = "block"
  } else if(basicWeaponLevel >= 2){
    basicWeaponLevel  = 2;
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "none"
  }
})
shopSuperGun3$$.addEventListener("click", function(){
  if(coins >=170 && basicWeaponLevel < 3){
    coins -=170;
    basicWeaponLevel  = 3;
    shopSuperGun3$$.innerText = "Nivel 3"
    shopSuperGun3$$.style.color = "rgb(254, 0, 224)"
    shopSuperGun4$$.style.display = "block"
  } else if(basicWeaponLevel >= 3){
    basicWeaponLevel  = 3;
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "3px solid rgb(154, 130, 184)"
    shopSuperGun4$$.style.border = "none"


  }
})
shopSuperGun4$$.addEventListener("click", function(){
  if(coins >=180 && basicWeaponLevel < 4){
    coins -=180;
    basicWeaponLevel  = 4 ;
    shopSuperGun4$$.innerText = "Nivel 4"
    shopSuperGun4$$.style.color = "rgb(254, 0, 224)"
  } else if(basicWeaponLevel >= 4){
    basicWeaponLevel  = 4;
    shopSuperGun1$$.style.border = "none"
    shopSuperGun2$$.style.border = "none"
    shopSuperGun3$$.style.border = "none"
    shopSuperGun4$$.style.border = "3px solid rgb(154, 130, 184)"
  }
})


// speed gun
shopSpeedGun$$.addEventListener("click", function(){
  if(basicWeaponSpeed === 0 && coins >= 50){
    coins -=50;
    basicWeaponSpeed = 1
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 3</span>   <br> <i class="fa-solid fa-angles-up fonts-i"></i>Speed  <br> 60<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 1 && coins >= 60){
    basicWeaponSpeed = 2
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 4</span>  <br> <i class="fa-solid fa-angles-up fonts-i"></i>Speed  <br> 70<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 2 && coins >= 70){
    basicWeaponSpeed = 3
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 5</span>  <br> <i class="fa-solid fa-angles-up fonts-i"></i>Speed  <br> 80<i class="fa-solid fa-coins"></i>`
  } else if(basicWeaponSpeed === 3 && coins >= 80){
    basicWeaponSpeed = 4
    shopSpeedGun$$.innerHTML = ` <span><i style="font-size: calc(14px + 0.53vw)" class="fa-solid fa-gauge-simple-high"></i> x 6  <br> <i class="fa-solid fa-angles-up fonts-i"></i>Speed  </span>`
  } 
})