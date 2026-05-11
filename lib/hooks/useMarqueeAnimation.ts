"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

export function useMarqueeAnimation(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let animation: gsap.core.Tween | null = null;

    if (ref.current) {
      const marqueeInner = ref.current.querySelector(".marquee-inner");
      if (marqueeInner) {
        animation = gsap.to(marqueeInner, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }

    return () => {
      if (animation) animation.kill();
    };
  }, [ref]);
}
