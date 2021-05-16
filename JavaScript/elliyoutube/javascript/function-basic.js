//함수선언 & 호출

//함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

//함수 호출
doSomething(add);

const result = add(3, 5);
console.log(result);


//언어 공부 방법
//consol.log를 입력하면서 하나씩 값을 찾아가며 공부하는게 좋다

//함수를 인자로 전달
//함수를 선언하고 선언을 호출해야한다. 호출을 해서 인자 값을 전달함으로 해야한다

