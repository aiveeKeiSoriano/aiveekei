import LevelBar from "./LevelBar";

export default {
  component: LevelBar,
  title: "TechSection/LevelBar",
  args: {
    id: "react-syntax",
    label: "Concept Knowledge",
  },
};

export const Default = {
  args: {
    level: 0,
  },
};

export const Level60 = {
  args: {
    level: 60,
  },
};
