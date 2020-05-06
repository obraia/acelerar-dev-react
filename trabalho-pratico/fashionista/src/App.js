import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

// --> Components
import Header from './components/header';

// --> Pages
import Home from './pages/home';

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
