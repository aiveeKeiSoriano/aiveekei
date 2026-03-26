import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    text: "#000000",
    textSecondary: "#fff",
    bg: "#fff",
    primary: "#c4c4c4",
    secondary: "#000000",
    border: "#000000",
  },

  fonts: {
    sans: "'Baloo Thambi 2', system-ui, 'Segoe UI', Roboto, sans-serif",
    heading: "'Baloo Thambi 2', system-ui, 'Segoe UI', Roboto, sans-serif",
    mono: "ui-monospace, Consolas, monospace",
  },

  shadows: {
    default:
      "rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px",
  },

  fontSizes: {
    base: "18px",
    baseMobile: "16px",
    h1: "56px",
    h1Mobile: "36px",
    h2: "24px",
    h2Mobile: "20px",
    code: "15px",
  },

  lineHeights: {
    base: "145%",
    h2: "118%",
    code: "135%",
  },

  letterSpacing: {
    base: "0.18px",
    h1: "-1.68px",
    h2: "-0.24px",
  },

  breakpoints: {
    mobile: '480px',
    tablet: "1024px",
  },

  layout: {
    maxWidth: "1126px",
    borderWidth: "4px",
  },

};

export const GlobalStyle = createGlobalStyle`

  :root {
    color-scheme: light dark;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    letter-spacing: ${({ theme }) => theme.letterSpacing.base};
    color: ${({ theme }) => theme.colors.text};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.baseMobile};
    }
  }

  body {
    margin: 0;
  }

  #root {
    width: ${({ theme }) => theme.layout.maxWidth};
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    border-inline: ${({ theme }) => theme.layout.borderWidth} solid
      ${({ theme }) => theme.colors.border};
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  h1,
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    letter-spacing: ${({ theme }) => theme.letterSpacing.h1};
    margin: 32px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.h1Mobile};
      margin: 20px 0;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    line-height: ${({ theme }) => theme.lineHeights.h2};
    letter-spacing: ${({ theme }) => theme.letterSpacing.h2};
    margin: 0 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.h2Mobile};
    }
  }

  p {
    margin: 0;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.code};
    line-height: ${({ theme }) => theme.lineHeights.code};
    padding: 4px 8px;
  }
`;
