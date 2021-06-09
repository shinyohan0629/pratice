const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
let toDoFinish = document.querySelector(".js-toDoFinish");

const TODOS_PD = "pending";
const TODOS_FIN = "finished";

let toDos = [];
let Finished = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  savePD();
}

function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const penCopy = li.cloneNode(true);
  const id = penCopy.id;
  const text = li.querySelector("span").innerText;
  toDoFinish.appendChild(penCopy);
  toDoList.removeChild(li);
  // Finished = toDos;
  // const cleanToDos = Finished.filter(function (toDo) {
  //   return toDo.id !== parseInt(li.id);
  // });
  // toDos = cleanToDos;
  const objFin = addToDo(id, text);
  Finished.push(objFin);
  saveFin();
  // savePD();
}

function savePD() {
  localStorage.setItem(TODOS_PD, JSON.stringify(toDos));
  //obj를 JOSN을 통해 string으로 바꾼다.
}

function saveFin() {
  localStorage.setItem(TODOS_FIN, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const passBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  passBtn.innerText = "->";
  delBtn.addEventListener("click", deleteToDo);
  passBtn.addEventListener("click", finishToDo);
  span.innerText = text;
  li.append(span, delBtn, passBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const obj = addToDo(newId, text); //
  toDos.push(obj);
  savePD();
}
//함수의 범위 안에 있는 것을 다른 것으로 넘길 때는 2가지가 있다.
// 1.전역변수 선언 - 할당 - 실행
// 2. 인자로 넘어주는 법 - 어려움  함수(인자) - 매개변수와 인수를 쓰는 법을 각인
// 3. 반환값으로 받는다.

function addToDo(id, text) {
  const toDoobj = {
    text: text,
    id: id,
  };
  return toDoobj; //return은 반환이다. toDoobj를 뱉어내고 끝난다.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadPending() {
  const loadPending = localStorage.getItem(TODOS_PD);
  if (loadPending !== null) {
    const parsedToDOs = JSON.parse(loadPending);
    //pars를 통해 string을 다시 obj로 바꿔준다.
    parsedToDOs.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function loadFinished() {
  const loadFinished = localStorage.getItem(TODOS_FIN);
  if (loadFinished !== null) {
    const parsedToDOs = JSON.parse(loadFinished);
    parsedToDOs.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadPending();
  loadFinished();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
