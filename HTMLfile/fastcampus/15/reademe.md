CSS속성 - 띄움(정렬), 위치

1.  float
    요소를 좌우 방향으로 띄움(수평정렬)
    float : 방향
    수직방향에서 수평방향으로 간다
    float해제 - clear : both를 추가하여 해제
    -float 속성이 추가된 요소의 다음 형제요소에 clear 속성 추가
    -float 속성이 추가된 요소의 부모요소에 overflow 속성 추가
    추천! - float 속성이 추가된 요소의 부모요소에 미리 지정된 clearfix 클래스 추가

2.  float -display 수정
    float 속성이 추가된 요소는 display 속성의 값이 대부분 block으로 수정됨
3.  clear
    float 속성이 적용되지 않도록 지정(해제)
4.  position 그리고 top, bottom, left, right
    요소 position 기준에 위, 아래, 왼쪽, 오른쪽 거리를 설정
5.  position 속성 값 relative
    자기 자신을 기준으로 삼는다 주변의 영향을 주기 때문에 주의하면서사용해야한다.
6.  position 속성 값 absolute
    부모요소(위치 상 부모)를 기준으로 움직인다.
    부모요소의 position이 들어가야 한다. relative를 주면 된다.
    그리고 자식요소가 absolute를 했을 때 기준이 잡힌다.
7.  position 속성 값 fixed
    다 건너 뛰고 브라우저의 고정시키는 것이다.
8.  position 속성 값 sticky
    스크롤 영역 기준으로 배치. view가 따라 온다.
9.  position 특징 - 요소 쌓임 순서
    요소에 z-index 값을 통해 위에 쌓이는 순서에 따라 눈에 띄게 할 수 있다.
10. display 수정
    absolute, fixed 속성 값이 적용된 요소는 display 속성의 값이 대부분 block으로 수정됨
