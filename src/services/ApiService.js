/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class ApiService {
  async fetchProducts(page) {
    const query = page ? `?page=${page}` : '';
    const { data } = await axios.get(`http://localhost:8000/products${query}`);

    return {
      products: data.products,
      pages: data.productPages,
    };
  }
}

export const apiService = new ApiService();
