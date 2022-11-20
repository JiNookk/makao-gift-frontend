import { Link } from 'react-router-dom';
import useAccountStore from '../hooks/useAccountStore';
import numberFormat from '../numberFormat';

export default function Header() {
  const accountStore = useAccountStore();
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
      <ul>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          내 잔액:
          {' '}
          {numberFormat(accountStore.amount)}
          원
        </li>
        {/* TODO: 로그인 기능 만들 때 로그아웃 버튼 구현할 것 */}
      </ul>

    </nav>
  );
}
