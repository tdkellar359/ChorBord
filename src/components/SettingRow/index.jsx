import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const AvatarStyledPrimary = styled(Avatar)`
  &.MuiAvatar-colorDefault {
    background-color: ${(props) => props.theme.primary};
  }
`;

const AvatarStyledSecondary = styled(Avatar)`
  &.MuiAvatar-colorDefault {
    background-color: ${(props) => props.theme.secondary};
  }
`;

function SettingRow({
  icon,
  secondaryAction,
  label,
  bgColor,
}) {
  return (
    <ListItem>
      <ListItemAvatar>
        { !bgColor && <Avatar>{ icon }</Avatar> }
        { bgColor === 'primary' && <AvatarStyledPrimary>{ icon }</AvatarStyledPrimary>}
        { bgColor === 'secondary' && <AvatarStyledSecondary>{ icon }</AvatarStyledSecondary>}
      </ListItemAvatar>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        { secondaryAction }
      </ListItemSecondaryAction>
    </ListItem>
  );
}

SettingRow.propTypes = {
  icon: PropTypes.element.isRequired,
  secondaryAction: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

SettingRow.defaultProps = {
  bgColor: null,
};

export default SettingRow;
