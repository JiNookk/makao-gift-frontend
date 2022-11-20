import { waitFor } from '@testing-library/react';
import AccountStore from './AccountStore';

const context = describe;

describe('AccountStore', () => {
  let accountStore;

  beforeEach(() => {
    accountStore = new AccountStore();
  });

  context('when registered', () => {
    it('sets default amount ', () => {
      expect(accountStore.amount).toBe(50000);
    });
  });

  describe('purchase', () => {
    context('when amount is enough', () => {
      it('costs amount', () => {
        expect(accountStore.amount).toBe(50000);

        accountStore.purchase({ itemCost: 20000 });
        expect(accountStore.amount).toBe(30000);
      });
    });

    context('when amount is not enough', () => {
      it('does not costs amount', () => {
        expect(accountStore.amount).toBe(50000);

        accountStore.purchase({ itemCost: 200000 });
        expect(accountStore.amount).toBe(50000);
      });
    });

    context('when amount is negative number', () => {
      it('does not costs amount', () => {
        expect(accountStore.amount).toBe(50000);

        accountStore.purchase({ itemCost: -200000 });
        expect(accountStore.amount).toBe(50000);
      });
    });
  });

  describe('requestSignup', () => {
    async function request({ userName, password }) {
      await accountStore.requestSignUp({ userName, password });
    }
    context('when requests successful', () => {
      beforeEach(() => {
        request({
          name: '통과합니당',
          userName: 'correct123',
          password: 'Password123!',
        });
      });

      it('sets signUp state "processing" to "success', async () => {
        expect(accountStore.isSignUpProcessing).toBeTruthy();

        await waitFor(() => {
          expect(accountStore.isSignUpSuccess).toBeTruthy();
        });
      });

      it('does not set error message', async () => {
        await waitFor(() => {
          expect(accountStore.errorMessage).toBeFalsy();
        });
      });
    });

    context('when requests failed', () => {
      beforeEach(() => {
        request({
          name: '중복이얌',
          userName: 'overlapped123',
          password: 'Password123!',
        });
      });

      it('sets signUp state "processing" to "fail', async () => {
        expect(accountStore.isSignUpProcessing).toBeTruthy();

        await waitFor(() => {
          expect(accountStore.isSignUpFail).toBeTruthy();
        });
      });

      it('sets error message', async () => {
        await waitFor(() => {
          expect(accountStore.errorMessage).toBeTruthy();
        });
      });
    });
  });
});
