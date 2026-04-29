import { fn } from "storybook/test";

import React from "../../assets/tech/React.svg";
import TechGridIcon from "./TechGridIcon";

export default {
  component: TechGridIcon,
  title: "TechSection/TechGridIcon",
  args: {
    index: 0,
    image: React,
    name: "React JS",
    position: { l: [0, 0], m: [0, 0], s: [0, 0], xs: [0, 0] },
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onClick: fn(),
  },
};

export const Default = {
  args: {
    isSelected: false,
    hasSelectedItem: false,
  },
};

export const HasSelectedItem = {
  args: {
    isSelected: true,
    hasSelectedItem: true,
  },
};
