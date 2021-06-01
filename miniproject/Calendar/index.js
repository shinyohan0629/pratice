const YEAR = document.querySelector(".year"),
  MONTH = document.querySelector(".month"),
  DATE = document.querySelector(".date"),
  DAY = document.querySelector(".day");

let today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();

const dayEn = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthEn = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUl",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function weekDay() {
  let i = 0;
  let j = 0;
  if (date[i] === week[i]) {
    return;
  }
}

function miniToday() {
  YEAR.innerText = `${year}`;
  MONTH.innerText = `${monthEn[month]}`;
  DATE.innerText = `${date}`;
  DAY.innerText = `${dayEn[day]}`;
}

function init() {
  miniToday();
}

init();
