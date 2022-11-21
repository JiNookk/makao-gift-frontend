import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import OrderDetailPage from './pages/OrderDetailPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div>
      <Reset />
      <Header />
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
    </div>
  );
}
