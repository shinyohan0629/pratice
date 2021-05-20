CSS를 입히는 방식이 많은데
link를 이용해 css를 불러오는 방식이 가장 좋다.
가독성이 좋다.

@import 방식 -외부문서로 CSS를 불러온다.

기본선택자

1. 전체선택자
2. 태그선택자
3. 클래스선택자
4. 아이디 선택자

5. 전체선택자 : 모든 요소를 선택

- 전체를 택한다

2. 태그선택자 : 태그 이름을 선택

3. 클래스선택자 : HTML class속성의 값을 선택 -활용도가 높다
   .E

4. 아이디 선택자 : id가 들어간 선택자 -중요한 곳 한 곳에서만 사용가능하다

#

복합선택자

일치선택자 : E와 F를 동시에 만족하는 요소선택
예) span.orane

자식선택자 : E의 자식요소 F를 선택
예) ul > .orange

후손(하위)선택자 : E의 후손(하위)요소 F를 선택
예) div .orange 중간에 뛰어쓰기가 들어가 있다.

인접 형제 선택자 : E의 다음 형제 요소 F 하나만 선택
예) .orange + li

일반 형제 선택자 : E의 다음 형제 요소 F 모두 선택
예) .orange ~ li

가상 클래스 선택자(Pseudo - Classes Selectors)

Hover : E에 마우스가 올라가 있는 동안에만 E 선택
예) E:hover

actinv : E를 마우스로 클릭하는 동안에만 E 선택
예) E:active

focus : E가 포커스 된 동안에만 E 선택 주로 input요소에서 사용한다
예) E:focus

first child : E가 형제 요소 중 첫번째 요소라면 선택
예) E:first-child

last-child : E가 형제 요소 중 마지막 요소라면 선택
예) E:last-child

nth-child : E가 형제 요소 중 n번째 요소라면 선택(n키워드 사용시 0부터 해석)
예) E:nth-child(n)

nth of type : E의 타입(태그이름)과 동일한 타입인 형제 요소 중 E가 n번째 요소라면 선택
예) E:nth-of-type(n)

부정선택자 : S가 아닌 E선택, 한 요소를 빼고 선택하겠다.
예) E:not(s)

가상요소 선택자
before : E요소 내부의 앞에, 내용(content)을 삽입
예) E::before
content를 적어줘야 내용이 들어간다. 내용이 없더라도
content : ""; 적어야 들어간다

after: E요소 내부의 뒤에, 내용(content)을 삽입
예) E::after

속성 선택자(Attribute Selectors)

attr: 속성 attr을 포함한 요소 선택
예)[disabled] {}

attr = value : 속성 attr을 포함하며 속상 값이 value인 요소 선택
예) [type="password"] {}

attr ^= value : 속성 attr을 포함하며 속성 값이 value로 시작하는 요소 선택
예) [class^="btn-"] {}

attr $= value : 속성 attr을 포함하며 속성 값이 value로 끝나는 요소 선택
예) [class^="success] {}

상속(Inheritance)
하위 요소들에게 적용된다. 글자를 다루는 속성들 대부분이 상속된다.

강제속성 : 강제속성을 받을 자식 요소에 position : inherit;을 써준다.

우선순위 결정

1. 명시도 점수가 높은 선언이 우선(명시도)
2. 점수가 같은 경우, 가장 마지막 해석되는 선언이 우선(선언 순서)
3. 명시도는 '상속' 규칙 보단 중요
   !important > id선택자 > 클래스 선택자 > 태그 선택자 > 전체선택자 > 상속

하지만 !important를 쓰는건 나쁘다. 전체를 무시하고 그것을 우선시 하겠다고 쓰는 건 코드가 어느 부분이 안되기 때문에 쓰는 것
