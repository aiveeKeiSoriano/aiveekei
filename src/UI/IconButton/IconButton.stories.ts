import { fn } from 'storybook/test';

import IconButton from "./IconButton";
import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";

export default {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { onClick: fn(), width: "60px", height: "60px" },
};

export const Close = {
  args: {
    icon: CloseIcon,
  },
};

export const Menu = {
  args: {
    icon: MenuIcon,
  },
};
