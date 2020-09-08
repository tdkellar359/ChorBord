import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.surface};
  border: solid ${(props) => props.theme.surfaceDark} 1px;
  box-shadow: 0 0 8px 0 ${(props) => props.theme.surfaceDark};
  border-radius: 0.25em;
  padding: 1em;
  h1, h2, h3, p {
    margin-top: 0;
  }
`;

const Card = ({ children }) => (
  <CardWrapper>
    { children }
  </CardWrapper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
