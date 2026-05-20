const monthEl = document.querySelector("#month");
const weekDayEl = document.querySelector("#weekDay");
const weekNumberEl = document.querySelector("#weekNumber");
const fullYearEl = document.querySelector("#fullYear");

const date = new Date();

console.log(date);
const newMonth = date.toLocaleString("en-US", { month: "long" });
monthEl.innerText = newMonth;

const newWeekDay = date.toLocaleString("en-US", { weekday: "long" });
weekDayEl.innerText = newWeekDay;

const weekDayNumber = date.getDate();
weekNumberEl.innerText = weekDayNumber;

const newFullYear = date.getFullYear();
fullYearEl.innerText = newFullYear;
