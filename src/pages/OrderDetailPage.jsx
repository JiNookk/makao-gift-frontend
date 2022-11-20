import { useEffect } from 'react';
import OrderDetail from '../components/OrderDetail';
import useOrderStore from '../hooks/useOrderStore';

export default function OrderDetailPage() {
  const orderStore = useOrderStore();
  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    orderStore.fetchOrder({ orderId: id });
  }, []);

  return (
    <OrderDetail order={orderStore.order} item={orderStore.order.product} />
  );
}
