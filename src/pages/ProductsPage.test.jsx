import { render, screen, waitFor } from '@testing-library/react';
import ProductsPage from './ProductsPage';

test('ProductsPage', async () => {
  render(<ProductsPage />);

  await waitFor(() => {
    screen.getByText('인기 상품을 한자리에 모았어요.');
    screen.getByAltText('test');
    screen.getByText('메가테라');
    screen.getByText('테스트 아이템');
    screen.getByText('테스트용 아이템입니다.');
    screen.getByText('10,000원');
  });
});
