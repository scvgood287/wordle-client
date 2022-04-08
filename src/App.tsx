import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'src/styles/global-styles';
import themes from 'src/styles/theme';
import { useCurrentThemeState } from '@/store';

const App = () => {
  const currentTheme = useCurrentThemeState();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <div className="App">
        hello
      </div>
    </ThemeProvider>
  );
}

export default memo(App);