"use strict";
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoFinish = document.querySelector(".js-toDoFinish");

const TODOS_PD = "pending";
const TODOS_FIN = "finished";

let toDos = [];
let Finished = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
  toDos = toDos.filter(function (toDo) {
    //거른다
    return toDo.id !== li.id;
  });
  Finished = Finished.filter(function (toDo) {
    //거른다
    return toDo.id !== li.id;
  });
  savePD();
  saveFin();
}

function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const task = toDos.find((toDo) => toDo.id === li.id);
  toDos = toDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  paintFin(task); //그림을 그린다
  Finished.push(task); // 로컬저장소에 저장시킨다.
  savePD();
  saveFin();
}

function backPendig(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoFinish.removeChild(li);
  const task = Finished.find((toDo) => toDo.id === li.id);
  Finished = Finished.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  paintToDo(task);
  toDos.push(task);
  savePD();
  saveFin();
}

function savePD() {
  localStorage.setItem(TODOS_PD, JSON.stringify(toDos));
  //obj를 JOSN을 통해 string으로 바꾼다.
}

function saveFin() {
  localStorage.setItem(TODOS_FIN, JSON.stringify(Finished));
}

function paintToDo(obj) {
  const li = createLi(obj.text);
  const passBtn = document.createElement("button");
  passBtn.innerText = "✅";
  passBtn.addEventListener("click", finishToDo);
  li.appendChild(passBtn);
  toDoList.appendChild(li);
  li.id = obj.id;
}

function paintFin(obj) {
  const li = createLi(obj.text);
  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  li.appendChild(backBtn);
  backBtn.addEventListener("click", backPendig);
  toDoFinish.appendChild(li);
  li.id = obj.id;
}

function createLi(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text;
  //li 에다가 id 매게변수 받는 방법, 그 안에서 addtoDO실행
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  li.append(span, delBtn);
  return li;
}

//함수의 범위 안에 있는 것을 다른 것으로 넘길 때는 2가지가 있다.
// 1.전역변수 선언 - 할당 - 실행
// 2. 인자로 넘어주는 법 - 어려움  함수(인자) - 매개변수와 인수를 쓰는 법을 각인
// 3. 반환값으로 받는다.

function addToDo(text) {
  const toDoobj = {
    text: text,
    id: String(Date.now()),
  };
  return toDoobj; //return은 반환이다. toDoobj를 뱉어내고 끝난다.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  const task = addToDo(currentValue);
  paintToDo(task);
  toDos.push(task);
  savePD();
  toDoInput.value = "";
}

function loadPending() {
  const loadPending = localStorage.getItem(TODOS_PD);
  if (loadPending !== null) {
    toDos = JSON.parse(loadPending);
    //pars를 통해 string을 다시 obj로 바꿔준다.
    toDos.forEach(function (toDo) {
      paintToDo(toDo);
    });
  }
  const loadFinished = localStorage.getItem(TODOS_FIN);
  if (loadFinished !== null) {
    Finished = JSON.parse(loadFinished);
    Finished.forEach(function (toDo) {
      paintFin(toDo);
    });
  }
}

function init() {
  loadPending();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
