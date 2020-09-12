import React from 'react';
import Card from '../../components/Card';
import H3 from '../../components/text/H3';

function HouseView() {
  return (
    <Card>
      <H3>506 Packard</H3>
      <ul>
        <li>Shows all chores in the house</li>
        <li>If done recently --&gt; Green (Success Color)</li>
        <li>If overdue --&gt; Red (Error Color)</li>
        <li>Click on chore to get more details</li>
      </ul>
    </Card>
  );
}

export default HouseView;
