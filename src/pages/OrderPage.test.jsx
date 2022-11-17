import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import OrderStore from '../stores/OrderStore';

import OrderPage from './OrderPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../hooks/useProduct');

const createOrder = jest.fn();

jest.mock('../hooks/useOrderStore', () => () => ({
  createOrder,
}));

beforeEach(() => {
  const orderStore = new OrderStore();
  orderStore.reset({ price: 10000 });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('OrderPage', () => {
  context('when entered', () => {
    it('renders Default Component', () => {
      render(<OrderPage />);

      screen.getByText('총 상품금액: 10,000원');
      screen.getByLabelText('받는 분 성함');
      screen.getByLabelText('받는 분 주소');
      screen.getByLabelText('받는 분께 보내는 메세지');
      screen.getByText('선물하기');
    });
  });

  describe('submit purchase form', () => {
    context('with correct properties', () => {
      it('redirects to orders page', async () => {
        render(<OrderPage />);

        fireEvent.change(screen.getByLabelText('받는 분 성함'), {
          target: { value: '제임스' },
        });
        fireEvent.change(screen.getByLabelText('받는 분 주소'), {
          target: { value: '뉴욕' },
        });
        fireEvent.change(screen.getByLabelText('받는 분께 보내는 메세지'), {
          target: { value: '생축' },
        });

        fireEvent.click(screen.getByText('선물하기'));

        await waitFor(() => {
          expect(navigate).toBeCalledWith('/orders');
          expect(createOrder).toBeCalledWith({
            id: 1,
            orderCount: 1,
            totalPrice: 10000,
            to: '제임스',
            address: '뉴욕',
            message: '생축',
          });
        });
      });

      context('with blank properties', () => {
        it('display error message', async () => {
          render(<OrderPage />);

          fireEvent.change(screen.getByLabelText('받는 분 성함'), {
            target: { value: '' },
          });
          fireEvent.change(screen.getByLabelText('받는 분 주소'), {
            target: { value: '' },
          });
          fireEvent.change(screen.getByLabelText('받는 분께 보내는 메세지'), {
            target: { value: '' },
          });

          fireEvent.click(screen.getByText('선물하기'));

          await waitFor(() => {
            screen.getByText('주소를 입력해주세요');
            screen.getByText('성함을 입력해주세요');
            expect(navigate).not.toBeCalled();
            expect(createOrder).not.toBeCalled();
          });
        });
      });
    });
  });
});
