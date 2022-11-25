import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme.js';

import SignUpPage from './SignUpPage.jsx';

describe('SignUpPage', () => {
  it('renders Default Component', () => {
    render((
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <SignUpPage />
        </MemoryRouter>
      </ThemeProvider>
    ));

    screen.getByLabelText('이름 :');
    screen.getByLabelText('아이디 :');
    screen.getByLabelText('비밀번호 :');
    screen.getByLabelText('비밀번호 확인 :');
    screen.getByText('회원가입');
  });
});
