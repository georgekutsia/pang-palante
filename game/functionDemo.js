
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
const timeouts = [];

function saltarInstrucciones(estaFuncion){
  const clearAllTimeouts = () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
  };
  btnInstruccionesSaltar$$.style.display = "block";
  btnInstruccionesSaltar$$.addEventListener("click", () => {
          clearAllTimeouts();
          hideAllTexts();
          if(GAMELEVEL === 1){
            level1(game.ctx, game.bubbles, game.platforms, game.levelBalls, game.boxes);
            setTimeout(() => {
              addBubble1(game.ctx, game.bubbles)
            }, 8000);
          }
          btnInstruccionesSaltar$$.style.display = "none";
          btnInstrucciones$$.style.display = "block";
          btnInstrucciones$$.addEventListener("click", () => {
          btnInstrucciones$$.style.display = "none";
          estaFuncion()
      });
      arrowBubbles$$.style.left = "50%";
      arrowBubbles$$.style.top = "12vh";
      arrowBubbles$$.style.display = "none";
  });

}
function arrowDemoInfo(){
  if(demoPhase ===1){
  setTimeout(() => {
    arrowBubbles$$.style.left = "3vw"
    arrowBubbles$$.style.top = "9vh"
    arrowBubbles$$.style.width = "calc(12px + 2vw)"
    setTimeout(() => {
      arrowBubbles$$.style.top = "13vh"
    }, 3000);
    setTimeout(() => {
      arrowBubbles$$.style.top = "-1vh"
    }, 5000);
    setTimeout(() => {
      arrowBubbles$$.style.top = "3vh"
    }, 7000);
    setTimeout(() => {
      arrowBubbles$$.style.left = "50%"
      arrowBubbles$$.style.top = "12vh"
        arrowBubbles$$.style.display = "none"
    }, 12000);
  }, 1000);
  } else{
    arrowBubbles$$.style.left = "50%"
    arrowBubbles$$.style.top = "12vh"
      arrowBubbles$$.style.display = "none"
  }
}
const demoFunctions = {
  demoOverText(){
    saltarInstrucciones(this.demoOverText)
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demoOver-text1");
      demoFriend1$$.style.display = "block"
    }, 1000));
    timeouts.push(setTimeout(() => {
      document.getElementById("demoOver-text1").style.display = "none";
      textoPianoPiano("demoOver-text2");
    }, 2600));
    timeouts.push(setTimeout(() => {
      demoFriend1$$.style.display = "none";
      demoFriend2$$.style.display = "block";
      document.getElementById("demoOver-text2").style.display = "none";
      textoPianoPiano("demoOver-text3");
    }, 4000));

    timeouts.push(setTimeout(() => {
      document.getElementById("demoOver-text3").style.display = "none";
      demoFriend2$$.style.display = "none"
      demoFriend3$$.style.display = "block"
      textoPianoPiano("demoOver-text4");
    }, 7000));
    timeouts.push(setTimeout(() => {
      document.getElementById("demoOver-text4").style.display = "none";
      demoFriend3$$.style.display = "none"
    }, 9900));
  },

  mostrarVariosTextosPocoAPoco1() {
    if (demoPhase === 1) {
        btnInstruccionesSaltar$$.style.display = "block";
        saltarInstrucciones(this.mostrarVariosTextosPocoAPoco1)
        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text1");
        }, 100));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text2");
        }, 2200));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text3");
            arrowBubbles$$.style.display = "block";
            setTimeout(() => {
                arrowBubbles$$.style.left = "3vw";
                arrowBubbles$$.style.top = "9vh";
                arrowBubbles$$.style.width = "calc(12px + 2vw)";
            }, 1000);
        }, 5000));

        timeouts.push(setTimeout(() => {
            document.getElementById("demo-text1").style.display = "none";
            document.getElementById("demo-text2").style.display = "none";
            document.getElementById("demo-text3").style.display = "none";
            textoPianoPiano("demo-text31");
            arrowBubbles$$.style.top = "13vh";
        }, 9000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text32");
        }, 11000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text33");
        }, 13000));

        timeouts.push(setTimeout(() => {
            document.getElementById("demo-text31").style.display = "none";
            document.getElementById("demo-text32").style.display = "none";
            document.getElementById("demo-text33").style.display = "none";
            textoPianoPiano("demo-text4");
            arrowBubbles$$.style.display = "none";
        }, 19000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text5");
        }, 23000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text6");
        }, 25000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text7");
        }, 27000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text71");
        }, 29000));

        timeouts.push(setTimeout(() => {
            textoPianoPiano("demo-text72");
        }, 31000));

        timeouts.push(setTimeout(() => {
            document.getElementById("demo-text4").style.display = "none";
            document.getElementById("demo-text5").style.display = "none";
            document.getElementById("demo-text6").style.display = "none";
            document.getElementById("demo-text7").style.display = "none";
            document.getElementById("demo-text71").style.display = "none";
            document.getElementById("demo-text72").style.display = "none";
            btnInstrucciones$$.style.display = "block";
            btnInstrucciones$$.addEventListener("click", () => {
                btnInstrucciones$$.style.display = "none";
                this.mostrarVariosTextosPocoAPoco1();
            });
        }, 38000));
    }
},

  mostrarVariosTextosPocoAPoco2() {
  if(demoPhase ===2){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco2)
    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text4").style.display = "none";
    document.getElementById("demo-text5").style.display = "none";
    document.getElementById("demo-text6").style.display = "none";
    document.getElementById("demo-text7").style.display = "none";
    document.getElementById("demo-text71").style.display = "none";
    document.getElementById("demo-text72").style.display = "none";
    textoPianoPiano("demo-text8");
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text9");
    }, 2000));
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text10");
      timeouts.push(setTimeout(() => {
        btnInstrucciones$$.style.display = "block";
        document.getElementById("demo-text8").style.display = "none";
        document.getElementById("demo-text9").style.display = "none";
        document.getElementById("demo-text10").style.display = "none";
        btnInstrucciones$$.addEventListener("click", ()=>{
                btnInstrucciones$$.style.display = "none";
                this.mostrarVariosTextosPocoAPoco2();
        })
      }, 2500));
    }, 4000));
  }
  },

  mostrarVariosTextosPocoAPoco3() {
  if(demoPhase ===3){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco3)

    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text8").style.display = "none";
    document.getElementById("demo-text9").style.display = "none";
    document.getElementById("demo-text10").style.display = "none";
    textoPianoPiano("demo-text11");
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text12");
    }, 1500));
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text13");
    }, 3000));
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text14");
    }, 5000));
    timeouts.push(setTimeout(() => {
      document.getElementById("demo-text11").style.display = "none";
      document.getElementById("demo-text12").style.display = "none";
      document.getElementById("demo-text13").style.display = "none";
      document.getElementById("demo-text14").style.display = "none";
      textoPianoPiano("demo-text15");
      timeouts.push(setTimeout(() => {
        textoPianoPiano("demo-text16");
      }, 2000));
      timeouts.push(setTimeout(() => {
        textoPianoPiano("demo-text17");
      }, 4000));
      timeouts.push(setTimeout(() => {
        textoPianoPiano("demo-text18");
      }, 6000));
    }, 12000));
    timeouts.push(setTimeout(() => {
      document.getElementById("demo-text15").style.display = "none";
      document.getElementById("demo-text16").style.display = "none";
      document.getElementById("demo-text17").style.display = "none";
      document.getElementById("demo-text18").style.display = "none";
      btnInstrucciones$$.style.display = "block"
      btnInstrucciones$$.addEventListener("click", ()=>{
        this.mostrarVariosTextosPocoAPoco3();
      })
    }, 24000));
  }
  },

  mostrarVariosTextosPocoAPoco4() {
  if(demoPhase ===5){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco4)

    btnInstrucciones$$.style.display = "none";
    document.getElementById("demo-text11").style.display = "none";
    document.getElementById("demo-text12").style.display = "none";
    document.getElementById("demo-text13").style.display = "none";
    document.getElementById("demo-text14").style.display = "none";
    document.getElementById("demo-text15").style.display = "none";
    document.getElementById("demo-text16").style.display = "none";
    document.getElementById("demo-text17").style.display = "none";
    document.getElementById("demo-text18").style.display = "none";
    textoPianoPiano("demo-text19");
    timeouts.push(setTimeout(() => {
      textoPianoPiano("demo-text20");
      }, 2000));
      timeouts.push(setTimeout(() => {
        document.getElementById("demo-text19").style.display = "none";
        document.getElementById("demo-text20").style.display = "none";
        btnInstrucciones$$.style.display = "block"
        btnInstrucciones$$.addEventListener("click", ()=>{
                this.mostrarVariosTextosPocoAPoco4();
        })
      }, 4000));
    }
  },


  mostrarVariosTextosPocoAPoco5() {
  if(demoPhase ===7){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco5)

    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text19").style.display = "none";
    document.getElementById("demo-text20").style.display = "none";
    textoPianoPiano("demo-text21");
    setTimeout(() => {
      textoPianoPiano("demo-text22");
      }, 2500);
    setTimeout(() => {
      document.getElementById("demo-text21").style.display = "none";
      document.getElementById("demo-text22").style.display = "none";
      btnInstrucciones$$.style.display = "block"
      btnInstrucciones$$.addEventListener("click", ()=>{
              this.mostrarVariosTextosPocoAPoco5();
      })
    }, 6000);
  }
  },
  mostrarVariosTextosPocoAPoco6() {
  if(demoPhase ===9){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco6)

    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text21").style.display = "none";
    document.getElementById("demo-text22").style.display = "none";
    textoPianoPiano("demo-text22a");
    setTimeout(() => {
      textoPianoPiano("demo-text22b");
      }, 2500);
      setTimeout(() => {
      textoPianoPiano("demo-text22c");
      }, 4000);
      setTimeout(() => {
    document.getElementById("demo-text22a").style.display = "none";
    document.getElementById("demo-text22b").style.display = "none";
    document.getElementById("demo-text22c").style.display = "none";
        btnInstrucciones$$.style.display = "block"
        btnInstrucciones$$.addEventListener("click", ()=>{
                this.mostrarVariosTextosPocoAPoco6();
        })
      }, 8000);
    }
  },

  mostrarVariosTextosPocoAPoco7() {
    if(demoPhase ===11){
      saltarInstrucciones(this.mostrarVariosTextosPocoAPoco7)

    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text22a").style.display = "none";
    document.getElementById("demo-text22b").style.display = "none";
    document.getElementById("demo-text22c").style.display = "none";
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
        btnInstrucciones$$.style.display = "block"
        btnInstrucciones$$.addEventListener("click", ()=>{
                this.mostrarVariosTextosPocoAPoco7();
        })
      },12000);
    }
  },
  mostrarVariosTextosPocoAPoco8() {
  if(demoPhase ===13){
    saltarInstrucciones(this.mostrarVariosTextosPocoAPoco8)

    btnInstrucciones$$.style.display = "none"
    document.getElementById("demo-text23").style.display = "none";
    document.getElementById("demo-text24").style.display = "none";
    document.getElementById("demo-text25").style.display = "none";
    document.getElementById("demo-text26").style.display = "none";
    textoPianoPiano("demo-text27");
    setTimeout(() => {
    textoPianoPiano("demo-text28");
    }, 1000);
    setTimeout(() => {
    textoPianoPiano("demo-text29");
    }, 3000);
    setTimeout(() => {
      document.getElementById("demo-text27").style.display = "none";
      document.getElementById("demo-text28").style.display = "none";
      document.getElementById("demo-text29").style.display = "none";
    }, 6800);
    setTimeout(() => {
      toggleShop$$.style.display = "block";
      setTimeout(() => {
        toggleShop$$.style.opacity = "1";
        textoPianoPiano("demo-text30");
          }, 20);
        }, 7000);
        setTimeout(() => {
        textoPianoPiano("demo-text301");
        }, 10000);
    setTimeout(() => {
      document.getElementById("demo-text30").style.display = "none";
      document.getElementById("demo-text301").style.display = "none";
      btnInstrucciones$$.style.display = "block"
      btnInstrucciones$$.addEventListener("click", ()=>{
        this.mostrarVariosTextosPocoAPoco8();
      })
    }, 15000);
    }
  },
};




function demoMessageDisable() {
  if (demoPhase >= 2) {
    document.getElementById("demo-text1").style.display = "none";
    document.getElementById("demo-text2").style.display = "none";
    document.getElementById("demo-text3").style.display = "none";
    document.getElementById("demo-text31").style.display = "none";
    document.getElementById("demo-text32").style.display = "none";
    document.getElementById("demo-text33").style.display = "none";
    document.getElementById("demo-text4").style.display = "none";
    document.getElementById("demo-text5").style.display = "none";
    document.getElementById("demo-text6").style.display = "none";
    document.getElementById("demo-text7").style.display = "none";
    document.getElementById("demo-text71").style.display = "none";
    document.getElementById("demo-text72").style.display = "none";
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
  if (demoPhase >= 6) {
    document.getElementById("demo-text15").style.display = "none";
    document.getElementById("demo-text16").style.display = "none";
    document.getElementById("demo-text17").style.display = "none";
    document.getElementById("demo-text18").style.display = "none";
    document.getElementById("demo-text19").style.display = "none";
    document.getElementById("demo-text20").style.display = "none";
  }

  if (demoPhase >= 8) {
    document.getElementById("demo-text21").style.display = "none";
    document.getElementById("demo-text22").style.display = "none";
  }
  if (demoPhase >= 10) {
    document.getElementById("demo-text22a").style.display = "none";
    document.getElementById("demo-text22b").style.display = "none";
    document.getElementById("demo-text22c").style.display = "none";
  }
  if (demoPhase >= 12) {
    document.getElementById("demo-text23").style.display = "none";
    document.getElementById("demo-text24").style.display = "none";
    document.getElementById("demo-text25").style.display = "none";
    document.getElementById("demo-text26").style.display = "none";
  }

}


function  hideAllTexts() {

  document.getElementById("gameIntro-text1").style.display = "none";
  document.getElementById("gameIntro-text2").style.display = "none";
  boss1$$.style.display = "none"
  boss1$$.style.opacity = "0"

  minion1$$.style.display = "none";
  minion2$$.style.display = "none";
  minion3$$.style.display = "none";
  minion4$$.style.display = "none";
  minion5$$.style.display = "none";
  minion6$$.style.display = "none";
  minion1$$.style.opacity = "0";
  minion2$$.style.opacity = "0";
  minion3$$.style.opacity = "0";
  minion4$$.style.opacity = "0";
  minion5$$.style.opacity = "0";
  minion6$$.style.opacity = "0";
  document.getElementById("gameIntro-text3").style.display = "none";
  document.getElementById("gameIntro-text4").style.display = "none";
  document.getElementById("gameIntro-text5").style.display = "none";
  document.getElementById("gameIntro-text6").style.display = "none";
  document.getElementById("gameIntro-text7").style.display = "none";

  demoFriend3$$.style.display = "none";
  demoFriend3$$.style.opacity = "0";
  demoFriend4$$.style.display = "none";
  demoFriend4$$.style.opacity = "0";
  demoFriend5$$.style.display = "none";
  demoFriend5$$.style.opacity = "0";
  infoPlayer1$$.style.display = "none"
  infoPlayer2$$.style.display = "none"
  document.getElementById("demo-text1").style.display = "none";
  document.getElementById("demo-text2").style.display = "none";
  document.getElementById("demo-text3").style.display = "none";
  document.getElementById("demo-text31").style.display = "none";
  document.getElementById("demo-text32").style.display = "none";
  document.getElementById("demo-text33").style.display = "none";
  document.getElementById("demo-text4").style.display = "none";
  document.getElementById("demo-text5").style.display = "none";
  document.getElementById("demo-text6").style.display = "none";
  document.getElementById("demo-text7").style.display = "none";
  document.getElementById("demo-text71").style.display = "none";
  document.getElementById("demo-text72").style.display = "none";
  document.getElementById("demo-text8").style.display = "none";
  document.getElementById("demo-text9").style.display = "none";
  document.getElementById("demo-text10").style.display = "none";
  document.getElementById("demo-text8").style.display = "none";
  document.getElementById("demo-text9").style.display = "none";
  document.getElementById("demo-text10").style.display = "none";
  document.getElementById("demo-text11").style.display = "none";
  document.getElementById("demo-text12").style.display = "none";
  document.getElementById("demo-text13").style.display = "none";
  document.getElementById("demo-text14").style.display = "none";
  document.getElementById("demo-text15").style.display = "none";
  document.getElementById("demo-text16").style.display = "none";
  document.getElementById("demo-text17").style.display = "none";
  document.getElementById("demo-text18").style.display = "none";
  document.getElementById("demo-text19").style.display = "none";
  document.getElementById("demo-text20").style.display = "none";
  document.getElementById("demo-text21").style.display = "none";
  document.getElementById("demo-text22").style.display = "none";
  document.getElementById("demo-text22a").style.display = "none";
  document.getElementById("demo-text22b").style.display = "none";
  document.getElementById("demo-text22c").style.display = "none";
  document.getElementById("demo-text23").style.display = "none";
  document.getElementById("demo-text24").style.display = "none";
  document.getElementById("demo-text25").style.display = "none";
  document.getElementById("demo-text26").style.display = "none";
};


