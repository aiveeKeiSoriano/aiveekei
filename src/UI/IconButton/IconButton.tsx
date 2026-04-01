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
  transition: filter 0.3s ease, transform 0.3s ease;

  &:active {
    filter: brightness(0.5);
    transform: scale(0.9);
  }

  &:focus {
    animation: bounce 0.4s ease;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(0.85);
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface IconButtonProps {
  icon: string | ImageSources;
  height: string;
  width: string;
  onClick?: () => void;
}

export default function IconButton({
  icon,
  height,
  width,
  onClick,
  ...props
}: IconButtonProps) {
  return (
    <Wrapper onClick={onClick} {...props}>
      <Img src={icon} height={height} width={width} />
    </Wrapper>
  );
}
