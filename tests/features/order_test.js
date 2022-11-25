Feature('Order');

Before(({ I }) => {
  // TODO: 아이템 30개 세팅, 아이템, 계정 설정
  I.login({ id: 'test123', password: 'Password123!' });
  I.amOnPage('/');
  I.click('스토어');
  I.click('.item');
});

Scenario('with correct properties', ({ I }) => {
  // Given
  I.click('선물하기');

  // When
  I.see('내 잔액: 50,000원');
  I.see('총 상품금액: 10,000원');
  I.fillField('받는 분 성함*', '제임스');
  I.fillField('받는 분 주소*', '뉴욕');
  I.fillField('받는 분께 보내는 메세지', '생축');
  I.click('선물하기');

  // Then
  I.seeCurrentUrlEquals('/orders');
  I.see('내가 주문한 내역입니다.');
  I.see('To.제임스');
});

Scenario('with blank properties', ({ I }) => {
  // Given
  I.click('선물하기');

  // When
  I.see('내 잔액: 50,000원');
  I.see('총 상품금액: 10,000원');
  I.fillField('받는 분 성함*', '');
  I.fillField('받는 분 주소*', '');
  I.fillField('받는 분께 보내는 메세지', '');
  I.click('선물하기');

  // Then
  I.see('성함을 입력해주세요');
  I.see('주소를 입력해주세요');
});
