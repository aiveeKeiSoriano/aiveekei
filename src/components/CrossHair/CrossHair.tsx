/**
 * CrossHair renders a target SVG that follows the user's cursor with smooth,
 * motion and an idle-shrink effect.
 *
 * Initially made with React state/events but switched to requestAnimationFrame
 * Routing cursor position through React state would force hundreds of
 * re-renders per second causing visible lag.
 * requestAnimationFrame runs outside React entirely, letting us write directly
 * to `img.style.transform` once per display frame.
 *
 * Refs are used in this component to work outside of React's render cycle
 */

import { useEffect, useRef } from "react";
import styled from "styled-components";

import Target from "../../assets/target.svg";
import useMousePosition from "../../hooks/useMousePosition";

const Image = styled.img`
  border-radius: 100%;
  height: 32px;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 0.15s ease;
  user-select: none;
  width: 32px;
  will-change: transform;
  z-index: 10000;
`;

export default function CrossHair() {
  const imgRef = useRef<HTMLImageElement>(null);
  const mousePosition = useMousePosition();
  const rafRef = useRef<number>(0);
  const idleTimer = useRef<null | ReturnType<typeof setTimeout>>(null);
  const isIdle = useRef(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const position = { x: -9999, y: -9999 };
    let scale = 1;

    /**
     * Loop uses linear interpolation (lerp) — an exponential ease
     * On every loop, instead of jumping to targetScale, scale moves just 8% of the distance
     * Same with position but with 12%
     *
     * visible flag is added because the page content should not exceed 1200px in width
     * no matter how large the screen is so crosshair should not be visible beyond that also
     */
    const loop = () => {
      position.x += (mousePosition.current.x - position.x) * 0.12;
      position.y += (mousePosition.current.y - position.y) * 0.12;

      const targetScale = isIdle.current ? 0.85 : 1;
      scale += (targetScale - scale) * 0.08;

      const visible =
        Math.abs(mousePosition.current.x - window.innerWidth / 2) <= 600;

      img.style.transform = `translate(${position.x}px, ${position}px) translate(-50%, -50%) scale(${scale})`;
      img.style.opacity = visible ? "1" : "0";

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mousePosition]);

  /**
   * Shrinking on idle mimics a focusing effect
   */
  useEffect(() => {
    const handleMove = () => {
      isIdle.current = false;
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        isIdle.current = true;
      }, 300);
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return <Image alt="crosshair" ref={imgRef} src={Target} />;
}
