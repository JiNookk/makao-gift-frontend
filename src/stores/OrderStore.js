import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();
    this.itemPrice = 0;
    this.orderCount = 0;
    this.totalPrice = 0;
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
}

export const orderStore = new OrderStore();
