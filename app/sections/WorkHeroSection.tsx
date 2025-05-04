import React from "react";
import Link from "next/link";

interface WorkHeroSectionProps {
  data: {
    heading: string;
    title: string;
    image: {
      url: string;
      alt: string;
    };
    category: string;
    workTitle: string;
    description: string;
    workLinks: Array<{
      label: string;
      url: string;
    }>;
  };
}

const WorkHeroSection = ({ data }: WorkHeroSectionProps) => {
  return (
    <section className="relative w-full h-[720px] bg-[#262626]">
      <div className="flex flex-col py-[76px] px-[75px] relative w-full h-[720px] left-0 top-0">
        {/* Title Container */}
        <div className="flex flex-col items-start p-0 gap-[21px] w-full h-[169px] flex-none order-0 self-stretch flex-grow-0">
          {/* Section Heading */}
          <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] w-[122px] h-[44px] bg-[#F9F9F2] flex-none order-0 flex-grow-0">
            <div className="w-[24px] h-[24px] bg-[#FF6A00] flex-none order-0 flex-grow-0"></div>
            <span className="w-[68px] h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-black flex-none order-1 flex-grow-0">
              projects
            </span>
          </div>

          {/* Section Title */}
          <div className="flex flex-row items-center px-[20px] py-0 gap-[10px] w-full h-[104px] flex-none order-1 self-stretch flex-grow-0">
            <h2 className="w-[763px] h-[104px] font-primary text-[49px] leading-[59px] tracking-[-0.05em] text-white flex-none order-0 flex-grow-0">
              {data?.title || "Villa TIERRA"}
            </h2>
          </div>
        </div>

        {/* Work Content */}
        <div className="flex flex-col items-start p-0 gap-[32px] w-full h-[413.36px] flex-none order-1 flex-grow-0">
          {/* Content Row */}
          <div className="flex flex-row justify-between items-start p-0 gap-[32px] w-full h-[344px] flex-none order-0 flex-grow-0">
            {/* Left Column - Image */}
            <div className="flex flex-row flex-wrap items-start content-start p-0 gap-[0px_95px] w-[763px] h-[344px] flex-none order-0 flex-grow-0">
              <div className="flex flex-row items-center px-[20px] py-0 pr-[20px] w-[763px] h-[344px] flex-none order-0 flex-grow-0 overflow-hidden">
                <img
                  src={data?.image?.url || "/images/work-hero.webp"}
                  alt={data?.image?.alt || "Project Image"}
                  className="w-full h-full object-cover flex-none order-0 flex-grow-0"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col items-start p-[10px] gap-[21px] w-[380px] h-[255px] flex-none order-1 flex-grow-0">
              <div className="flex flex-col justify-center items-start p-0 gap-[32px] w-[360px] h-[235px] flex-none order-0 flex-grow-0">
                {/* Titles */}
                <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-[360px] h-[63px] flex-none order-0 self-stretch flex-grow-0">
                  <span className="w-[120px] h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-white flex-none order-0 flex-grow-0">
                    {data?.category || "work category"}
                  </span>
                  <h3 className="w-[139px] h-[39px] font-primary text-[32px] leading-[39px] tracking-[-0.05em] text-white flex-none order-1 flex-grow-0">
                    {data?.workTitle || "Work Title"}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex flex-row items-center p-[32px_21px] gap-[95px] w-[360px] h-[140px] bg-[#FEE9BE] rounded-[8px] flex-none order-1 self-stretch flex-grow-0">
                  <p className="w-[318px] h-[76px] font-primary text-[16px] leading-[19px] tracking-[-0.05em] text-black flex-none order-0 flex-grow-1">
                    {data?.description ||
                      "Where light, nature, materials, sustainability and creativity combine to create a unique symbiosis, generating an experience that stimulates our senses."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Links */}
          <div className="flex flex-row items-center py-[12.1783px] px-0 gap-[12px] w-[315px] h-[37.36px] flex-none order-1 flex-grow-0">
            {data?.workLinks?.length > 0 ? (
              data.workLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="w-[48px] h-[13px] font-secondary text-[10.5441px] leading-[13px] tracking-[0.12em] uppercase text-white flex-none order-{index} flex-grow-0"
                >
                  {link.label || `WORK ${index + 1}`}
                </Link>
              ))
            ) : (
              <>
                <span className="w-[48px] h-[13px] font-secondary text-[10.5441px] leading-[13px] tracking-[0.12em] uppercase text-white flex-none order-0 flex-grow-0">
                  WORK 1
                </span>
                <span className="w-[48px] h-[13px] font-secondary text-[10.5441px] leading-[13px] tracking-[0.12em] uppercase text-white flex-none order-1 flex-grow-0">
                  WORK 2
                </span>
                <span className="w-[48px] h-[13px] font-secondary text-[10.5441px] leading-[13px] tracking-[0.12em] uppercase text-white flex-none order-2 flex-grow-0">
                  WORK 3
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHeroSection;
