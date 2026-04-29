/**
 * Ref is used instead of useState to avoid re-render on evry mouse move
 */
import { useEffect, useRef } from "react";

const useMousePosition = () => {
  const position = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", handler, { passive: true });
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return position;
};

export default useMousePosition;
