Feature('product Detail');

Before(({ I }) => {
  // TODO: 아이템 1개 세팅
  I.setupItemDB({ productCounts: 1 });

  // TODO: 아이템 수량, 가격 설정 -> 2개, 10000원
  // I.setupItem(2, 10000)

  I.amOnPage('/');
  I.click('스토어');
});

// TODO: 이 부분은 어떤 것을 테스트하는지 불명확 한것 같다.
// Scenario('without logged in', ({ I }) => {
//   // Given
//   I.expireToken();
//   I.click('스토어');
//   I.click('.item');

//   // When
//   I.click('선물하기');
//   I.see('USER LOGIN');
//   I.fillField('아이디', 'test123');
//   I.fillField('비밀번호', 'Password1234!');
//   I.click('로그인하기');

//   // Then
//   I.see('선물하기');
// });

Scenario('with logged in and enough amount', ({ I }) => {
  // Given
  // 계정 설정 -> 잔액 50000원
  // I.setupAccount(50000);
  // I.login()
  I.click('.item');

  // When
  I.see('10,000원');
  I.click('+');
  I.see('20,000원');
  I.click('선물하기');

  // Then
  I.seeCurrentUrlEquals('/order');
});

Scenario('with logged in and not enough amount', ({ I }) => {
  // Given
  // 계정 설정 -> 잔액 5000원
  // I.setupAccount(5000);
  // I.login()
  I.click('.item');

  // When
  I.click('+');
  I.click('+');
  I.click('+');
  I.click('+');
  I.click('+');
  I.see('60,000원');
  I.click('선물하기');

  // Then
  I.dontSeeCurrentUrlEquals('/order');
  I.see('잔액이 부족하여 선물하기가 불가합니다');
});
