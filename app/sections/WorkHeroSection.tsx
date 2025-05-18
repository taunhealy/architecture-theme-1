"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Button } from "@/app/components/ui/button";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

interface WorkHeroSectionProps {
  data: {
    title?: string;
    works: Array<{
      _id: string;
      title: string;
      slug: {
        current: string;
      };
      coverImage: {
        asset: {
          url: string;
        };
      };
      categories: Array<{
        title: string;
        slug: {
          current: string;
        };
      }>;
      description: any;
      client?: {
        title: string;
        _id: string;
      };
      completionDate?: string;
    }>;
  };
}

const WorkHeroSection = ({ data }: WorkHeroSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const works = data?.works || [];
  const activeWork = works[activeIndex];

  // Use our simplified hook - it will automatically target child elements
  const { sectionRef } = useScrollReveal({
    selector: ".animate-item", // Custom selector for elements to animate
    duration: 0.6,
    stagger: 0.3,
    y: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[720px] bg-[var(--color-white)]"
    >
      <div className="flex flex-col py-[76px] px-0 relative h-[720px] left-0 top-0">
        {/* Title Container */}
        <div className="flex flex-col items-start mx-auto px-[95px] py-0 gap-[40px] w-[1255px] h-auto flex-none order-0 self-stretch flex-grow-0">
          {/* Section Heading */}
          <div className="animate-item flex flex-row justify-center items-center p-[10px] gap-[10px] w-[122px] h-[44px] bg-[var(--color-white)] flex-none order-0 flex-grow-0">
            <div className="w-[24px] h-[24px] bg-[#FF6A00] flex-none order-0 flex-grow-0"></div>
            <span className="w-[68px] h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-black flex-none order-1 flex-grow-0">
              projects
            </span>
          </div>
        </div>

        {/* Work Content */}
        <div className="flex flex-col items-start mx-auto px-[95px] py-[32px] gap-[54px] w-[1255px] h-auto flex-none order-1 flex-grow-0">
          {/* Content Row - Work Item Container */}
          <div className="flex flex-col items-start p-0 gap-[32px] w-[1175px]">
            <div className="flex flex-row items-start p-0 gap-[61px] w-full h-[344px]">
              {/* Left Column - Image */}
              <div className="animate-item flex-1 h-full pl-[20px]">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={
                      activeWork?.coverImage?.asset?.url ||
                      "/images/work-hero.webp"
                    }
                    alt={activeWork?.title || "Project Image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="animate-item flex flex-col items-start pt-[32px] gap-[21px] w-[380px] h-full">
                {/* Work Details */}
                <div className="flex flex-col justify-center items-start p-0 gap-[61px] w-[360px] h-[225px] flex-none order-0 flex-grow-0">
                  {/* Titles */}
                  <div className="flex flex-row items-center p-0 gap-[21px] w-full h-[41px] flex-none order-0 flex-grow-0">
                    {/* Project Frame */}
                    <div className="flex flex-col items-start p-0 gap-[8px] w-auto h-[41px] flex-none order-0 flex-grow-0">
                      <span className="w-auto h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-[#C3C3C3] flex-none order-0 flex-grow-0">
                        PROJECT
                      </span>
                      <span className="w-auto h-[19px] font-primary text-[16px] leading-[19px] text-[#1D1D1D] flex-none order-1 flex-grow-0">
                        {activeWork?.title || "Work Title"}
                      </span>
                    </div>

                    {/* Category Frame */}
                    <div className="flex flex-col items-start p-0 gap-[8px] w-auto h-[41px] flex-none order-1 flex-grow-0">
                      <span className="w-auto h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-[#C3C3C3] flex-none order-0 flex-grow-0">
                        CATEGORY
                      </span>
                      <span className="w-auto h-[19px] font-primary text-[16px] leading-[19px] text-[#1D1D1D] flex-none order-1 flex-grow-0">
                        {activeWork?.categories?.[0]?.title || "Residential"}
                      </span>
                    </div>

                    {/* Year Frame */}
                    <div className="flex flex-col items-start p-0 gap-[8px] w-[120px] h-[41px] flex-none order-2 flex-grow-0">
                      <span className="w-fill h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-[#C3C3C3] flex-none order-0 flex-grow-0">
                        YEAR
                      </span>
                      <span className="w-fill h-[19px] font-primary text-[16px] leading-[19px] text-[#1D1D1D] flex-none order-1 flex-grow-0">
                        {activeWork?.completionDate
                          ? new Date(activeWork.completionDate).getFullYear()
                          : "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Paragraph */}
                  <div className="flex flex-row items-center p-[0px_21px_32px_0px] gap-[95px] w-[360px] h-[108px] rounded-[8px] flex-none order-1 self-stretch flex-grow-0">
                    <div className="w-[339px] h-[76px] font-primary text-[16px] leading-[19px] text-[#1E1E1E] flex-none order-0 flex-grow-1 overflow-hidden">
                      {activeWork?.description ? (
                        <PortableText
                          value={activeWork.description}
                          components={{
                            block: ({ children }) => (
                              <p className="inline">{children}</p>
                            ),
                            types: {
                              block: ({ value }) => (
                                <p className="inline text-[#1E1E1E]">
                                  {value.children
                                    .map(
                                      (child: { text: string }) => child.text
                                    )
                                    .join("")}
                                </p>
                              ),
                            },
                          }}
                        />
                      ) : (
                        "No description available"
                      )}
                    </div>
                  </div>
                </div>

                {/* Button below description */}
                <Link href={`/work/${activeWork?.slug?.current}`}>
                  <Button variant="default" size="default">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>

            {/* Work Links - Now nested under the content container */}
            <div className="animate-item flex flex-row items-center py-[12.1783px] pl-[20px] gap-[32px] h-[37.36px] flex-none">
              {works.length > 1 ? (
                works.map((work, index) => (
                  <Link
                    key={work._id}
                    href={`/work/${work.slug.current}`}
                    className={`font-primary text-[16px] leading-[15px] text-black w-auto inline-block
                      ${index === activeIndex ? "font-semibold" : "font-normal"}
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                  >
                    {work.title || `WORK ${index + 1}`}
                  </Link>
                ))
              ) : (
                <>
                  <span className="w-auto h-[13px] font-primary text-[12px] leading-[15px] text-black flex-none order-0 flex-grow-0">
                    WORK 1
                  </span>
                  <span className="w-auto h-[13px] font-primary text-[12px] leading-[15px] text-black flex-none order-1 flex-grow-0">
                    WORK 2
                  </span>
                  <span className="w-auto h-[13px] font-primary text-[12px] leading-[15px] text-black flex-none order-2 flex-grow-0">
                    WORK 3
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHeroSection;
