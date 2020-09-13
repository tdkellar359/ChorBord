import React from 'react';
import defaultTheme from '../../assets/themes/defaultTheme';

const ThemeSwitcherContext = React.createContext({
  theme: defaultTheme,
  setTheme: () => {},
});

export default ThemeSwitcherContext;
