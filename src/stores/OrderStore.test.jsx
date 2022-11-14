import OrderStore from './OrderStore';

const context = describe;

describe('OrderStore', () => {
  let orderStore;

  beforeEach(() => {
    orderStore = new OrderStore();
    orderStore.reset({ price: 10000 });
  });

  describe('reset', () => {
    it('resets order counts and get product price', async () => {
      orderStore.reset({ price: 20000 });

      expect(orderStore.itemPrice).toBe(20000);
      expect(orderStore.orderCount).toBe(1);
      expect(orderStore.totalPrice).toBe(20000);
    });
  });

  describe('increaseCount', () => {
    it('increase order count', async () => {
      expect(orderStore.orderCount).toBe(1);
      expect(orderStore.totalPrice).toBe(10000);

      orderStore.increaseCount();
      expect(orderStore.orderCount).toBe(2);
      expect(orderStore.totalPrice).toBe(20000);
    });
  });

  describe('decreaseCount', () => {
    context('when order count is more than 1', () => {
      it('decrease order count', async () => {
        orderStore.increaseCount();
        expect(orderStore.orderCount).toBe(2);
        expect(orderStore.totalPrice).toBe(20000);

        orderStore.decreaseCount();
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);
      });
    });

    context('when order count is less then 2', () => {
      it('decrease order count', async () => {
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);

        orderStore.decreaseCount();
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);
      });
    });
  });
});
