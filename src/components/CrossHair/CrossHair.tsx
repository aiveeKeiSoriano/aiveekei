import styled from "styled-components";
import Target from "../../assets/target.png";
import useMousePosition from "../../utils/useMousePosition";
import { useEffect, useState } from "react";

interface ImgProps {
    $x: number | null;
    $y: number | null;
    $focused: boolean;
}

const Img = styled.img<ImgProps>`
  width: 32px;
  height: 32px;
  pointer-events: none;
  user-select: none;
  position: fixed;
  top: ${(props) => props.$y ? `${props.$y}px` : '50%'};
  left: ${(props) => props.$x ? `${props.$x}px` : '50%'};
  border-radius: 100%;
  z-index: 10000;
  transition: transform 0.5s ease, top 0.15s ease, left 0.15s ease;
  transform: ${(props) => props.$focused 
    ? 'translate(-50%, -50%) scale(0.85)' 
    : 'translate(-50%, -50%)'};

  display: ${(props) => {
    if (props.$x === null) return 'none';
    const center = window.innerWidth / 2;
    return Math.abs(props.$x - center) <= 600 ? 'block' : 'none';
  }};

  @keyframes pulse {
    0% {
      transform: scale(0.8) translate(-50%, -50%);
    }
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
    100% {
      transform: scale(0.8) translate(-50%, -50%);
    }
  }
`;

export default function CrossHair() {

    const { x, y } = useMousePosition();
    const [focused, setFocused] = useState<boolean>(false);

    useEffect(() => {
        setFocused(false);
        const timer = setTimeout(() => setFocused(true), 300);
        return () => clearTimeout(timer);
    }, [x, y]);

  return <Img src={Target} alt="crosshair" $x={x} $y={y} $focused={focused}/>;
}
