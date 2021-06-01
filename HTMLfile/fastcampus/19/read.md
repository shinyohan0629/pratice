css속성 - flex

display를 통해 container을 flex를 부여한다
그래서 줄을 수평으로 맞춰준다.

flex-direction
items의 주 축을 설정한다

row-수평축으로 표시
column-수직축으로 표시

flex-wrap
여러 줄 묶음을 설정한다
기본은 nowrap이지만, wrap으로 바꿀 시 줄바꿈이 된다.

justify-content
주 축의 정렬 방법을 설정한다

flex-start - 왼쪽정렬
flex-end - 오른쪽정렬
center - 가운데정렬
space-between - 균등하게 위치를 분배해서 왼쪽 오른쪽에 붙임
sapce-around - 모든 면에 위치를 분배함

align-content //여러줄일때
교차 축의 정렬방법을 설정한다
items가 한 줄일 경우 align-items속성을 사용해야한다

align-items// 한 줄일 경우에
교차 축에서 items의 정렬 방법을 설정한다

order
item의 순서를 성정한다
숫자를 지정하고 숫자가 클수록 순서가 밀린다
음수가 허용된다.

flex-grow
증가 너비 비율을 설정한다
숫자가 크면 더 많은 너비를 가진다

flex-shrink
감소하는 너비의 비율을 설정한다
숫자가 크면 더 많은 너비가 감소한다
grow랑 반대

flex-basis
값이 auto일 경운 width, height등의 속성으로 너비를 설정할 수 있다.
단위 값이 주어질 경우 설정할 수 없다.
