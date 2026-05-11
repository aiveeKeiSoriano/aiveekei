import styled from "styled-components";

const Wrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  inset: 0%;
  pointer-events: none;
  overflow: hidden;
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
  font-size: 8rem;
  line-height: 1em;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.display};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 6.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 5rem;
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

const Text = styled.div<{ $isVisible: boolean }>`
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

interface TechHoverLabelPropType {
  isVisible: boolean;
  name: string | null;
}

export default function TechHoverLabel({
  isVisible,
  name,
}: TechHoverLabelPropType) {
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
