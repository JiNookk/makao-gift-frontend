import { useEffect } from 'react';
import Orders from '../components/Orders';
import useOrderStore from '../hooks/useOrderStore';

export default function OrdersPage() {
  const orderStore = useOrderStore();

  useEffect(() => {
    orderStore.fetchOrders();
  }, []);

  // TODO : 백엔드를 보면 order안에 아이템이 존재한다.
  // orderStore안에 product가 존재하는게 맞나?

  return (
    <Orders />
  );
}
