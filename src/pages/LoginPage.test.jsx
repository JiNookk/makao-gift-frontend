import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Default Component', () => {
    render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    screen.queryByPlaceholderText('아이디');
    screen.queryByPlaceholderText('비밀번호');

    screen.getByText('로그인하기');
  });
});
