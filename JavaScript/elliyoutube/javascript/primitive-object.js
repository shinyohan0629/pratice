//데이터 타입은 number, string, boolean, null, undefined가 있다
//변수 이름은 우리가 마음대로 만들 수 있다.
//하지만 이름은 logic의 맞게 적어두는게 좋다
//
let number = 2;
let num = '2';

//object 각각 name과 age가 메모리에 값이 할달되고 그것들이 묶여서 있다.
//obj의 키에 묶어놓은 키가 들어가있다.
let obj = {
    name : 'ellie',
    age : 5,
};
console.log(obj.name);

//obj의 메모리 주소값이 똑같이 obj2에 들어간다
let obj2 = obj;
console.log(obj2.name);

obj.name = 'james' //ellie 가 james로 바뀐다. 또한 obj, ob2둘 다 이름이 james로 변경된다.


let a = 2;
a = 5;

const a = 2; //상수는 변경 불가능

//그러나 const obj는 왜 변경이 가능한가!?!?
//obj가 가르키는 reference는 변경할 수 있다.
//그 자체만 잠겨 있을 뿐 그 안에 obj는 변경 할 수 있다 (심오하다)