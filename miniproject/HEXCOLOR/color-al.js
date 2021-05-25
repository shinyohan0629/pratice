const BODY = document.querySelector("body"),
    INPUT = document.querySelector(".js-button"),
    NAME = document.querySelector("h1");


function getRandom(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);//toString으로 16진수로 변환, 16777215를 Hex로 표현하면 ffffff다.
    return randomColor;
}

function handleClick(){
    const color = getRandom();
    BODY.style.backgroundColor = `#${color}`;
    NAME.innerText = `HEX COLOR : #${color}`;
    console.log(color);
}

function init(){
    INPUT.addEventListener("click", handleClick);
}

init();

//초기값이 있어야하고,

//1. CLICK ME를 누른다.
//2. 임의에 숫자가 CLICK ME로 인하여 바뀐다.
//3. 랜덤 값대로 배경화면이 바뀐다.
//4. 랜덤 값대로 TEXT가 변한다.


//1. CLICK ME를 누른다
//2. 색상 값을 가져온다
//3. 그 값을 background에 넣는다
//4. 그 값을 TEXT에 넣는다