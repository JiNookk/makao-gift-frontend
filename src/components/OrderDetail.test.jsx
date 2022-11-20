import { render, screen } from '@testing-library/react';

import OrderDetail from './OrderDetail';

jest.mock('../dateFormat', () => () => '2022-10-01');

const item = {
  imagePath: '../resources/test.jpg',
  manufacturer: '메가테라',
  name: '테스트 아이템',
};

const order = {
  orderCount: 1,
  totalPrice: 10000,
  createdAt: '2022-10-01',
  receiver: '제임스',
  address: '뉴욕',
  message: '생축',
};

describe('OrderDetail', () => {
  it('renders Default Component', () => {
    render(<OrderDetail order={order} item={item} />);

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
