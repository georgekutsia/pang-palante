
function textoMinionsPianoPiano(cualquierIdDeTexto) {
  let elemento$$ = document.getElementById(cualquierIdDeTexto);
  let textoCompleto = elemento$$.innerHTML;
  elemento$$.style.display = "flex";
  elemento$$.innerHTML = "";
  document.getElementById("minions-talk").style.display = "block";
  let index = 0;
  let interval = setInterval(function () {
    if (index < textoCompleto.length) {
      elemento$$.innerHTML += textoCompleto[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 40); // Cambiar velocidad aquí (en milisegundos)
}

const minionsTalking = {
  miniBossTalk1(){
    miniBoss1TalkImg$$.style.display = "block"; 
    textoMinionsPianoPiano("miniBoss1-talk1");
    setTimeout(() => {
      document.getElementById("miniBoss1-talk1").style.opacity = "0";
    }, 3000);

    setTimeout(() => {
      document.getElementById("miniBoss1-talk1").style.display = "none";
    textoMinionsPianoPiano("miniBoss1-talk2");
    }, 3500);

    setTimeout(() => {
      miniBoss1TalkImg$$.style.top = "-150px";
      miniBoss1TalkImg$$.style.width = "1px";
    }, 6000);
    setTimeout(() => {
      document.getElementById("miniBoss1-talk2").style.display = "none";
      miniBoss1TalkImg$$.style.display = "none";
    }, 7000);
  },

  miniBossTalk2(){
    miniBoss1TalkImg$$.style.display = "block"; 
    miniBoss1TalkImg$$.style.top = "5vh";
    miniBoss1TalkImg$$.style.width = "150px";
    textoMinionsPianoPiano("miniBoss1-talk3");
    setTimeout(() => {
      document.getElementById("miniBoss1-talk3").style.display = "none";
    textoMinionsPianoPiano("miniBoss1-talk4");
    }, 2500);
    setTimeout(() => {
      miniBoss1TalkImg$$.style.top = "-150px";
      miniBoss1TalkImg$$.style.width = "1px";
      document.getElementById("miniBoss1-talk4").style.display = "none";
    }, 4500);
  },
  miniBossTalk3(){
    miniBoss1TalkImg$$.style.display = "block"; 
    miniBoss1TalkImg$$.style.top = "5vh";
    miniBoss1TalkImg$$.style.width = "150px";
    textoMinionsPianoPiano("miniBoss1-talk5");
    setTimeout(() => {
      document.getElementById("miniBoss1-talk5").style.display = "none";
    textoMinionsPianoPiano("miniBoss1-talk6");
    }, 2000);
    setTimeout(() => {
      miniBoss1TalkImg$$.style.top = "-150px";
      miniBoss1TalkImg$$.style.width = "1px";
      document.getElementById("miniBoss1-talk6").style.display = "none";
    }, 4500);
  },


  miniBossTalk1Gone(){
    miniBoss1TalkImg$$.style.display = "block"; 
    miniBoss1TalkImg$$.style.top = "5vh";
    miniBoss1TalkImg$$.style.width = "150px";
    textoMinionsPianoPiano("miniBoss1-talk11");
    setTimeout(() => {
      document.getElementById("miniBoss1-talk11").style.display = "none";
    textoMinionsPianoPiano("miniBoss1-talk12");
    }, 2000);
    setTimeout(() => {
      document.getElementById("miniBoss1-talk12").style.display = "none";
      miniBoss1TalkImg$$.style.top = "-150px";
      miniBoss1TalkImg$$.style.width = "1px";
    }, 4500);
  }
}