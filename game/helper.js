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
  if(totalCoins >= 50){
    game.player.auraIsActive = true;
    totalCoins -= 50;
    setTimeout(() => {
      game.player.auraIsActive = false;
    }, 7000);
  }
})
shopFire$$.addEventListener("click", function(){
  if(totalCoins >= 20 && game.player.fireAmount <=29){
    game.player.life.total += 1;
    totalCoins -= 20; 
    N = 78;
  }
})