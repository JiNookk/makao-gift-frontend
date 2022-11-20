/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useProduct from '../hooks/useProduct';
import numberFormat from '../numberFormat';
import useAccountStore from '../hooks/useAccountStore';
import useOrdersStore from '../hooks/useOrdersStore';

export default function OrderPage() {
  const navigate = useNavigate();

  const ordersStore = useOrdersStore();
  const accountStore = useAccountStore();
  const { selectedItem, orderCount, totalPrice } = useProduct();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data) {
      const { id } = selectedItem;

      ordersStore.createOrder({
        id, orderCount, totalPrice, ...data,
      });

      accountStore.purchase({ itemCost: totalPrice });
      navigate('/orders');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        총 상품금액:
        {' '}
        {numberFormat(totalPrice)}
        원
      </p>
      <div>
        <label htmlFor="input-name">받는 분 성함</label>
        <input
          id="input-name"
          {...register('to', { required: true })}
        />
      </div>
      {errors.to ? (
        <p>성함을 입력해주세요</p>
      ) : null}
      <div>
        <label htmlFor="input-address">받는 분 주소</label>
        <input
          id="input-address"
          {...register('address', { required: true })}
        />
        {errors.address ? (
          <p>주소를 입력해주세요</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="input-message">받는 분께 보내는 메세지</label>
        <input
          id="input-message"
          {...register('message')}
        />
      </div>
      <button type="submit">선물하기</button>
    </form>
  );
}
