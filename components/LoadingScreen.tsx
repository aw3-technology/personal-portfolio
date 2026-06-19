 "use client";
 
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easing } from "@/lib/animations";

const words = ["Design", "Create", "Inspire"];

 export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
   const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Progress counter
  useEffect(() => {
    const duration = 2700;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => onCompleteRef.current(), 400);
       }
     };
    
    requestAnimationFrame(updateProgress);
  }, []);
 
  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= words.length - 1) return prev;
        return prev + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, []);

   return (
     <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
       exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: easing.standard }}
     >
      {/* Top - Portfolio text */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-xs md:text-sm text-muted uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      {/* Center - Animated words */}
      <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="inline-block max-w-full whitespace-nowrap px-[0.2em] text-[clamp(2.25rem,9vw,4rem)] leading-[1.15] font-display italic text-text/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: easing.standard }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom - Counter */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums">
          {Math.round(progress).toString().padStart(3, '0')}
        </span>
      </motion.div>

      {/* Progress line at bottom with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
            boxShadow: "0 0 8px rgba(37, 99, 235, 0.35)"
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
     </motion.div>
   );
 }
