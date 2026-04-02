import { fn } from "storybook/test";

import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";
import IconButton from "./IconButton";

export default {
  args: { height: "60px", onClick: fn(), width: "60px" },
  component: IconButton,
  title: "IconButton",
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
