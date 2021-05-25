const BODY = document.querySelector("body"),
    BUTTON = document.querySelector(".js-button"),
    NAME = document.querySelector("h1");

function handleClick() {
    const color = getRandom(); //클릭을 할 때마다 색이 바뀌어야 되기 때문에
    NAME.innerText = `HEX COLOR :#${color}`;
    BODY.style.background = `#${color}`;
    console.log(color);
}

function getRandom() {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; //문자열
    // const hex = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, a, b, c, d, e, f; 숫자
    // const hex = "0123456789abcdef"; //이렇게 해도 된다.
    let number = '';
    let i = 0;
    while (i < 6) {
        const index = Math.floor(Math.random() * hex.length); // Math.random은 0부터1사이의 소숫점이 들어간다, Math.floor는 정수 아랫 값을 짜른다.
        number += hex[index]; //hex.length로 길이를 구해준다, hex[인덱스로 배열의 항목에 접근]
        i++;
    }
    return number;
}

function init() {
    handleClick();
    BUTTON.addEventListener("click", handleClick);
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