import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Router from '../components/Router';
import './App.css';

const defaultTheme = {
  // Primary Colors
  primary: '#4fc3f7',
  primaryLight: '#8bf6ff',
  primaryDark: '#0093c4',

  // Secondary Colors
  secondary: '',
  secondaryLight: '',
  secondaryDark: '',

  // Primary Text Colors
  primaryText: '#000',
  primaryTextLight: '',

  // Secondary Text Colors
  secondaryText: '#000',
  secondaryTextLight: '',

  // Surface Colors
  surface: '#eceff1',
  surfaceLight: '#FFF',
  surfaceDark: '#babdbe',

  // Notification Colors
  warn: '#ffe082',
  error: '#b71c1c',
  success: '#4caf50',
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <div className="App">
          <Header minHeight={50} maxHeight={250} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
