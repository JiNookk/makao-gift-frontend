import {
  render, screen, waitFor,
} from '@testing-library/react';

import OrderDetailPage from './OrderDetailPage.jsx';

jest.mock('../dateFormat.js', () => () => '2022-10-01');

describe('OrderDetailPage', () => {
  beforeEach(async () => {
  });

  it('renders Default Component', async () => {
    render(<OrderDetailPage />);

    await waitFor(() => {
      screen.getByAltText('test');
      screen.getByText('메가테라');
      screen.getByText('테스트 아이템');
      screen.getByText(/구매수량:/);
      screen.getByText(/총 상품 금액:/);
    });
  });
});
