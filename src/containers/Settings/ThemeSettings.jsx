import React from 'react';
import { ThemeContext } from 'styled-components';
import List from '@material-ui/core/List';
import ColorizeIcon from '@material-ui/icons/Colorize';
import PaletteIcon from '@material-ui/icons/Palette';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import { MenuItem, Select } from '@material-ui/core';
import { SwatchesPicker } from 'react-color';
import H3 from '../../components/text/H3';
import SettingRow from '../../components/SettingRow';
import IconPopper from '../../components/IconPopper';

function ThemeSettings() {
  const [fontSize, setFontSize] = React.useState(16);
  const theme = React.useContext(ThemeContext);

  const handleColorChange = (color) => {
    console.log(color);
    theme.primaryLight = color.hex;
  };

  return (
    <>
      <H3>Theme</H3>
      <List>

        <SettingRow
          label="Primary Color"
          bgColor="primary"
          icon={<PaletteIcon />}
          secondaryAction={(
            <IconPopper
              icon={<ColorizeIcon />}
              popperContent={<SwatchesPicker onChangeComplete={handleColorChange} />}
            />
          )}
        />

        <SettingRow
          label="Secondary Color"
          bgColor="secondary"
          icon={<PaletteIcon />}
          secondaryAction={(
            <IconPopper
              icon={<ColorizeIcon />}
              popperContent={<SwatchesPicker />}
            />
          )}
        />

        <SettingRow
          label="Font Size"
          icon={<FontDownloadIcon />}
          secondaryAction={(
            <Select
              size="small"
              value={fontSize}
              onChange={(ev) => setFontSize(ev.target.value)}
            >
              {
                [12, 14, 16, 18, 20].map((size) => (
                  <MenuItem
                    key={size}
                    value={size}
                  >
                    {size}
                  </MenuItem>
                ))
              }
            </Select>
          )}
        />
      </List>
    </>
  );
}

export default ThemeSettings;
