import { fireEvent, render, screen } from '@testing-library/react';

import Orders from './Orders.jsx';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('Orders', () => {
  const orders = [{
    id: 1,
    manufacturer: '메가테라',
    name: '테스트 아이템',
    receiver: '제임스',
  }];

  const handleNavigate = jest.fn((id) => navigate(`/orders/${id}`));

  context('when data is exist', () => {
    it('renders Default Component', () => {
      const { container } = render(<Orders orders={orders} />);

      screen.getByText('내가 주문한 내역입니다.');
      screen.getByText('메가테라');
      screen.getByText('테스트 아이템');
      screen.getByText('To.제임스');
      expect(container.querySelector('.item')).toBeTruthy();
    });
  });

  context('when data is not exist', () => {
    it('renders error message', () => {
      const { container } = render(<Orders orders={[]} />);

      screen.getByText('내가 주문한 내역이 없습니다.');
      expect(container.querySelector('.item')).toBeFalsy();
    });
  });

  context('when click an item ', () => {
    it('redirect to orderDetailPage', () => {
      const { container } = render(<Orders
        orders={orders}
        onClick={handleNavigate}
      />);

      fireEvent.click(container.querySelector('.item'));

      expect(handleNavigate).toBeCalledWith(1);
      expect(navigate).toBeCalledWith('/orders/1');
    });
  });
});
