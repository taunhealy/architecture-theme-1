"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "@/lib/urlForImage";
import { Button } from "@/app/components/ui/button";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

interface HeroSectionProps {
  data: {
    heroWorks?: Array<{
      coverImage: any;
      title: string;
      categories: Array<{
        title: string;
        slug: { current: string };
      }>;
    }>;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  const heroWorks = data?.heroWorks || [];
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use our scroll reveal hook with default settings
  // This will automatically target direct children of the section
  const { sectionRef } = useScrollReveal({
    duration: 1.5,
    stagger: 0.25,
    start: "top 80%",
  });

  // Auto-rotate through works
  useEffect(() => {
    if (heroWorks.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWorkIndex((prev) => (prev + 1) % heroWorks.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroWorks.length]);

  return (
    <div className="overflow-hidden">
      <section
        ref={sectionRef}
        className="hero-section relative h-screen bg-[#F3F4F2]"
      >
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/image-hero.webp"
            alt="Hero background"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-black/60 z-[1]"></div>
        </div>

        {/* Content container */}
        <div className="container-large relative h-full z-10">
          {/* Main content container */}
          <div className="main-container flex flex-col h-full justify-between py-[21px]">
            {/* Title and CTA section */}
            <div className="flex flex-row items-end gap-[32px]">
              <div className="value-prop-container flex flex-col gap-[32px] h-full pl-[32px] pb-[21px] pt-[21px] items-start max-w-full bg-[var(--color-quaternary)] rounded-md">
                <div className="value-prop-text-container pr-[40px] pt-[0px] pb-[0px] h-full rounded-md max-w-[720px]">
                  <h1 className="font-primary text-3xl md:text-[49px] leading-tight md:leading-[59px] tracking-[-0.05em] text-black">
                    We create modern, elegant and beautiful places
                  </h1>
                </div>
                <Button variant="outline" size="default">
                  Learn More
                </Button>
              </div>

              {/* Category section with slideshow */}
              <div className="category-container max-h-[240px] w-[320px] flex flex-col">
                <div className="category min-w-[192px] h-[224px] w-full rounded-md bg-[var-color-quaternary] overflow-hidden">
                  <div
                    className={`w-full h-full transition-opacity duration-500 ease-in-out ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Image
                      src={urlForImage(
                        heroWorks[currentWorkIndex].coverImage
                      ).url()}
                      alt={heroWorks[currentWorkIndex].title}
                      width={192}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="text-categories">
                  <div className="flex flex-row gap-4">
                    {heroWorks
                      .flatMap((work) => work.categories)
                      .map((category) => (
                        <p
                          key={category.slug.current}
                          className={`uppercase font-primary text-[12px] pt-[21px] transition-all duration-500 ease-in-out ${
                            heroWorks[currentWorkIndex].categories.some(
                              (activeCategory) =>
                                activeCategory.slug.current ===
                                category.slug.current
                            )
                              ? "font-medium text-[var(--color-secondary)]"
                              : "font-normal text-white"
                          }`}
                        >
                          {category.title}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture firm info */}
            <div className="h-full w-full flex items-end justify-end min-h-[190px]">
              <div className="flex flex-col gap-[10px] max-w-[311px]">
                <span className="font-secondary text-sm leading-[17px] tracking-[0.12em] uppercase text-white">
                  Architecture Firm
                </span>
                <h2 className="font-primary text-2xl md:text-[32px] leading-tight md:leading-[39px] tracking-[-0.05em] text-white">
                  John Doe Architects
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
