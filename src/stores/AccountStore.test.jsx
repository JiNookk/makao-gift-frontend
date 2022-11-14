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
});
