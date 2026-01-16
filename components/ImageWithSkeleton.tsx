 "use client";
 
import { useState, useEffect } from "react";
 import Image, { ImageProps } from "next/image";
 import { motion, AnimatePresence } from "framer-motion";
 
 interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoadingComplete"> {
   skeletonClassName?: string;
 }
 
 export default function ImageWithSkeleton({
   src,
   alt,
   className,
   skeletonClassName,
   ...props
 }: ImageWithSkeletonProps) {
   const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setHasLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
 
   return (
     <>
       <AnimatePresence>
         {isLoading && (
           <motion.div
             initial={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
             className={`absolute inset-0 bg-gradient-to-r from-stroke/20 via-stroke/40 to-stroke/20 animate-shimmer ${skeletonClassName || ""}`}
             style={{
               backgroundSize: "200% 100%",
             }}
           />
         )}
       </AnimatePresence>
       <Image
         src={src}
         alt={alt}
        className={`${className} ${!hasLoaded ? "opacity-0" : ""}`}
        style={{
          opacity: hasLoaded ? undefined : 0,
          transition: hasLoaded ? undefined : "opacity 0.3s ease-out",
        }}
         onLoad={() => setIsLoading(false)}
         {...props}
       />
     </>
   );
 }
