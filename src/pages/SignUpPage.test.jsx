import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
  it('renders Default Component', () => {
    render((
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    ));

    screen.getByLabelText('이름 :');
    screen.getByLabelText('아이디 :');
    screen.getByLabelText('비밀번호 :');
    screen.getByLabelText('비밀번호 확인 :');
    screen.getByText('회원가입');
  });
});
