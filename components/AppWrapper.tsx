 "use client";
 
 import { useState, useEffect } from "react";
 import { AnimatePresence } from "framer-motion";
 import LoadingScreen from "./LoadingScreen";
 
export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [skipChecked, setSkipChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const shouldSkip = searchParams.get("skipLoading") === "1"
        || sessionStorage.getItem("skipLoading") === "1";

      if (shouldSkip) {
        sessionStorage.removeItem("skipLoading");
        const url = new URL(window.location.href);
        url.searchParams.delete("skipLoading");
        window.history.replaceState({}, "", url.toString());
        setIsLoading(false);
      }
    } catch (error) {
      // Ignore storage errors.
    }
    setSkipChecked(true);
  }, []);
 
   if (!mounted) {
     return null;
   }
 
   return (
     <>
      <AnimatePresence mode="wait">
        {skipChecked && isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
       
       <div
         style={{
           opacity: isLoading ? 0 : 1,
           transition: "opacity 0.5s ease-out",
         }}
       >
         {children}
       </div>
     </>
   );
 }
