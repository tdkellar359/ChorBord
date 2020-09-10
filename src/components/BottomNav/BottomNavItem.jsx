import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BottomNavItemWrapper, PStyled } from './styled';

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
