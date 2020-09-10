import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.surface};
  border: solid ${(props) => props.theme.surfaceDark} 1px;
  box-shadow: 0 0 8px 0 ${(props) => props.theme.surfaceDark};
  border-radius: 0.25em;
  padding: 1em;
  h1, h2, h3, p {
    margin-top: 0;
  }
`;

export default Card;
