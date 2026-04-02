import HeroAvif from "../../assets/Hero/Hero.avif";
import HeroPng from "../../assets/Hero/Hero.png";
import HeroWebp from "../../assets/Hero/Hero.webp";
import MenuIcon from "../../assets/menu.svg";
import Image from "./Image";

export default {
  component: Image,
  title: "Image",
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
