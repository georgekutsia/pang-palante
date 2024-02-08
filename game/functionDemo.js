let demoPhase = 1;
function mostrarTextoPocoAPoco(cualquierIdDeTexto) {
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
        console.log("done")
        clearInterval(interval);
      }
    }, 40); // Cambiar velocidad aquí (en milisegundos)
}


function mostrarVariosTextosPocoAPoco1(){
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text1");
  }, 12000);
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text2");
  }, 13000);
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text3");
  }, 15000);
  setTimeout(() => {
    document.getElementById("demo-text1").style.display = "none";
    document.getElementById("demo-text2").style.display = "none";
    document.getElementById("demo-text3").style.display = "none";
    mostrarTextoPocoAPoco("demo-text4");
  }, 19000);
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text5");
  }, 21000);
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text6");
  }, 23000);
  setTimeout(() => {
    mostrarTextoPocoAPoco("demo-text7");
  }, 25000);
}

function mostrarVariosTextosPocoAPoco2(){
  document.getElementById("demo-text4").style.display = "none";
  document.getElementById("demo-text5").style.display = "none";
  document.getElementById("demo-text6").style.display = "none";
  document.getElementById("demo-text7").style.display = "none";
  mostrarTextoPocoAPoco("demo-text8");
  setTimeout(() => {
  mostrarTextoPocoAPoco("demo-text9");
  }, 2000);
  setTimeout(() => {
  mostrarTextoPocoAPoco("demo-text10");
  }, 4000);

}

function mostrarVariosTextosPocoAPoco3(){
  document.getElementById("demo-text1").style.display = "none";
  document.getElementById("demo-text2").style.display = "none";
  document.getElementById("demo-text3").style.display = "none";
  document.getElementById("demo-text4").style.display = "none";
  document.getElementById("demo-text5").style.display = "none";
  document.getElementById("demo-text6").style.display = "none";
  document.getElementById("demo-text7").style.display = "none";
  document.getElementById("demo-text8").style.display = "none";
  document.getElementById("demo-text9").style.display = "none";
  document.getElementById("demo-text10").style.display = "none";

  mostrarTextoPocoAPoco("demo-text11");


}