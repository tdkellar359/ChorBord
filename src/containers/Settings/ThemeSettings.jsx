import React from 'react';
import List from '@material-ui/core/List';
import ColorizeIcon from '@material-ui/icons/Colorize';
import PaletteIcon from '@material-ui/icons/Palette';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BuildIcon from '@material-ui/icons/Build';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { BlockPicker } from 'react-color';
import ThemeSwitcherContext from '../../components/context/ThemeSwitcherContext';
import H3 from '../../components/text/H3';
import SettingRow from '../../components/SettingRow';
import CollapsableSettingRow from '../../components/CollapsableSettingRow';
import IconPopper from '../../components/IconPopper';
import darkTheme from '../../assets/themes/darkTheme';
import lightTheme from '../../assets/themes/lightTheme';
import defaultTheme from '../../assets/themes/defaultTheme';

function ThemeSettings() {
  const [fontSize, setFontSize] = React.useState(16);
  const { theme, setTheme } = React.useContext(ThemeSwitcherContext);

  const handlePrimaryColorChange = (color) => {
    console.log(color.hex);
    setTheme(darkTheme);
  };

  const handleSecondaryColorChange = (color) => {
    console.log(color.hex);
  };

  return (
    <>
      <H3>Theme</H3>
      <List>

        <SettingRow
          label="Theme"
          icon={<MenuBookIcon />}
          secondaryAction={(
            <Select
              size="small"
              value={theme}
              onChange={(ev) => setTheme(ev.target.value)}
            >
              <MenuItem value={defaultTheme}>Default Theme</MenuItem>
              <MenuItem value={darkTheme}>Dark Theme</MenuItem>
              <MenuItem value={lightTheme}>Light Theme</MenuItem>
            </Select>
          )}
        />

        <CollapsableSettingRow
          label="More Theme Options"
          icon={<BuildIcon />}
        >
          <SettingRow
            label="Primary Color"
            bgColor="primary"
            icon={<PaletteIcon />}
            secondaryAction={(
              <IconPopper
                icon={<ColorizeIcon />}
                popperContent={<BlockPicker onChangeComplete={handlePrimaryColorChange} />}
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
                popperContent={<BlockPicker onChangeComplete={handleSecondaryColorChange} />}
              />
            )}
          />
        </CollapsableSettingRow>

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
