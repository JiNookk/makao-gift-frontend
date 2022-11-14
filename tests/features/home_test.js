Feature('home');

// Scenario('without logged in', ({ I }) => {
//   // When
//   I.amOnPage('/');

//   // Then
//   I.see('홈');
//   I.see('스토어');
//   I.see('주문조회');
//   I.see('회원가입');
//   I.see('로그인');
//   I.see('무얼 선물할 지 고민이라면 특별한 아이템을 전하세요');
//   I.see('마카오 선물하기에서만 볼 수 있는 특별한 아이템');
// });

Scenario('with logged in', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see('홈');
  I.see('스토어');
  I.see('주문조회');
  I.see('내 잔액: 50000원');
  I.see('로그아웃');
  I.see('무얼 선물할 지 고민이라면 특별한 아이템을 전하세요');
  I.see('마카오 선물하기에서만 볼 수 있는 특별한 아이템');
});
