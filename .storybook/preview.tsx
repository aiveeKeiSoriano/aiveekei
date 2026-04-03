import "../src/index.css";

import type { Preview } from "@storybook/react-vite";

import React from "react";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
