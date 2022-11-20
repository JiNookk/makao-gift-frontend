/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAccountStore from '../hooks/useAccountStore';

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
      <div>
        <label htmlFor="input-name">이름 :</label>
        <input
          id="input-name"
          {...register('name', {
            required: '이름을 입력해주세요',
            pattern: {
              value: /^[가-힣]{3,7}$/,
              message: '이름을 다시 확인해주세요',
            },
          })}
        />
      </div>
      {/* ?.로 더 줄일수는 없을까? */}
      {errors.name && <p>{errors.name.message}</p>
        || <p>3~7자까지 한글만 사용 가능</p>}
      <div>
        <label htmlFor="input-userName">아이디 :</label>
        <input
          id="input-userName"
          {...register('userName', {
            required: '아이디를 입력해주세요',
            pattern: {
              value: /^[a-z0-9]{4,16}$/,
              message: '아이디를 다시 확인해주세요',
            },
          })}
        />
      </div>
      {isDuplicated && <p>해당 아이디는 사용할 수 없습니다</p>
      || errors.userName && <p>{errors.userName.message}</p>
      || <p>영문소문자/숫자, 4~16자만 사용가능</p>}
      <div>
        <label htmlFor="input-password">비밀번호 :</label>
        <input
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
      </div>
      {errors.password && <p>{errors.password.message}</p>
      || <p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>}
      <div>
        <label htmlFor="input-password-confirm">비밀번호 확인 :</label>
        <input
          id="input-password-confirm"
          type="password"
          {...register('confirm', {
            validate: (value) => {
              if (watch('password') !== value) {
                return '비밀번호가 일치하지 않습니다';
              }
            },
          })}
        />
      </div>
      {errors.confirm && errors.confirm.message}
      <button type="submit">회원가입</button>
    </form>
  );
}
