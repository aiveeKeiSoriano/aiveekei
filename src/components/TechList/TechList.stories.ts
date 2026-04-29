import { fn } from "storybook/test";

import TechList from "./TechList";

export default {
  component: TechList,
  title: "TechSection/TechList",
  args: {
    selectItem: fn(),
  },
  globals: {
    viewport: { isRotated: false, value: "mobile" },
  },
};

export const Default = {
  args: {
    hasSelectedItem: false,
  },
};

export const WithSelectedItem = {
  args: {
    hasSelectedItem: true,
    selectedItem: 0,
  },
};
