import { fireEvent, render, screen } from '@testing-library/react';
import { productsStore } from '../stores/ProductsStore';
import Products from './Products';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('Products', async () => {
  await productsStore.fetchProducts();

  render(<Products />);
  screen.getByAltText('test');
  screen.getByText('메가테라');
  fireEvent.click(screen.getByText('테스트 아이템'));
  screen.getByText('10,000원');

  expect(navigate).toBeCalledWith('/products/1');
});
