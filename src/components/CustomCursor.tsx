import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, .card-hover, .group");
      setHovering(!!isInteractive);
    };

    const updateMouseDown = () => setClicking(true);
    const updateMouseUp = () => setClicking(false);
    const updateMouseLeave = () => setVisible(false);

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      setPosition({ x: cursorX, y: cursorY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mousedown", updateMouseDown);
    window.addEventListener("mouseup", updateMouseUp);
    document.addEventListener("mouseleave", updateMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mousedown", updateMouseDown);
      window.removeEventListener("mouseup", updateMouseUp);
      document.removeEventListener("mouseleave", updateMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50) scale(${clicking ? 0.7 : hovering ? 1.6 : 1})`,
          transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="rounded-full border-2"
          style={{
            width: "32px",
            height: "32px",
            borderColor: hovering ? "#f59e0b" : "rgba(15, 23, 42, 0.4)",
            transition: "border-color 200ms ease",
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${hovering ? 0.5 : 1})`,
          transition: "transform 100ms ease",
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: hovering ? "#f59e0b" : "#0f172a",
            transition: "background 200ms ease",
          }}
        />
      </div>
    </>
  );
}
