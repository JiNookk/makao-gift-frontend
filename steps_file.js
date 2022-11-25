// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  // eslint-disable-next-line no-undef
  return actor({
    login({ id, password }) {
      this.amOnPage('/');
      this.click('로그인');
      this.fillField('아이디', id);
      this.fillField('비밀번호', password);
      this.click('로그인하기');
    },
    setupItemDB({ productCounts }) {
      const query = `products=${productCounts}`;
      this.amOnPage(`${backdoorBaseUrl}/setup-products-db?${query}`);
    },

    setupOrderDB({ orderCounts }) {
      const query = `orders=${orderCounts}`;
      this.amOnPage(`${backdoorBaseUrl}/setup-orders-db?${query}`);
    },

    setupAccountDB() {
      this.amOnPage(`${backdoorBaseUrl}/setup-accounts-db`);
    },
  });
};
