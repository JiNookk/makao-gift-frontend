import Store from './Store';

export default class PageStore extends Store {
  constructor() {
    super();
    this.lastPage = '';

    // Page 일로 옮길 것
    // this.pages = [];
    // this.page = 0;
  }

  updateLastPage({ lastPage }) {
    this.lastPage = lastPage;
  }
}

export const pageStore = new PageStore();
