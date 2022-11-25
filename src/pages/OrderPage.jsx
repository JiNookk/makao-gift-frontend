/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProduct from '../hooks/useProduct.js';
import numberFormat from '../numberFormat.js';
import useAccountStore from '../hooks/useAccountStore.js';
import useOrdersStore from '../hooks/useOrdersStore.js';
import Container from '../components/ui/Container.jsx';
import OrderForm from './OrderForm.jsx';

const OrderContainer = styled.article`
  border: 1px solid #D9D9D9;
  padding: 80px 140px;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  width: 900px;

  img{
    display: inline-block;
    width: 150px;
    height: 150px;
    margin-right: 1.5rem;
  }

  >div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default function OrderPage() {
  const navigate = useNavigate();

  const ordersStore = useOrdersStore();
  const accountStore = useAccountStore();
  const { selectedItem, orderCount, totalPrice } = useProduct();

  const onSubmit = async (data) => {
    if (data) {
      const { id } = selectedItem;

      await ordersStore.createOrder({
        id, orderCount, totalPrice, ...data,
      });

      accountStore.purchase({ itemCost: totalPrice });
      navigate('/orders');
    }
  };

  return (
    <Container>
      <OrderContainer>
        <Description>
          <div>
            <img src={selectedItem.imagePath} alt="product" />
          </div>
          <div>
            <div>
              <p>{selectedItem.manufacturer}</p>
              <p>{selectedItem.name}</p>
            </div>
            <div>
              <p>
                구매수량:
                {' '}
                {orderCount}
              </p>
              <p>
                총 상품금액:
                {' '}
                {numberFormat(totalPrice)}
                원
              </p>
            </div>
          </div>
        </Description>
        <OrderForm onSubmit={onSubmit} />
      </OrderContainer>
    </Container>
  );
}
