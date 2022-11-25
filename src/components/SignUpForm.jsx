/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useAccountStore from '../hooks/useAccountStore';
import PrimaryButton from './ui/PrimaryButton';

const InputContainer = styled.div`
  margin-block: 1.5rem;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  padding: .5rem;
  height: 60px;
  width:100%;
  margin-block: .5rem;
`;

const Error = styled.p`
  color: #FF424D;
`;

export default function SignUpForm({ onSubmit }) {
  const [isDuplicated, setIsDuplicated] = useState(false);

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  const accountStore = useAccountStore();

  const handleSubmitForm = async (data) => {
    await accountStore.requestSignUp({ ...data });

    const { errorMessage } = accountStore;
    setIsDuplicated(!!errorMessage);

    if (!errorMessage) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <InputContainer>
        <Label htmlFor="input-name">이름 :</Label>
        <Input
          id="input-name"
          {...register('name', {
            required: '이름을 입력해주세요',
            pattern: {
              value: /^[가-힣]{3,7}$/,
              message: '이름을 다시 확인해주세요',
            },
          })}
        />
        {/* ?.로 더 줄일수는 없을까? */}
        {errors.name && <Error>{errors.name.message}</Error>
        || <p>3~7자까지 한글만 사용 가능</p>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="input-userName">아이디 :</Label>
        <Input
          id="input-userName"
          {...register('userName', {
            required: '아이디를 입력해주세요',
            pattern: {
              value: /^[a-z0-9]{4,16}$/,
              message: '아이디를 다시 확인해주세요',
            },
          })}
        />
        {isDuplicated && <p>해당 아이디는 사용할 수 없습니다</p>
      || errors.userName && <Error>{errors.userName.message}</Error>
      || <p>영문소문자/숫자, 4~16자만 사용가능</p>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="input-password">비밀번호 :</Label>
        <Input
          id="input-password"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: '비밀번호를 다시 확인해주세요',
            },
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>
      || <p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="input-password-confirm">비밀번호 확인 :</Label>
        <Input
          id="input-password-confirm"
          type="password"
          {...register('confirm', {
            required: '비밀번호를 입력해주세요',
            // eslint-disable-next-line consistent-return
            validate: (value) => {
              if (watch('password') !== value) {
                return '비밀번호가 일치하지 않습니다';
              }
            },
          })}
        />
        {errors.confirm && errors.confirm.message}
      </InputContainer>
      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </form>
  );
}
