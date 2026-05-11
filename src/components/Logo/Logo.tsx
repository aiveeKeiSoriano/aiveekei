import { Link } from "react-router";
import styled from "styled-components";

import type { ImageSources } from "../../UI/Image/Image";

import LogoAvif from "../../assets/logo/logo.avif";
import LogoPng from "../../assets/logo/logo.png";
import LogoWebp from "../../assets/logo/logo.webp";
import IconButton from "../../UI/IconButton/IconButton";

const LogoIconButton = styled(IconButton)`
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
  return (
    <Link to="/">
      <LogoIconButton
        alt="logo"
        height="60px"
        icon={LOGO_SOURCES}
        width="60px"
      />
    </Link>
  );
}
