import { render, screen, waitFor } from '@testing-library/react';
import ProductsPage from './ProductsPage.jsx';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('ProductsPage', async () => {
  render(<ProductsPage />);

  await waitFor(() => {
    screen.getByText('인기 상품을 한자리에 모았어요.');
    screen.getByAltText('test');
    screen.getByText('메가테라');
    screen.getByText('테스트 아이템');
    screen.getByText('10,000원');
  });
});
