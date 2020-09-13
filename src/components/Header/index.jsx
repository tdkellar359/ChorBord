import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import {
  HeaderWrapper,
  HeaderContent,
  HeaderContentCollapsed,
  HeaderContentCollapsedItem,
  LinkStyled,
} from './styled';
import BottomNav from '../BottomNav';
import ProfilePic from './ProfilePic';
import P from '../text/P';

/* eslint-disable react/jsx-props-no-spreading */
function MenuItemLink({ children, ...rest }) {
  return <MenuItem component={Link} {...rest}>{children}</MenuItem>;
}
MenuItemLink.propTypes = { children: PropTypes.node.isRequired };

function Header({ disableCollapse }) {
  const headerRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const [collapse, setCollapse] = React.useState(true);
  const [anchorElt, setAnchorElt] = React.useState(null);

  const onMenuButtonClick = (event) => {
    setAnchorElt(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElt(null);
  };

  const handleScroll = disableCollapse ? null : () => {
    if (headerRef && headerRef.current) {
      const scroll = window.scrollY;
      const { clientHeight } = headerRef.current;

      if (collapse && scroll >= clientHeight) {
        setCollapse(false);
      } else if (!collapse && scroll < clientHeight) {
        setCollapse(true);
      }
    }
  };

  useEffect(() => {
    // Called every render loop
    // addEventListener will ignore calls with identical parameters
    document.addEventListener('scroll', handleScroll);

    if (headerRef && headerRef.current && height === 0) {
      setHeight(headerRef.current.clientHeight);
    }

    // Return a teardown function.
    // Here we are removing the scroll event listener
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll, height]);

  return (
    <>
      <HeaderWrapper ref={headerRef}>

        <Slide direction="down" in={!collapse} mountOnEnter unmountOnExit>
          <HeaderContentCollapsed>
            <HeaderContentCollapsedItem>
              <Chip avatar={<Avatar>TK</Avatar>} label="Tristan Kellar" />
            </HeaderContentCollapsedItem>
            <HeaderContentCollapsedItem>
              <IconButton onClick={onMenuButtonClick}>
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={anchorElt}
                open={Boolean(anchorElt)}
                onClose={handleMenuClose}
                keepMounted
              >
                <MenuItemLink onClick={handleMenuClose} to="/profile">Profile</MenuItemLink>
                <MenuItemLink onClick={handleMenuClose} to="/home">Home</MenuItemLink>
                <MenuItemLink onClick={handleMenuClose} to="/market">Market</MenuItemLink>
                <MenuItemLink onClick={handleMenuClose} to="/settings">Settings</MenuItemLink>
              </Menu>
            </HeaderContentCollapsedItem>
          </HeaderContentCollapsed>
        </Slide>

        <HeaderContent>
          <ProfilePic diameter="100px" />
          <LinkStyled to="/profile">Tristan Kellar</LinkStyled>
          <P>Administrator</P>
        </HeaderContent>

        <BottomNav />

      </HeaderWrapper>
      <div style={{ height: `calc(${height}px - 2em)` }} />
    </>
  );
}

Header.propTypes = {
  disableCollapse: PropTypes.bool,
};

Header.defaultProps = {
  disableCollapse: false,
};

export default Header;
