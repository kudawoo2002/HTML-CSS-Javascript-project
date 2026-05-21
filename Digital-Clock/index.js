const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  hourEl.innerText = `${h < 10 ? "0" + h : h}`;
  minuteEl.innerText = `${m < 10 ? "0" + m : m}`;
  secondEl.innerText = `${s < 10 ? "0" + s : s}`;

  setTimeout(updateClock, 1000);
}

updateClock();
