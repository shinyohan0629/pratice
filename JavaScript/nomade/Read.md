momentum을 만든다.

what is JavaScript?
웹에서 웹사이트를 만들고 싶을 때 쓰는 것이
Javascript다.

장-단점이 있다.
웹사이트를 만들 뿐만 아니라,
게임이나, 사이트의 동작적인 부분들도 다룰 수있다.

-version
ES5, ES6..
ECMAscript5 = ES5 안내책자

바닐라 자바스크립트란?
핵심이다. 실직적인 것. 훨씬 빠르다.

alert를 쓰면 창이 같이 뜬다. 경고메시지.

언어들은 얼마나 다를까?
컨셉은 모든 언어에 통한다

Variable 변경되나거 변경될 수 있는 것
문제점은 나쁜 점 또한 허용한다
좋은 문법이 아니더라도.
변수를 선언하고 ;(세미클론) 을 붙여줘야 한다.
1.Create 창조
2.Initalize 초기화
3.Use 사용

변수를 선언 할 때는 let을 앞에 붙여야 한다.

한 번 선언 된 변수는 let을 따로 안 붙여도 된다.

변수의 값이 바뀌면 안되는 경우는 let이 아닌
const(상수)를 써주면 된다. 안정적이라는 뜻

const a = 221;
let b = a - 5;
a = 4; //에러 발생한다. a는 상수인데 값을 변경하려고 했기 때문에

var = variable 인데, let 과 같은 거지만 현 시점에서는 let만 사용해야한다.
첫 사용은 const, 필요할 때 let을 사용하라

Data Types on Js
string = 텍스트
const what = "Nicoldas";

string은 '', ""을 써준다

Boolean은 True, False 다.
텍스트가 아니다. 0 or 1

Number 그냥 적으면 된다.

float 실수
const what = 55.1;

Organizing Data with Arrays - 배열
Array는 데이터를 저장하는 공간

const monday = "Mon";
const Tue = "Tue";
const Wed = "Wed";
const Thu = "Thu";
const Fri = "Fri";

console.log(monday, tue, wed, thu, fri);
//하지만 효율적이지 않다.

const day-of-week = ["mon", "Tue", "wed", "Thu", "Fri"];
//배열을 선언해준다

console.log(day-of-week);

Array 규칙이 있다.
index는 0부터 시작한다.

Organizing Data with Object - 객체
//실제 객체를 만다는거다
const nici-info = {
name: "Nico",
age:33,
gender: "Male"
};

문법 규칙은 string 앞 뒤로 ,(콤마)를 붙여야 한다.

5.18

# 2PRACTICE

2.0 Your first JS Function
함수란? 수행하려는 한 부분을 여러번 쓸 수 있다.

argument(인자)

함수는 인자를 받는다. 인자는 변수다 우리가 주는 값을 저장한다.

function sayHello(potato){ //함수안에 인자를 넣으면 외부에 있는 데이터를 줄 수 있다.
console.log("hello!", potato);
}

sayHello("Nicolas");

---

function sayHello(name, age){
console.log("hello!", name, "you have", age, "years of age.");
}

sayHello("Nicolas", 15);
console.log();

함수 안에 인자를 넣어줄 수 있다.

2.1 More Function Fun
'', ""로 string을 감싸줘야한다. 또는 ``백터를 이용해서 전체를 감싸줄 수 있다.

function sayHello(name, age){
console.log(`Hello ${name} you are ${age} years old`);
}

const calculator = {
plus: function(a, b) {
return a + b;
}
}
const plus = calculator.plus(5, 5);

const cal = {
min: function(a, b) {
return a - b;
}
}
const min = const.min(5, 3);
console.log(min);

2.2 JS DOM Functions
JS에서 document라는 함수는 HTML을 다루는 걸 허용한다

const title = document.getElementById("title");

console.log(title);
DOM = Document Object Module
자바스크립트는 HTML 태그를 가져와 모든걸 객체로 바꿔준다.
자바스크립트에서 HTML내용 또한 변경할 수 있다

2.3 Modifying the DOM with JS

const title = document.getElementById("title");
console.dir(document);
document.title = "i onw you now";

위 처럼 HTMl의 내용을 JS에서 수정 가능하다

2.4 Events and event handlers
이벤트란 웹사이트에서 발생하는 것들을 다루기 위해 만들어 졌다.

function handleResize() {
console.log("I have been reasized");
}

window.addEventListener("resize", handleResize()); // ()붙여주면 자동으로 호출하고, 붙여주지 않으면 죽시 호출하지 않는다

2.5 if, else, and, or

if(condition) {
block true 일 때
} else {
block false 일 때
}

2.6 DOM - if else -Function practice
const title = document.querySelector('#title');

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
const currentColor = title.style.color;
if(currentColor === BASE_COLOR) {
title.style.color = OTHER_COLOR;
} else {
title.style.color = BASE_COLOR;
}
}

function init() {
title.style.color = BASE_COLOR;
title.addEventListener("click", handleClick);
}

init();

이런식으로 로직을 추가할 수 있다. 이벤트는 많기 때문에 MDN에서 Event reference를 찾으면 된다.

2.7 DOM-if else-Function practice Two
toggle을 이용해서 짧게 만들 수 있다.

#MAKE YOUR FIRST JS APP

#3.0 Making a JS Clock part One
시계 생성

-html

<div class="js-clock">
<h1>00:00</h1>
</div>
<script src="clock.js"></script>

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
const date = new Date();
const minutes = date.getMinutes();
const hours = date.getHours();
const seconds = date.getSeconds();
clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
getTime();
}

init();

#3.1 Making a JS Clock part Two
setInterval()
두개의 인자를 받는데, 첫 번째는 인자, 두 번째는 함수를 실행하고 싶은 시간간격

조건문 ? true : false

#3.2 Saving the User Name part One
localStorage.setItem를 이용해서 데이터를 입력받으면 사이트의 저장 할 수 있다.

JSON.stringify 는 자바스크립트 object를 string으로 바꿔준다.
JSON = JavaScript Object Notation

#3.5 Making a To Do List part Two
li를 js에서 추가하고 그것에 값을 string을 object로 자동으로 저장되게했다.

parseInt
string을 숫자로 바꿀 수 있다.

중요한 것은
filter, forEach 이다.
list에 있는 모든 item을 위한 함수를 실행 시키는 것이다

math.floor - 모든 소수점을 버려준다
math.ceiling - 모든 소수점을 올림한다.
