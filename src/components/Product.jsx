/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAccountStore from '../hooks/useAccountStore';
import useOrderStore from '../hooks/useOrderStore';
import useProductsStore from '../hooks/useProductsStore';
import numberFormat from '../numberFormat';

export default function Product() {
  const [isAmountEnough, setIsAmountEnough] = useState(true);
  const accountStore = useAccountStore();
  const orderStore = useOrderStore();
  const productsStore = useProductsStore();
  const navigate = useNavigate();
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

    accountStore.purchase({ itemCost: orderStore.totalPrice });
    navigate('/order');
    setIsAmountEnough(true);
  };

  console.log(JSON.stringify(orderStore));

  return (
    <div>
      <p>{(selectedItem.id)}</p>
      <img src={(selectedItem.imagePath)} alt="test" />
      <p>{selectedItem.name}</p>
      <p>
        {numberFormat(selectedItem.price)}
        원
      </p>
      <p>
        제조사:
        {' '}
        {selectedItem.manufacturer}
      </p>
      <div>
        <button type="button" onClick={handleIncreaseOrder}>+</button>
        <p>
          구매수량:
          {' '}
          {orderStore.orderCount}
        </p>
        <button type="button" onClick={handleDecreaseOrder}>-</button>
      </div>
      <p>
        상품설명:
        {' '}
        {selectedItem.description}
      </p>
      <p>
        총 상품금액:
        {' '}
        {numberFormat(orderStore.totalPrice)}
        원
      </p>
      <button type="button" onClick={handleOrder}>선물하기</button>
      {!isAmountEnough ? (
        <p>잔액이 부족하여 선물하기가 불가합니다</p>
      ) : null}
    </div>
  );
}
