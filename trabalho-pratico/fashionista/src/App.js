import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import Header from './components/header';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
