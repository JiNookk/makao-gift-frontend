import styled from 'styled-components';
import dateFormat from '../dateFormat';
import numberFormat from '../numberFormat';

const Container = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;

  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  
  position: absolute;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
  top: 150px;
  width: 400px;
  height: 400px;
`;

const ManuFacturer = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #999999;
  `;

const ProductName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: #444444;
`;

const Properties = styled.dl`
  width: 780px;

  dt{
    color :#444444;
  }
  
  dd{
    font-size: 1.25rem;
    
    color: #666666;
  }

  div:last-child{
    border-bottom: 1px solid black;
  }
`;

const Property = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid black;

  padding-block: 1.8rem;
`;

export default function OrderDetail({ order, item }) {
  return (
    <Container>
      <Image src={item.imagePath} alt="test" />
      <ManuFacturer>{item.manufacturer}</ManuFacturer>
      <ProductName>{item.name}</ProductName>
      <Properties>
        <Property>
          <dt>
            구매수량:
          </dt>
          <dd>
            {order.orderCount}
          </dd>
        </Property>
        <Property>
          <dt>
            총 상품 금액:
          </dt>
          <dd>
            {numberFormat(order.totalPrice)}
            원
          </dd>
        </Property>
        <Property>
          <dt>
            구매일:
          </dt>
          <dd>
            {dateFormat(order.createdAt)}
          </dd>
        </Property>
        <Property>
          <dt>
            받는 분:
          </dt>
          <dd>
            {order.receiver}
          </dd>
        </Property>
        <Property>
          <dt>
            받는 분 주소:
          </dt>
          <dd>
            {order.address}
          </dd>
        </Property>
        <Property>
          <dt>
            받는 분께 보내는 메시지:
          </dt>
          <dd>
            {order.message}
          </dd>
        </Property>
      </Properties>
    </Container>
  );
}
