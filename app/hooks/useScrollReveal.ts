"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  y?: number;
  once?: boolean;
  selector?: string;
  childSelector?: boolean;
}

/**
 * Hook for creating a domino-style reveal animation on scroll
 * @param options Configuration options for the animation
 * @returns Object containing the section ref
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    delay = 0,
    duration = 0.6,
    stagger = 0.3,
    start = "top 80%",
    y = 20,
    once = true,
    selector = "*",
    childSelector = true,
  } = options;

  // Create ref for the section
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Skip if no section ref
    if (!sectionRef.current) return;

    // Find elements to animate
    const section = sectionRef.current as HTMLElement;
    let elements;

    if (childSelector) {
      // Get direct children of the section
      elements = Array.from(section.children);
    } else {
      // Use the section itself
      elements = [section];
    }

    // Skip if no elements found
    if (elements.length === 0) return;

    // Initial state - all elements hidden
    gsap.set(elements, {
      opacity: 0,
      y,
    });

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: section,
        start,
        toggleActions: once ? "play none none none" : "play none none reset",
      },
    });

    // Animate elements in sequence with stagger
    elements.forEach((el, index) => {
      tl.to(
        el,
        {
          opacity: 1,
          y: 0,
          duration,
          delay: index === 0 ? delay : 0,
        },
        index === 0 ? 0 : `-=${stagger}`
      );
    });

    return () => {
      // Clean up animation and ScrollTrigger
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
      tl.kill();
    };
  }, [delay, duration, stagger, start, y, once, selector, childSelector]);

  return { sectionRef };
};
