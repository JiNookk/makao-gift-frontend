import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useAccountStore from '../hooks/useAccountStore';
import numberFormat from '../numberFormat';

export default function Header() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const accountStore = useAccountStore();

  const handleLogout = () => {
    setAccessToken('');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">스토어</Link>
        </li>
        <li>
          <Link to="/orders">주문조회</Link>
        </li>
      </ul>
      {accessToken ? (
        <ul>
          <li>
            <Link to="/" onClick={handleLogout}>로그아웃</Link>
          </li>
          <li>
            내 잔액:
            {' '}
            {numberFormat(accountStore.amount)}
            원
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
