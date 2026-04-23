import styled, { css } from "styled-components";

interface FrameProps {
  $isSelected: boolean;
}

export const Frame = styled.div<FrameProps>`
  z-index: 2;
  outline-offset: -2px;
  pointer-events: none;
  outline-width: 2px;
  outline-style: solid;
  outline-color: rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      & > {
        ${FrameBorderT}, ${FrameBorderB} {
          transform: scaleX(1);
        }
        ${FrameBorderL}, ${FrameBorderR} {
          transform: scaleY(1);
        }

        ${FrameBorder} {
          background-color: ${({ theme }) => theme.colors.border};
        }

        ${FrameCorner} {
          border-color: ${({ theme }) => theme.colors.border};
        }
      }
    `};
`;
export const FrameCorner = styled.div`
  z-index: 3;
  width: 0.75em;
  height: 0.75em;
  position: absolute;
  border: 0 solid rgba(255, 255, 255);
  pointer-events: none;
`;

export const FrameCornerTL = styled(FrameCorner)`
  top: -2px;
  left: -2px;
  border-top-width: 5px;
  border-left-width: 5px;
`;
export const FrameCornerTR = styled(FrameCorner)`
  top: -2px;
  right: -2px;
  border-top-width: 5px;
  border-right-width: 5px;
`;
export const FrameCornerBL = styled(FrameCorner)`
  bottom: -2px;
  left: -2px;
  border-bottom-width: 5px;
  border-left-width: 5px;
`;
export const FrameCornerBR = styled(FrameCorner)`
  bottom: -2px;
  right: -2px;
  border-bottom-width: 5px;
  border-right-width: 5px;
`;

export const FrameBorder = styled.div`
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  transition-property: transform, opacity, background-color;
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  position: absolute;
`;

export const FrameBorderT = styled(FrameBorder)`
  transform-origin: 0 0;
  width: 100%;
  height: 2px;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderB = styled(FrameBorder)`
  transform-origin: 100%;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderL = styled(FrameBorder)`
  width: 2px;
  height: 100%;
  top: 0;
  left: 0;
  transform: scaleY(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderR = styled(FrameBorder)`
  transform-origin: 50% 0;
  width: 2px;
  height: 100%;
  top: 0;
  right: 0;
  transform: scaleY(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
