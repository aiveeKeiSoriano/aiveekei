import { fn } from "storybook/test";

import React from "../../assets/tech/React.svg";
import TechListIcon from "./TechListIcon";

export default {
  component: TechListIcon,
  title: "TechSection/TechListIcon",
  args: {
    name: "React JS",
    image: React,
    onClick: fn(),
  },
  globals: {
    viewport: { isRotated: false, value: "mobile" },
  },
};

export const Default = {
  args: {
    hasSelectedItem: false,
    isSelected: false,
  },
};

export const HasSelectedItem = {
  args: {
    hasSelectedItem: true,
    isSelected: true,
  },
};
