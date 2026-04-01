import styled from "styled-components";
import HeroImg from "../../assets/Hero.png";
import ReactIconSVG from "./ReactIconSVG";

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

const Img = styled.img`
  width: 530px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export default function Hero() {
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
        <Img src={HeroImg} alt="hero" />
        {/* <HeroSVG /> */}
        <ReactIconSVG />
      </ImgContainer>
    </Container>
  );
}
