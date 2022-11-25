import { apiService } from '../services/ApiService';
import Store from './Store.js';

export default class OrderStore extends Store {
  constructor() {
    super();

    this.order = { product: {} };
  }

  async fetchOrder({ orderId }) {
    this.order = await apiService.fetchOrder({ orderId });

    this.publish();
  }
}

export const orderStore = new OrderStore();
