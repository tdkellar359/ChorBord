import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  
  & .Card {
    flex: 1 1 auto;
    margin: 0.5em;
  }
`;
