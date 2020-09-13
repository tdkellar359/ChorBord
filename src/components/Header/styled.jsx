import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primaryLight};
`;

export const HeaderContentCollapsed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 1px 5px 0 ${(props) => props.theme.surfaceDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
  z-index: 1000;
`;

export const HeaderContentCollapsedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5em;
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;

  & p {
    margin: 0.25em;
  }

  & p:not(:nth-child(2)) {
    font-size: 0.85em;
    font-style: italic;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryDark};
  font-weight: bold;
  margin-top: 0.25em;
  font-size: 1.25em;
`;
