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

    const pos = { x: -9999, y: -9999 };
    let scale = 1;

    const loop = () => {
      pos.x += (mousePosition.current.x - pos.x) * 0.12;
      pos.y += (mousePosition.current.y - pos.y) * 0.12;

      const targetScale = isIdle.current ? 0.85 : 1;
      scale += (targetScale - scale) * 0.08;

      const visible =
        Math.abs(mousePosition.current.x - window.innerWidth / 2) <= 600;

      img.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${scale})`;
      img.style.opacity = visible ? "1" : "0";

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mousePosition]);

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
