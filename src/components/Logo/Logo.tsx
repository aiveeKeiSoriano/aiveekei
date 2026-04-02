import styled from "styled-components";

import type { ImageSources } from "../../UI/Image/Image";

import LogoAvif from "../../assets/Logo/logo.avif";
import LogoPng from "../../assets/Logo/logo.png";
import LogoWebp from "../../assets/Logo/logo.webp";
import IconButton from "../../UI/IconButton/IconButton";

const Wrapper = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  padding: 20px 20px 16px;
  cursor: pointer;
  flex: 0;
`;

export default function Logo() {
  const LOGO_SOURCES = {
    fallback: LogoPng,
    sources: [
      { src: LogoAvif, type: "image/avif" },
      { src: LogoWebp, type: "image/webp" },
    ],
  } satisfies ImageSources;
  return <Wrapper height="60px" icon={LOGO_SOURCES} width="60px" />;
}
