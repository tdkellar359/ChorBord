import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderCollapsedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primaryLight};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primaryLight};
  border-bottom: solid ${(props) => props.theme.primaryDark} 1px;
`;

const Header = ({ minHeight, maxHeight }) => {
  const [opacity, setOpacity] = useState(0);
  const handleScroll = () => {
    const newOpacity = window.scrollY / (maxHeight - minHeight);

    if (newOpacity >= 0 && newOpacity <= 100) {
      setOpacity(newOpacity);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <HeaderWrapper style={{ height: `${maxHeight}px` }}>
        <HeaderCollapsedWrapper style={{ height: `${minHeight}px`, opacity }}>
          Collapsed Content
        </HeaderCollapsedWrapper>
        Normal content
        <br />
        Normal content
        <br />
        Normal content
      </HeaderWrapper>
      <div style={{ height: `${maxHeight}px` }} />
    </>
  );
};

Header.propTypes = {
  minHeight: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
};

export default Header;
