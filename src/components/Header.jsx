import { Link } from 'react-router-dom';

export default function Header() {
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
          내 잔액: 50000원
        </p>
        {/* TODO: 로그인 기능 만들 때로그아웃 버튼 구현할 것 */}
      </div>
    </nav>
  );
}
