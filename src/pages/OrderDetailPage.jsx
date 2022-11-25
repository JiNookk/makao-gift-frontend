import { useEffect } from 'react';
import OrderDetail from '../components/OrderDetail.jsx';
import Container from '../components/ui/Container.jsx';
import Panel from '../components/ui/Panel.jsx';
import useOrderStore from '../hooks/useOrderStore.js';

export default function OrderDetailPage() {
  const orderStore = useOrderStore();
  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    orderStore.fetchOrder({ orderId: id });
  }, []);

  return (
    <div>
      <Panel />
      <Container>
        <OrderDetail
          order={orderStore.order}
          item={orderStore.order.product}
        />
      </Container>
    </div>
  );
}
