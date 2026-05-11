import type { Transition } from "framer-motion";

type Bezier = [number, number, number, number];

export const easing: {
  smooth: Bezier;
  expo: Bezier;
  standard: Bezier;
} = {
  smooth: [0.25, 0.1, 0.25, 1],
  expo: [0.16, 1, 0.3, 1],
  standard: [0.4, 0, 0.2, 1],
};

export const viewportOnce = { once: true, margin: "-100px" } as const;
export const viewportOnceLoose = { once: true, margin: "-10%" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

export const fadeUpSm = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

export const fadeUpLg = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
} as const;

export const smoothTransition = (delay = 0, duration = 1): Transition => ({
  duration,
  delay,
  ease: easing.smooth,
});

export const expoTransition = (delay = 0, duration = 0.8): Transition => ({
  duration,
  delay,
  ease: easing.expo,
});
