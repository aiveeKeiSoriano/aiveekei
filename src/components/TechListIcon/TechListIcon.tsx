import styled from "styled-components";

import Image from "../../UI/Image/Image";
import ItemFrame from "../IconFrame/IconFrame";
import { frameHoverEffect } from "../IconFrame/IconFrameStyles";

const Wrapper = styled.div<{ $hasSelectedItem: boolean; $isSelected: boolean }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};

  position: relative;
  top: unset;
  left: unset;
  width: ${({ $hasSelectedItem }) => ($hasSelectedItem ? "100px" : "100%")};
  flex-shrink: 0;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em;
  gap: 1em;

  z-index: ${({ $isSelected }) => ($isSelected ? 1 : 0)};

  ${frameHoverEffect}

  &:hover {
    /**
      * z- index is set to bring the whole item an index higher that the other items
      * so that the parts of the corners that stick out will show on top of adjacent items
      */
    z-index: 1;
  }
`;

const TechImage = styled(Image)<{ $hasSelectedItem: boolean }>`
  max-height: 60%;
  width: ${({ $hasSelectedItem }) => ($hasSelectedItem ? "100%" : "15%")};
`;

const Label = styled.p<{ $hasSelectedItem: boolean }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  line-height: 1em;
  word-wrap: break-word;
  width: 85%;
  text-align: left;
  display: ${({ $hasSelectedItem }) => ($hasSelectedItem ? "none" : "block")};
`;

interface TechListIconPropType {
  name: string;
  image: string;
  hasSelectedItem: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function TechListIcon({
  name,
  image,
  hasSelectedItem,
  isSelected,
  onClick,
}: TechListIconPropType) {
  return (
    <Wrapper
      $hasSelectedItem={hasSelectedItem}
      $isSelected={isSelected}
      onClick={onClick}
    >
      <ItemFrame isSelected={isSelected} />
      <TechImage $hasSelectedItem={hasSelectedItem} alt={name} src={image} />
      <Label $hasSelectedItem={hasSelectedItem}>{name}</Label>
    </Wrapper>
  );
}
