"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver with generous rootMargin so elements pre-render smoothly
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Only trigger once to save resources
        }
      },
      {
        threshold: 0.01,
        rootMargin: "80px 0px 80px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-8 opacity-0";
      case "down":
        return "-translate-y-8 opacity-0";
      case "left":
        return "translate-x-8 opacity-0";
      case "right":
        return "-translate-x-8 opacity-0";
      case "none":
        return "opacity-0";
      default:
        return "translate-y-8 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "700ms",
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
