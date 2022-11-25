/* eslint-disable class-methods-use-this */
import axios from 'axios';
import baseUrl from '../../config';

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async login({ userName, password }) {
    const { data } = await axios.post(`${baseUrl}/session`, {
      userName,
      password,
    });

    return {
      accessToken: data.accessToken,
      amount: data.amount,
      name: data.name,
    };
  }

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

  async fetchOrder({ orderId }) {
    const { data } = await axios.get(`${baseUrl}/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });

    return data;
  }

  async fetchOrders(page) {
    const query = page ? `?page=${page}` : '';
    const { data } = await axios.get(`${baseUrl}/orders${query}`, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });

    return {
      orders: data.orders,
      pages: data.orderPages,
    };
  }

  async createOrder(orderData) {
    await axios.post(`${baseUrl}/orders`, orderData, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });
  }

  async requestSignUp({
    name, userName, password, confirm,
  }) {
    const { data } = await axios.post(`${baseUrl}/users`, {
      name, userName, password, confirm,
    });

    return {
      message: data.message,
      code: data.code,
    };
  }
}

export const apiService = new ApiService();
