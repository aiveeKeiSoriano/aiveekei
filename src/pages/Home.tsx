import styled from "styled-components";

import Pattern from "../assets/pattern.svg";
import Hero from "../components/Hero/Hero";
import Links from "../components/Links/Links";
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
  background: ${formatCssUrl(Pattern)};
  background-size: 6px;
  flex-grow: 1;
`;

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Bottom>
        <Links />
      </Bottom>
    </Wrapper>
  );
}
