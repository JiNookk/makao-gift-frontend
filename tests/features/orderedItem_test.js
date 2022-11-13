Feature('OrderItem');

Before(({ I }) => {
  // TODO: 아이템 30개 세팅, 아이템, 계정 설정
  // I.setupItemDB(30);
  // I.setupItem(2, 10000)
  // I.
  I.login();
  I.giveAGift();
});

Scenario('click order item', ({ I }) => {
  // Given
  I.click('주문조회');

  // When
  I.click('.item');

  // Then
  I.see('구매수량: 1');
  I.see('총 상품 금액: 10000원');
  I.see('구매일: 2022-10-01');
  I.see('받는 분: 정에이미');
  I.see('받는 분 주소: 주소');
  I.see('받는 분께 보내는 메시지: 메시지');
});
