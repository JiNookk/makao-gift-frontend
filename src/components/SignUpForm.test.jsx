import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme.js';

import SignUpForm from './SignUpForm.jsx';

const context = describe;

describe('SignUpForm', () => {
  const handleSignUp = jest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <SignUpForm onSubmit={handleSignUp} />
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('when submit valid properties', () => {
    it('redirects to login page', async () => {
      fireEvent.change(screen.getByLabelText('이름 :'), {
        target: { value: '김토끼' },
      });
      fireEvent.change(screen.getByLabelText('아이디 :'), {
        target: { value: 'rabbit123' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 :'), {
        target: { value: 'Password1234!' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 확인 :'), {
        target: { value: 'Password1234!' },
      });

      fireEvent.click(screen.getByText('회원가입'));

      // Then
      await waitFor(() => {
        expect(handleSignUp).toBeCalled();
      });
    });
  });

  context('when submit invalid properties', () => {
    it('display error message', async () => {
      fireEvent.change(screen.getByLabelText('이름 :'), {
        target: { value: '정신차려이각박한세상속에서' },
      });
      fireEvent.change(screen.getByLabelText('아이디 :'), {
        target: { value: '7777-7777' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 :'), {
        target: { value: '1234' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 확인 :'), {
        target: { value: '12345' },
      });

      fireEvent.click(screen.getByText('회원가입'));

      // Then
      await waitFor(() => {
        screen.getByText('이름을 다시 확인해주세요');
        screen.getByText('아이디를 다시 확인해주세요');
        screen.getByText('비밀번호를 다시 확인해주세요');
        screen.getByText('비밀번호가 일치하지 않습니다');

        expect(handleSignUp).not.toBeCalled();
      });
    });
  });

  context('when submit duplicated username', () => {
    it('display error message', async () => {
      fireEvent.change(screen.getByLabelText('이름 :'), {
        target: { value: '중복이얌' },
      });
      fireEvent.change(screen.getByLabelText('아이디 :'), {
        target: { value: 'overlapped123' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 :'), {
        target: { value: 'Password1234!' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 확인 :'), {
        target: { value: 'Password1234!' },
      });

      fireEvent.click(screen.getByText('회원가입'));

      // Then
      await waitFor(() => {
        screen.getByText('해당 아이디는 사용할 수 없습니다');
        expect(handleSignUp).not.toBeCalled();
      });
    });
  });
});
