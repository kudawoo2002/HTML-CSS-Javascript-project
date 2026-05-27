const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newDate = new Date("2027-1-1 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const now = new Date().getTime();
  const gap = newDate - now;
  const second = 1000;
  const minutes = second * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / second);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountDown, 1000);
}
