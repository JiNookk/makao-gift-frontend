import { waitFor } from '@testing-library/react';
import OrderStore from './OrderStore';

const context = describe;

describe('OrderStore', () => {
  let orderStore;

  beforeEach(() => {
    orderStore = new OrderStore();
    orderStore.reset({ price: 10000 });
  });

  describe('fetchOrders', () => {
    it('sets Orders', async () => {
      await orderStore.fetchOrders();

      expect(orderStore.orders.length).toBe(1);
    });
  });

  describe('reset', () => {
    it('resets order counts and get product price', () => {
      orderStore.reset({ price: 20000 });

      expect(orderStore.itemPrice).toBe(20000);
      expect(orderStore.orderCount).toBe(1);
      expect(orderStore.totalPrice).toBe(20000);
    });
  });

  describe('increaseCount', () => {
    it('increase order count', () => {
      expect(orderStore.orderCount).toBe(1);
      expect(orderStore.totalPrice).toBe(10000);

      orderStore.increaseCount();
      expect(orderStore.orderCount).toBe(2);
      expect(orderStore.totalPrice).toBe(20000);
    });
  });

  describe('decreaseCount', () => {
    context('when order count is more than 1', () => {
      it('decrease order count', () => {
        orderStore.increaseCount();
        expect(orderStore.orderCount).toBe(2);
        expect(orderStore.totalPrice).toBe(20000);

        orderStore.decreaseCount();
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);
      });
    });

    context('when order count is less then 2', () => {
      it('decrease order count', () => {
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);

        orderStore.decreaseCount();
        expect(orderStore.orderCount).toBe(1);
        expect(orderStore.totalPrice).toBe(10000);
      });
    });
  });

  describe('createOrder', () => {
    async function request({ id, orderCount, totalPrice }) {
      await orderStore.createOrder({
        id,
        orderCount,
        totalPrice,
        to: '제임스',
        address: '뉴욕',
        message: '생축',
      });
    }
    context('when create is Success', () => {
      it('sets createOrder state process to success', async () => {
        request({ id: 1, orderCount: 1, totalPrice: 10000 });

        expect(orderStore.isCreateOrderProcessing).toBeTruthy();

        await waitFor(() => {
          expect(orderStore.isCreateOrderSuccess).toBeTruthy();
        });
      });
      it('does not sets error message', async () => {
        request({ id: 1, orderCount: 1, totalPrice: 10000 });

        await waitFor(() => {
          expect(orderStore.errorMessage).toBeFalsy();
        });
      });
    });

    context('when create is fail', () => {
      it('sets createOrder state process to fail', async () => {
        request({ id: 1, orderCount: -1, totalPrice: -10000 });

        expect(orderStore.isCreateOrderProcessing).toBeTruthy();

        await waitFor(() => {
          expect(orderStore.isCreateOrderFail).toBeTruthy();
        });
      });
      it('sets error message', async () => {
        request({ id: 1, orderCount: -1, totalPrice: -10000 });

        await waitFor(() => {
          expect(orderStore.errorMessage).toBeTruthy();
        });
      });
    });
  });
});
