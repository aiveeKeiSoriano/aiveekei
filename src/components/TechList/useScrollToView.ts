import { useEffect } from "react";

export default function useScrollToView(
  WrapperRef: React.RefObject<HTMLDivElement | null>,
  selectedItem: number | null,
) {
  useEffect(() => {
    if (selectedItem == null) return;

    const container = WrapperRef.current;
    if (!container) return;

    const itemWidth = 100;
    const containerWidth = container.clientWidth;
    const itemLeft = selectedItem * itemWidth;

    container.scrollTo({
      left: itemLeft - containerWidth / 2 + itemWidth / 2,
      behavior: "smooth",
    });
  }, [WrapperRef, selectedItem]);
}
