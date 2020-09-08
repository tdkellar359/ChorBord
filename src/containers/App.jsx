import React from 'react';
import { ThemeProvider } from 'styled-components';
import H1 from '../components/text/H1';
import H2 from '../components/text/H2';
import P from '../components/text/P';
import Card from '../components/Card';
import Header from '../components/Header';
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

  // Text Colors
  primaryText: '#000',
  secondaryText: '#000',

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
        <Header minHeight={50} maxHeight={250} />
        <Card>
          <H1>H1</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis
            vulputate enim nulla aliquet. Consectetur libero id faucibus nisl. Feugiat
            in ante metus dictum. Urna molestie at elementum eu facilisis sed odio morbi.
            Varius sit amet mattis vulputate. A lacus vestibulum sed arcu. Quis commodo
            odio aenean sed adipiscing diam donec adipiscing tristique. Metus aliquam eleifend
            mi in nulla posuere sollicitudin aliquam. Pulvinar sapien et ligula ullamcorper
            malesuada proin libero nunc consequat. A cras semper auctor neque vitae tempus.
            In massa tempor nec feugiat nisl.
          </P>
        </Card>
        <H2>H2</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis
          vulputate enim nulla aliquet. Consectetur libero id faucibus nisl. Feugiat
          in ante metus dictum. Urna molestie at elementum eu facilisis sed odio morbi.
          Varius sit amet mattis vulputate. A lacus vestibulum sed arcu. Quis commodo
          odio aenean sed adipiscing diam donec adipiscing tristique. Metus aliquam eleifend
          mi in nulla posuere sollicitudin aliquam. Pulvinar sapien et ligula ullamcorper
          malesuada proin libero nunc consequat. A cras semper auctor neque vitae tempus.
          In massa tempor nec feugiat nisl.
        </P>
      </div>
    </ThemeProvider>
  );
}

export default App;
