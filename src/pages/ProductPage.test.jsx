import {
  cleanup,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { accountStore } from '../stores/AccountStore';
import { ordersStore } from '../stores/OrdersStore';
import { productsStore } from '../stores/ProductsStore';
import defaultTheme from '../styles/defaultTheme';
import ProductPage from './ProductPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('productPage', () => {
  async function renderProudctPage() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <ProductPage />
      </ThemeProvider>,
    );
    await productsStore.fetchProducts();
    ordersStore.reset({ price: 10000 });
  }

  afterEach(async () => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders Default Component', async () => {
    renderProudctPage();

    await waitFor(() => {
      screen.getByAltText('test');
      screen.getByText('테스트 아이템');
      screen.getAllByText('10,000원');
      screen.getByText('메가테라');
    });
  });

  context('when click purchase button', () => {
    it('costs amount', async () => {
      renderProudctPage();

      await waitFor(() => {
        expect(accountStore.amount).toBe(50000);
        expect(ordersStore.totalPrice).toBe(10000);

        fireEvent.click(screen.getByText('선물하기'));

        expect(navigate).toBeCalled();
      });
    });
  });
});
