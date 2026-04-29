import { fn } from "storybook/test";

import TechGrid from "./TechGrid";

export default {
  component: TechGrid,
  title: "TechSection/TechGrid",
  args: {
    selectItem: fn(),
    showLabel: fn(),
    hideLabel: fn(),
  },
};

export const Default = {
  args: { hasSelectedItem: false },
};

export const WithSelectedItem = {
  args: {
    hasSelectedItem: true,
    selectedItem: 0,
  },
};
