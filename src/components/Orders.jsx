import Item from './ui/Item';
import ItemContainer from './ui/ItemContainer';
import ItemImage from './ui/ItemImage';
import Manufacturer from './ui/Manufacturer';
import Price from './ui/Price';
import Title from './ui/Title';

export default function Orders({ orders, onClick }) {
  const handleNavigate = (id) => {
    onClick(id);
  };

  return (
    <div>
      {orders.length ? (
        <Title>
          내가 주문한 내역입니다.
        </Title>
      ) : (
        <Title>
          내가 주문한 내역이 없습니다.
        </Title>
      )}
      <ItemContainer>
        {orders.map((order) => (
          <Item
            key={order.id}
            className="item"
            onClick={() => handleNavigate(order.id)}
          >
            <ItemImage src={order.imagePath} alt="product" />
            <Manufacturer>
              {order.manufacturer}
            </Manufacturer>
            <p>
              {order.name}
            </p>
            <Price>
              To.
              {order.receiver}
            </Price>
          </Item>
        ))}
      </ItemContainer>
    </div>
  );
}
