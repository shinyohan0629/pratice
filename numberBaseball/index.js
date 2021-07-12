const $input = document.querySelector("#input"),
  $form = document.querySelector("#form"),
  $logs = document.querySelector("#logs");

const number = [];
for (let i = 0; i < 9; i++) {
  number.push(i + 1);
}
const answer = [];
for (let j = 0; j < 4; j++) {
  const index = Math.floor(Math.random() * number.length);
  answer.push(number[index]);
  number.splice(index, 1); // 원래 있는 거는 빼주는 것
}

const trires = [];

let out = 0;
function checkInput(input) {
  if (input.length !== 4) {
    return alert("4자리 입력하세요");
  }
  if (new Set(input).size !== 4) {
    return alert("중복되지 않게 해주세요");
  }
  if (trires.includes(input)) {
    return alert("이미 시도한 값입니다.");
  }
  return true;
}

function clickCheck(event) {
  event.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    return;
  }
  if (answer.join("") === value) {
    $logs.append(`홈런입니다.`, document.createElement("br"));
    $form.removeEventListener("submit", clickCheck);

    return;
  }
  if (trires.length >= 9) {
    $logs.append(
      `10번 초과했습니다. 정답은 ${answer.join("")}입니다.`,
      document.createElement("br")
    );
    $form.removeEventListener("submit", clickCheck);

    return;
  }
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value} : 아웃`, document.createElement("br"));
  } else {
    $logs.append(
      `${value}: ${strike} 스트라이크 ${ball} 볼`,
      document.createElement("br")
    );
  }
  if (out === 3) {
    $logs.append(
      `3아웃입니다. 정답은 ${answer.join("")}`,
      document.createElement("br")
    );
    $form.removeEventListener("submit", clickCheck);
  }
  trires.push(value);
}

$form.addEventListener("submit", clickCheck);
console.log(answer);
