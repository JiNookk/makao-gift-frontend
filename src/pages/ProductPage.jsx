/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import Product from '../components/Product.jsx';
import usePageStore from '../hooks/usePageStore.js';
import useProductsStore from '../hooks/useProductsStore.js';

export default function ProductPage() {
  const pageStore = usePageStore();

  const productsStore = useProductsStore();
  const id = window.location.pathname.split('/')[2];

  // TODO: 언제 다시 reset을 시켜야 할까?
  useEffect(() => {
    productsStore.fetchProduct(id);

    pageStore.updateLastPage({ lastPage: `/products/${id}` });
  }, []);

  return (
    <Product />
  );
}