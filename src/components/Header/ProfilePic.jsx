import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const AvatarStyled = styled(Avatar)`
  &.MuiAvatar-root {
    height: ${(props) => props.diameter};
    width: ${(props) => props.diameter};
  }

  &.MuiAvatar-colorDefault {
    background-color: ${(props) => props.theme.surfaceDark};
    color: ${(props) => props.theme.surfaceLight};
  }
`;

const ProfilePic = ({ diameter }) => (
  <AvatarStyled diameter={diameter} />
);

ProfilePic.propTypes = {
  diameter: PropTypes.string,
};

ProfilePic.defaultProps = {
  diameter: '50px',
};

export default ProfilePic;
