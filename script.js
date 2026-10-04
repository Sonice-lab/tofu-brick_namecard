// HTML 문서의 로딩이 끝난 후 스트립트가 실행되도록 보장
document.addEventListener("DOMContentLoaded", function () {
  //조작할 HTML 요소를 id를 통해 가져오기 (DOM 선택)
  const cardContainer = document.querySelector(".card-container");
  const cardInner = document.getElementById("flipCard");

  // 카드에 클릭 이벤트 리스너를 추가
  cardContainer.addEventListener("click", function () {
    // [사고의 흐름] 클릭 시 현재 회전상태를 확인하여 수동으로 제어할 수 있음
    // 현재는 CSS :hover로 구현되어있지만, 클릭으로도 뒤집힌 상태를 고정하고 싶다면,
    // classList.toggle을 사용하여 특정 클래스('is-flipped')를 넣고 뺄 수 있음

    // 주의: 이 스크립트를 완벽하게 활성화하기 위해서는 CSS hover 대신
    //.card-inner.is-flipped {transform: rotateY(180deg); }로 수정해야 함
    // 현재는 모바일 환경에서 터치 시 hover 효과가 유지되도록 돕는 역할
    cardInner.classList.toggle(is - flipped);
  });
});
