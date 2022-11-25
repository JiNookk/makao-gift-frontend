import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import usePageStore from '../hooks/usePageStore';
import LoginForm from './LoginForm';
import Container from '../components/ui/Container';

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

  height: 100%;

  `;

export default function LoginPage() {
  const navigate = useNavigate();
  const [, setAccessToken] = useLocalStorage('accessToken', '');
  const pageStore = usePageStore();
  const { lastPage } = pageStore;

  useEffect(() => () => { pageStore.updateLastPage({ lastPage: '' }); });

  const handleLogin = (accessToken) => {
    setAccessToken(accessToken, 'accessToken');

    if (lastPage) {
      navigate(lastPage);
      return;
    }

    navigate('/');
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Title>USER LOGIN</Title>
      <LoginForm onSubmit={handleLogin} onClick={handleRegister} />
    </Container>
  );
}
