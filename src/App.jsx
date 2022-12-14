import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}
