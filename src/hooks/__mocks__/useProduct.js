export default function useProduct() {
  return {
    selectedItem: {
      id: 1,
      name: '테스트 아이템',
      description: '테스트용 아이템입니다.',
      manufacturer: '메가테라',
    },
    orderCount: 1,
    totalPrice: 10000,
    // isAmountEnough,
    // handleIncreaseOrder,
    // handleDecreaseOrder,
    // handleOrder,
  };
}
