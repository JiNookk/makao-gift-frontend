import dateFormat from '../dateFormat';
import numberFormat from '../numberFormat';

export default function OrderDetail({ order, item }) {
  return (
    <div>
      <img src={item.imagePath} alt="test" />
      <p>{item.manufacturer}</p>
      <p>{item.name}</p>
      <p>
        구매수량:
        {' '}
        {order.orderCount}
      </p>
      <p>
        총 상품 금액:
        {' '}
        {numberFormat(order.totalPrice)}
        원
      </p>
      <p>
        구매일:
        {' '}
        {dateFormat(order.createdAt)}
      </p>
      <p>
        받는 분:
        {' '}
        {order.receiver}
      </p>
      <p>
        받는 분 주소:
        {' '}
        {order.address}
      </p>
      <p>
        받는 분께 보내는 메시지:
        {' '}
        {order.message}
      </p>
    </div>
  );
}
