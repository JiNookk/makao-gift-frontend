// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  return actor({
    setupItemDB({ productCounts }) {
      const query = `products=${productCounts}`;
      this.amOnPage(`${backdoorBaseUrl}/setup-products-db?${query}`);
    },
  });
};
