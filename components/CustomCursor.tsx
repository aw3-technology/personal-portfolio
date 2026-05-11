"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 260, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Main Cursor Dot - Inverted Color */}
      <motion.div
        animate={{
          width: cursorType === "project" || cursorType === "text" ? 100 : cursorType === "pointer" ? 0 : 16,
          height: cursorType === "project" || cursorType === "text" ? 100 : cursorType === "pointer" ? 0 : 16,
          opacity: cursorType === "pointer" ? 0 : 1,
        }}
        className="bg-white rounded-full flex items-center justify-center overflow-hidden"
      >
        {(cursorType === "project" || cursorType === "text") && cursorText && (
            <div className="flex flex-col items-center gap-1">
                <span className="text-black text-2xs font-bold uppercase tracking-widest">
                {cursorText}
                </span>
                <span className="w-1 h-1 bg-black rounded-full" />
            </div>
        )}
      </motion.div>
      
      {/* Pointer Ring (only for pointer state) */}
      <motion.div 
         animate={{
            width: cursorType === "pointer" ? 64 : 0,
            height: cursorType === "pointer" ? 64 : 0,
            opacity: cursorType === "pointer" ? 1 : 0,
            borderWidth: "1px"
         }}
         className="absolute rounded-full border border-white bg-transparent"
      />
    </motion.div>
  );
}
