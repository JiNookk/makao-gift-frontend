import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const productsStore = useProductsStore();
  const { products } = productsStore;

  const handleClickItem = (id) => {
    // productsStore.selectItem(id);
    navigate(`/products/${id}`);
  };

  return (
    <ItemContainer>
      {products.map((product) => (
        <Item
          className="item"
          key={product.id}
          onClick={() => handleClickItem(product.id)}
        >
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
