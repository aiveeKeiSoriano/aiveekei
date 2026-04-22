import { useState } from "react";
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
  height: 90vh;
`;

export default function TechGrid() {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <Wrapper>
      <Grid>
        {Items.map((item) => (
          <TechIcon
            image={item.image}
            key={item.name}
            name={item.name}
            onMouseEnter={() => {
              setIsLabelVisible(true);
              setHoveredName(item.name);
            }}
            onMouseLeave={() => {
              setIsLabelVisible(false);
              setHoveredName(null);
            }}
            position={item.position}
          />
        ))}
      </Grid>
      <TechLabel isVisible={isLabelVisible} name={hoveredName} />
    </Wrapper>
  );
}
