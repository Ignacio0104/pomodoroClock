const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

function cleanClass(){ //Show the save settings message and then hide it
  document.getElementById("saveMessage").classList.remove("save_message");
  document.getElementById("saveMessage").innerHTML="";
}

document.querySelector("form").addEventListener("submit", (event) => {
  click.play();
  event.preventDefault(); //Allows us to execute this command withouth stopping the clock
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
  document.getElementById("saveMessage").classList.add("save_message");
  document.getElementById("saveMessage").innerHTML="Settings saved";
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  click.play();
  clearTimeout(timer);
  setProgress(0);
  minutesInput.textContent = 0;
  secondsInput.textContent = 0;
  pauseBtn.style.transform = "scale(0)";
  pause=false;
  pauseBtn.textContent = "Pause";
  pauseBtn.classList.remove("resume");
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  click.play();
  if (paused) {
    paused = false;
    timer = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "Pause";
    pauseBtn.classList.remove("resume");
  } else {
    clearTimeout(timer);
    pauseBtn.textContent = "Resume";
    pauseBtn.classList.add("resume");
    resetBtn.style.transform = "scale(1)";
    paused = true;
  }
});