let timer = 60;
let score = 0;
let hitrn = 0;

//kun hit garnay change garako
function newhitval() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitkoval").innerHTML = hitrn;
}


// Bubble banaune code
function cbubbles() {
  let tbubble = "";
  for (let i = 0; i < 75; i++) {
    let rn = Math.floor(Math.random() * 10);
    tbubble += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = tbubble;
}

  

// Timer run garnay code
function rtimer() {
  let timernonneg = setInterval(() => {
    if (timer > 0) {
      timer--;
      //   timer -ve dekhaudina
      document.querySelector("#timerv").textContent = timer;
    } 
    else {
      // timer -ve jadaina
      clearInterval(timernonneg);
      // Game over
      document.querySelector("#pbtm").innerHTML =  `<h1> Game Over </h1>`;
    }
  }, 1000);
}


// score badaunay
function Iscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click",function(dets)
{
  let numclicked = Number(dets.target.textContent);
if (numclicked === hitrn){
  Iscore();
  newhitval();
cbubbles();
}
});




newhitval();
cbubbles();
rtimer();


