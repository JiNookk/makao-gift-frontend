/* eslint-disable react/button-has-type */
import styled from 'styled-components';
import useProductsStore from '../hooks/useProductsStore';

const List = styled.ul`
  margin-block: 5rem;
`;

const Page = styled.button`
  margin-inline-end: 1rem;

  border:none;

  background: none;
`;

export default function Pages() {
  const productsStore = useProductsStore();

  const { pages } = productsStore;

  const handlePage = async (page) => {
    await productsStore.changePage(page);
  };

  return (
    <List>
      {pages.length > 1
        ? pages.map((page) => (
          <Page
            className="page"
            key={page.productPage}
            onClick={() => handlePage(page.productPage)}
          >
            {page.productPage}
          </Page>
        )) : null}
    </List>
  );
}
