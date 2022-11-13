/* eslint-disable react/button-has-type */
import useProductsStore from '../hooks/useProductsStore';

export default function Pages() {
  const productsStore = useProductsStore();

  const { pages } = productsStore;

  const handlePage = async (page) => {
    await productsStore.changePage(page);
  };

  return (
    <ul>
      {pages.map((page) => (
        <button
          key={page.productPage}
          onClick={() => handlePage(page.productPage)}
        >
          {page.productPage}
        </button>
      ))}
    </ul>
  );
}
