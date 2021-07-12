const prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  img = document.querySelector(".img"),
  dot = Array.from(document.querySelectorAll(".dot"));
console.log(dot);

let i = 1;
function changeImg() {
  img.src = `${i}.jpg`;
}

function handlePrevBtn() {
  i--;
  if (i < 1) {
    i = 5;
  }
  changeImg();
  handleconfirm();
}
function handleNextBtn() {
  i++;
  if (i > 5) {
    i = 1;
  }
  changeImg();
  handleconfirm();
}

function handleconfirm() {
  dot.forEach((j) => {
    j.style.backgroundColor = "blue";
  });
  dot[i - 1].style.backgroundColor = "black";
}

function handleClick(event) {
  handleconfirm();
  dot.forEach((j, index) => {
    if (j === event.target) {
      i = index + 1;
      changeImg();
      handleconfirm();
    }
  });
}

prev.addEventListener("click", handlePrevBtn);
next.addEventListener("click", handleNextBtn);
handleconfirm();
dot.forEach((j) => j.addEventListener("click", handleClick));
