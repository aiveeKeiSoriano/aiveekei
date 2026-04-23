import styled, { css } from "styled-components";

import Image from "../../UI/Image/Image";
import { COL, ROW, TOTAL_ITEMS } from "../TechGrid/Items";
import {
  Frame,
  FrameBorder,
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
 * the coordinates of each item on the arrays that can be found in '/TechGrid/Items'
 *
 * The Grid has a set height of 85vh all the time so each item has a height of
 * 85vh divided by the number of total rows
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
const positionItemOnGrid = (bp: Breakpoint, position: GridPosition) => {
  const cols = COL[bp];
  const rows = ROW[bp];
  const [x, y] = position[bp];

  return `
    height: calc(85vh / ${rows});
    width: calc(100% / ${cols});
    top: calc((85vh / ${rows} - 1px) * ${y});
    left: calc((100% / ${cols} - 1px) * ${x});
  `;
};

/**
 * When an item is selected, items becomes a list with 3 columns instead of
 * a grid.
 */

const positionItemOnList = (index: number) => {
  const cols = 3;
  const rows = Math.ceil(TOTAL_ITEMS / cols);
  const x = index % cols;
  const y = Math.floor(index / cols);
  return `
    height: calc(85vh / ${rows});
    width: 6em;
    top: calc((85vh / ${rows} - 1px) * ${y});
    left: calc(20% + calc(6em * ${x} - 1px));
  `;
};

type GridPosition = { l: number[]; m: number[]; s: number[]; xs: number[] };
interface WrapperProps {
  $position: GridPosition;
  $hasSelectedItem: boolean;
  $isSelected: boolean;
  $index: number;
}

const Item = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  cursor: pointer;
  transition-property: top, left, width, height;
  transition-duration: 0.8s;
  transition-timing-function: ease;

  z-index: ${({ $isSelected }) => ($isSelected ? 1 : 0)};

  ${({ $hasSelectedItem, $index }) =>
    $hasSelectedItem &&
    css`
      ${positionItemOnList($index)}
    `}

  ${({ $hasSelectedItem, $position }) =>
    !$hasSelectedItem &&
    css`
      ${positionItemOnGrid("l", $position)}

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        ${positionItemOnGrid("m", $position)}
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
        ${positionItemOnGrid("s", $position)}
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        ${positionItemOnGrid("xs", $position)}
      }
    `}

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

    ${FrameBorder} {
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
  onClick?: () => void;
  position: GridPosition;
  isSelected: boolean;
  hasSelectedItem: boolean;
  index: number;
}

export default function TechIcon({
  index,
  name,
  image,
  onMouseEnter,
  onMouseLeave,
  onClick,
  position,
  isSelected,
  hasSelectedItem,
}: TechIconProps) {
  return (
    <Item
      $hasSelectedItem={hasSelectedItem}
      $position={position}
      $isSelected={isSelected}
      $index={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Frame $isSelected={isSelected}>
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
