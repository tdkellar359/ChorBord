import { Link } from 'react-router-dom';
import styled from 'styled-components';
import P from '../text/P';

export const BottomNavWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.25em;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4em;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BottomNavContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const BottomNavItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const PStyled = styled(P)`
  margin: 0;
  font-size: 0.75em;
`;
