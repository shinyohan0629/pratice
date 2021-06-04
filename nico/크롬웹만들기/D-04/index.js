const body = document.querySelector("body");

body.innerText = "Hello!";
body.style.backgroundColor = "#673ab7";

const colors = ["#64dd17", "#673ab7", "#ff8f00"];

function windowSize() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth <= 500) {
    body.style.backgroundColor = colors[0];
  } else if (windowWidth <= 750) {
    body.style.backgroundColor = colors[1];
  } else if (windowWidth <= 850) {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", windowSize);
