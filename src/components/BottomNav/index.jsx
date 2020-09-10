import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BottomNavItem from './BottomNavItem';

const BottomNavWrapper = styled.div`
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

const BottomNavContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

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
