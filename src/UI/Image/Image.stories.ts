import HeroAvif from "../../assets/hero/Hero.avif";
import HeroPng from "../../assets/hero/Hero.png";
import HeroWebp from "../../assets/hero/Hero.webp";
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
    width: "500px",
  },
};

export const SingleSource = {
  args: {
    src: MenuIcon,
    width: "100px",
  },
};
