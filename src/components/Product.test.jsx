import {
  render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import Product from './Product';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../hooks/useProduct');

describe('productPage', () => {
  async function renderProudctPage() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Product />
      </ThemeProvider>,
    );
  }

  it('renders Default Component', async () => {
    renderProudctPage();

    await waitFor(() => {
      screen.getByAltText('test');
      screen.getByText('테스트 아이템');
      screen.getAllByText('10,000원');
      screen.getByText('메가테라');
    });
  });
});
