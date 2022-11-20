import OrderStore from './OrderStore';

describe('OrderStore', () => {
  let orderStore;

  beforeEach(() => {
    orderStore = new OrderStore();
  });

  describe('fetchOrder', () => {
    it('sets Order', async () => {
      await orderStore.fetchOrder({ orderId: 1 });

      const { order } = orderStore;
      expect(order.product.manufacturer).toBe('메가테라');
      expect(order.product.name).toBe('테스트 아이템');
      expect(order.product.imagePath).toBe('../resources/test.jpg');
      expect(order.orderCount).toBe(1);
      expect(order.totalPrice).toBe(10000);
      expect(order.purchaseDate).toBe('2022-10-01');
      expect(order.receiver).toBe('제임스');
      expect(order.address).toBe('뉴욕');
      expect(order.message).toBe('생축');
    });
  });
});
