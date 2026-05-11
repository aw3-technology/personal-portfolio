 "use client";
 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientBorderRing from "./ui/GradientBorderRing";
 
export default function BackToTop() {
   const [isVisible, setIsVisible] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsVisible(window.scrollY > 500);
     };
 
     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
     });
   };
 
   return (
    <motion.button
      whileTap={{ scale: 0.9 }}
       onClick={scrollToTop}
       className={`group fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-text text-bg flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 overflow-visible ${
         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
       }`}
       aria-label="Back to top"
     >
       <GradientBorderRing>
         <svg
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="text-text"
         >
           <path d="M18 15l-6-6-6 6" />
         </svg>
       </GradientBorderRing>
       
       {/* Icon for non-hover state */}
       <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="relative z-10 group-hover:opacity-0 transition-opacity duration-500"
       >
         <path d="M18 15l-6-6-6 6" />
       </svg>
    </motion.button>
   );
 }
