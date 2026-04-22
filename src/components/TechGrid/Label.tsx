import styled from "styled-components";

interface WrapperProps {
  $isVisible: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
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

interface TechLabelProps {
  isVisible: boolean;
  name: string | null;
}

export default function TechLabel({ isVisible, name }: TechLabelProps) {
  return (
    <Wrapper $isVisible={isVisible}>
      <Label>{name}</Label>
    </Wrapper>
  );
}
