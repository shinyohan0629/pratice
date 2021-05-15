srcset

브라우저에 제시할 이미지들과 그 이미지들의 원본 크기를 지정합니다
2장 이상을 써야하며, px가 아닌 W단위와 X단위로 써야한다

W: 가로너비를 칭함
X: 비율의도를 의미하는데 W를 쓰는게 더 낫다

sizes

미디어조건과 그 조건에 해당하는 이미지의 '최적화 출력 크기'를 지정한다.

Audio

autoplay 준비되면 바로 재생
controls 제어 메뉴를 표시
loop 재생이 끝나면 다시 처음부터 재생
preload 페이지가 로들 될 때 파일을 로드할지 지정
src 콘텐츠 URL
muted 음소거 여부

Video - audio랑 태그가 비슷하다

autoplay 준비되면 바로 재생
controls 제어 메뉴를 표시
crossorign 가져오기가 CORS를 사용하여 수행되어야 하는 여부
loop 재생이 끝나면 다시 시작
poster 동영상 썸네일 이미지 URL
preload 페이지가 로드될 때 파일을 로드할지의 지정
src 콘텐츠 URL

이미지와 이미지에 대한 설명

<figure>로 묶어주고
그 안에 img src를 넣어주고
p로 설명을 하는게 아니라 <figcaption>으로 설명을 넣어준다

iframe
다른 HTML 페이지를 현재 페이지에 삽입

sandbox 보안을 위한 읽기 전용으로 삽입 일부 영역을 막아준다 신중하게 써야한다

canvas
그래픽이나 애니메이션을 랜더링
그림을 그리는건 javascript로 그려야 한다

script
스크립트 코드를 문서에 포함하거나 참조
async - 스크립트의 비동기적 실행 여부 src속성 필수
defer - 문서 파싱(구문 분석)후 작동 여부 js를 넣어주고 defer을 넣어줘서 전체적인 스크립트가 돌아가게 도와준다 또는 안쓰고 맨 아래에 script를 아래 넣어줘도 된다
src - 참조할 외부 스크립트 URL
