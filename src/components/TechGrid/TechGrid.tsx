import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import TechIcon from "../TechIcon/TechIcon";
import Items from "./data";
import TechLabel from "./Label";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 1rem;
  }
`;

const Grid = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
`;

export default function TechGrid() {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

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
  const handleMouseEnter = (name: string) => {
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

  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    setIsLabelVisible(false);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredName(null);
    }, 200);
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
      <Grid>
        {Items.map((item) => (
          <TechIcon
            image={item.image}
            key={item.name}
            name={item.name}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
            position={item.position}
          />
        ))}
      </Grid>
      <TechLabel isVisible={isLabelVisible} name={hoveredName} />
    </Wrapper>
  );
}
