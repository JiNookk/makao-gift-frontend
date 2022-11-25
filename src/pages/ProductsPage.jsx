/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import styled from 'styled-components';
import Pages from '../components/Pages';
import Products from '../components/Products';
import Container from '../components/ui/Container';
import Panel from '../components/ui/Panel';
import useProductsStore from '../hooks/useProductsStore';

const PanelText1 = styled.p`
  margin-block-end: 1.5rem;

  color: #F3A300;
`;

const PanelText2 = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-block-end: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function ProductsPage() {
  const productsStore = useProductsStore();

  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return (
    <div>
      <Panel>
        <PanelText1>평범한 선물은 주기도 민망하다구요?</PanelText1>
        <PanelText2>
          작정하고 준비한
          <br />
          마카오톡 선물하기 아이템
        </PanelText2>
        <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      </Panel>
      <Container>
        {productsStore.products.length ? (
          <Title>인기 상품을 한자리에 모았어요.</Title>
        ) : (
          <Title>상품이 존재하지 않습니다.</Title>
        )}
        <Products />
        <Pages />
      </Container>
    </div>

  );
}
