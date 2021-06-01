const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date(); //날짜를 생성한다.
  const hours = date.getHours(); //시
  const minutes = date.getMinutes(); //분
  const seconds = date.getSeconds(); //초
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    //삼항연산자를 이용해 조건식 ? true : false
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); //1초 있다가 gettime이 계속해서 업데이트 된다.
}

init();
