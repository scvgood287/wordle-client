import 'styled-components';

declare module 'styled-components' {
  type Color = string;

  interface Colors {
    // neutral color
    mainBackground: Color,
  
    // point-color
    title: Color,
    primaryText: Color,
    secondaryText: Color,
    disable: Color,
    border: Color,
    divider: Color,
    background: Color,
    tableHeader: Color,
  };

  interface DefaultTheme {
    colors: Colors
  };
};