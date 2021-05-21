const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];//toDos는 비어있다.

function deleteToDo(event) {
    const btn = event.target; //X버튼을 누르는데 어떤 버튼인지 알게 한다.
    const li = btn.parentNode; //li id를 알게 한다
    toDoList.removeChild(li); // 생성시켜주었던 li버튼을 삭제 - 하지만 새로고침하면 다시 돌아온다 WHY?
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //parseInt를 string을 숫자로 바꿀 수 있다.
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //localstorage에는 JS의 data를 저장할 수가 없다 오직 string만 저장할 수 있다. obj를 string으로 바꿔주는 JSON.stringify를 쓴다.
}

function paintToDo(text) {
    const li = document.createElement("li"); //li이란 Element 선언
    const delBtn = document.createElement("button"); //button Element 선언
    const span = document.createElement("span"); //span Element 선언
    const newId =  toDos.length + 1; //시작하면 배열이 0이기 때문에 +1을 넣어준다.
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
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); //위에 JSON을 이용해서 string으로 바꿔주고 null이 아닐 때는 obj로 바꿔준다.
        parsedToDos.forEach(function(toDo){  // forEach는 기본적으로 함수를 실행하는데 array에 담겨있는 것들을 각각 한 번씩 실행한다.
        paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();