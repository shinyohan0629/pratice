const SELECT = document.querySelector("select");
const OPTION = SELECT.querySelectorAll("option");

function handleClick() {
  //선택하면 selelct의 value값이 나온다.
  let OptEle = SELECT.selectedOptions;
  console.log(OptEle);
  let currentValue = OptEle[0].value;
  localStorage.setItem("country", currentValue); //앞부분은 string ""을 쓰면 그 자체의 string이 된다.
}

function addfn() {
  const currentCountry = localStorage.getItem("country");
  for (let i = 0; i < OPTION.length; i++) {
    if (currentCountry === OPTION[i].value) {
      OPTION[i].setAttribute("selected", "selected");
    }
  }
}
//option의 각 배열의 값을 구해준다.
//OPTION의 innerText와 currentCountry와 같다면
//그 값에 set어트리뷰트를 넣어준다.
//값 가져와야한다.

function init() {
  SELECT.addEventListener("change", handleClick);
}

addfn();
init();

//1. html의 option을 가지고 온다.
//2. select를 클릭해서 value를 선택한다.
//3. 선택한 값이 localstorge저장소의 값이 저장이된다.
//4. localstorge는 setitem으로 (키와 value) 값을 저장시킨다.
//5. 새로고침했을 때도 localstorge와 화면에서 그대로 나와있어야 한다.

//1. select창을 클릭해서 나라를 선택한다.
//2. 로컬저장소에 키와 value의 coutry, kr이 입력된다.
//3. 새로고침을 눌러도 그 값과 선택된 창은 바뀌지 않는다.
