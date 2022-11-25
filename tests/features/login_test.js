Feature('login');

Scenario('login with correct id and password', ({ I }) => {
  // When
  I.login({ id: 'test123', password: 'Password123!' });

  // Then
  I.dontSee('로그인');
  I.see('내 잔액: 50,000원');
  I.see('로그아웃');
});

Scenario('login with Incorrect id and password', ({ I }) => {
  // When
  I.login({ id: '이런건 틀렸지', password: 'Password123!' });

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('login with blank id ', ({ I }) => {
  // When
  I.login({ id: '', password: 'Password123!' });

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('login with blank password ', ({ I }) => {
  // When
  I.login({ id: 'test123', password: '' });

  // Then
  I.see('비밀번호를 입력해주세요');
});
