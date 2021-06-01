파트1. Javascript와 web

1.  let newContent = prompt("JS는 HTML 페이지를 변경할 수 있습니다.", "");
    document.body.innerText = newContent;
    문서.body태그.text를추가한다 = newContent

promt는 창안에 알람처럼 떠서 값을 입력하게 할 수 있다.
promt("나타낼 문구", "변경할 값");

2. js 는 window obj로 css와 html을 변경시킬 수 있다.
   window는 가장 최상위에 있다.

window.location 주소값을 볼 수 있다.

navigator 브라우 정보를 볼 수 있다.

scrren은 display 가로, 세로 값을 볼 수 있다.

document에서는 html의 전체적인 부분을 볼 수 있다.

파트2.
DOM : 컴퓨터가 문서를 잘 처리할 수 있도록 문서에 대한 구조를 약속한 것
DOM을 통해서 js가 html을 변경할 수 있다.

Tree형태로 생각하면 좋다.

document.chlidren[]을 통해 html의 자식 요소에 접근할 수 있다.

firstElementChild : 첫 자식 엘리먼트
lastElementChild :마지막 자식 엘리먼트
nextElementSibling : 같은 레벨의 형제
previousElementSibling : 같은 레벨의 형제

과 같이 첫번째 자식, 마지막 자식, 형제자식 등 선택 할 수 있다.

document.getElementById로 html의 단일 엘리먼트를 선택하는 메소드 - id값의 접근
document.getElementsBy는 다중 엘리먼트를 선택하는 메소드
innerHTML과 innerText를 사용해서 html에서 어떤 style을 주었는지 아니면 text요소만 가지고 올 수 있다.

img는 src의 접근 할 수 있다.
getAttribute("src");
-element의 속성의 값을 얻어옴
/하나의 인자 : attribute이름을 받음
/직접 객체에 동기화되지 않는 속성에 대해서도 접근이 가능

setAttribute메소드
element의 속성의 값을 설정함
/두개의 인자 : attribute이름, 설정할 속성의 값을 받음
/직접 객체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

다중엘리먼트
document.getElementsByTagName 메소드
/인자로 HTML element 태그의 이름을 전달하며 해당 엘리먼트들이 반환됨

document.getElementsClassName 메소드
/인자로 class의 이름을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨

document.getElementsByName 메소드
/인자로 name을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환됨

CSS 셀렉터
document.querySelector : css selecotr를 기반으로 엘리먼트를 선택
/조건에 부합하는 element가 여러개인 경우 첫 엘리먼트만 반환

document.querySelectorAll : css selector를 기반으로 만족하는 모든 엘리먼트를 선택

# = id;

. = class
, = 여러개의 셀렉터
p = 기본태그

.appendChild(인자) : 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함

.removeChild(인자) : 삭제할 element를 인자로 받아 호출된 element의 자식중에서 해당 element를 삭제

.insertbefor(인자1, 인자2) : 인자1로 받은 element를 호출된 element의 자식중 인자2의 이전에 추가함

.cloneNode() : 호출된 element를 복사해서 반환함

callback함수
setTimeout(function, time)
/time 시간이 지난 경우 function함수를 콜백하는 함수
/time은 1/1000초 단위

setInterval(function, time)
/time 시간이 경과할 때마다 function 함수를 콜백하는 함수

clearInterval(intervalled)
/setInterval함수 호출의 결과로 반환된 intervalled를 인자로 받아 주기적으로 호출된 function 호출을 취소

HTML Tag 속성에 EventHandler 추가하기
브라우저에서 발생하는 Event 종류
form event : HTML 문서의 form element에 변화가 생기거나 submit버튼을 누르는 경우 등의 상황에서 발생
window event : 패이지가 모두 로드되었을 때 발생하는 onload event 등이 있음
mouse event : 사용자가 마우스를 조작했을 때 발생
key event : 사용자가 키보드를 조작했을 때 발생

Event
click : mouse event로 HTML element를 마우스로 클릭한 경우 발생
change : form event로 form 엘리먼트의 내용이 변경된 경우 발생
keydown : key event로 key가 눌린 경우 발생

AJAX
브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해 HTTP Request를 보내고 받아 JS에서 처리할 수 있음
사용자에게 더 나은 사용 경험 제공, 대부분의 웹사이트에서 사용되고 있는 기술
