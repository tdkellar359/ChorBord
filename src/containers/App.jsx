import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../assets/themes/defaultTheme';
import ThemeSwitcherContext from '../components/context/ThemeSwitcherContext';
import Header from '../components/Header';
import Router from '../components/Router';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState(defaultTheme);
  const value = { theme, setTheme };

  return (
    <ThemeSwitcherContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router disableSlide>
            <Header />
          </Router>
        </div>
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

export default App;
