const btnStartEl = document.getElementById("btn-start");
const btnStopEl = document.getElementById("btn-stop");
const btnResetEl = document.getElementById("btn-reset");
const timerEl = document.getElementById("timer");

let interval;
let timerLeft = 1500;

function updateTimer() {
  let m = Math.floor(timerLeft / 60);
  let s = timerLeft % 60;

  let timerFormat = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;

  timerEl.innerText = timerFormat;
  timerLeft--;
  if (timerLeft === 0) {
    clearInterval(interval);
    timerLeft = 1500;
    updateTimer();
  }
}

function startTimer() {
  interval = setInterval(() => {
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timerLeft = 1500;
  updateTimer();
}

btnStartEl.addEventListener("click", startTimer);
btnStopEl.addEventListener("click", stopTimer);
btnResetEl.addEventListener("click", resetTimer);
