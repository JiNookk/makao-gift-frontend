import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';

import LoginForm from './LoginForm';

const context = describe;

describe('LoginForm', () => {
  const handleLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(<LoginForm onSubmit={handleLogin} />);
  });

  context('when received valid id and password', () => {
    it('renders Default Component', async () => {
      screen.queryByPlaceholderText('아이디');
      screen.queryByPlaceholderText('비밀번호');

      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-userName' }),
        { target: { value: 'correct123' } },
      );
      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-password' }),
        { target: { value: 'Password123!' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        expect(handleLogin).toBeCalled();
      });
    });
  });

  context('when received invalid id and password', () => {
    it('renders Default Component', async () => {
      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-userName' }),
        { target: { value: 'Incorrect123' } },
      );
      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-password' }),
        { target: { value: 'Password123!' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다');
        expect(handleLogin).not.toBeCalled();
      });
    });
  });

  context('when received blank id and password', () => {
    it('display error message', async () => {
      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-userName' }),
        { target: { value: '' } },
      );

      fireEvent.change(
        screen.getByRole('textbox', { name: 'input-password' }),
        { target: { value: '' } },
      );

      fireEvent.click(screen.getByText('로그인하기'));

      await waitFor(() => {
        screen.getByText('아이디를 입력해주세요');
        expect(handleLogin).not.toBeCalled();
      });
    });
  });
});
