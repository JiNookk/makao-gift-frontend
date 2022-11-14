import { waitFor } from '@testing-library/react';
import ProductsStore from './ProductsStore';

describe('ProductsStore', () => {
  let productsStore;

  beforeEach(() => {
    productsStore = new ProductsStore();
  });

  describe('fetchProducts', () => {
    async function request() {
      await productsStore.fetchProducts();
    }

    it('sets products information', async () => {
      request();

      await waitFor(() => {
        const product = productsStore.products[0];
        expect(productsStore.products.length).toBe(1);
        expect(product.manufacturer).toBe('메가테라');
        expect(product.imagePath).toBe('../resources/test.jpg');
        expect(product.name).toBe('테스트 아이템');
        expect(product.description).toBe('테스트용 아이템입니다.');
        expect(product.price).toBe(10000);
      });
    });

    it('sets pages information', async () => {
      request();

      await waitFor(() => {
        const page = productsStore.pages[0];

        expect(productsStore.pages.length).toBe(1);
        expect(page.productPage).toBe(1);
      });
    });
  });
});
