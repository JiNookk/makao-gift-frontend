Feature('Order');

Before(({ I }) => {
  // TODO: 아이템 30개 세팅, 아이템, 계정 설정
  // I.setupItemDB(30);
  // I.setupItem(2, 10000)
  I.amOnPage('/');
});

Scenario('with logged out', ({ I }) => {
  // Given
  I.logout();

  // When
  I.click('주문조회');

  // Then
  I.see('USER LOGIN');
});

Scenario('with logged in and no orders', ({ I }) => {
  // Given
  I.setupOrders(0);
  I.login();

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역이 없습니다.');
});

Scenario('with logged in and orders', ({ I }) => {
  // Given
  I.setupOrders(3);
  I.login();

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역 입니다.');
  I.seeNumberOfVisibleElements('.item', 3);
});
