const el = document.querySelector(".clock");
const bell = document.querySelector("audio");
const click = new Audio("/assets/click.mp3");

const minutesInput = document.querySelector(".minutes");
const secondsInput = document.querySelector(".seconds");

const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
localStorage.setItem("btn", "focus");

let timer, totalSeconds, percentage, paused, mins, secs;

startBtn.addEventListener("click", () => { //Here we check what kind of button was saved at localStorage
  let btn = localStorage.getItem("btn");
  click.play();
  if (btn === "focus") { //Here we assign the value depending on the type
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }
  secs = mins * 60;
  totalSeconds = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  resetBtn.style.transform = "scale(0)";
  pauseBtn.style.transform = "scale(1)";
  paused = false;
});

function decremenT() {
  minutesInput.textContent = Math.floor(secs / 60)> 9 ? Math.floor(secs / 60) : `0${Math.floor(secs / 60)}`;
  secondsInput.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;
  if (circle.classList.contains("danger")) { //We add or remove the danger class
    circle.classList.remove("danger");
  }
  if (secs > 0) {
    percentage = Math.ceil(((totalSeconds - secs) / totalSeconds) * 100);
    setProgress(percentage);
    secs=secs-1;
    timer = setTimeout("decremenT()", 1000);
    if (secs < 10) {
      circle.classList.add("danger");
    }
  } else {
    mins = 0;
    secs = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      startBtn.textContent = "Start break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "Start focus";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}