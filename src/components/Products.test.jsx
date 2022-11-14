import { render, screen } from '@testing-library/react';
import { productsStore } from '../stores/ProductsStore';
import Products from './Products';

test('Products', async () => {
  await productsStore.fetchProducts();

  render(<Products />);
  screen.getByAltText('test');
  screen.getByText('메가테라');
  screen.getByText('테스트 아이템');
  screen.getByText('테스트용 아이템입니다.');
  screen.getByText('10,000원');
});
