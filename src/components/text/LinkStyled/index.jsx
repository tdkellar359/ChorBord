import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.primary};
`;

export default LinkStyled;
