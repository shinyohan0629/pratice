CSS 속성 - 박스모델

1. width, height
   width : 너비
   height : 높이

   block 요소는 auto는 width은 100으로 시작하고 height는 0으로 시작한다 / 가로세로 값을 가질 수 있다.

   inline 요소는 auto는 0으로 시작하고 / 가로세로 값을 가질 수 없다

2. max-width, min-width, max-height, min-height
   max : 요소의 최대 가로, 세로 너비를 지정
   min : 요소의 최소 가로, 세로 너비를 지정

3. margin
   요소의 '외부 여백'을 지정

4. marigin-Collapase
   margin의 특정 값들이 '중복'되어 합쳐지는 영상
   중복은 버그가 아니다. 활용, 우회해서 사용해야 한다

   마진 중복 계산법
   조건/요소 A마진 /요소 B마진/ 계산법 /중복 값
   둘 다 양수 /30px / 10px/ 더 큰 값으로 중복 / 30px
   둘 다 음수 / -30px / -10px 더 작은 값으로 중복 / -30px
   각각 양수와 음수 / -30px / 10px -30 + 10 = -20 / - 20px

5. padding
   요소의 '내부 여백'을 지정
   특징 : 크기 증가
   크기가 커지지 않도록 자동 계산하는 법 :
   box-sizing : border-box 를 사용하면 자동적으로 계산한다

6. border
   요소의 '테두로 선'을 지정
   border-width 선의 두께

   border-style 선의 종류
   none - 선 없음
   hidden - 선 없음과 동일
   solid - 실선(일반선)
   dotted - 점선
   dashed -파선
   double - 두 줄선
   groove - 홈이 파여 있는 모양
   ridge - 솟은 모양
   inset - 요소 전체가 들어간 모양
   outset - 요소 전체가 나온 모양

   border-color 선의 색상
   transparent 투명한 선
   border: 두께 종류 색상;

7. box-sizing
   요소의 크기 계산 기준을 지정
   content-box : 너비만으로 요소의 크기를 계산
   border-box : 너비에 안쪽여백과 테두리 선을 포함하여 요소의 크기를 계산

8. display
   요소의 박스 타입을 설정
   black 블록요소
   inline 인라인요소
   inline-block 인라인-블록 요소(기본적으로 수평이지만, w,h,margin,pading 요소를 사용)
   기타 table, table,-cell, flex 등
   display: none 요소의 박스 타입이 없음(요소가 사라짐)

9. overflow
   요소의 크기 이상으로 내용이 넘쳤을 때, 내용의 보여짐을 제어
   visiable : 넘친 부분을 보여주는 것
   hidden : 넘친 부분을 자르는 것
   scroll : 넘친 부분을 스크롤로 해서 볼 수 있는 것
   auto : 넘치지 않은 부분은 스크롤이 없고, 넘친 부분만 스크롤 해서 볼 수 있다.

10. opacity
    요소의 투명성
    숫자 0부터 1사이의 소수점 숫자
    화면에 존재하지만 투명한거고
    display: none은 아예 안보이게 하는 것이다.
