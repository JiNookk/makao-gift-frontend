import { useNavigate } from 'react-router-dom';
import useProductsStore from '../hooks/useProductsStore';
import numberFormat from '../numberFormat';
import ItemContainer from './ui/ItemContainer';
import Item from './ui/Item';
import ItemImage from './ui/ItemImage';
import Manufacturer from './ui/Manufacturer';
import Price from './ui/Price';

export default function Products() {
  const navigate = useNavigate();
  const productsStore = useProductsStore();
  const { products } = productsStore;

  const handleClickItem = (id) => {
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
          <Manufacturer>{product.manufacturer}</Manufacturer>
          <p>{product.name}</p>
          <Price>
            {numberFormat(product.price)}
            원
          </Price>
        </Item>
      ))}
    </ItemContainer>
  );
}
