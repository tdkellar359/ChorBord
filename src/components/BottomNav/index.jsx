import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BottomNavWrapper, TabsStyled } from './styled';

/* eslint-disable react/jsx-props-no-spreading */
function LinkTab(props) {
  return (
    <Tab component={Link} {...props} />
  );
}

function BottomNav() {
  const location = useLocation();

  const getValue = (pathname) => {
    switch (pathname) {
      case '/profile':
        return 0;
      case '/home':
        return 1;
      case '/store':
        return 2;
      case '/settings':
        return 3;
      default:
        return 0;
    }
  };

  const [value, setValue] = React.useState(getValue(location.pathname));

  React.useEffect(() => {
    setValue(getValue(location.pathname));
  }, [location.pathname]);

  return (
    <BottomNavWrapper>
      <TabsStyled
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <LinkTab icon={<PersonIcon />} label="Profile" to="/profile" />
        <LinkTab icon={<HomeIcon />} label="Home" to="/home" />
        <LinkTab icon={<ShoppingCartIcon />} label="Store" to="/store" />
        <LinkTab icon={<SettingsIcon />} label="Settings" to="/settings" />
      </TabsStyled>
    </BottomNavWrapper>
  );
}

export default BottomNav;
