import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useAccountStore from './useAccountStore.js';
import useOrdersStore from './useOrdersStore.js';
import useProductsStore from './useProductsStore.js';

export default function useProduct() {
  const [accessToken] = useLocalStorage('accessToken');
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
    if (!accessToken) {
      navigate('/login');
      return;
    }

    if (accountStore.amount < ordersStore.totalPrice) {
      setIsAmountEnough(false);
      return;
    }

    navigate('/order');
    setIsAmountEnough(true);
  };

  return {
    selectedItem,
    orderCount: ordersStore.orderCount,
    totalPrice: ordersStore.totalPrice,
    isAmountEnough,
    isLessThanTwo: ordersStore.isLessThanTwo,
    handleIncreaseOrder,
    handleDecreaseOrder,
    handleOrder,
  };
}
