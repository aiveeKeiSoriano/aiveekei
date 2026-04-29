import {
  Frame,
  FrameBorderB,
  FrameBorderL,
  FrameBorderR,
  FrameBorderT,
  FrameCornerBL,
  FrameCornerBR,
  FrameCornerTL,
  FrameCornerTR,
} from "./IconFrameStyles";

export default function ItemFrame({ isSelected }: { isSelected: boolean }) {
  return (
    <Frame $isSelected={isSelected}>
      <FrameCornerTL />
      <FrameCornerTR />
      <FrameCornerBL />
      <FrameCornerBR />
      <FrameBorderT />
      <FrameBorderB />
      <FrameBorderL />
      <FrameBorderR />
    </Frame>
  );
}
