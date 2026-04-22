import styled from "styled-components";

import Tile from "../assets/tile.svg";
import Hero from "../components/Hero/Hero";
import Links from "../components/Links/Links";
import TechGrid from "../components/TechGrid/TechGrid";
import formatCssUrl from "../utils/formatBackgroundURL";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  position: relative;
  border-top: 4px solid ${(props) => props.theme.colors.border};
  background-image: ${formatCssUrl(Tile)};
  background-color: ${(props) => props.theme.colors.primary};
  flex-grow: 1;
`;

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Bottom>
        <Links />
        <TechGrid />
      </Bottom>
    </Wrapper>
  );
}
