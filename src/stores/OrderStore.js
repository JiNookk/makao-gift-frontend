import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();
    this.itemPrice = 0;
    this.orderCount = 0;
    this.totalPrice = 0;

    this.createOrderState = '';
  }

  reset({ price }) {
    this.itemPrice = price;
    this.orderCount = 1;
    this.updateTotalPrice();
    this.publish();
  }

  increaseCount() {
    this.orderCount += 1;
    this.updateTotalPrice();
    this.publish();
  }

  decreaseCount() {
    if (this.orderCount <= 1) {
      return;
    }

    this.orderCount -= 1;
    this.updateTotalPrice();
    this.publish();
  }

  updateTotalPrice() {
    this.totalPrice = this.itemPrice * this.orderCount;
    this.publish();
  }

  async createOrder(orderData) {
    this.changeCreateOrderState('processing');

    try {
      await apiService.createOrder(orderData);

      this.changeCreateOrderState('success');
    } catch (e) {
      const { message } = e.response.data;

      this.changeCreateOrderState('fail', { errorMessage: message });
    }

    this.publish();
  }

  changeCreateOrderState(state, { errorMessage = '' } = {}) {
    this.createOrderState = state;
    this.errorMessage = errorMessage;
    this.publish();
  }

  get isCreateOrderProcessing() {
    return this.createOrderState === 'processing';
  }

  get isCreateOrderSuccess() {
    return this.createOrderState === 'success';
  }

  get isCreateOrderFail() {
    return this.createOrderState === 'fail';
  }
}

export const orderStore = new OrderStore();
