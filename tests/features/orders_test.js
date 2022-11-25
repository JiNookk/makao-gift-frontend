Feature('Orders');

Scenario('with logged out', ({ I }) => {
  // Given
  I.amOnPage('/');

  // When
  I.click('주문조회');

  // Then
  I.see('USER LOGIN');
});

Scenario('with logged in and no orders', ({ I }) => {
  // Given
  I.setupOrderDB({ orderCounts: 0 });
  I.login({ id: 'test123', password: 'Password123!' });
  I.amOnPage('/');

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역이 없습니다.');
});

Scenario('with logged in and orders', ({ I }) => {
  // Given
  I.setupOrderDB({ orderCounts: 3 });
  I.login({ id: 'test123', password: 'Password123!' });
  I.amOnPage('/');

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역입니다.');
  I.see('메가테라');
  I.see('테스트 아이템');
  I.see('To.제임스');

  I.seeNumberOfVisibleElements('.item', 3);
});
