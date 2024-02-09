let demoPhase = 1;

function textoPianoPiano(cualquierIdDeTexto) {
let elemento$$ = document.getElementById(cualquierIdDeTexto);
let textoCompleto = elemento$$.innerHTML;
elemento$$.style.display = "flex"
elemento$$.innerHTML = '';
document.getElementById("demo-text-box0").style.display = "block";
let index = 0;
let interval = setInterval(function() {
  if (index < textoCompleto.length) {
    elemento$$.innerHTML += textoCompleto[index];
    index++;
  } else {
    clearInterval(interval);
  }
}, 40); // Cambiar velocidad aquí (en milisegundos)
}

const demoFunctions = {
  
  
    mostrarVariosTextosPocoAPoco1(){
        setTimeout(() => {
          textoPianoPiano("demo-text1");
      }, 12000);
      setTimeout(() => {
        textoPianoPiano("demo-text2");
      }, 13000);
      setTimeout(() => {
        textoPianoPiano("demo-text3");
      }, 15000);
      setTimeout(() => {
        document.getElementById("demo-text1").style.display = "none";
        document.getElementById("demo-text2").style.display = "none";
        document.getElementById("demo-text3").style.display = "none";
        textoPianoPiano("demo-text4");
      }, 19000);
      setTimeout(() => {
        textoPianoPiano("demo-text5");
      }, 21000);
      setTimeout(() => {
        textoPianoPiano("demo-text6");
      }, 23000);
      setTimeout(() => {
        textoPianoPiano("demo-text7");
      }, 25000);
},

 mostrarVariosTextosPocoAPoco2(){
  document.getElementById("demo-text4").style.display = "none";
  document.getElementById("demo-text5").style.display = "none";
  document.getElementById("demo-text6").style.display = "none";
  document.getElementById("demo-text7").style.display = "none";
  textoPianoPiano("demo-text8");
  setTimeout(() => {
  textoPianoPiano("demo-text9");
  }, 2000);
  setTimeout(() => {
  textoPianoPiano("demo-text10");
  }, 4000);
},

  mostrarVariosTextosPocoAPoco3(ctx, platforms, levers, bubbles){
  document.getElementById("demo-text8").style.display = "none";
  document.getElementById("demo-text9").style.display = "none";
  document.getElementById("demo-text10").style.display = "none";
  textoPianoPiano("demo-text11");
  setTimeout(() => {
    textoPianoPiano("demo-text12");
    }, 1500);
    setTimeout(() => {
      textoPianoPiano("demo-text13");
      }, 3000);
    setTimeout(() => {
      textoPianoPiano("demo-text14");
      }, 5000);
      setTimeout(() => {
        document.getElementById("demo-text11").style.display = "none";
        document.getElementById("demo-text12").style.display = "none";
        document.getElementById("demo-text13").style.display = "none";
        document.getElementById("demo-text14").style.display = "none";
        textoPianoPiano("demo-text15")
        setTimeout(() => {
        textoPianoPiano("demo-text16")
        }, 2000);
        setTimeout(() => {
        textoPianoPiano("demo-text17")
        }, 4000);
        setTimeout(() => {
        textoPianoPiano("demo-text18")
        }, 6000);
      }, 12000);

},











}
