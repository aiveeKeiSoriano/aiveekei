import NavButton from "./NavButton";

export default {
  component: NavButton,
  title: "Nav/NavButton",
};

export const Default = {
  args: {
    isActive: false,
    label: "Projects",
  },
};

export const Active = {
  args: {
    isActive: true,
    label: "Projects",
  },
};
