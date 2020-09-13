import React from 'react';
import styled from 'styled-components';
import ThemeSettings from './ThemeSettings';
import AccountSettings from './AccountSettings';

const SettingsWrapper = styled.div`
  h3 {
    color: ${(props) => props.theme.secondaryDark}
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Settings extends React.Component {
  render() {
    return (
      <SettingsWrapper>

        <ThemeSettings />

        <AccountSettings />

      </SettingsWrapper>
    );
  }
}

export default Settings;
