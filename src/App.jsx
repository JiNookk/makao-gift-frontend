import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import OrderDetailPage from './pages/OrderDetailPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import { apiService } from './services/ApiService';

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  // useEffect(() => () => setAccessToken(''), []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <Header accessToken={accessToken} setAccessToken={setAccessToken} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:orderId" element={<OrderDetailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}
