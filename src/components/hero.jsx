import styled from "styled-components";

import HeroAsset from "../assets/Hero.png";

const HeroContainer = styled.div`
  display: flex;
  padding: 0 8em;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mpbile}) {
    flex-direction: column;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroText = styled.p`
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 8rem;
  line-height: 0.8;
  font-weight: 700;
  text-align: left;
`;

const HeroSubtext = styled.p`
  font-size: 2.3rem;
  line-height: 2.5rem;
  text-align: left;
  font-weight: 400;
`;

const HeroImg = styled.img`
    width: 450px;
`

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroText>Hello.</HeroText>
        <HeroText>I'm</HeroText>
        <HeroText>Aivee.</HeroText>
        <HeroSubtext>I'm a web developer from the Philippines.</HeroSubtext>
      </HeroTextContainer>
      <HeroImg src={HeroAsset} alt="hero" />
    </HeroContainer>
  );
}
