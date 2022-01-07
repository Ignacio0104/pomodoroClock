const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");



document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //Allows us to execute this command withouth stopping the clock
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
  document.getElementById("saveMessage").classList.add("save_message");
  document.getElementById("saveMessage").innerHTML="Settings saved";
  
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  minutesInput.textContent = 0;
  secondsInput.textContent = 0;
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    timer = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "Pause";
    pauseBtn.classList.remove("resume");
  } else {
    clearTimeout(timer);
    pauseBtn.textContent = "Resume";
    pauseBtn.classList.add("resume");
    paused = true;
  }
});