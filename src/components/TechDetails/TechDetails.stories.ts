import { fn } from "storybook/test";

import Items from "../../data/TechList";
import TechDetails from "./TechDetails";

const ITEM = Items[0];

export default {
  component: TechDetails,
  title: "TechSection/TechDetails",
  args: {
    item: ITEM,
    onClose: fn(),
  },
};

export const Default = {
  args: {},
};
