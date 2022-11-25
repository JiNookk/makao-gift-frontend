import { waitFor } from '@testing-library/react';
import OrdersStore from './OrdersStore';

const context = describe;

describe('OrdersStore', () => {
  let ordersStore;

  beforeEach(() => {
    ordersStore = new OrdersStore();
    ordersStore.reset({ price: 10000 });
  });

  describe('fetchOrders', () => {
    it('sets Orders', async () => {
      await ordersStore.fetchOrders();

      expect(ordersStore.orders.length).toBe(1);
    });
  });

  // 없애야 됨.
  describe('reset', () => {
    it('resets order counts and get product price', () => {
      ordersStore.reset({ price: 20000 });

      expect(ordersStore.itemPrice).toBe(20000);
      expect(ordersStore.orderCount).toBe(1);
      expect(ordersStore.totalPrice).toBe(20000);
    });
  });

  describe('increaseCount', () => {
    it('increase order count', () => {
      expect(ordersStore.orderCount).toBe(1);
      expect(ordersStore.totalPrice).toBe(10000);

      ordersStore.increaseCount();
      expect(ordersStore.orderCount).toBe(2);
      expect(ordersStore.totalPrice).toBe(20000);
    });
  });

  describe('decreaseCount', () => {
    context('when order count is more than 1', () => {
      it('decrease order count', () => {
        ordersStore.increaseCount();
        expect(ordersStore.orderCount).toBe(2);
        expect(ordersStore.totalPrice).toBe(20000);

        ordersStore.decreaseCount();
        expect(ordersStore.orderCount).toBe(1);
        expect(ordersStore.totalPrice).toBe(10000);
      });
    });
  });

  describe('createOrder', () => {
    async function request({ id, orderCount, totalPrice }) {
      await ordersStore.createOrder({
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

        expect(ordersStore.isCreateOrderProcessing).toBeTruthy();

        await waitFor(() => {
          expect(ordersStore.isCreateOrderSuccess).toBeTruthy();
        });
      });
      it('does not sets error message', async () => {
        request({ id: 1, orderCount: 1, totalPrice: 10000 });

        await waitFor(() => {
          expect(ordersStore.errorMessage).toBeFalsy();
        });
      });
    });

    context('when create is fail', () => {
      it('sets createOrder state process to fail', async () => {
        request({ id: 1, orderCount: -1, totalPrice: -10000 });

        expect(ordersStore.isCreateOrderProcessing).toBeTruthy();

        await waitFor(() => {
          expect(ordersStore.isCreateOrderFail).toBeTruthy();
        });
      });
      it('sets error message', async () => {
        request({ id: 1, orderCount: -1, totalPrice: -10000 });

        await waitFor(() => {
          expect(ordersStore.errorMessage).toBeTruthy();
        });
      });
    });
  });
});
