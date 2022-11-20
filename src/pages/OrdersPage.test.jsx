import {
  render, screen, waitFor,
} from '@testing-library/react';

import OrdersPage from './OrdersPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('OrdersPage', () => {
  it('renders Default Component', async () => {
    const { container } = render(<OrdersPage />);

    await waitFor(() => {
      screen.getByText('내가 주문한 내역입니다.');
      screen.getByText('메가테라');
      screen.getByText('테스트 아이템');
      screen.getByText('To.제임스');

      expect(container.querySelector('.item')).toBeTruthy();
    });
  });
});
