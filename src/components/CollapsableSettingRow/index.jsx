import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const CollapseStyled = styled(Collapse)`
  & .MuiListItem-root {
    margin-left: 1em;
  }
`;

function CollapsableSettingRow({
  icon,
  label,
  children,
}) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <ListItem button onClick={toggleOpen}>
        <ListItemAvatar>
          <Avatar>{ icon }</Avatar>
        </ListItemAvatar>
        <ListItemText primary={label} />
        <ListItemSecondaryAction>
          <IconButton onClick={toggleOpen}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <CollapseStyled in={open}>
        { children }
      </CollapseStyled>
    </>
  );
}

CollapsableSettingRow.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsableSettingRow;
