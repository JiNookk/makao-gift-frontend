/* eslint-disable react/jsx-props-no-spreading */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import SignUpSuccessPage from './SignUpSuccessPage';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [isSignUped, setIsSignUped] = useState(false);

  const handleSignUp = () => {
    setIsSignUped(true);
  };

  const handleNavigate = () => {
    setIsSignUped(false);
    navigate('/login');
  };

  return (
    <div>
      {isSignUped ? (
        <SignUpSuccessPage onClick={handleNavigate} />
      ) : (
        <SignUpForm onSubmit={handleSignUp} />
      )}
    </div>
  );
}
