import type { ImageSources } from "../UI/Image/Image";

import PortfolioAvif from "../assets/projects/portfolio.avif";
import PortfolioPng from "../assets/projects/portfolio.png";
import PortfolioWebp from "../assets/projects/portfolio.webp";

const formatImage = ([png, avif, webp]: string[]): ImageSources => {
  return {
    fallback: png,
    sources: [
      { src: avif, type: "image/avif" },
      { src: webp, type: "image/webp" },
    ],
  };
};

export default [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit leo, sapien gravida magna mollis et iaculis montes.",
    image: formatImage([PortfolioPng, PortfolioAvif, PortfolioWebp]),
    tags: ["React", "Typescript", "Styled-Components", "Git"],
    isProfessional: false,
  },
];

export type ProjectListType = {
  slug: string;
  title: string;
  shortDescription: string;
  image: ImageSources;
  tags: string[];
  isProfessional: boolean;
};
