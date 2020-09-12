import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Card from '../../components/Card';
import H3 from '../../components/text/H3';

function Housemates() {
  return (
    <Card>
      <H3>Housemates</H3>
      <Chip avatar={<Avatar>TK</Avatar>} label="Tristan Kellar" />
      <Chip avatar={<Avatar>CW</Avatar>} label="Cooper Wrona" />
      <Chip avatar={<Avatar>LB</Avatar>} label="Logan Bergeron" />
      <Chip avatar={<Avatar>BF</Avatar>} label="Bryan Flowers" />
      <Chip avatar={<Avatar>MF</Avatar>} label="Matt Fannin" />
      <Chip avatar={<Avatar>JD</Avatar>} label="Jimmy DeCamp" />
    </Card>
  );
}

export default Housemates;
