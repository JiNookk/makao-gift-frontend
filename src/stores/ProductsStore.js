import { apiService } from '../services/ApiService';
import Store from './Store.js';

export default class ProductsStore extends Store {
  constructor() {
    super();
    this.selectedItem = {};
    this.products = [];
    this.pages = [];
    this.page = 0;
  }

  async fetchProduct(id) {
    try {
      const { product } = await apiService.fetchProduct(id);

      this.selectedItem = product;
    } catch (e) {
      this.selectItem = {};
    } finally {
      this.publish();
    }
  }

  async fetchProducts() {
    const { pages, products } = await apiService.fetchProducts(this.page);

    this.products = products;

    this.pages = pages;

    this.publish();
  }

  async changePage(page) {
    this.page = page;

    await this.fetchProducts();

    this.publish();
  }
}

export const productsStore = new ProductsStore();
