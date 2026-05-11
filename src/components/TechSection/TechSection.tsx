import { useState } from "react";
import styled from "styled-components";

import ItemsData from "../../data/TechList";
import TechDetails from "../TechDetails/TechDetails";
import TechGrid from "../TechGrid/TechGrid";
import TechHoverLabel from "../TechHoverLabel/TechHoverLabel";
import useHoverLabel from "../TechHoverLabel/useHoverLabel";
import TechList from "../TechList/TechList";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 1rem;
    flex-direction: column;
    gap: 1em;
  }
`;

export default function TechSection() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { hoveredName, isLabelVisible, showLabel, hideLabel } = useHoverLabel({
    selectedItem,
  });

  const selectItem = (index: number) => {
    if (selectedItem === index) return;
    setSelectedItem(index);
    hideLabel();
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const hasSelectedItem = selectedItem != null;
  return (
    <Wrapper>
      <TechList
        selectItem={selectItem}
        selectedItem={selectedItem}
        hasSelectedItem={hasSelectedItem}
      />
      <TechGrid
        hasSelectedItem={hasSelectedItem}
        selectedItem={selectedItem}
        selectItem={selectItem}
        showLabel={showLabel}
        hideLabel={hideLabel}
      />
      {hasSelectedItem && (
        <TechDetails
          item={ItemsData[selectedItem ?? 0]}
          onClose={closeDetails}
        />
      )}
      <TechHoverLabel isVisible={isLabelVisible} name={hoveredName} />
    </Wrapper>
  );
}
