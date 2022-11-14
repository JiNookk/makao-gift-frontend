import styled from 'styled-components';
import useProductsStore from '../hooks/useProductsStore';
import numberFormat from '../numberFormat';

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

export default function Products() {
  const productsStore = useProductsStore();

  const { products } = productsStore;

  return (
    <ItemContainer>
      {products.map((product) => (
        <Item key={product.id}>

          <ItemImage alt="test" src={product.imagePath} />
          <p>{product.manufacturer}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>
            {numberFormat(product.price)}
            원
          </p>
        </Item>
      ))}
    </ItemContainer>
  );
}
