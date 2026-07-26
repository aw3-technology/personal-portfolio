"use client";

import { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoadingComplete"> {
  skeletonClassName?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className,
  skeletonClassName,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Images served from cache can finish before React attaches onLoad, so the
  // event never fires. Detect that synchronously on mount so they still reveal.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {/* Shimmer placeholder — crossfades out as the image fades in. */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-r from-stroke/20 via-stroke/40 to-stroke/20 animate-shimmer transition-opacity duration-700 ease-out ${
          loaded ? "opacity-0" : "opacity-100"
        } ${skeletonClassName || ""}`}
        style={{ backgroundSize: "200% 100%" }}
      />
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        // The opacity transition stays applied at all times so the reveal always
        // animates smoothly instead of snapping to full opacity.
        className={`${className ?? ""} transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        {...props}
      />
    </>
  );
}
