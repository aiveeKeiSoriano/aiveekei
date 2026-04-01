import styled from "styled-components";
import HeroPng from "../../assets/Hero/Hero.png";
import HeroWebp from "../../assets/Hero/Hero.webp";
import HeroAvif from "../../assets/Hero/Hero.avif";
import ReactIconSVG from "./ReactIconSVG";
import type { ImageSources } from "../../UI/Image/Image";
import Image from "../../UI/Image/Image";

const Container = styled.div`
  display: flex;
  padding: 6em;
  gap: 2em;
  user-select: none !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-direction: column;
    padding: 5em 6em 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    flex-direction: column;
    padding: 2em 2em 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 7rem;
  line-height: 0.8;
  font-weight: 700;
  text-align: left;

  user-select: none !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
  }
`;

const Subtext = styled.p`
  font-size: 2.3rem;
  line-height: 2.5rem;
  text-align: left;
  font-weight: 400;
  user-select: none !important;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 530px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 0;
  }
`;

const Img = styled(Image)`
  width: 530px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export default function Hero() {
  const HERO_SOURCES = {
    fallback: HeroPng,
    sources: [
      { src: HeroAvif, type: "image/avif" },
      { src: HeroWebp, type: "image/webp" },
    ],
  } satisfies ImageSources;

  return (
    <Container>
      <TextContainer>
        <Text>Hello.</Text>
        <Text>I'm Aivee.</Text>
        <Subtext>
          I'm a <b>web developer</b> from the Philippines.
        </Subtext>
      </TextContainer>
      <ImgContainer>
        <Img src={HERO_SOURCES} alt="hero" />
        <ReactIconSVG />
      </ImgContainer>
    </Container>
  );
}
