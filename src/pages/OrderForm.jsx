/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PrimaryButton from '../components/ui/PrimaryButton.jsx';

const Field = styled.div`
  margin-block: 1.5rem;
`;

const Input = styled.input`
  display: block;

  width: 100%;
  height: 60px;

  margin-block: .5rem;
`;

export default function OrderForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <label htmlFor="input-name">받는 분 성함*</label>
        <Input
          id="input-name"
          maxLength="7"
          {...register('to', { required: true })}
        />
      </Field>
      <p>{errors.to ? '성함을 입력해주세요' : '3~7자까지 한글만 사용 가능'}</p>
      <Field>
        <label htmlFor="input-address">받는 분 주소*</label>
        <Input
          id="input-address"
          {...register('address', { required: true })}
        />
        <p>{errors.address ? '주소를 입력해주세요' : '주소지를 입력해주세요'}</p>
      </Field>
      <Field>
        <label htmlFor="input-message">받는 분께 보내는 메세지</label>
        <Input
          id="input-message"
          maxLength="100"
          {...register('message')}
        />
        <p>100글자 이내로 입력해주세요</p>
      </Field>
      <PrimaryButton type="submit">선물하기</PrimaryButton>
    </form>
  );
}
