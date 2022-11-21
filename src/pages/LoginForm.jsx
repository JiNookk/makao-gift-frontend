/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
import useAccountStore from '../hooks/useAccountStore';
import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginForm({ onSubmit }) {
  const accountStore = useAccountStore();
  const loginFormStore = useLoginFormStore();

  const handleLogin = async (event) => {
    event.preventDefault();

    const { userName, password } = loginFormStore;

    const accessToken = await accountStore.login({ password, userName });

    // TODO: 로그인 구현

    if (accessToken) {
      onSubmit(accessToken);
    }

    // loginFormStore.reset();
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          aria-label="input-userName"
          placeholder="아이디"
          value={loginFormStore.userName}
          onChange={(e) => loginFormStore.changeUserName(e.target.value)}
        />
      </div>
      <div>
        <input
          aria-label="input-password"
          // type="password"
          placeholder="비밀번호"
          value={loginFormStore.password}
          onChange={(e) => loginFormStore.changePassword(e.target.value)}
        // {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
      </div>
      <p>
        {
          !loginFormStore.userName && '아이디를 입력해주세요'
          || !loginFormStore.password && '비밀번호를 입력해주세요'
          || accountStore.errorMessage && accountStore.errorMessage
        }
      </p>

      <button type="submit">로그인하기</button>
    </form>
  );
}
