import styled, { css } from "styled-components";

import ItemsData from "../../data/TechList";
import TechGridIcon from "../TechGridIcon/TechGridIcon";

const Wrapper = styled.div<{ $hasSelectedItem: boolean }>`
  position: relative;
  transition: width 0.8s ease;
  width: 100%;
  flex-shrink: 0;
  height: 85vh;

  ${({ $hasSelectedItem }) =>
    $hasSelectedItem &&
    css`
      width: 40%;

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 35%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
        display: none;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

interface TechGridPropType {
  hasSelectedItem: boolean;
  selectedItem: number | null;
  selectItem: (index: number) => void;
  showLabel: (name: string) => void;
  hideLabel: () => void;
}

export default function TechGrid({
  hasSelectedItem,
  selectedItem,
  selectItem,
  showLabel,
  hideLabel,
}: TechGridPropType) {
  return (
    <Wrapper $hasSelectedItem={hasSelectedItem}>
      {ItemsData.map((item, index) => (
        <TechGridIcon
          index={index}
          image={item.image}
          key={item.name}
          name={item.name}
          onMouseEnter={() => showLabel(item.name)}
          onMouseLeave={hideLabel}
          onClick={() => selectItem(index)}
          position={item.position}
          isSelected={selectedItem === index}
          hasSelectedItem={hasSelectedItem}
        />
      ))}
    </Wrapper>
  );
}
