"use client";

import React from "react";
import Link from "next/link";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { Button } from "@/app/components/ui/button";

interface AboutSectionProps {
  data?: {
    heading?: string;
    description?: string;
    images?: Array<{ url: string }>;
    teamHeading?: string;
    teamDescription?: string;
    teamMembers?: Array<{
      name: string;
      role: string;
      image: {
        url: string;
        alt: string;
      };
    }>;
  };
}

const AboutSection = ({ data }: AboutSectionProps) => {
  // Use our scroll reveal hook
  const { sectionRef } = useScrollReveal({
    duration: 0.75,
    stagger: 0.5,
    start: "top 80%",
  });

  // Default values if data is null or properties are undefined
  const heading =
    data?.heading ??
    "Leveraging Next.js, React Native and Node.js for efficiency, sustainability and harmony.";

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[720px] bg-[var(--color-secondary)]"
    >
      <div className="flex flex-col py-[76px] px-0 relative h-[724px] left-0 top-0">
        {/* Title & Subtitle Container */}
        <div className="flex flex-col items-start mx-auto px-[95px] py-0 gap-[14px] w-[1255px] h-[162px] flex-none order-0 self-stretch flex-grow-0">
          {/* Section Heading */}
          <div className="flex flex-row justify-start items-center p-[10px] gap-[10px] w-auto h-[44px] bg-[var(--color-secondary)] flex-none order-0 flex-grow-0">
            <div className="w-[24px] h-[24px] bg-[var(--color-tertiary)] flex-none order-0 flex-grow-0"></div>
            <span className="w-full h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-[var(--color-primary)] flex-none order-1 flex-grow-0">
              about us
            </span>
          </div>

          {/* Section Title */}
          <div className="flex flex-row justify-start items-start px-[20px] py-0 gap-[10px] w-[1065px] h-[104px] flex-none order-1 self-stretch flex-grow-0">
            <h2 className="w-full h-[104px] font-primary text-[49px] leading-[59px] tracking-[-0.05em] text-[var(--color-primary)] flex-none order-0 flex-grow-1">
              {heading}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-row flex-wrap mx-auto items-start content-start p-[49px_95px_32px] gap-[0px_95px] w-[1255px] h-[425px] flex-none order-1 self-stretch flex-grow-0">
          {/* Left Column - Image */}
          <div className="flex flex-row items-center py-0 w-[271px] h-[344px] flex-none order-0 flex-grow-0">
            <img
              src="/images/image-about.webp"
              alt="About BaumFormel"
              className="w-full h-full object-cover flex-none order-0 flex-grow-0"
            />
          </div>

          {/* Right Column - Text and Button */}
          <div className="flex flex-col items-end pt-[32px] gap-[32px] w-[674px] h-[245px] flex-none order-1 flex-grow-1">
            {/* Text Box */}
            <div className="flex flex-row items-center p-5 gap-[32px] w-full h-full bg-[var(--color-quaternary)] rounded-[8px] flex-none order-0 self-stretch flex-grow-0">
              <p className="w-[300px] h-auto font-primary text-[16px] leading-[19px] tracking-[-0.05em] text-[var(--color-primary)] flex-none order-0 flex-grow-1">
                I have chosen Next.js, React Native and Node.js and AWS as my
                primary tech stack due to it's innovation, simplicity and
                scalability.
              </p>
              <p className="w-[300px] h-auto font-primary text-[16px] leading-[19px] tracking-[-0.05em] text-[var(--color-primary)] flex-none order-1">
                I use other tech such as SanityCMS, Python, GraphQL, integrating
                APIs such as Paypal and whatever tech is required for the
                project. I'm passionate about design and a bit of music,
                science, maths and CG procedural asset generation & VFX using
                SideFx Houdini. VFX coding inspired me to pursue a career in
                computer science.
              </p>
            </div>

            {/* Button */}
            <Button href="/about" variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
