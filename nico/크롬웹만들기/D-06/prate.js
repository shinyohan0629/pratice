const SELECT = document.querySelector("select");
const OPTION = SELECT.querySelectorAll("option");

function handleClick() {
  let OptEln = SELECT.selectedOptions;
  let currentValue = OptEln[0].value;
  console.log(OptEln[0]);
  localStorage.setItem("country", currentValue);
}

function addfn() {
  const currentCountry = localStorage.getItem("country");
  for (let i = 0; i < OPTION.length; i++) {
    if (currentCountry === OPTION[i].value) {
      OPTION[i].setAttribute("selected", "selected");
    }
  }
}

function init() {
  SELECT.addEventListener("change", handleClick);
}

addfn();
init();
