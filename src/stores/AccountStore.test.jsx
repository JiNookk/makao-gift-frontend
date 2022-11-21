import { waitFor } from '@testing-library/react';
import AccountStore from './AccountStore';

const context = describe;

describe('AccountStore', () => {
  let accountStore;

  beforeEach(() => {
    accountStore = new AccountStore();
  });

  // 수정 필요
  context('when registered', () => {
    it('sets default amount ', () => {
      expect(accountStore.amount).toBe(50000);
    });
  });

  // 수정 필요
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

  describe('login', () => {
    async function request({ userName, password }) {
      const accessToken = await accountStore.login({
        userName,
        password,
      });

      return accessToken;
    }

    context('with correct userName and password', () => {
      it('loads accounts information', async () => {
        const accessToken = await request({
          userName: 'correct123',
          password: 'Password123!',
        });

        expect(accountStore.name).toBe('오징욱');
        expect(accountStore.amount).toBe(100_000);
        expect(accessToken).toBeTruthy();
      });

      it('does not set error message', async () => {
        await request({ userName: 'correct123', password: 'Password123!' });

        expect(accountStore.errorMessage).toBeFalsy();
      });
    });

    context('with incorrect userName and password', () => {
      it('does not loads accounts information', async () => {
        const accessToken = await request({
          userName: 'incorrect123',
          password: 'Password123!',
        });

        expect(accountStore.name).toBeFalsy();
        expect(accountStore.amount).toBeFalsy();
        expect(accessToken).toBeFalsy();
      });

      it('does not set error message', async () => {
        await request({ userName: 'incorrect123', password: 'Password123!' });

        expect(accountStore.errorMessage).toBeTruthy();
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
