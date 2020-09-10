import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import {
  HeaderWrapper,
  HeaderContent,
  HeaderContentCollapsed,
  HeaderContentCollapsedItem,
} from './styled';
import BottomNav from '../BottomNav';
import ProfilePic from './ProfilePic';
import P from '../text/P';

function Header({ minHeight, maxHeight, disableCollapse }) {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = disableCollapse ? null : () => {
    // Current scroll position
    const x = window.scrollY;

    // 'Breakpoint' where opacity starts to change
    const a = (maxHeight - minHeight) - 110;

    // Arbitrary constant for shape
    const b = -0.5;

    // Logistic growth curve (with a shift)
    const newOpacity = 1 / (1 + a * Math.exp(b * x + a));

    if (newOpacity >= 0 && newOpacity <= 1) {
      // Set opacity if within range
      setOpacity(newOpacity);
    } else if (opacity !== 1) {
      // Set opacity to 1 if not already set
      // This is to help avoid unecessary rerenders
      setOpacity(1);
    }
  };

  useEffect(() => {
    // Called every render loop
    // addEventListener will ignore calls with identical parameters
    document.addEventListener('scroll', handleScroll);

    // Return a teardown function.
    // Here we are removing the scroll event listener
    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <HeaderWrapper style={{ height: `${maxHeight}px` }}>
        <HeaderContentCollapsed style={{ height: `${minHeight}px`, opacity }}>
          <HeaderContentCollapsedItem>
            <Chip avatar={<Avatar>TK</Avatar>} label="Tristan Kellar" />
          </HeaderContentCollapsedItem>
          <HeaderContentCollapsedItem>
            <MenuIcon fontSize="large" />
          </HeaderContentCollapsedItem>
        </HeaderContentCollapsed>
        <HeaderContent>
          <ProfilePic diameter="100px" />
          <P>Tristan Kellar</P>
        </HeaderContent>
        <BottomNav />
      </HeaderWrapper>
      <div style={{ height: `${maxHeight}px` }} />
    </>
  );
}

Header.propTypes = {
  minHeight: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  disableCollapse: PropTypes.bool,
};

Header.defaultProps = {
  disableCollapse: false,
};

export default Header;
