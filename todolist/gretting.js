const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //css에 .showing을 가지고 옴

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handelSubmit(event) {
  event.preventDefault(); //이벤트를 삭제한다. enter을 눌러도 동작하지 않는다.
  const currentValue = input.value; //input 값을 입력한 데이터 값으로 바꿔준다.
  paintGretting(currentValue);
  saveName(currentValue);
  console.log(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); //user가 없다면 class에서 form을 안보이게 했던 부분을 보이게 바꿔준다.
  form.addEventListener("submit", handelSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWING_CN); //클래스를 삭제
  gretting.classList.add(SHOWING_CN); //클래스를 추가
  gretting.innerText = `Hello${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName(); //user를 갖고 있지 않을 때 실행
  } else {
    paintGretting(currentUser); //user을 갖고 있을 때 실행
  }
}

function init() {
  loadName();
}

init();
