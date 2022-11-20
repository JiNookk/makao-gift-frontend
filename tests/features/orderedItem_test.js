const moment = require('moment');

Feature('OrderItem');

Scenario('click order item', ({ I }) => {
  // Given
  I.setupOrderDB({ orderCounts: 1 });
  I.amOnPage('/');
  I.click('주문조회');

  const now = moment(new Date()).format('YYYY-MM-DD');

  // When
  I.click('.item');

  // Then
  I.seeCurrentUrlEquals('/orders/1');
  I.see('메가테라');
  I.see('테스트 아이템');
  I.see('구매수량: 1');
  I.see('총 상품 금액: 10,000원');
  I.see(`구매일: ${now}`);
  I.see('받는 분: 제임스');
  I.see('받는 분 주소: 뉴욕');
  I.see('받는 분께 보내는 메시지: 생축');
});
