import { useEffect } from 'react';
import { productsStore } from '../stores/ProductsStore.js';
import useForceUpdate from './useForceUpdate.js';

export default function useProductsStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    productsStore.subscribe(forceUpdate);

    return () => productsStore.unsubscribe(forceUpdate);
  });

  return productsStore;
}
