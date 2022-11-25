import {
  cleanup,
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme.js';

import LoginForm from './LoginForm.jsx';

const context = describe;

describe('LoginForm', () => {
  const handleLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <ThemeProvider theme={defaultTheme}>
        <LoginForm onSubmit={handleLogin} />
      </ThemeProvider>,
    );
  });

  context('when received valid id and password', () => {
    it('renders Default Component', async () => {
      fireEvent.change(
        screen.queryByPlaceholderText('아이디'),
        { target: { value: 'correct123' } },
      );
      fireEvent.change(
        screen.queryByPlaceholderText('비밀번호'),
        { target: { value: 'Password123!' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        expect(handleLogin).toBeCalled();
        cleanup();
      });
    });
  });

  context('when received invalid id and password', () => {
    it('renders Default Component', async () => {
      fireEvent.change(
        screen.queryByPlaceholderText('아이디'),
        { target: { value: 'Incorrect123' } },
      );
      fireEvent.change(
        screen.queryByPlaceholderText('비밀번호'),
        { target: { value: 'Password123!' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다');
        expect(handleLogin).not.toBeCalled();
        cleanup();
      });
    });
  });

  context('when received blank id and password', () => {
    it('display error message', async () => {
      fireEvent.change(
        screen.queryByPlaceholderText('아이디'),
        { target: { value: '' } },
      );

      fireEvent.change(
        screen.queryByPlaceholderText('비밀번호'),
        { target: { value: '' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        screen.getByText('아이디를 입력해주세요');
        expect(handleLogin).not.toBeCalled();
        cleanup();
      });
    });
  });
});
