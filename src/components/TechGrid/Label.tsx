import styled from "styled-components";

interface WrapperProps {
  $isVisible: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  /* opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")}; */
  opacity: 1;
  visibility: visible;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  display: flex;
  position: absolute;
  inset: 0%;
`;

const Label = styled.div`
  /**
  * z-index is set to be higher than the grid items
  */
  z-index: 2;
  position: relative;
  color: #fff;
  mix-blend-mode: difference;
  text-align: center;
  text-transform: uppercase;
  font-size: 130px;
  line-height: 130px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.display};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 100px;
    line-height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 80px;
    line-height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 65px;
    line-height: 65px;
  }
`;

/**
 * TextContainer is for hiding the parts of the text while
 * it is transitioning to appear
 */
const TextContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

interface TextProps {
  $isVisible: boolean;
}

const Text = styled.div<TextProps>`
  translate: none;
  rotate: none;
  scale: none;
  transform-origin: 0% 50%;
  transition:
    transform 0.6s ease,
    opacity 0.6s ease;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translate(0px, 0px)" : "translate(0%, 100%)"};
`;

interface TechLabelProps {
  isVisible: boolean;
  name: string | null;
}

export default function TechLabel({ isVisible, name }: TechLabelProps) {
  return (
    <Wrapper $isVisible={isVisible}>
      <Label>
        <TextContainer>
          <Text $isVisible={isVisible}>{name}</Text>
        </TextContainer>
      </Label>
    </Wrapper>
  );
}
