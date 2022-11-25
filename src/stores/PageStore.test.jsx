import PageStore from './PageStore.js';

describe('PageStore', () => {
  let pageStore;

  beforeEach(() => {
    pageStore = new PageStore();
  });

  describe('update LastPage', () => {
    it('sets last page', () => {
      pageStore.updateLastPage({ lastPage: 'product' });

      expect(pageStore.lastPage).toBe('product');
    });
  });
});
