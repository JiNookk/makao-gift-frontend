import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductsStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.pages = [];
    this.page = 0;
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
