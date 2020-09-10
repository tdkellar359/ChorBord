import styled from 'styled-components';

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
`;
