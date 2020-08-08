import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Routes from './routes';

const App: React.FC = () => {
  const themeColors: DefaultTheme = theme;

  return (
    <ThemeProvider theme={themeColors}>
      <h1>Hello World</h1>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
