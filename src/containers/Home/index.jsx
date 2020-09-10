import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/text/H1';
import P from '../../components/text/P';

const HomeWrapper = styled.div`
  width: 100%;
`;

function Home() {
  return (
    <HomeWrapper>
      <H1>Home</H1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </P>
    </HomeWrapper>
  );
}

export default Home;
