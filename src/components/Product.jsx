/* eslint-disable react/button-has-type */
import styled from 'styled-components';
import useProduct from '../hooks/useProduct';
import numberFormat from '../numberFormat';

import Container from './ui/Container';
import PrimaryButton from './ui/PrimaryButton';
import Title from './ui/Title';

const ProductContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;
`;

const Image = styled.img`
  display: block;

  width: 600px;
  height: 600px;
  
  margin-inline-end: 5rem;
  `;

const Descriptions = styled.div`
  width: 600px;
  /* height: 600px; */

  dt, dd{
    display: inline;
  }

  dd{
    font-size: 1.25rem;
    margin-inline-start: 3.5rem;
  }

  hr{
    margin-block: 2rem;
  }
`;

const Price = styled.p`
  display: inline-block;

  font-size: 2.5rem;
  font-weight: bold;

  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`;

const TotalPrice = styled.div`
  text-align: end;

  span{
    margin-right: .75rem;
  }
`;

const Count = styled.dd`
  border: 1px solid #D9D9D9;
  border-radius: 4px;

  *{
    font-size: 1rem;
    padding: .5rem;
  }

  span{
    margin-inline: .5rem;
  }

  button{
    border: none;
    background: none;
  }
`;

export default function Product() {
  const {
    selectedItem,
    orderCount,
    totalPrice,
    isAmountEnough,
    isLessThanTwo,
    handleIncreaseOrder,
    handleDecreaseOrder,
    handleOrder,
  } = useProduct();

  return (
    <ProductContainer>
      <div>
        <Image src={(selectedItem.imagePath)} alt="test" />
      </div>
      <Descriptions>
        <Title>{selectedItem.name}</Title>
        <Price>
          {numberFormat(selectedItem.price)}
          원
        </Price>
        <hr />
        <dl>
          <dt>
            제조사:
          </dt>
          <dd>
            {selectedItem.manufacturer}
          </dd>
          <hr />
          <dt>
            구매수량:
          </dt>
          <Count>
            <button
              type="button"
              disabled={isLessThanTwo}
              onClick={handleDecreaseOrder}
            >
              -
            </button>
            <span>
              {orderCount}
            </span>
            <button type="button" onClick={handleIncreaseOrder}>+</button>
          </Count>
          <hr />
          <dt>
            상품설명:
          </dt>
          <dd>
            {selectedItem.description}
          </dd>
          <hr />
        </dl>
        <TotalPrice>
          <span>
            총 상품금액:
          </span>
          <Price>
            {numberFormat(totalPrice)}
            원
          </Price>
        </TotalPrice>
        <PrimaryButton type="button" onClick={handleOrder}>선물하기</PrimaryButton>
        {!isAmountEnough ? (
          <p>잔액이 부족하여 선물하기가 불가합니다</p>
        ) : null}
      </Descriptions>
    </ProductContainer>
  );
}
