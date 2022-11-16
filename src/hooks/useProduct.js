import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAccountStore from './useAccountStore';
import useOrderStore from './useOrderStore';
import useProductsStore from './useProductsStore';

export default function useProduct() {
  const navigate = useNavigate();
  const [isAmountEnough, setIsAmountEnough] = useState(true);
  const accountStore = useAccountStore();
  const orderStore = useOrderStore();
  const productsStore = useProductsStore();
  const { selectedItem } = productsStore;

  // TODO: 언제 다시 reset을 시켜야 할까?
  useEffect(() => {
    const { price } = selectedItem;
    orderStore.reset({ price });
  }, [selectedItem]);

  const handleIncreaseOrder = () => {
    orderStore.increaseCount();
  };

  const handleDecreaseOrder = () => {
    orderStore.decreaseCount();
  };

  const handleOrder = () => {
    if (accountStore.amount < orderStore.totalPrice) {
      setIsAmountEnough(false);
      return;
    }

    // accountStore.purchase({ itemCost: orderStore.totalPrice });
    navigate('/order');
    setIsAmountEnough(true);
  };

  return {
    selectedItem,
    orderCount: orderStore.orderCount,
    totalPrice: orderStore.totalPrice,
    isAmountEnough,
    handleIncreaseOrder,
    handleDecreaseOrder,
    handleOrder,
  };
}
