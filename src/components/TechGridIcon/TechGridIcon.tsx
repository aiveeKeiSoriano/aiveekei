import styled, { css } from "styled-components";

import Image from "../../UI/Image/Image";
import ItemFrame from "../IconFrame/IconFrame";
import { frameHoverEffect } from "../IconFrame/IconFrameStyles";
import { COL, ROW, TOTAL_ITEMS } from "../TechSection/ItemsData";

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

type BreakpointType = keyof typeof COL;
type GridPositionType = { l: number[]; m: number[]; s: number[] };
const positionItemOnGrid = (bp: BreakpointType, position: GridPositionType) => {
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
 * a grid. Applicable on screens size 'm' and up.
 */

const positionItemOnList = (index: number, cols: number, width: string) => {
  const rows = Math.ceil(TOTAL_ITEMS / cols);
  const x = index % cols;
  const y = Math.floor(index / cols);
  return `
    height: calc(85vh / ${rows});
    width: ${width};
    top: calc((85vh / ${rows} - 1px) * ${y});
    left: calc(20% + calc(${width} * ${x} - 1px));
  `;
};
interface WrapperPropType {
  $position?: GridPositionType;
  $hasSelectedItem: boolean;
  $isSelected: boolean;
  $index: number;
}

const Wrapper = styled.div<WrapperPropType>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition-property: top, left, width, height;
  transition-duration: 0.8s;
  transition-timing-function: ease;

  z-index: ${({ $isSelected }) => ($isSelected ? 1 : 0)};

  ${({ $hasSelectedItem, $position }) =>
    !$hasSelectedItem &&
    $position &&
    css`
      ${positionItemOnGrid("l", $position)}

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        ${positionItemOnGrid("m", $position)}
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
        ${positionItemOnGrid("s", $position)}
      }
    `}

  ${({ $hasSelectedItem, $index }) =>
    $hasSelectedItem &&
    css`
      ${positionItemOnList($index, 3, "6em")}

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        ${positionItemOnList($index, 2, "5em")}
      }
    `}

    ${frameHoverEffect}

    &:hover {
    /**
      * z- index is set to bring the whole item an index higher that the other items
      * so that the parts of the corners that stick out will show on top of adjacent items
      */
    z-index: 1;
  }
`;

const TechImage = styled(Image)`
  max-height: 60%;
`;

interface TechGridIconPropType {
  image: string;
  name: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  position?: GridPositionType;
  isSelected: boolean;
  hasSelectedItem: boolean;
  index: number;
  isListItem?: boolean;
}

export default function TechGridIcon({
  index,
  name,
  image,
  onMouseEnter,
  onMouseLeave,
  onClick,
  position,
  isSelected,
  hasSelectedItem,
}: TechGridIconPropType) {
  return (
    <Wrapper
      $hasSelectedItem={hasSelectedItem}
      $position={position}
      $isSelected={isSelected}
      $index={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <ItemFrame isSelected={isSelected} />
      <TechImage alt={name} src={image} />
    </Wrapper>
  );
}
