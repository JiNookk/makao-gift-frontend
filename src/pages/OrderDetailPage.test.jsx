import {
  render, screen, waitFor,
} from '@testing-library/react';

import OrderDetailPage from './OrderDetailPage';

jest.mock('../dateFormat', () => () => '2022-10-01');

describe('OrderDetailPage', () => {
  beforeEach(async () => {
  });

  it('renders Default Component', async () => {
    render(<OrderDetailPage />);

    await waitFor(() => {
      screen.getByAltText('test');
      screen.getByText('메가테라');
      screen.getByText('테스트 아이템');
      screen.getByText('구매수량: 1');
      screen.getByText('총 상품 금액: 10,000원');
      screen.getByText('구매일: 2022-10-01');
      screen.getByText('받는 분: 제임스');
      screen.getByText('받는 분 주소: 뉴욕');
      screen.getByText('받는 분께 보내는 메시지: 생축');
    });
  });
});
