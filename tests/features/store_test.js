Feature('Store');

// TODO: 나중에 DB구현할 것!
Scenario('with no item', ({ I }) => {
  // Given
  // I.setupItemDB(0);

  I.setupItemDB({ productCounts: 0 });
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('상품이 존재하지 않습니다.');
});

Scenario('with 1 items', ({ I }) => {
  // Given
  I.setupItemDB({ productCounts: 1 });

  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('인기 상품을 한자리에 모았어요.');
  I.see('메가테라');
  I.see('테스트 아이템');
  I.see('테스트용 아이템입니다.');
  I.see('10,000원');
  I.dontSeeElement('.page');
});

// TODO: 나중에 DB 구현할 것!
Scenario('with 30 items', ({ I }) => {
  // Given
  I.setupItemDB({ productCounts: 30 });
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('인기 상품을 한자리에 모았어요.');
  I.seeNumberOfVisibleElements('.page', 4);
});
