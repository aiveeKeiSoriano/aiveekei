import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      desktop: string;
      mobile: string;
      tablet: string;
      tablet2: string;
    };
    colors: {
      bg: string;
      border: string;
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      textSecondary: string;
    };
    fonts: {
      heading: string;
      mono: string;
      sans: string;
    };
    fontSizes: {
      base: string;
      baseMobile: string;
      code: string;
      h1: string;
      h1Mobile: string;
      h2: string;
      h2Mobile: string;
    };
    letterSpacing: {
      base: string;
      h1: string;
      h2: string;
    };
    lineHeights: {
      base: string;
      code: string;
      h2: string;
    };
    shadows: {
      default: string;
    };
  }
}
