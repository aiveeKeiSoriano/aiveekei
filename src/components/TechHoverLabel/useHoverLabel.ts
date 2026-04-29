import { useEffect, useRef, useState } from "react";

export default function useHoverLabel({
  selectedItem,
}: {
  selectedItem: number | null;
}) {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Settimeout is added here so when user switched from 1 icon to another quickly,
   * it will have a 300ms delay to give let the mouseleave on the previous icon to fire
   * and show the exit transition.
   *
   * TimeoutRefs are used to catch the stacking of settimeouts when user quickly enter
   * and leave multiple icons
   */

  const showLabel = (name: string) => {
    if (selectedItem != null) return;
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    if (hoveredName) {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = setTimeout(() => {
        setIsLabelVisible(true);
        setHoveredName(name);
      }, 250);
    } else {
      setIsLabelVisible(true);
      setHoveredName(name);
    }
  };

  const hideLabel = () => {
    if (selectedItem != null) return;
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    setIsLabelVisible(false);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredName(null);
    }, 200);
  };

  useEffect(
    () => () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    },
    [],
  );

  return { hoveredName, isLabelVisible, showLabel, hideLabel };
}
