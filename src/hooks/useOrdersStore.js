import { useEffect } from 'react';
import { ordersStore } from '../stores/OrdersStore.js';
import useForceUpdate from './useForceUpdate.js';

export default function useOrdersStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    ordersStore.subscribe(forceUpdate);

    return () => ordersStore.unsubscribe(forceUpdate);
  });

  return ordersStore;
}
