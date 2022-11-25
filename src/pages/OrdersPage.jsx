import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Orders from '../components/Orders.jsx';
import Container from '../components/ui/Container.jsx';
import useOrdersStore from '../hooks/useOrdersStore.js';

export default function OrdersPage() {
  const navigate = useNavigate();

  const ordersStore = useOrdersStore();

  useEffect(() => {
    ordersStore.fetchOrders();
  }, []);

  const handleNavigate = (id) => {
    const to = `/orders/${id}`;

    navigate(to);
  };

  // TODO : 백엔드를 보면 order안에 아이템이 존재한다.
  // ordersStore안에 product가 존재하는게 맞나?

  return (
    <Container>
      <Orders orders={ordersStore.orders} onClick={handleNavigate} />
    </Container>
  );
}
