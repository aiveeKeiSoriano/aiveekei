import styled from "styled-components";

import Image from "../../UI/Image/Image";
import { COL, ROW } from "../TechGrid/data";
import {
  Frame,
  FrameBorderB,
  FrameBorderL,
  FrameBorderR,
  FrameBorderT,
  FrameCorner,
  FrameCornerBL,
  FrameCornerBR,
  FrameCornerTL,
  FrameCornerTR,
} from "./IconFrame";

/**
 * The TechIcon component are absolute components positioned based on
 * the hard-coded coordinates of each item that can be found in '/TechGrid/data'
 *
 * The Grid has a set height of 90vh all the time so each item has a height of
 * 90vh divided by the number of total rows (also hard-coded in '/TechGrid/data')
 *
 * Same goes for the width of each item which is 100% divided by the number of total
 * columns
 *
 * Exapmple: If it's the first item (index 0, 0) left will be the the width * 0
 * and top will be the height * 0 resulting to top: 0 and left: 0
 *
 * Then an adjustment of 1px is made to overlap the borders of adjacent items
 */

type Breakpoint = keyof typeof COL;
const positionItem = (bp: Breakpoint, position: GridPosition) => {
  const cols = COL[bp];
  const rows = ROW[bp];
  const [x, y] = position[bp];

  return `
    width: calc(100% / ${cols});
    height: calc(90vh / ${rows});
    left: calc((100% / ${cols} - 1px) * ${x});
    top: calc((90vh / ${rows} - 1px) * ${y});
  `;
};

type GridPosition = { l: number[]; m: number[]; s: number[]; xs: number[] };
interface WrapperProps {
  $position: GridPosition;
}

const Item = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 0;
  position: absolute;
  cursor: pointer;

  ${({ $position }) => positionItem("l", $position)}

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    ${({ $position }) => positionItem("m", $position)}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    ${({ $position }) => positionItem("s", $position)}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    ${({ $position }) => positionItem("xs", $position)}
  }

  &:hover {
    /**
    * z- index is set to bring the whole item an index higher that the other items
    * so that the parts of the corners that stick out will show on top of adjacent items
    */
    z-index: 1;

    ${FrameBorderT}, ${FrameBorderB} {
      transform: scaleX(1);
    }
    ${FrameBorderL}, ${FrameBorderR} {
      transform: scaleY(1);
    }

    ${FrameBorderT}, ${FrameBorderB}, ${FrameBorderL}, ${FrameBorderR} {
      background-color: ${({ theme }) => theme.colors.border};
    }

    ${FrameCorner} {
      border-color: ${({ theme }) => theme.colors.border};
    }
  }
`;

const TechImage = styled(Image)`
  max-height: 60%;
`;

interface TechIconProps {
  image: string;
  name: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  position: GridPosition;
}

export default function TechIcon({
  name,
  image,
  onMouseEnter,
  onMouseLeave,
  position,
}: TechIconProps) {
  return (
    <Item
      $position={position}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Frame>
        <FrameCornerTL />
        <FrameCornerTR />
        <FrameCornerBL />
        <FrameCornerBR />
        <FrameBorderT />
        <FrameBorderB />
        <FrameBorderL />
        <FrameBorderR />
      </Frame>
      <TechImage alt={name} src={image} />
    </Item>
  );
}
