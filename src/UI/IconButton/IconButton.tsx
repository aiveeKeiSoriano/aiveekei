import styled from "styled-components";

import type { ImageSources } from "../Image/Image";

import Image from "../Image/Image";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled(Image)`
  transition:
    filter 0.3s ease,
    transform 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);
    transform: scale(0.9);
  }
`;

interface IconButtonProps {
  alt: string;
  height: string;
  icon: ImageSources | string;
  onClick?: () => void;
  width: string;
}

export default function IconButton({
  height,
  icon,
  onClick,
  width,
  alt,
  ...props
}: IconButtonProps) {
  return (
    <Wrapper onClick={onClick} {...props}>
      <Img alt={alt} height={height} src={icon} width={width} />
    </Wrapper>
  );
}
