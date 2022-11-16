import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { accountStore } from '../stores/AccountStore';
import { orderStore } from '../stores/OrderStore';
import { productsStore } from '../stores/ProductsStore';
import ProductPage from './ProductPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('productPage', () => {
  async function setup() {
    render(<ProductPage />);
    await productsStore.fetchProducts();

    orderStore.reset({ price: 10000 });
  }

  context('when entered', () => {
    it('renders Default Component', async () => {
      await waitFor(async () => {
        await setup();
      });

      await waitFor(() => {
        screen.getByAltText('test');
        screen.getByText('테스트 아이템');
        screen.getByText('10,000원');
        screen.getByText('제조사: 메가테라');
        screen.getByText('+');
        screen.getByText('구매수량: 1');
        screen.getByText('-');
        screen.getByText('상품설명: 테스트용 아이템입니다.');
        screen.getByText('총 상품금액: 10,000원');
        screen.getByText('선물하기');
      });
    });
  });

  context('when click + or - button', () => {
    it('changes orderCount', async () => {
      await waitFor(async () => {
        await setup();
      });

      await waitFor(() => {
        screen.getByText('구매수량: 1');

        fireEvent.click(screen.getByText('+'));
        screen.getByText('구매수량: 2');

        fireEvent.click(screen.getByText('-'));
        screen.getByText('구매수량: 1');
      });
    });
  });

  context('when click purchase button', () => {
    it('costs amount', async () => {
      await waitFor(async () => {
        await setup();
      });

      await waitFor(() => {
        expect(accountStore.amount).toBe(50000);
        expect(orderStore.totalPrice).toBe(10000);

        fireEvent.click(screen.getByText('선물하기'));

        expect(navigate).toBeCalledWith('/order');
      });
    });
  });
});
