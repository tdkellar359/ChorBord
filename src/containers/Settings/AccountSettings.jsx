import React from 'react';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LockIcon from '@material-ui/icons/Lock';
import LaunchIcon from '@material-ui/icons/Launch';
import TimerIcon from '@material-ui/icons/Timer';
import IconButton from '@material-ui/core/IconButton';
import H3 from '../../components/text/H3';
import SettingRow from '../../components/SettingRow';

function AccountSettings() {
  const [sessionTime, setSessionTime] = React.useState(-1);

  return (
    <>
      <H3>Account Settings</H3>
      <List>

        <SettingRow
          label="Change Password"
          icon={<LockIcon />}
          secondaryAction={(
            <IconButton>
              <LaunchIcon />
            </IconButton>
          )}
        />

        <SettingRow
          label="Sign Me Out"
          icon={<TimerIcon />}
          secondaryAction={(
            <Select value={sessionTime} onChange={(ev) => setSessionTime(ev.target.value)}>
              <MenuItem value={-1}>Never</MenuItem>
              {
                [0.25, 0.5, 1, 2, 3, 7, 30].map((days) => {
                  const hours = days * 24;
                  let timeDesc;
                  if (hours < 24) {
                    timeDesc = ` ${hours} hours`;
                  } else if (hours === 24) {
                    timeDesc = ' 1 day';
                  } else if (hours < 24 * 7) {
                    timeDesc = ` ${hours / 24} days`;
                  } else if (hours === 24 * 7) {
                    timeDesc = ' 1 week';
                  } else {
                    timeDesc = ' 1 month';
                  }

                  return (
                    <MenuItem value={days * 24} key={days}>
                      After
                      {timeDesc}
                    </MenuItem>
                  );
                })
              }
            </Select>
          )}
        />

      </List>
    </>
  );
}

export default AccountSettings;
