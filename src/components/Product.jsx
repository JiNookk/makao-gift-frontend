/* eslint-disable react/button-has-type */
import useProduct from '../hooks/useProduct';
import numberFormat from '../numberFormat';

export default function Product() {
  const {
    selectedItem,
    orderCount,
    totalPrice,
    isAmountEnough,
    handleIncreaseOrder,
    handleDecreaseOrder,
    handleOrder,
  } = useProduct();

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
          {orderCount}
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
        {numberFormat(totalPrice)}
        원
      </p>
      <button type="button" onClick={handleOrder}>선물하기</button>
      {!isAmountEnough ? (
        <p>잔액이 부족하여 선물하기가 불가합니다</p>
      ) : null}
    </div>
  );
}
