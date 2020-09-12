import React from 'react';
import { HomeWrapper } from './styled';
import RecentActivity from './RecentActivity';
import Housemates from './Housemates';
import HouseView from './HouseView';

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>

        <HouseView />

        <RecentActivity />

        <Housemates />

      </HomeWrapper>
    );
  }
}

export default Home;
