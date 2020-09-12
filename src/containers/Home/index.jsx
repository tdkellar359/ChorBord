import React from 'react';
import { HomeWrapper } from './styled';
import RecentActivity from './RecentActivity';
import Housemates from './Housemates';
import HouseView from './HouseView';

function Home() {
  return (
    <HomeWrapper>

      <HouseView />

      <RecentActivity />

      <Housemates />

    </HomeWrapper>
  );
}

export default Home;
