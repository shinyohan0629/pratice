const BODY = document.querySelector("body"),
    BACK = document.querySelector("h1"),
    CLICK = document.querySelector(".js-button");

function handleClick() {
    const color = getRandom();
    BODY.style.backgroundColor = `#${color}`;
    BACK.innerText = `HEX COLOR :#${color}`;
}

// function getRandom() {
//     const hex = "0123456789ABCDEF"
//     let number = '';
//     let i = 0;
//     while (i < 6) {
//         let index = Math.floor(Math.random() * hex.length);
//         number += hex[index];
//         i++;
//         console.log(number);
//     }
//     return number;
// }

function getRandom(){
    return Math.floor(Math.random() *16777215).toString(16);
}

function init() {
    handleClick();
    CLICK.addEventListener("click", handleClick);
}

init();