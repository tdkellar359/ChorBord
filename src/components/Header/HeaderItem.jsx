import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5em;
`;

const HeaderItem = ({ children }) => (
  <HeaderItemWrapper>
    { children }
  </HeaderItemWrapper>
);

HeaderItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderItem;
