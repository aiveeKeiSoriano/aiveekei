import ASP from "../assets/tech/ASP.svg";
import Claude from "../assets/tech/Claude.svg";
import ClickUp from "../assets/tech/ClickUp.svg";
import Coda from "../assets/tech/coda.svg";
import Electron from "../assets/tech/Electron.svg";
import Express from "../assets/tech/Express.svg";
import Git from "../assets/tech/Git.svg";
import Javascript from "../assets/tech/Javascript.svg";
import Jest from "../assets/tech/Jest.svg";
import Jira from "../assets/tech/Jira.svg";
import MongoDB from "../assets/tech/MongoDB.svg";
import MUI from "../assets/tech/MUI.svg";
import Next from "../assets/tech/Next.svg";
import PostgreSQL from "../assets/tech/PostgreSQL.svg";
import React from "../assets/tech/React.svg";
import ReactNative from "../assets/tech/ReactNative.svg";
import Storybook from "../assets/tech/Storybook.svg";
import Tailwind from "../assets/tech/Tailwind.svg";
import Typescript from "../assets/tech/Typescript.svg";
import Unity from "../assets/tech/Unity.svg";
import Windsurf from "../assets/tech/Windsurf.svg";

/**
 * These nested arrays represent the items' position in the grid (depending on the screen size).
 * It is made into a 2D array to make it easier to visualize and to have a one source of truth.
 *
 * You can manipulate the placement of the items the grid and there would be no other
 * changes needed.
 */

const LARGE_GRID = [
  [
    "React JS",
    null,
    "Typescript",
    "PostgreSQL",
    null,
    null,
    "Javascript",
    null,
  ],
  [null, "Express JS", null, "Git", null, "Tailwind", null, "Next JS"],
  ["MongoDB", null, null, null, null, null, null, "Electron"],
  [
    null,
    "Material UI",
    "Storybook",
    null,
    "React Native",
    null,
    "ASP.NET MVC",
    "Unity",
  ],
  ["ClickUp", "Jira", null, "Jest", null, "Coda", "Windsurf", "Claude"],
];

const MEDIUM_GRID = [
  ["React JS", null, "Typescript", "PostgreSQL", null, "Javascript"],
  [null, "Express JS", null, "Git", null, "Tailwind"],
  ["MongoDB", null, null, null, "Next JS", "Storybook"],
  ["Material UI", "Jest", null, "ASP.NET MVC", null, "Unity"],
  [null, null, "React Native", null, "Electron", null],
  ["ClickUp", "Jira", null, "Coda", "Windsurf", "Claude"],
];

const SMALL_GRID = [
  ["React JS", null, "Typescript", null, "PostgreSQL"],
  [null, "Javascript", null, "Express JS", null],
  [null, "Git", "Tailwind", null, "MongoDB"],
  ["Material UI", null, null, null, "Next JS"],
  ["Storybook", "Jest", null, "ASP.NET MVC", "Electron"],
  ["React Native", null, "Unity", null, "ClickUp"],
  ["Jira", "Coda", null, "Windsurf", "Claude"],
];

export const COL = {
  s: SMALL_GRID[0].length,
  m: MEDIUM_GRID[0].length,
  l: LARGE_GRID[0].length,
};

export const ROW = {
  s: SMALL_GRID.length,
  m: MEDIUM_GRID.length,
  l: LARGE_GRID.length,
};

/**
 * Output of buildPositionMap is a map of item names to their position in the grid [col, row]
 * e.g. { "React JS": [0, 0] }
 *
 * [col, row] is written in that order to follow [x, y] coordinate pattern
 */

type Grid = (string | null)[][];
type PositionMap = Record<string, [number, number]>;

function buildPositionMap(grid: Grid): PositionMap {
  const map: PositionMap = {};
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const cell = grid[row][col];
      if (cell !== null) map[cell] = [col, row];
    }
  }
  return map;
}

const positions = {
  s: buildPositionMap(SMALL_GRID),
  m: buildPositionMap(MEDIUM_GRID),
  l: buildPositionMap(LARGE_GRID),
};

const formatMetric = (scores: number[]) => {
  return {
    "Concept Knowledge": scores[0],
    "Syntax Proficiency": scores[1],
    "Professional Experience": scores[2],
    "Personal Project Experience": scores[3],
    "Ecosystem, Tooling, & Setup": scores[4],
  };
};

const Items = [
  {
    name: "React JS",
    image: React,
    description:
      "I am most experienced with ReactJS. I have used it for both professional and personal projects. This website is made with React!",
    metric: formatMetric([80, 80, 100, 100, 80]),
  },
  {
    name: "Typescript",
    image: Typescript,
    description:
      "I have been continuously integrating Typescript with all my newer projects, choosing it over JavaScript as much as possible. This website is written in Typescript!",
    metric: formatMetric([80, 80, 60, 80, 90]),
  },
  {
    name: "PostgreSQL",
    image: PostgreSQL,
    description:
      "PostgreSQL is the database I am most experienced with. I have set up and maintained API servers that use PostgreSQL",
    metric: formatMetric([90, 80, 80, 60, 80]),
  },
  {
    name: "Javascript",
    image: Javascript,
    description:
      "I learned web development using JavaScript and have been using it from the start. ",
    metric: formatMetric([90, 90, 100, 100, 90]),
  },
  {
    name: "Express JS",
    image: Express,
    description:
      "I have created and maintained an ExpressJS server that is still being used by real users.",
    metric: formatMetric([90, 80, 80, 60, 80]),
  },
  {
    name: "Git",
    image: Git,
    description:
      "Git is a very important part of web development, and I have never had a project before that doesn’t use Git.",
    metric: formatMetric([90, 80, 90, 90, 60]),
  },
  {
    name: "Tailwind",
    image: Tailwind,
    description:
      "I made this personal project using Tailwind! Tailwind is like a second language to me.",
    metric: formatMetric([90, 60, 0, 80, 80]),
  },
  {
    name: "MongoDB",
    image: MongoDB,
    description:
      "MongoDB is the first database I have learned to use and have used it professionally since then.",
    metric: formatMetric([80, 60, 40, 60, 60]),
  },
  {
    name: "Next JS",
    image: Next,
    description:
      "I went through NextJS's official learning path and created this personal project with it.",
    metric: formatMetric([80, 80, 0, 60, 80]),
  },
  {
    name: "Material UI",
    image: MUI,
    description:
      "I believe I can manipulate any Material UI component to do anything you need. That's how much I have used Material UI professionally.",
    metric: formatMetric([90, 90, 100, 100, 90]),
  },
  {
    name: "Storybook",
    image: Storybook,
    description:
      "Storybook is my go-to documentation for my React Projects ever since I used it in a workplace before. Check out this website's storybook here.",
    metric: formatMetric([90, 80, 80, 80, 80]),
  },
  {
    name: "ASP.NET MVC",
    image: ASP,
    description:
      "I did a total redesign of the website, made with ASP.NET MVC. I worked with the Blazor pages and modified the controllers and database calls.",
    metric: formatMetric([40, 40, 60, 0, 0]),
  },
  {
    name: "React Native",
    image: ReactNative,
    description:
      "I created pages and features for a React Native app used for rewards for a big petrol company. The app was made to be released in multiple countries.",
    metric: formatMetric([60, 60, 60, 0, 20]),
  },
  {
    name: "Electron",
    image: Electron,
    description:
      "I worked on maintaining an Electron app that uses a server that I also worked on.",
    metric: formatMetric([60, 60, 60, 0, 0]),
  },
  {
    name: "Unity",
    image: Unity,
    description:
      "I added authentication and a UI page to a game made with Unity.",
    metric: formatMetric([20, 0, 20, 0, 0]),
  },
  {
    name: "Jest",
    image: Jest,
    description: "I used Jest extensively for testing API routes.",
    metric: formatMetric([80, 60, 80, 60, 20]),
  },
  {
    name: "ClickUp",
    image: ClickUp,
    description:
      "Part of the job is task management. A former workplace uses ClickUp for planning and tracking progress, and I obtained the ClickUp certification for it.",
    metric: formatMetric([90, 80, 80, 0, 80]),
  },
  {
    name: "Jira",
    image: Jira,
    description:
      "Several previous workplaces use Jira for scrums. I also use Jira to plan this website.",
    metric: formatMetric([60, 60, 60, 60, 40]),
  },
  {
    name: "Coda",
    image: Coda,
    description:
      "I was once hired to code Coda Packs to help businesses consolidate their data to Coda. I also took the official Coda course and got certification along the way. Here's my capstone project.",
    metric: formatMetric([90, 90, 90, 0, 90]),
  },
  {
    name: "Windsurf",
    image: Windsurf,
    description:
      "It is important to utilize emerging technology to our advantage. I used Windsurf at work to do the repetitive part of development.",
    metric: formatMetric([60, 60, 60, 60, 60]),
  },
  {
    name: "Claude",
    image: Claude,
    description:
      "I can't believe how fast these technologies are improving. Claude helps me complete work faster.",
    metric: formatMetric([60, 60, 0, 60, 60]),
  },
].map(({ name, image, description, metric }) => ({
  name,
  image,
  description,
  metric,
  position: {
    s: positions.s[name],
    m: positions.m[name],
    l: positions.l[name],
  },
}));

export type TechItemType = {
  image: string;
  name: string;
  description: string;
  position: {
    s: [number, number];
    m: [number, number];
    l: [number, number];
  };
  metric: TechMetricType;
};

export type TechMetricType = {
  "Concept Knowledge": number;
  "Syntax Proficiency": number;
  "Professional Experience": number;
  "Personal Project Experience": number;
  "Ecosystem, Tooling, & Setup": number;
};

export const TOTAL_ITEMS = Items.length;
export default Items;
