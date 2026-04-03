import type { Decorator } from "@storybook/react-vite";

import Links from "./Links";

export default {
  component: Links,
  title: "Home/Links",
  parameters: {
    layout: "centered",
  },
  decorators: [
    ((Story) => (
      <div style={{ position: "relative", height: "100px", width: "800px" }}>
        <Story />
      </div>
    )) as Decorator,
  ],
};

export const Default = {
  args: {},
};
