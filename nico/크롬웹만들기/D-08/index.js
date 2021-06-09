const range = document.querySelector("#inputValue"),
  numberCheck = document.querySelector("h2"),
  submit = document.querySelector(".js-submit"),
  numCompare = document.querySelector(".compare"),
  compareSpan = document.querySelector(".compareSpan"),
  resultSpan = document.querySelector(".resultSpan");

const a = numCompare;

function handleInput(e) {
  numberCheck.innerText = `Generate a number between 0 and ${e.target.value}`;
}

function handlePlay(event) {
  event.preventDefault();
  const randomNumber = Math.round(Math.random() * range.value);
  compareSpan.innerText = `you Choose : ${a.value}, computer : ${randomNumber}`;
  resultSpan.innerText = a.value == randomNumber ? `You Win` : `You Lost`;
}

function init() {
  range.addEventListener("input", handleInput);
  submit.addEventListener("click", handlePlay);
}

init();
