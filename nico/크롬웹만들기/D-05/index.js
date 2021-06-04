const time = document.querySelector("h4");
const body = document.querySelector("body");

body.innerHTML = "Time Until Cristmas";
const backG = "backG";

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const toDay = new Date();

  const diff = xmasDay.getTime() - toDay.getTime();

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((diff % (1000 * 60)) / 1000);

  body.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${secondes < 10 ? `0${secondes}` : secondes}s`;
  body.classList.add(backG);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
