import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Default Component', () => {
    render((
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </ThemeProvider>
    ));

    screen.queryByPlaceholderText('아이디');
    screen.queryByPlaceholderText('비밀번호');

    screen.getByText('로그인하기');
  });
});
