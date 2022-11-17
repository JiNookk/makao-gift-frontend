import styled from 'styled-components';
import useOrderStore from '../hooks/useOrderStore';

const ItemContainer = styled.div`
  display: grid;
  grid: repeat(2, 200px)/ repeat(4, 150px);
  gap: 60px 20px;
`;

const Item = styled.article`
  border: 1px solid #000;

`;

const ItemImage = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`;

export default function Orders() {
  const orderStore = useOrderStore();
  const { orders } = orderStore;

  // TODO : 백엔드를 보면 order안에 아이템이 존재한다.
  // orderStore안에 product가 존재하는게 맞나?
  return (
    <div>
      <p>
        내가 주문한 내역입니다.
      </p>
      <ItemContainer>
        {orders.map((order) => (
          <Item key={order.id} className="item">
            <ItemImage src={order.imagePath} alt="product" />
            <p>
              {order.manufacturer}
            </p>
            <p>
              {order.name}
            </p>
            <p>
              To.
              {order.receiver}
            </p>
          </Item>
        ))}
      </ItemContainer>
    </div>
  );
}
