import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import TechDetails from "../TechDetails/TechDetails";
import TechIcon from "../TechIcon/TechIcon";
import Items from "./Items";
import TechLabel from "./Label";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 1rem;
  }
`;

interface GridProps {
  $hasSelectedItem: boolean;
}

const Grid = styled.div<GridProps>`
  position: relative;
  transition: width 0.8s ease;
  width: ${({ $hasSelectedItem }) => ($hasSelectedItem ? "50%" : "100%")};
  flex-shrink: 0;
  height: 85vh;
`;

export default function TechGrid() {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Settimeout is added here so when user switched from 1 icon to another quickly,
   * it will have a 300ms delay to give let the mouseleave on the previous icon to fire
   * and show the exit transition.
   *
   * TimeoutRefs are used to catch the stacking of settimeouts when user quickly enter
   * and leave multiple icons
   */

  const showLabel = (name: string) => {
    if (selectedItem != null) return;
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    if (hoveredName) {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = setTimeout(() => {
        setIsLabelVisible(true);
        setHoveredName(name);
      }, 250);
    } else {
      setIsLabelVisible(true);
      setHoveredName(name);
    }
  };

  const hideLabel = () => {
    if (selectedItem != null) return;
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    setIsLabelVisible(false);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredName(null);
    }, 200);
  };

  const selectItem = (index: number) => {
    if (selectedItem === index) return;
    setSelectedItem(index);
    hideLabel();
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  useEffect(
    () => () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    },
    [],
  );

  return (
    <Wrapper>
      <Grid $hasSelectedItem={selectedItem != null}>
        {Items.map((item, index) => (
          <TechIcon
            index={index}
            image={item.image}
            key={item.name}
            name={item.name}
            onMouseEnter={() => showLabel(item.name)}
            onMouseLeave={hideLabel}
            onClick={() => selectItem(index)}
            position={item.position}
            isSelected={selectedItem === index}
            hasSelectedItem={selectedItem != null}
          />
        ))}
      </Grid>
      {selectedItem != null && (
        <TechDetails item={Items[selectedItem ?? 0]} onClose={closeDetails} />
      )}
      <TechLabel isVisible={isLabelVisible} name={hoveredName} />
    </Wrapper>
  );
}
