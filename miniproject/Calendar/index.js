const YEAR = document.querySelector(".year"),
  MONTH = document.querySelector(".month"),
  DATE = document.querySelector(".date"),
  DAY = document.querySelector(".day");
let CALENDAR = document.querySelector(".calendar");

let today = new Date();
const year = today.getFullYear(),
  month = today.getMonth(),
  date = today.getDate(),
  day = today.getDay();

const last_date = new Date(year, month + 1, 0).getDate();
let first_day = new Date(year, month, 1).getDay();

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

function makeCalendar() {
  let row = CALENDAR.insertRow();
  for (let i = 0; i < first_day; i++) {
    let cell = row.insertCell();
  }
  for (i = 1; i <= last_date; i++) {
    if (first_day != 7) {
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerHTML = [i];
      first_day += 1;
    } else {
      row = CALENDAR.insertRow();
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerHTML = [i];
      first_day -= 6;
    }
  }
}
function todayColor() {
  makeCalendar();
  for (i = 1; i <= last_date; i++) {}
}

function init() {
  miniToday();
  makeCalendar();
}

init();
