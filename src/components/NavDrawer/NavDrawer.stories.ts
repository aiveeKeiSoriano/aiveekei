import { NAV_ITEMS } from "../Nav/NavRoutes";
import NavDrawer from "./NavDrawer";

export default {
  component: NavDrawer,
  globals: {
    viewport: { isRotated: false, value: "tablet" },
  },
  parameters: {
    layout: "fullscreen",
  },
  title: "Nav/NavDrawer",
};

export const Open = {
  args: {
    isOpen: true,
    items: NAV_ITEMS,
  },
};

export const Close = {
  args: {
    isOpen: false,
    items: NAV_ITEMS,
  },
};
