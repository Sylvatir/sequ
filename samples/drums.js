
var onOff = false;
var startstop;
var soundNumber = -1;

function setup(){
  window.sound.A = document.getElementById('note1');
  window.sound.B = document.getElementById('note2');
  window.sound.C = document.getElementById('note3');
  window.sound.D = document.getElementById('note4');
  window.sound.E = document.getElementById('note5');
  window.sound.F = document.getElementById('note6');
  window.sound.G = document.getElementById('note7');
  window.sound.H = document.getElementById('note8');
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
  window.tempo = 250;
  
}

var buttons = {
  buttonToggle: false
};

var sound = {};

  //tempo from ms to bpm
  
function changeTempo() {
  var x = document.getElementById('msInt').value
  tempo = ( 60 / (x) * 1000 );
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
      if (button1_1.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_1.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_1.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_1.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_1.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }

  function playNote2(){
    if (soundNumber == 1){
      beatA.classList.remove('played');
      beatB.classList.add('played');
      if (button1_2.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_2.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_2.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_2.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_2.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
  function playNote3(){
    if (soundNumber == 2){
      beatB.classList.remove('played');
      beatC.classList.add('played');
      if (button1_3.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_3.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_3.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_3.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_3.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote4(){
    if (soundNumber == 3){
      beatC.classList.remove('played');
      beatD.classList.add('played');
      if (button1_4.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_4.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_4.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_4.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_4.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote5(){
    if (soundNumber == 4){
      beatD.classList.remove('played');
      beatE.classList.add('played');
      if (button1_5.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_5.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_5.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_5.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_5.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote6(){
    if (soundNumber == 5){
      beatE.classList.remove('played');
      beatF.classList.add('played');
      if (button1_6.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_6.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_6.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_6.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_6.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote7(){
    if (soundNumber == 6){
      beatF.classList.remove('played');
      beatG.classList.add('played');
      if (button1_7.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_7.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_7.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_7.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_7.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote8(){
    if (soundNumber == 7){
      beatG.classList.remove('played');
      beatH.classList.add('played');
      if (button1_8.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_8.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_8.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_8.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_8.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote9(){
    if (soundNumber == 8){
      beatH.classList.remove('played');
      beatI.classList.add('played');
      if (button1_9.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_9.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_9.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_9.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_9.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote10(){
    if (soundNumber == 9){
      beatI.classList.remove('played');
      beatJ.classList.add('played');
      if (button1_0.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_0.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_0.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_0.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_0.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote11(){
    if (soundNumber == 10){
      beatJ.classList.remove('played');
      beatK.classList.add('played');
      if (button1_A.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_A.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_A.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_A.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_A.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote12(){
    if (soundNumber == 11){
      beatK.classList.remove('played');
      beatL.classList.add('played');
      if (button1_B.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_B.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_B.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_B.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_B.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote13(){
    if (soundNumber == 12){
      beatL.classList.remove('played');
      beatM.classList.add('played');
      if (button1_C.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_C.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_C.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_C.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_C.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote14(){
    if (soundNumber == 13){
      beatM.classList.remove('played');
      beatN.classList.add('played');
      if (button1_D.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_D.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_D.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_D.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_D.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote15(){
    if (soundNumber == 14){
      beatN.classList.remove('played');
      beatO.classList.add('played');
      if (button1_E.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_E.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_E.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_E.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_E.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }
    function playNote16(){
    if (soundNumber == 15){
      beatO.classList.remove('played');
      beatP.classList.add('played');
      if (button1_F.buttonToggle == true){
      sound.1.currentTime = 0;
      sound.1.play();
      }
      if (button2_F.buttonToggle == true){
      sound.2.currentTime = 0;
      sound.2.play();
      }
      if (button3_F.buttonToggle == true){
      sound.3.currentTime = 0;
      sound.3.play();
      }
      if (button4_F.buttonToggle == true){
      sound.4.currentTime = 0;
      sound.4.play();
      }
      if (button5_F.buttonToggle == true){
      sound.5.currentTime = 0;
      sound.5.play();
      }
    }
  }