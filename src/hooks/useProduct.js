import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAccountStore from './useAccountStore';
import useOrdersStore from './useOrdersStore';
import useProductsStore from './useProductsStore';

export default function useProduct() {
  const navigate = useNavigate();
  const [isAmountEnough, setIsAmountEnough] = useState(true);
  const accountStore = useAccountStore();
  const ordersStore = useOrdersStore();
  const productsStore = useProductsStore();
  const { selectedItem } = productsStore;

  // TODO: 언제 다시 reset을 시켜야 할까?
  useEffect(() => {
    const { price } = selectedItem;
    ordersStore.reset({ price });
  }, [selectedItem]);

  const handleIncreaseOrder = () => {
    ordersStore.increaseCount();
  };

  const handleDecreaseOrder = () => {
    ordersStore.decreaseCount();
  };

  const handleOrder = () => {
    if (accountStore.amount < ordersStore.totalPrice) {
      setIsAmountEnough(false);
      return;
    }

    // accountStore.purchase({ itemCost: ordersStore.totalPrice });
    navigate('/order');
    setIsAmountEnough(true);
  };

  return {
    selectedItem,
    orderCount: ordersStore.orderCount,
    totalPrice: ordersStore.totalPrice,
    isAmountEnough,
    handleIncreaseOrder,
    handleDecreaseOrder,
    handleOrder,
  };
}
