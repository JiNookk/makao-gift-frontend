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
      <div>
        <p>
          내 잔액:
          {' '}
          {numberFormat(accountStore.amount)}
          원
        </p>
        {/* TODO: 로그인 기능 만들 때로그아웃 버튼 구현할 것 */}
      </div>
    </nav>
  );
}
