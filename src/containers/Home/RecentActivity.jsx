import React from 'react';
import Card from '../../components/Card';
import H3 from '../../components/text/H3';

function RecentActivity() {
  return (
    <Card>
      <H3>Recent Activity</H3>
      <ul>
        <li>Shows most recently completed chores</li>
        <li>Click on chore to get more details</li>
        <li>Same page as click on chore above</li>
      </ul>
    </Card>
  );
}

export default RecentActivity;
