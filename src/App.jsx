import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme.js';
import GlobalStyle from './styles/GlobalStyle.js';

import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import OrderDetailPage from './pages/OrderDetailPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

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
