import NavButton from "./NavButton";

export default {
  title: "NavButton",
  component: NavButton,
};

export const Default = {
  args: {
    label: "Projects",
    isActive: false,
  },
};

export const Active = {
  args: {
    label: "Projects",
    isActive: true,
  },
};
