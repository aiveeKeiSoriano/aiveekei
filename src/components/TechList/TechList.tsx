import { useRef } from "react";
import styled from "styled-components";

import TechListIcon from "../TechListIcon/TechListIcon";
import Items from "../TechSection/ItemsData";
import useScrollToView from "./useScrollToView";

const ListWrapper = styled.div`
  display: none;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
  }
`;

const HasSelectedItemWrapper = styled(ListWrapper)`
  flex-direction: row;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
  }
`;

interface TechListPropType {
  selectItem: (index: number) => void;
  selectedItem: number | null;
  hasSelectedItem: boolean;
}

export default function TechList({
  selectItem,
  selectedItem,
  hasSelectedItem,
}: TechListPropType) {
  const WrapperRef = useRef<HTMLDivElement>(null);
  useScrollToView(WrapperRef, selectedItem);

  const Container = hasSelectedItem ? HasSelectedItemWrapper : ListWrapper;

  return (
    <Container ref={WrapperRef}>
      {Items.map((item, index) => (
        <TechListIcon
          image={item.image}
          key={item.name}
          name={item.name}
          onClick={() => selectItem(index)}
          isSelected={selectedItem === index}
          hasSelectedItem={selectedItem != null}
        />
      ))}
    </Container>
  );
}
