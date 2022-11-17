/* eslint-disable class-methods-use-this */
import axios from 'axios';
import baseUrl from '../../config';

export default class ApiService {
  async fetchProduct(id) {
    const { data } = await axios.get(`${baseUrl}/products/${id}`);

    return {
      product: data,
    };
  }

  async fetchProducts(page) {
    const query = page ? `?page=${page}` : '';
    const { data } = await axios.get(`${baseUrl}/products${query}`);

    return {
      products: data.products,
      pages: data.productPages,
    };
  }

  async fetchOrders(page) {
    const query = page ? `?page=${page}` : '';
    const { data } = await axios.get(`${baseUrl}/orders${query}`);

    return {
      orders: data.orders,
      pages: data.orderPages,
    };
  }

  async createOrder(orderData) {
    await axios.post(`${baseUrl}/orders`, orderData);
  }
}

export const apiService = new ApiService();
