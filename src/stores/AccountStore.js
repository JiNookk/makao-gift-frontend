import Store from './Store';

export default class AccountStore extends Store {
  constructor() {
    super();

    this.amount = 50000;
  }

  purchase({ itemCost }) {
    if (itemCost > this.amount || itemCost < 0) {
      return;
    }

    this.amount -= itemCost;
    this.publish();
  }
}

export const accountStore = new AccountStore();
