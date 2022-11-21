import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

jest.mock('usehooks-ts', () => ({
  useLocalStorage() {
    const accessToken = 'ACCESS.TOKEN';
    const setAccessToken = jest.fn();
    return [
      accessToken,
      setAccessToken,
    ];
  },
}));

test('HeaderWithOutToken', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  screen.getByText('홈');
  screen.getByText('스토어');
  screen.getByText('주문조회');
  screen.getByText('로그아웃');
  screen.getByText('내 잔액: 50,000원');
});
