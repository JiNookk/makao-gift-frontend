Feature('login');

Before(({ I }) => {
  // TODO: 테스트용 아이디와 비밀번호 세팅
  // I.setupDatabase();

  // I.expireToken();
  I.amOnPage('/');
});

Scenario('login with correct id and password', ({ I }) => {
  // When
  I.click('로그인');
  I.fillField('아이디', 'test123');
  I.fillField('비밀번호', 'Password1234!');
  I.click('로그인하기');

  // Then
  I.dontSee('로그인');
  I.see('내 잔액: 50000원');
  I.see('로그아웃');
});

// Scenario('login with Incorrect id and password', ({ I }) => {
//   // When
//   I.click('로그인');
//   I.fillField('아이디', '이런건 틀렸지');
//   I.fillField('비밀번호', 'Password1234!');
//   I.click('로그인하기');

//   // Then
//   I.see('아이디 혹은 비밀번호가 일치하지 않는다');
// });

// Scenario('login with blank id ', ({ I }) => {
//   // When
//   I.click('로그인');
//   I.fillField('아이디', '');
//   I.fillField('비밀번호', 'Password1234!');
//   I.click('로그인하기');

//   // Then
//   I.see('아이디 혹은 비밀번호가 일치하지 않는다');
// });

// Scenario('login with blank password ', ({ I }) => {
//   // When
//   I.click('로그인');
//   I.fillField('아이디', 'test123');
//   I.fillField('비밀번호', '');
//   I.click('로그인하기');

//   // Then
//   I.see('아이디 혹은 비밀번호가 일치하지 않는다');
// });
