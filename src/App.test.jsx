import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,

  );

  screen.getByText(/홈/);
  screen.getByText(/스토어/);
  screen.getByText(/주문조회/);
});
