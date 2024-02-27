let demoPhase = 1;

function textoPianoPiano(cualquierIdDeTexto) {
  let elemento$$ = document.getElementById(cualquierIdDeTexto);
  let textoCompleto = elemento$$.innerHTML;
  elemento$$.style.display = "flex";
  elemento$$.innerHTML = "";
  document.getElementById("demo-text-box0").style.display = "block";
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

const demoFunctions = {
  demoOverText(){
    setTimeout(() => {
      textoPianoPiano("demoOver-text1");
      demoFriend1$$.style.display = "block"
    }, 1000);
    setTimeout(() => {
      document.getElementById("demoOver-text1").style.display = "none";
      textoPianoPiano("demoOver-text2");
    }, 2600);
    setTimeout(() => {
      demoFriend1$$.style.display = "none";
      demoFriend2$$.style.display = "block";
      document.getElementById("demoOver-text2").style.display = "none";
      textoPianoPiano("demoOver-text3");
    }, 4000);

    setTimeout(() => {
      document.getElementById("demoOver-text3").style.display = "none";
      demoFriend2$$.style.display = "none"
      demoFriend3$$.style.display = "block"
      textoPianoPiano("demoOver-text4");
    }, 7000);
    setTimeout(() => {
      document.getElementById("demoOver-text4").style.display = "none";
      demoFriend3$$.style.display = "none"
    }, 9900);
  },

  mostrarVariosTextosPocoAPoco1() {
    setTimeout(() => {
      textoPianoPiano("demo-text1");
    },11000);
    setTimeout(() => {
      textoPianoPiano("demo-text2");
    }, 12500);
    setTimeout(() => {
      textoPianoPiano("demo-text3");
      arrowBubbles$$.style.display = "block"
      setTimeout(() => {
        arrowBubbles$$.style.left = "3vw"
        arrowBubbles$$.style.top = "9vh"
        arrowBubbles$$.style.width = "calc(12px + 2vw)"
      }, 1000);
    }, 16000);
    setTimeout(() => {
      document.getElementById("demo-text1").style.display = "none";
      document.getElementById("demo-text2").style.display = "none";
      document.getElementById("demo-text3").style.display = "none";
    textoPianoPiano("demo-text31");
    arrowBubbles$$.style.top = "13vh"
    }, 20000);
    setTimeout(() => {
      arrowBubbles$$.style.top = "-1vh"
    textoPianoPiano("demo-text32");
    }, 22000);
    setTimeout(() => {
      arrowBubbles$$.style.top = "3vh"
    textoPianoPiano("demo-text33");
    }, 24000);

    setTimeout(() => {
      document.getElementById("demo-text31").style.display = "none";
      document.getElementById("demo-text32").style.display = "none";
      document.getElementById("demo-text33").style.display = "none";
      textoPianoPiano("demo-text4");
      arrowBubbles$$.style.display = "none"
    }, 32000);

    setTimeout(() => {
      textoPianoPiano("demo-text5");
    }, 35000);
    setTimeout(() => {
      textoPianoPiano("demo-text6");
    }, 37000);
    setTimeout(() => {
      textoPianoPiano("demo-text7");
    }, 39000);
    setTimeout(() => {
      textoPianoPiano("demo-text71");
    }, 41000);
    setTimeout(() => {
      textoPianoPiano("demo-text72");
    }, 43000);
  },

  mostrarVariosTextosPocoAPoco2() {
    document.getElementById("demo-text4").style.display = "none";
    document.getElementById("demo-text5").style.display = "none";
    document.getElementById("demo-text6").style.display = "none";
    document.getElementById("demo-text7").style.display = "none";
    document.getElementById("demo-text71").style.display = "none";
    document.getElementById("demo-text72").style.display = "none";
    
    textoPianoPiano("demo-text8");
    setTimeout(() => {
      textoPianoPiano("demo-text9");
    }, 2000);
    setTimeout(() => {
      textoPianoPiano("demo-text10");
    }, 4000);
  },

  mostrarVariosTextosPocoAPoco3() {
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
      textoPianoPiano("demo-text15");
      setTimeout(() => {
        textoPianoPiano("demo-text16");
      }, 2000);
      setTimeout(() => {
        textoPianoPiano("demo-text17");
      }, 4000);
      setTimeout(() => {
        textoPianoPiano("demo-text18");
      }, 6000);
    }, 12000);
  },

  mostrarVariosTextosPocoAPoco4() {
    document.getElementById("demo-text15").style.display = "none";
    document.getElementById("demo-text16").style.display = "none";
    document.getElementById("demo-text17").style.display = "none";
    document.getElementById("demo-text18").style.display = "none";
    textoPianoPiano("demo-text19");
    setTimeout(() => {
      textoPianoPiano("demo-text20");
      }, 2000);
      setTimeout(() => {
        document.getElementById("demo-text19").style.display = "none";
        document.getElementById("demo-text20").style.display = "none";
      }, 20000)
  },
  mostrarVariosTextosPocoAPoco5() {
    document.getElementById("demo-text19").style.display = "none";
    document.getElementById("demo-text20").style.display = "none";
    textoPianoPiano("demo-text21");
    setTimeout(() => {
      textoPianoPiano("demo-text22");
      }, 2000);
    setTimeout(() => {
      document.getElementById("demo-text21").style.display = "none";
      document.getElementById("demo-text22").style.display = "none";
    }, 6000);
  },


  mostrarVariosTextosPocoAPoco6() {
    document.getElementById("demo-text19").style.display = "none";
    document.getElementById("demo-text20").style.display = "none";
    textoPianoPiano("demo-text21");
    setTimeout(() => {
      textoPianoPiano("demo-text22");
      }, 2000);
  },

  mostrarVariosTextosPocoAPoco7() {
    document.getElementById("demo-text21").style.display = "none";
    document.getElementById("demo-text22").style.display = "none";
    textoPianoPiano("demo-text23");
    setTimeout(() => {
      textoPianoPiano("demo-text24");
      }, 2000);
    setTimeout(() => {
      textoPianoPiano("demo-text25");
      }, 4000);
    setTimeout(() => {
      textoPianoPiano("demo-text26");
      }, 6000);
      setTimeout(() => {
        document.getElementById("demo-text23").style.display = "none";
        document.getElementById("demo-text24").style.display = "none";
        document.getElementById("demo-text25").style.display = "none";
        document.getElementById("demo-text26").style.display = "none";
      },11000);
  },

};






function demoMessageDisable() {
  if (demoPhase >= 2) {
    document.getElementById("demo-text1").style.display = "none";
    document.getElementById("demo-text2").style.display = "none";
    document.getElementById("demo-text3").style.display = "none";
    document.getElementById("demo-text4").style.display = "none";
    document.getElementById("demo-text5").style.display = "none";
    document.getElementById("demo-text6").style.display = "none";
    document.getElementById("demo-text7").style.display = "none";
  }
  if (demoPhase >= 3) {
    document.getElementById("demo-text8").style.display = "none";
    document.getElementById("demo-text9").style.display = "none";
    document.getElementById("demo-text10").style.display = "none";
  }
  if (demoPhase >= 4) {
    document.getElementById("demo-text8").style.display = "none";
    document.getElementById("demo-text9").style.display = "none";
    document.getElementById("demo-text10").style.display = "none";
    document.getElementById("demo-text11").style.display = "none";
    document.getElementById("demo-text12").style.display = "none";
    document.getElementById("demo-text13").style.display = "none";
    document.getElementById("demo-text14").style.display = "none";
  }
  if (demoPhase >= 5) {
    document.getElementById("demo-text15").style.display = "none";
    document.getElementById("demo-text16").style.display = "none";
    document.getElementById("demo-text17").style.display = "none";
    document.getElementById("demo-text18").style.display = "none";
  }

  if (demoPhase >= 6) {
    document.getElementById("demo-text19").style.display = "none";
    document.getElementById("demo-text20").style.display = "none";
  }
  if (demoPhase >= 8) {
    document.getElementById("demo-text21").style.display = "none";
    document.getElementById("demo-text22").style.display = "none";
  }

}
