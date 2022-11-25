/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PrimaryButton from '../components/ui/PrimaryButton';

const Container = styled.div`
  text-align: center;

  padding-top: 150px;
`;

const SignUpSuccessTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;

  margin-block-end: 1rem;
`;

const P = styled.p`
  font-size: 1.25rem;
`;

export default function SignUpSuccessPage({ onClick: handleClick }) {
  return (
    <Container>
      <SignUpSuccessTitle>회원가입 완료</SignUpSuccessTitle>
      <P>마카오 선물하기 회원가입이 완료되었습니다.</P>
      <P>정상적인 서비스 이용을 위해 로그인을 진행해주세요.</P>
      <PrimaryButton type="button" onClick={handleClick}>로그인하기</PrimaryButton>
    </Container>
  );
}
