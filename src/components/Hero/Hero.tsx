// import { Link } from "react-router";
import styled from "styled-components";

import type { ImageSources } from "../../UI/Image/Image";

import HeroAvif from "../../assets/Hero/Hero.avif";
import HeroPng from "../../assets/Hero/Hero.png";
import HeroWebp from "../../assets/Hero/Hero.webp";
import EmailIcon from "../../assets/mail.svg";
import Button from "../../UI/Button/Button";
import CopyButton from "../../UI/CopyButton/CopyButton";
import Image from "../../UI/Image/Image";
import ReactIconSVG from "./ReactIconSVG";

const Container = styled.div`
  display: flex;
  padding: 5em;
  gap: 2em;
  user-select: none !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-direction: column;
    padding: 5em 5em 0;
    gap: 3em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    flex-direction: column;
    padding: 2em 2em 0;
    gap: 2em;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 6rem;
  line-height: 0.8;
  font-weight: 700;
  text-align: left;

  user-select: none !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4rem;
  }
`;

const Subtext = styled.p`
  font-size: 2rem;
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
  width: 500px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 80%;
    padding: 0;
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
  }
`;

const Img = styled(Image)`
  width: 500px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const Action = styled.div`
  margin-top: 1em;
  align-self: flex-start;
  display: flex;
`;

const EmailLink = styled.a`
  text-decoration: none;
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
        <Action>
          <EmailLink href="mailto:aiveekei@gmail.com">
            <Button icon={EmailIcon} label="aiveekei@gmail.com" />
          </EmailLink>
          <CopyButton text="aiveekei@gmail.com" />
        </Action>
      </TextContainer>
      <ImgContainer>
        <Img alt="hero" src={HERO_SOURCES} />
        <ReactIconSVG />
      </ImgContainer>
    </Container>
  );
}
