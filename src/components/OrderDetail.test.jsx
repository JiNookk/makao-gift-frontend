import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';

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
    render(
      <ThemeProvider theme={defaultTheme}>
        <OrderDetail order={order} item={item} />
      </ThemeProvider>,
    );

    screen.getByAltText(/test/);
    screen.getByText(/메가테라/);
    screen.getByText(/테스트 아이템/);
    screen.getAllByText(/1/);
    screen.getByText(/10,000원/);
    screen.getByText(/2022-10-01/);
    screen.getByText(/제임스/);
    screen.getByText(/뉴욕/);
    screen.getByText(/생축/);
  });
});
