import Tag from "./Tag";

export default {
  component: Tag,
  title: "Tag",
  argTypes: {
    children: {
      control: "text",
      description: "Tag label",
    },
  },
};

export const Default = {
  args: {
    children: "ReactJS",
  },
};
