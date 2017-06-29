
var onOff = false;
var startstop;
var soundNumber = -1;

function setup(){
  window.sound.A = document.getElementById('noteA');
  window.sound.B = document.getElementById('noteB');
  window.sound.C = document.getElementById('noteC');
  window.sound.D = document.getElementById('noteD');
  window.sound.E = document.getElementById('noteE');
  window.sound.F = document.getElementById('noteF');
  window.sound.G = document.getElementById('noteG');
  window.sound.H = document.getElementById('noteH');
  window.sound.G2 = document.getElementById('noteG2');
  window.beatA = document.getElementById('beat1');
  window.beatB = document.getElementById('beat2');
  window.beatC = document.getElementById('beat3');
  window.beatD = document.getElementById('beat4');
  window.beatE = document.getElementById('beat5');
  window.beatF = document.getElementById('beat6');
  window.beatG = document.getElementById('beat7');
  window.beatH = document.getElementById('beat8');
  window.beatI = document.getElementById('beat9');
  window.beatJ = document.getElementById('beat0');
  window.beatK = document.getElementById('beatA');
  window.beatL = document.getElementById('beatB');
  window.beatM = document.getElementById('beatC');
  window.beatN = document.getElementById('beatD');
  window.beatO = document.getElementById('beatE');
  window.beatP = document.getElementById('beatF');
  sound.A.volume = 0.2;
  sound.B.volume = 0.2;
  sound.C.volume = 0.2;
  sound.D.volume = 0.2;
  sound.E.volume = 0.2;
  sound.F.volume = 0.2;
  sound.G.volume = 0.2;
  sound.H.volume = 0.2;
  window.tempo = 250

}

var buttons = {
  buttonToggle: false
};

var sound = {};

function changeTempo() {
  var x = document.getElementById("msInt").value;
  tempo = 30/x*1000;
  if (onOff == true){
    clearInterval(startstop);
    startstop = setInterval(multiCall, tempo);
    }

}
  //toggle button on/off
window.toggle = function(e){

  e.buttonToggle = !e.buttonToggle;
  if (e.buttonToggle == false){
    e.classList.remove('playing');
    }
  else {
    e.classList.add('playing');
    }

}

function multiCall(){
  count();
  playSound();
  console.log(tempo);
}


//increace number to the next sequence.
function count(){
  soundNumber++;

  if (soundNumber > 15){
    soundNumber = 0;
  }
  //console.log(soundNumber);
}


  //start-stop function for start button.
function playback(){
  startButton = document.getElementById('start');
  onOff = !onOff;

  if (onOff == true){
    startstop = setInterval(multiCall, tempo);
    startButton.classList.add('playing');
    }
  else {
    clearInterval(startstop);
    startButton.classList.remove('playing');
    soundNumber = 0;
  }
}

  //sequencer. Lots of shitty code here.
function playSound(){

  playNote1();
  playNote2();
  playNote3();
  playNote4();
  playNote5();
  playNote6();
  playNote7();
  playNote8();
  playNote9();
  playNote10();
  playNote11();
  playNote12();
  playNote13();
  playNote14();
  playNote15();
  playNote16();
  
  function playNote1(){
    if (soundNumber == 0){
      console.log("beat 1");
      beatP.classList.remove('played');
      beatA.classList.add('played');
      if (buttonA_1.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_1.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_1.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_1.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_1.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }

  function playNote2(){
    if (soundNumber == 1){
      beatA.classList.remove('played');
      beatB.classList.add('played');
      if (buttonA_2.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_2.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_2.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_2.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_2.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote3(){
    if (soundNumber == 2){
      beatB.classList.remove('played');
      beatC.classList.add('played');
      if (buttonA_3.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_3.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_3.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_3.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_3.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote4(){
    if (soundNumber == 3){
      beatC.classList.remove('played');
      beatD.classList.add('played');
      if (buttonA_4.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_4.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_4.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_4.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_4.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote5(){
    if (soundNumber == 4){
      beatD.classList.remove('played');
      beatE.classList.add('played');
      if (buttonA_5.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonD_5.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonC_5.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_5.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_5.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote6(){
    if (soundNumber == 5){
      beatE.classList.remove('played');
      beatF.classList.add('played');
      if (buttonA_6.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonD_6.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonC_6.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_6.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_6.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote7(){
    if (soundNumber == 6){
      beatF.classList.remove('played');
      beatG.classList.add('played');
      if (buttonA_7.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonD_7.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonC_7.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_7.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_7.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
  function playNote8(){
    if (soundNumber == 7){
      beatG.classList.remove('played');
      beatH.classList.add('played');
      if (buttonA_8.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonD_8.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonC_8.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_8.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_8.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
}
  function playNote9(){
    if (soundNumber == 8){
      beatH.classList.remove('played');
      beatI.classList.add('played');
      if (buttonA_9.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_9.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_9.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_9.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_9.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
    function playNote10(){
    if (soundNumber == 9){
      beatI.classList.remove('played');
      beatJ.classList.add('played');
      if (buttonA_0.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_0.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_0.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_0.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_0.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
      function playNote11(){
    if (soundNumber == 10){
      beatJ.classList.remove('played');
      beatK.classList.add('played');
      if (buttonA_A.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_A.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_A.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_A.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_A.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
        function playNote12(){
    if (soundNumber == 11){
      beatK.classList.remove('played');
      beatL.classList.add('played');
      if (buttonA_B.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_B.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_B.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_B.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_B.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
        function playNote13(){
    if (soundNumber == 12){
      beatL.classList.remove('played');
      beatM.classList.add('played');
      if (buttonA_C.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_C.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_C.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_C.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_C.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
        function playNote14(){
    if (soundNumber == 13){
      beatM.classList.remove('played');
      beatN.classList.add('played');
      if (buttonA_D.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_D.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_D.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_D.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_D.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
          function playNote15(){
    if (soundNumber == 14){
      beatN.classList.remove('played');
      beatO.classList.add('played');
      if (buttonA_E.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_E.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_E.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_E.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_E.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }
            function playNote16(){
    if (soundNumber == 15){
      beatO.classList.remove('played');
      beatP.classList.add('played');
      if (buttonA_F.buttonToggle == true){
      sound.A.currentTime = 0;
      sound.A.play();
      }
      if (buttonB_F.buttonToggle == true){
      sound.B.currentTime = 0;
      sound.B.play();
      }
      if (buttonC_F.buttonToggle == true){
      sound.C.currentTime = 0;
      sound.C.play();
      }
      if (buttonD_F.buttonToggle == true){
      sound.D.currentTime = 0;
      sound.D.play();
      }
      if (buttonE_F.buttonToggle == true){
      sound.E.currentTime = 0;
      sound.E.play();
      }
    }
  }