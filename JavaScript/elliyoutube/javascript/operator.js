//1. string concatenation
console.log('my' + 'cat');
console.log('string literals: 1+2 = ${1 + 2}');

//2.Numeric operators
console.log(1+1);
// +, -, /, %, *, **=exponentiation

//3. increrment and decrement operatiors
let counter = 2;
const preIncrement = counter ++;
//선취식, 후취식 +, - 둘 다 동작하는 방식은 같다

//4. Assignment operators
let x = 3;
let y = 4;
x+=y; // x=x+y와 같다 사칙연산은 다 같은 방식으로 동작한다

//5. Compariosn operators
// <, <=, >, >=

//6. Logical operators: ||, &&, !
//or은 처음이 true면 다 true다 뒤에가 false여도 상관 안한다
//연산을 많이 하는 함수를 선언할 때 가장 앞에 두면 안되고 심플한 것을 뒤에 둬야한다.

//&&도 마찬가지다 헤비한거를 가장 뒤에 둬야 한다.

//7.Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type converstion 타협이 다르더라도 안에가 숫자라고 인식하고 true라고 인식한다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion 타입이 다르면 다르다고 표현
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//8.conditional operators:if
//if, else if, else
const ma = 'ellie';
if (ma === 'ellie')
{
    console.log('welcome, Ellie!')
}
    else if (ma === 'coder')
{
    console.log('You are amazing coder')
}
    else
{
    console.log('unkwnon');
}

//9. Ternary operator : ?
//condition ? value1 : value2; true면 value1 false면 value2다. 
console.log(ma === 'ellie' ? 'yes': 'no');

//10. Switch statment
//use for muliple if checks
//use for enum-like value chek
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

//11. Loops
//while loops, while the condition is truthy,
//body code is executed 조건식이 맞다면 무한대로 나온다 
let i = 3;
while (i > 0) {
    console.log('while: ${i}');
    i--;
}

//do while loop, body code is excuted first,
//then check the condition 블록을 먼저 실행한다 그러기에 조건이 무엇인지 상관 안하고 먼저 돈다
do {
    console.log('do while: ${i}');
    i--;
} while (i > 0);

//for loops, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log('for: ${i}');
}

for (let i = 3; i > 0; i = i - 2) {
    console.log('inline variable for: ${i}');
}

//nested loops
for (let i = 0; i < 10; i ++) {
    for (let j = 0; j < 10; j++) {
        console.log('i: ${i}, j: ${j}');
    }
}

//break, continue 현업에서는 레이블을 사용하지 않는다