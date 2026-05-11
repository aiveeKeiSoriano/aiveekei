import PROJECT_LIST from "../../data/ProjectList";
import ProjectCard from "./ProjectCard";

export default {
  component: ProjectCard,
  title: "Projects/ProjectCard",
  args: {
    project: PROJECT_LIST[0],
  },
};

export const Default = {
  args: {},
};
