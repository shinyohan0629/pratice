"use strict";
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
  let i;
  let cells;
  for (i = 0; i < first_day; i++) {
    row.insertCell();
  }
  for (i = 1; i <= last_date; i++) {
    if (first_day != 7) {
      cells = row.insertCell();
      cells.setAttribute("id", i);
      cells.innerHTML = i;
      first_day += 1;
    } else {
      row = CALENDAR.insertRow();
      cells = row.insertCell();
      cells.setAttribute("id", i);
      cells.innerHTML = i;
      first_day -= 6;
      //지역변수는 괄호안에서만 쓰인다.
    }
  }
}

function todayColor() {
  makeCalendar();
  const sets = Array.from(document.querySelectorAll("td"));

  //sets 안에 td가 들었죠 td 안에 들어있는 숫자.
  //i는 숫자다 숫자랑 배열이랑 비교가 안된다. nodeList
  //는 유사배열인데 배열이 아니다.
  //배열로 다 하나씩 바꿔서 넣어서 그 배열을 이용해 [i]와
  //date와 같은것에 색을 칠한다.
  sets.forEach((j) => {
    console.log(j.innerText); //innerText를 가져올 수 있다.
    console.log(date);
    if (String(date) === j.innerText) {
      //타입을 비교한다 === / ==
      //변수 안에 뭐가 들어있는지 보기
      j.style.color = "red";
    }
  });
}

function init() {
  miniToday();
  todayColor();
}

init();
