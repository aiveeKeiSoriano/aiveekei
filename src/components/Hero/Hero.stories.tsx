import type { Decorator } from "@storybook/react-vite";

import Hero from "./Hero";

export default {
  component: Hero,
  title: "Home/Hero",
  decorators: [
    ((Story) => (
      <div style={{ background: "white" }}>
        <Story />
      </div>
    )) as Decorator,
  ],
};

export const Default = {
  args: {},
};
