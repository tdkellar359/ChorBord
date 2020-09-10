import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import P from '../text/P';

const BottomNavItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const PStyled = styled(P)`
  margin: 0;
  font-size: 0.75em;
`;

function BottomNavItem({
  icon,
  iconActive,
  label,
  route,
}) {
  const active = route === useLocation().pathname;
  return (
    <BottomNavItemWrapper to={route}>
      {active ? iconActive : icon}
      <PStyled>
        { active ? label : '' }
      </PStyled>
    </BottomNavItemWrapper>
  );
}

BottomNavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  iconActive: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default BottomNavItem;
