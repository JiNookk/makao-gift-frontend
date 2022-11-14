Feature('register');

Before(({ I }) => {
  // TODO: 테스트용 아이디와 비밀번호 세팅
  I.setupDatabase();

  I.expireToken();

  I.amOnPage('/');
});

Scenario('register with correct id and password', ({ I }) => {
  // Given
  I.click('회원가입');

  // When
  I.fillField('이름 :', '김토끼');
  I.fillField('아이디 :', 'rabbit');
  I.fillField('비밀번호 :', 'Password1234!');
  I.fillField('비밀번호 확인 :', 'Password1234!');
  I.click('회원가입');

  // Then
  I.see('회원가입 완료');
  I.see('마카오 선물하기 회원가입이 완료되었습니다.'
  + '정상적인 서비스 이용을 위해 로그인을 진행해 주세요.');
  I.see('로그인하기');
});

Scenario('register with duplicated id', ({ I }) => {
  // Given
  I.click('회원가입');

  // When
  I.fillField('이름 :', '김토끼');
  I.fillField('아이디 :', 'test123');
  I.fillField('비밀번호 :', 'Password1234!');
  I.fillField('비밀번호 확인 :', 'Password1234!');
  I.click('회원가입');

  // Then
  I.see('해당 아이디는 사용할 수 없습니다.');
  I.dontSee('회원가입 완료');
});

Scenario('register with invalid id or password', ({ I }) => {
  // Given
  I.click('회원가입');

  // When
  I.fillField('이름 :', '정신차려이각박한세상속에서');
  I.fillField('아이디 :', '7777-7777');
  I.fillField('비밀번호 :', '1234');
  I.fillField('비밀번호 확인 :', '1234');
  I.click('회원가입');

  // Then
  I.see('이름을 다시 확인해주세요');
  I.see('아이디를 다시 확인해주세요');
  I.see('비밀번호를 다시 확인해주세요');
  I.see('비밀번호가 일치하지 않습니다');
});

Scenario('register with blank id or password', ({ I }) => {
  // Given
  I.click('회원가입');

  // When
  I.fillField('이름 :', '');
  I.fillField('아이디 :', '');
  I.fillField('비밀번호 :', '');
  I.fillField('비밀번호 확인 :', '');
  I.click('회원가입');

  // Then
  I.see('이름을 입력해주세요');
  I.see('아이디를 입력해주세요');
  I.see('비밀번호를 입력해주세요');
  I.see('비밀번호를 입력해주세요');
});
