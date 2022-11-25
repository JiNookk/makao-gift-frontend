import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAccountStore from '../hooks/useAccountStore.js';
import numberFormat from '../numberFormat.js';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;
  padding: 0 320px;

  height: 64px;

  ul{
    display: flex;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const A = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-inline-start: 2rem;
`;

export default function Header({ accessToken, setAccessToken }) {
  const accountStore = useAccountStore();

  const handleLogout = () => {
    setAccessToken('');
  };

  return (
    <Navigation>
      <ul>
        <Title>선물하기</Title>
        <li>
          <A to="/">홈</A>
        </li>
        <li>
          <A to="/products">스토어</A>
        </li>
        <li>
          <A to={accessToken ? '/orders' : '/login'}>주문조회</A>
        </li>
      </ul>
      {accessToken ? (
        <ul>
          <li>
            내 잔액:
            {' '}
            {numberFormat(accountStore.amount)}
            원
          </li>
          <li>
            <A to="/" onClick={handleLogout}>로그아웃</A>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <A to="/signup">회원가입</A>
          </li>
          <li>
            <A to="/login">로그인</A>
          </li>
        </ul>
      )}
    </Navigation>
  );
}
