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
  secondary: '#ffab91',
  secondaryLight: '#ffddc1',
  secondaryDark: '#c97b63',

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
      <div className="App">
        <Router disableSlide>
          <Header minHeight={50} maxHeight={250} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
