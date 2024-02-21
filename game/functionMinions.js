
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
  },
}