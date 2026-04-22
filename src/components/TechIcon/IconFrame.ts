import styled from "styled-components";

export const Frame = styled.div`
  z-index: 2;
  outline-offset: -1px;
  pointer-events: none;
  outline-width: 1px;
  outline-style: solid;
  outline-color: rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const FrameCorner = styled.div`
  z-index: 3;
  width: 0.75em;
  height: 0.75em;
  position: absolute;
  border: 0 solid rgba(255, 255, 255, 0.7);
  pointer-events: none;
`;

export const FrameBorder = styled.div`
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  transition-property: transform, opacity, background-color;
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  position: absolute;
`;

export const FrameCornerTL = styled(FrameCorner)`
  top: -1px;
  left: -1px;
  border-top-width: 3px;
  border-left-width: 3px;
`;
export const FrameCornerTR = styled(FrameCorner)`
  top: -1px;
  right: -1px;
  border-top-width: 3px;
  border-right-width: 3px;
`;
export const FrameCornerBL = styled(FrameCorner)`
  bottom: -1px;
  left: -1px;
  border-bottom-width: 3px;
  border-left-width: 3px;
`;
export const FrameCornerBR = styled(FrameCorner)`
  bottom: -1px;
  right: -1px;
  border-bottom-width: 3px;
  border-right-width: 3px;
`;
export const FrameBorderT = styled(FrameBorder)`
  transform-origin: 0 0;
  width: 100%;
  height: 1px;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderB = styled(FrameBorder)`
  transform-origin: 100%;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderL = styled(FrameBorder)`
  width: 1px;
  height: 100%;
  top: 0;
  left: 0;
  transform: scaleY(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
export const FrameBorderR = styled(FrameBorder)`
  transform-origin: 50% 0;
  width: 1px;
  height: 100%;
  top: 0;
  right: 0;
  transform: scaleY(0);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
`;
