let millisec = document.querySelector(".millisec");
let second = document.querySelector(".sec");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let sec = 2;
let ms = 999;
let desc = document.querySelector(".desc");
let topDesc = document.querySelector(".top-desc");
let winner = document.querySelector(".winner");
let timmer = document.querySelector(".timer");
let userSec = document.querySelector(".user-sec");
let userMS = document.querySelector(".user-ms");
let custom = document.querySelector(".custom");
let videosec = document.querySelector(".video-section");
let name = document.querySelector(".name-submit");

let isRunnning = false;
// function display() {
//   topDesc.style.display = "block";
// }
// function submitFunction{
//   topDesc.style.display="none";
// }

function user() {
  custom.style.display = "flex";
}
function back() {
  custom.style.display = "none";
}
function pass() {
  sec = userSec.value;
  // ms=userMS.value;
  stopwatch();

  custom.style.display = "none";
  // millisec.innerHTML=ms;
  second.innerHTML = sec;
}

function startFunction() {
  if (ms > 0 || sec > 0) {
    isRunnning = true;
    stopwatch();
    videosec.play();
    pause.style.display = "block";
    start.style.display = "none";
  }
}
function resetFunction() {
  desc.innerHTML = "0" + (Math.random() * 3).toFixed(3);
  isRunnning = false;
  stopwatch();
  sec = 2;
  ms = 999;
  document.querySelector(".millisec").innerText = "000";
  document.querySelector(".sec").innerText = "03";

  winner.innerHTML = "";
  pause.style.display = "none";
  start.style.display = "block  ";
}

function pauseFunction() {
  videosec.pause();
  isRunnning = false;
  stopwatch();
  console.log(desc.innerHTML);

  if (timmer.innerHTML == desc.innerHTML) {
    winner.innerHTML = "GOT IT🙌";
    winner.style.color = "greenyellow";
    pause.style.display = "none";
    start.style.display = "block";
    timmer.style.color = "orange";
  } else {
    winner.innerHTML = "Try Again‼";
    pause.style.display = "none";
    start.style.display = "none ";
  }

  if (millisec.innerText == "000" && second.innerText == "00") {
    pause.style.display = "none";
    start.style.display = "none ";
  }
}

function stopwatch() {
  if (isRunnning) {
    ms--;
    if (ms == 0) {
      sec--;
      ms = 999;
    }
    if (sec < 0) {
      ms = 0;
      sec = 0;
      isRunnning = false;
    }

    let second = sec;
    let milli = ms;

    if (sec < 10) {
      second = "0" + second;
    }

    if (ms < 100) {
      milli = "0" + milli;
    }

    if (ms <= 10) {
      milli = "0" + milli;
    }

    document.querySelector(".sec").innerHTML = second;
    document.querySelector(".millisec").innerHTML = milli;
    setTimeout(stopwatch, 1);
  }
  if (millisec.innerText == "000" && second.innerText == "00") {
    pause.style.display = "none";
    start.style.display = "none ";
  }
}
