import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';

function IconPopper({ icon, popperContent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openPopper = (ev) => setAnchorEl(ev.currentTarget);
  const closePopper = () => setAnchorEl(null);

  return (
    <>
      <ClickAwayListener onClickAway={closePopper}>
        <IconButton onClick={openPopper}>
          { icon }
        </IconButton>
      </ClickAwayListener>

      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        { popperContent }
      </Popper>
    </>
  );
}

IconPopper.propTypes = {
  icon: PropTypes.element.isRequired,
  popperContent: PropTypes.element.isRequired,
};

export default IconPopper;
