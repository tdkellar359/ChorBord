import React from 'react';
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
  return (
    <BottomNavWrapper>
      <BottomNavContent>
        <BottomNavItem
          icon={<PersonOutlinedIcon />}
          iconActive={<PersonIcon />}
          route="/profile"
          label="Profile"
        />
        <BottomNavItem
          icon={<HomeOutlinedIcon />}
          iconActive={<HomeIcon />}
          route="/"
          label="Home"
        />
        <BottomNavItem
          icon={<ShoppingCartOutlinedIcon />}
          iconActive={<ShoppingCartIcon />}
          route="/store"
          label="Store"
        />
        <BottomNavItem
          icon={<SettingsOutlinedIcon />}
          iconActive={<SettingsIcon />}
          route="/settings"
          label="Settings"
        />
      </BottomNavContent>
    </BottomNavWrapper>
  );
}

export default BottomNav;
