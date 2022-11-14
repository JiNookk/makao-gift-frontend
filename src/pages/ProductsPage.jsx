/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import Pages from '../components/Pages';
import Products from '../components/Products';
import useProductsStore from '../hooks/useProductsStore';

export default function ProductsPage() {
  const productsStore = useProductsStore();

  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return (
    <div>
      {productsStore.products.length ? (
        <h2>인기 상품을 한자리에 모았어요.</h2>
      ) : (
        <h2>상품이 존재하지 않습니다.</h2>
      )}
      <Products />
      <Pages />
    </div>
  );
}
