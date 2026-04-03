import type { Decorator } from "@storybook/react-vite";

import CopyButton from "./CopyButton";

export default {
  component: CopyButton,
  title: "CopyButton",
  parameters: {
    layout: "centered",
  },
  decorators: [
    ((Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "white",
          width: "100vw",
        }}
      >
        <Story />
      </div>
    )) as Decorator,
  ],
};

export const Default = {
  args: {
    text: "aiveekei@gmail.com",
  },
};
