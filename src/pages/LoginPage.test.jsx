import {
  render, screen, waitFor,
} from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Default Component', () => {
    render(<LoginPage />);
  });
});
