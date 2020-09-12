import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BottomNavItem from './BottomNavItem';
import { BottomNavWrapper, BottomNavContent } from './styled';

function BottomNav() {
  const theme = useContext(ThemeContext);

  return (
    <BottomNavWrapper>
      <BottomNavContent>
        <BottomNavItem
          icon={<PersonOutlinedIcon style={{ fontSize: '2em', color: theme.surfaceDark }} />}
          iconActive={<PersonIcon style={{ fontSize: '2em' }} />}
          route="/profile"
          label="Profile"
        />
        <BottomNavItem
          icon={<HomeOutlinedIcon style={{ fontSize: '2em', color: theme.surfaceDark }} />}
          iconActive={<HomeIcon style={{ fontSize: '2em' }} />}
          route="/home"
          label="Home"
        />
        <BottomNavItem
          icon={<ShoppingCartOutlinedIcon style={{ fontSize: '2em', color: theme.surfaceDark }} />}
          iconActive={<ShoppingCartIcon style={{ fontSize: '2em' }} />}
          route="/store"
          label="Store"
        />
        <BottomNavItem
          icon={<SettingsOutlinedIcon style={{ fontSize: '2em', color: theme.surfaceDark }} />}
          iconActive={<SettingsIcon style={{ fontSize: '2em' }} />}
          route="/settings"
          label="Settings"
        />
      </BottomNavContent>
    </BottomNavWrapper>
  );
}

export default BottomNav;
