//object는 토끼와 당근이면 비슷한 object를 묶어놓는 것을 자료구조라고 한다.
//자료구조와 알고리즘을 공부해야 한다.
'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const frtuits = ['사과', '바나나'];
console.log(frtuits);
console.log(frtuits.length);
console.log(frtuits[0]);
console.log(frtuits[1]);
console.log(frtuits[2]); //undifined
console.log(frtuits[frtuits.length - 1]); //마지막 배열의 끝에 접근 할 수 있다

//3. Looping over an array
//for
for ( let i = 0; i < frtuits.length; i++) {
    console.log(frtuits[i]);
}

//for of 변수를 선언 해주고 of 뒤에 변수에 있는 것들을 넣어준다
for(let fruit of frtuits) {
    console.log(fruit);
}

//forEach 배열안에 있는 value마다 출력 가능하다
frtuits.forEach((frtuits) => console.log(frtuits));

//4. Addtion, deletion, copy
//push : add an item to tne end 뒤에서부터 추가
frtuits.push('dagg', 'adg');
console.log(frtuits);

//pop : 삭제 가장 뒤에께 삭제된다
frtuits.pop();
frtuits.pop();
console.log(frtuits);

//unshift : 앞에서 넣는 것
frtuits.unshift('efef', 'efefewq');

//shift : 앞에서부터 뺀다
fruit.shift();

//note!! shift, unshift는 pop, push보다 훨씬 느리다
//뒤에서 넣는 것은 아무것도 없는 공간에 뒤에다가 추가, 삭제가 원활하다
//앞에서부터 넣는 것은 데이터를 뒤로 옮기고 빈 공간에 추가와 삭제를 해야하기 때문이다.

//splice : remove an item by index position
frtuits.push('fwf', 'efqq', 'qfqqqq');
console.log(frtuits);
frtuits.splice(2,4); //데이터 추가도 된다.

//concat : combine two arrays 데이터를 붙여줄 수 있다.

//5. Searching
//indexOf: find the index
console.log(frtuits);
console.log(frtuits.indexOf('qwd'));//indexOf에서 찾을 수있다. 값이 없다면 -1로 출력한다

//lastIndexOf : 뒤에서 부터 찾아준다.
//
console.log(frtuits);

