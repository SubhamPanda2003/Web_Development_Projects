let i=0;
let s={};
var x={};
    var o={};
    var result = document.getElementsByClassName('result');
   
function function1(a){
    if(s[a]!=1)
    {
    s[a]=1;
    var myAudio1 = new Audio('ting.mp3');
    myAudio1. play();
    var b=document.getElementsByClassName('reset');
    var r=document.getElementsByClassName('boxtext');
    if(i%2==0){
    r[a].innerHTML='X';
    x[a]=1;
    o[a]=0;
    }
    else{
    r[a].innerHTML='O';
    o[a]=1;
    x[a]=0;
    }
    console.log("done"+a);
    if(x[0]*x[1]*x[2]==1||x[3]*x[4]*x[5]==1||x[6]*x[7]*x[8]==1||x[0]*x[3]*x[6]==1||x[1]*x[4]*x[7]==1||x[2]*x[5]*x[8]==1||x[0]*x[4]*x[8]==1||x[2]*x[4]*x[6]==1)
      { console.log("X wins");
      result[0].innerHTML="X wins the match!!";
      var myAudio = new Audio('gameover.mp3');
       myAudio. play();
       var myAudio2 = new Audio('music.mp3');
       myAudio2. play();

      }
    if(o[0]*o[1]*o[2]==1||o[3]*o[4]*o[5]==1||o[6]*o[7]*o[8]==1||o[0]*o[3]*o[6]==1||o[1]*o[4]*o[7]==1||o[2]*o[5]*o[8]==1||o[0]*o[4]*o[8]==1||o[2]*o[4]*o[6]==1)
    {console.log("O wins");
    result[0].innerHTML="O wins the match!!";
    var myAudio = new Audio('gameover.mp3');
    myAudio. play();
    var myAudio2 = new Audio('music.mp3');
    myAudio2. play();}
    i++;
    }
}
