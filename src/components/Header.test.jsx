import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('Header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  screen.getByText('홈');
  screen.getByText('스토어');
  screen.getByText('주문조회');
  screen.getByText('내 잔액: 50,000원');
  screen.getByText('회원가입');
  // screen.getByText('로그인');
});
