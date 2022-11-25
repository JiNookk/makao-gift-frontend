/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';
import Container from '../components/ui/Container';
import SignUpSuccessPage from './SignUpSuccessPage';

const SignUpContainer = styled(Container)`
  padding-bottom: 100px;
  
  `;

const SignUpFormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const HorizontalLine = styled.hr`
  margin-bottom: 4rem;
`;

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
    <SignUpContainer>
      {isSignUped ? (
        <SignUpSuccessPage onClick={handleNavigate} />
      ) : (
        <div>
          <SignUpFormTitle>SIGN UP</SignUpFormTitle>
          <HorizontalLine color="#22DAAB" />
          <SignUpForm onSubmit={handleSignUp} />
        </div>
      )}
    </SignUpContainer>
  );
}
