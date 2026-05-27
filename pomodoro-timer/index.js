const btnStartEl = document.getElementById("btn-start");
const btnStopEl = document.getElementById("btn-stop");
const btnResetEl = document.getElementById("btn-reset");
const timerEl = document.getElementById("timer");
const timerInputEl = document.getElementById("timer-input");

let interval;
let stopTime = 0;

function updateTimer() {
  h = Math.floor(timerLeft / 3600);
  m = Math.floor((timerLeft % 3600) / 60);
  s = Math.floor(timerLeft % 60);

  let timerFormat = `${h.toString().padStart(2, "0")}h:${m < 10 ? "0" + m : m}m:${s < 10 ? "0" + s : s}s`;

  timerEl.innerText = timerFormat;
  timerLeft--;

  if (timerLeft === 0) {
    clearInterval(interval);
    timerInputEl;
    updateTimer();
    timerInputEl.value = "";
  }
}

function startTimer() {
  if (timerInputEl.value === "") {
    alert("Enter number");
  } else {
    timerLeft = Number(timerInputEl.value);

    interval = setInterval(() => {
      updateTimer();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  stopTime = timerLeft;
  timerInputEl.value = stopTime;
}

function resetTimer() {
  clearInterval(interval);
  timerInputEl.value = "";
  updateTimer();
  timerEl.innerText = "00:00:00";
}

btnStartEl.addEventListener("click", startTimer);
btnStopEl.addEventListener("click", stopTimer);
btnResetEl.addEventListener("click", resetTimer);
