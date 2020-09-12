import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';

export const BottomNavWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabsStyled = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.primaryDark};
  }
`;
