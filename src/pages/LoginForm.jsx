/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/ui/Input.jsx';
import PrimaryButton from '../components/ui/PrimaryButton.jsx';
import SecondaryButton from '../components/ui/SecondaryButton.jsx';
import useAccountStore from '../hooks/useAccountStore.js';
import useLoginFormStore from '../hooks/useLoginFormStore.js';

const HorizontalLine = styled.hr`
  width: 400px;

  margin-bottom: 4rem;
`;

const Error = styled.p`
  margin-block: 1.25rem;

  color: #FF424D;
`;

export default function LoginForm({ onSubmit, onClick: handleClick }) {
  const accountStore = useAccountStore();
  const loginFormStore = useLoginFormStore();

  useEffect(() => () => loginFormStore.reset(), []);

  const handleLogin = async (event) => {
    event.preventDefault();

    const { userName, password } = loginFormStore;
    const accessToken = await accountStore.login({ password, userName });

    if (accessToken) {
      onSubmit(accessToken);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <HorizontalLine color="#22DAAB" />
      <div>
        <Input
          aria-label="input-userName"
          placeholder="아이디"
          value={loginFormStore.userName}
          onChange={(e) => loginFormStore.changeUserName(e.target.value)}
        />
      </div>
      <div>
        <Input
          // aria-label="input-password"
          type="password"
          placeholder="비밀번호"
          value={loginFormStore.password}
          onChange={(e) => loginFormStore.changePassword(e.target.value)}
        // {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
      </div>
      <Error>
        {
          !loginFormStore.userName && '아이디를 입력해주세요'
          || !loginFormStore.password && '비밀번호를 입력해주세요'
          || accountStore.errorMessage && accountStore.errorMessage
        }
      </Error>
      <PrimaryButton type="submit">로그인하기</PrimaryButton>
      <SecondaryButton type="button" onClick={handleClick}>회원가입</SecondaryButton>
    </form>
  );
}
