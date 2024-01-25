function infoIntro1(){
  infoPlayer1$$.style.display = "block"
  setTimeout(() => {
  infoPlayer1$$.style.display = "none"
  infoPlayer2$$.style.display = "block"
      setTimeout(() => {
      infoPlayer2$$.style.display = "none"
      }, 5000);
  }, 5000);
}




infoPlayerBtn1$$.addEventListener("click", function(){
  infoIntro1()
})

