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
    items: ["Projects", "About", "Contact"],
  },
};

export const Close = {
  args: {
    isOpen: false,
    items: ["Projects", "About", "Contact"],
  },
};
