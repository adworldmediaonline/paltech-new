"use client";

import { useEffect, useState } from "react";

export function useCounterAnimation(
  endValue: number,
  duration: number = 2000,
  startCounting: boolean = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number): number => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, startCounting]);

  return count;
}

