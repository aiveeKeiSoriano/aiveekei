import { NAV_ITEMS } from "../Nav/NavRoutes";
import NavButton from "./NavButton";

export default {
  component: NavButton,
  title: "Nav/NavButton",
  args: {
    item: NAV_ITEMS[0],
  },
};

export const Default = {
  args: {
    label: "Projects",
  },
};
