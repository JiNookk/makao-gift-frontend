// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  // eslint-disable-next-line no-undef
  return actor({
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
