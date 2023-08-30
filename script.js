var timer = 10;
var score = 0;
var num = 0;

function increaseScore() {
    score += 10;
    document.getElementById('scoreval').textContent = score;
}


function gethit(){
    num = Math.floor(Math.random() *10);
    document.getElementById('hittingHit').innerHTML = num;
}

function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 180; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#panelbtm").innerHTML = clutter;
}


function setTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(timerint);
        document.querySelector('#panelbtm').innerHTML =`<h1>GAME OVER</h1>`;
    }
  }, 1000);
}

document.querySelector("#panelbtm").addEventListener("click" , function(details){
    var clickedno = Number(details.target.textContent);
    if(clickedno === num){
        increaseScore();
        makeBubble();
        gethit();
    }
});

gethit();
setTimer();
makeBubble();

