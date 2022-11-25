const moment = require('moment');

const now = moment(new Date()).format('YYYY-MM-DD');

Feature('OrderItem');

Scenario('click order item', ({ I }) => {
  // Given
  I.setupOrderDB({ orderCounts: 1 });
  I.login({ id: 'test123', password: 'Password123!' });
  I.amOnPage('/');
  I.click('주문조회');

  // When
  I.click('.item');

  // Then
  I.seeCurrentUrlEquals('/orders/1');
  I.see('메가테라');
  I.see('테스트 아이템');
  I.see('구매수량:');
  I.see('총 상품 금액:');
  I.see('10,000원');
  I.see('구매일:');
  I.see(`${now}`);
  I.see('받는 분:');
  I.see('제임스');
  I.see('받는 분 주소:');
  I.see('뉴욕');
  I.see('받는 분께 보내는 메시지:');
  I.see('생축');
});
