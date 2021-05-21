const form = document.querySelector(".js-form"), //document = search inside of all the document
    input = form.querySelector("input"), //form = search only inside the form
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); //로컬저장소에 이름일 기억하게 한다.
}

function handleSubmit(event){
    event.preventDefault(); //페이지가 새로고침되는 것을 고친다.
    const currentValue = input.value; //input의 value값을 변경할 수 있다.
    paintGreeting(currentValue); //paintGreeting은 text가 필요하기 때문에 currentValue를 넣어줘서 text가 들어가게 해준다
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);//제출됨과 동시에 handleSubmit함수가 실행된다.
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 클래스를 필요에 따라 제거한다
    greeting.classList.add(SHOWING_CN); //클래스를 필요에 따라 추가한다
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}



function init() {
    loadName();
}

init();