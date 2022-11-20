import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import SignUpSuccessPage from './SignUpSuccessPage';

describe('SignUpSuccessPage', () => {
  const handleClick = jest.fn();

  it('renders Default Component', async () => {
    render(<SignUpSuccessPage
      onClick={handleClick}
    />);

    screen.getByText('회원가입 완료');
    screen.getByText('마카오 선물하기 회원가입이 완료되었습니다.');
    screen.getByText('정상적인 서비스 이용을 위해 로그인을 진행해주세요.');
    fireEvent.click(screen.getByText('로그인하기'));

    await waitFor(() => {
      expect(handleClick).toBeCalled();
    });
  });
});
