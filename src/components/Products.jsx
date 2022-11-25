import { useNavigate } from 'react-router-dom';
import useProductsStore from '../hooks/useProductsStore.js';
import numberFormat from '../numberFormat.js';
import ItemContainer from './ui/ItemContainer.jsx';
import Item from './ui/Item.jsx';
import ItemImage from './ui/ItemImage.jsx';
import Manufacturer from './ui/Manufacturer.jsx';
import Price from './ui/Price.jsx';

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
