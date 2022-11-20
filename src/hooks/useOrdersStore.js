import { useEffect } from 'react';
import { ordersStore } from '../stores/OrdersStore';
import useForceUpdate from './useForceUpdate';

export default function useOrdersStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    ordersStore.subscribe(forceUpdate);

    return () => ordersStore.unsubscribe(forceUpdate);
  });

  return ordersStore;
}
