3.0 JS Clock part One

const clockContainer = document.querySelector(".js-clock"), //html에 입력한 class를 js로 가지고 온다.
clockTitle = clockContainer.querySelector("h1"); //html에 입력된 h1을 js로 가져온다

function getTime(){ //getTime이라는 함수를 선언
const date = new Date(); //전체 시간
const minutes = date.getMinutes(); //분
const hours = date.getHours(); //시간
const seconds = date.getSeconds(); //초
clockTitle.innerText = `${hours}:${minutes}:${seconds}`; //시간: 분: 초 순서대로 나오게 선언 innerText는 Text가 나오게 하는 부분
}

function init() { //init라는 함수에 getTime함수를 가져와 실행시킬 준비를 한다.
getTime();

}

init(); //init함수 실행

하지만 실시간으로 바뀌지 않고 f5를 누를 때 바뀐다.

3.1 JS Clock part two - 실시간으로 시간이 바뀌게 한다

seInterval(fn, 시간간격)

const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
clockContainer.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; //삼항연산자를 사용 조건식 ? true : false
}

function init(){
getTime();
setInterval(getTime, 1000); //setInterval(함수, 시간); getTime의 함수를 가져와서, 1000 1초후 나타나게한다.
}

init();

3.2

<input type="text" placeholder="What is your name?">
input text를 입력할 수 있는 란을 넣어주고, placehorder통해 문장을 넣어준다

localStorage.setItem을 통해 네트워크에 내용이 남게 할 수 있다.

const form = document.querySelector(".js-form"), //document = search inside of all the document
input = form.querySelector("input"), //form = search only inside the form
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing"; //css파일에 추가한 .showing을 불러와서 제거하기도하고, 추가하기도 한다.

function paintGreeting(text){
form.classList.remove(SHOWING_CN); // 클래스를 필요에 따라 제거한다
greeting.classList.add(SHOWING_CN); //클래스를 필요에 따라 추가한다
greeting.innerText = `Hello ${text}`;
}

function loadName() {
const currentUser = localStorage.getItem(USER_LS);
if (currentUser === null) {

    } else {
        paintGreeting(currentUser);
    }

}

function init() {
loadName();
}

init();

3.3
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TO_DOS_LS = "toDos";

let toDos = [];//toDos는 비어있다.

function deleteToDo(event) {
const btn = event.target; //X버튼을 누르는데 어떤 버튼인지 알게 한다.
const li = btn.parentNode; //li id를 알게 한다
toDoList.removeChild(li); // 생성시켜주었던 li버튼을 삭제 - 하지만 새로고침하면 다시 돌아온다 WHY?
const cleanToDos = toDos.filter(function(toDo){
return toDo.id !== parseInt(li.id); //parseInt를 string을 숫자로 바꿀 수 있다.
});
todos = cleanToDos;
saveToDos();
}

function saveToDos(){
localStorage.setItem(TO_DOS_LS, JSON.stringify(toDos)); //localstorage에는 JS의 data를 저장할 수가 없다 오직 string만 저장할 수 있다. obj를 string으로 바꿔주는 JSON.stringify를 쓴다.
}

function paintToDo(text) {
const li = document.createElement("li"); //li이란 Element 선언
const delBtn = document.createElement("button"); //button Element 선언
const span = document.createElement("span"); //span Element 선언
const newId = toDos.length + 1; //시작하면 배열이 0이기 때문에 +1을 넣어준다.
delBtn.innerText = "X";
delBtn.addEventListener("click", deleteToDo); //event 생성, click 하면 deletToDo가 실행
span.innerText = text;
li.appendChild(delBtn); // li가 delBtn 안으로 들어간다
li.appendChild(span); //father element 안에 넣는 것 li가 span 안에 들어간다
li.id = newId;
toDoList.appendChild(li); //ul이였던 toDoList안에 li-span,delBtn이 들어간다
const toDoObj = {
text: text,
id: newId
};
toDos.push(toDoObj);
saveToDos();
}

function handleSubmit(event) {
event.preventDefault();
const currentValue = toDoInput.value;
paintToDo(currentValue);
toDoInput.value = "";
}

function loadToDos() {
const loadedToDos = localStorage.getItem(TO_DOS_LS);
if (loadedToDos !== null) {
const parsedToDos = JSON.parse(loadedToDos); //위에 JSON을 이용해서 string으로 바꿔주고 null이 아닐 때는 obj로 바꿔준다.
parsedToDos.forEach(function(toDo){ // forEach는 기본적으로 함수를 실행하는데 array에 담겨있는 것들을 각각 한 번씩 실행한다.
paintToDo(toDo.text);
});
}
}

function init(){
loadToDos();
toDoForm.addEventListener("submit", handleSubmit)
}

init();
