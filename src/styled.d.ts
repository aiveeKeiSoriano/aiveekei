import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      textSecondary: string;
      bg: string;
      primary: string;
      secondary: string;
      tertiary: string;
      border: string;
    };
    fonts: {
      sans: string;
      heading: string;
      mono: string;
    };
    shadows: {
      default: string;
    };
    fontSizes: {
      base: string;
      baseMobile: string;
      h1: string;
      h1Mobile: string;
      h2: string;
      h2Mobile: string;
      code: string;
    };
    lineHeights: {
      base: string;
      h2: string;
      code: string;
    };
    letterSpacing: {
      base: string;
      h1: string;
      h2: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
    layout: {
      maxWidth: string;
      borderWidth: string;
    };
  }
}
