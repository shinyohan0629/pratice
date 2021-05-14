//function 여러번 재사용 가능하고 값을 계산하기 위해 쓰인다.


//1.Function declaration
//function name{param1, param2} { body... return; }
//한 가지 함수는 하나의 일만 작동하게 해야한다
//함수이름은 동사형태로 해야한다 command 같이
//함수를 세분화 해서 동작이 복잡하면 안된다.
//function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@'); // Hello로 나온다.

//2.parameters
//premitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj) {
    obj.name = 'cooder';
}
const ellie = { name: 'ellie'}; // 메모리에는 obj인 reference가 들어가고 그건 ellie를 칭한다 그럼 obj.name = 'cooder'가 들어가서 name = cooder로 바뀐다.
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'); {
    console.log('${message} by ${from}');
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) { //배열로 선언된다. 인자 3개가 들어있는 배열
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) { //const of로도 구할 수 있다.차례대로 하나씩 지정해서 나오게 한다
        console.log(arg);
    }
    
    // args.forEach((args) => console.log(arg)); 배열 forEach로 구하는 법도 있다 이건 나중에 Array에서 더 나간다
}
printAll('dream', 'coding', 'ellie'); //인자 3개 전달

//5. Local scope
let globalMessage = 'global'; // golbal variable
function printMessage() {
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage(); //밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. 블록 안에서 변수를 선언하면 지역변수다 밖에서 지역변수를 쓰면 안나온다 이게 scope이다.

//6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1,2); //3
console.log('sum: ${sum(1,2)}');

//7. Early return, early exit 
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic..
    } 
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic... 리턴을 빨리하고 필요한 로직을 뒤에다 작성한다
}

//first-class function이란 ?
//다른 변수와 마찬가지로 할당되고, assigned, passed, returned 된다.
//function expression
const print = function () {// 함수 이름이 없는 건 anonymous function이라고 한다 아니면 작성 할 수 있다.
    console.log('print');
};
print(); //print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

//callback function using function expression 
function randomQuiz(answer, printYes, pirntNo) { //정답과 대답 답변 2개, 답변 2가지는 callback 함수를 호출한다
    if (answer === 'love you') {
        printYes();
    } else {
        pirntNo();
    }
}

//anonymous function
const printYes = function() {
    console.log('yes!');
};

//named function
//디버깅 할 때 함수가 나오게 하려고 나온다 또는 함수 안에서 또 다른 함수를 호출 할 때 사용한다 예)피보나치
const pirntNo = function print() {
    console.log('No!');
};
randomQuiz('wrong', printYes, pirntNo); //no
randomQuiz('love you', printYes, pirntNo); //yes

//Arrow function 항상 이름이 없는 함수
//always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};
//쉽게 만들 수 있다
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

//IIFE: Immediately invoked function expression
function hello() {
    console.log('IIFE');
}
hello(); // 호출 한다

(function hello() {
    console.log('IIFE');
})(); // 선언과 동시에 호출 요즘은 잘 안쓰이긴 한다

