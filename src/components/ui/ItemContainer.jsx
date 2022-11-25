import styled from 'styled-components';

const ItemContainer = styled.div`
  display: grid;
  grid: repeat(2, 400px)/ repeat(4, 280px);
  gap: 60px 20px;

  margin-block-start: 2.5rem;
`;

export default ItemContainer;
