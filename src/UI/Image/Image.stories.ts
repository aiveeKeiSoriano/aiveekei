import Image from "./Image";
import HeroPng from "../../assets/Hero/Hero.png";
import HeroWebp from "../../assets/Hero/Hero.webp";
import HeroAvif from "../../assets/Hero/Hero.avif";
import MenuIcon from "../../assets/menu.svg";

export default {
  title: "Image",
  component: Image,
};

export const MultipleSources = {
  args: {
    src: {
      fallback: HeroPng,
      sources: [
        { src: HeroAvif, type: "image/avif" },
        { src: HeroWebp, type: "image/webp" },
      ],
    },
  },
};

export const SingleSource = {
  args: {
    src: MenuIcon,
  },
};
