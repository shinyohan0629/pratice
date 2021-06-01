const BODY = document.querySelector("body"),
  NAME = document.querySelector("h1"),
  BUTTON = document.querySelector(".js-button");

function handleClick() {
  const randomColor = randomHex();
  NAME.innerText = `HEX COLOR :#${randomColor}`;
  BODY.style.backgroundColor = `#${randomColor}`;
}

function randomHex() {
  const hex = "0123456789ABCDEF";
  let number = "";
  let i = 0;
  while (i < 6) {
    let index = Math.floor(Math.random() * hex.length);
    number += hex[index];
    i++;
  }
  return number;
}

function init() {
  handleClick();
  BUTTON.addEventListener("click", handleClick);
}

init();
