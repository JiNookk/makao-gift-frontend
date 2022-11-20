import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { accountStore } from '../stores/AccountStore';
import { ordersStore } from '../stores/OrdersStore';
import { productsStore } from '../stores/ProductsStore';
import ProductPage from './ProductPage';

// with, without, when
// with products, without products.. when loged in
const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

// 페이지 테스트 -> 인터페이스 결정 -> 페이지 만들고 -> 컴포넌트로 분리 -> component test -> interface -> coding
// 컴포넌트 분리할 것
describe('productPage', () => {
  async function renderProudctPage() {
    render(<ProductPage />);
    await productsStore.fetchProducts();
    ordersStore.reset({ price: 10000 });
  }
  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it('renders Default Component', async () => {
    await waitFor(() => {
      renderProudctPage();
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

  it('changes orderCount', async () => {
    await waitFor(async () => {
      await renderProudctPage();
    });

    screen.getByText('구매수량: 1');

    await waitFor(() => {
      fireEvent.click(screen.getByText('+'));
      screen.getByText('구매수량: 2');
    });
  });

  context('when click purchase button', () => {
    it('costs amount', async () => {
      await waitFor(async () => {
        await renderProudctPage();
      });

      await waitFor(() => {
        expect(accountStore.amount).toBe(50000);
        expect(ordersStore.totalPrice).toBe(10000);

        fireEvent.click(screen.getByText('선물하기'));

        expect(navigate).toBeCalledWith('/order');
      });
    });
  });
});
