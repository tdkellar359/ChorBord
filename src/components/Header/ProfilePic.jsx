import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const ProfilePic = styled(Avatar)`
  &.MuiAvatar-root {
    height: ${(props) => props.diameter};
    width: ${(props) => props.diameter};
  }

  &.MuiAvatar-colorDefault {
    background-color: ${(props) => props.theme.surfaceDark};
    color: ${(props) => props.theme.surfaceLight};
  }
`;

export default ProfilePic;
