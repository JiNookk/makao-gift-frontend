import styled from 'styled-components';
import Container from '../components/ui/Container';

const HomeContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
  padding-bottom: 260px;
`;

const TextBox = styled.article`
  margin-inline-end: 5rem;

  p:nth-child(1){
    font-size: 1.5rem;
    color: #FCBE2C;
  }
  
  p:nth-child(2){
    font-size: 2rem;
    font-weight: bold;
    
    margin-block: 1.5rem;
  }
  
  p:nth-child(3){
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <TextBox>
        <p>
          무얼 선물할 지 고민이라면
        </p>
        <p>
          특별한
          <br />
          아이템을 전하세요
        </p>
        <p>
          마카오 선물하기에서만 볼 수 있는 특별한 아이템
        </p>
      </TextBox>
      <article>
        <img
          src="https://user-images.githubusercontent.com/82752544/203708868-9bfa788d-0fad-4483-9404-21bc15aa471f.png"
          alt="gift"
        />
      </article>
    </HomeContainer>
  );
}
