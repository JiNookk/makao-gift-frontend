import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import LoginForm from './LoginForm';

export default function LoginPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  const handleLogin = (accessToken) => {
    setAccessToken(accessToken, 'accessToken');
    navigate('/');
  };

  return (
    <LoginForm onSubmit={handleLogin} />
  );
}
