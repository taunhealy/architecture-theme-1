import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative w-full h-[720px] bg-[#F9F9F2]">
      <div className="flex flex-col py-[76px] px-0 relative  h-[724px] left-0 top-0">
        {/* Title & Subtitle Container */}
        <div className="flex flex-col items-start mx-auto px-[95px] py-0 gap-[14px] w-[1255px] h-[162px] flex-none order-0 self-stretch flex-grow-0">
          {/* Section Heading */}
          <div className="flex flex-row justify-start items-center p-[10px]  gap-[10px] w-auto h-[44px] bg-[#EEEBE4] flex-none order-0 flex-grow-0">
            <div className="w-[24px] h-[24px] bg-[var(--color-tertiary)] flex-none order-0 flex-grow-0"></div>
            <span className="w-full h-[14px] font-secondary text-[12px] leading-[14px] tracking-[0.12em] uppercase text-black flex-none order-1 flex-grow-0">
              about us
            </span>
          </div>

          {/* Section Title */}
          <div className="flex flex-row justify-start items-start px-[20px] py-0 gap-[10px] w-[1065px] h-[104px] flex-none order-1 self-stretch flex-grow-0">
            <h2 className="w-[760px] h-[104px] font-primary text-[49px] leading-[59px] tracking-[-0.05em] text-black flex-none order-0 flex-grow-1">
              We specialize in modern, elegant architecture that inspires peace.
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-row flex-wrap mx-auto items-start content-start p-[49px_95px_32px] gap-[0px_95px] w-[1255px] h-[425px] flex-none order-1 self-stretch flex-grow-0">
          {/* Left Column - Image */}
          <div className="flex flex-row items-center px-[20px] py-0 w-[271px] h-[344px] flex-none order-0 flex-grow-0">
            <img
              src="/images/image-about.webp"
              alt="About BaumFormel"
              className="w-full h-full object-cover flex-none order-0 flex-grow-0"
            />
          </div>

          {/* Right Column - Text and Button */}
          <div className="flex flex-col items-end pt-[32px] gap-[32px] w-[674px] h-[245px] flex-none order-1 flex-grow-1">
            {/* Text Box */}
            <div className="flex flex-row items-start p-[21px_32px_21px_32px] gap-[10px] w-[674px] h-[137px] bg-[rgba(255,234,192,0.7)] rounded-[8px] flex-none order-0 self-stretch flex-grow-0">
              <p className="w-[300px] h-[95px] font-primary text-[16px] leading-[19px] tracking-[-0.05em] text-black flex-none order-0 flex-grow-1">
                At BaumFormel, we offer comprehensive architectural design
                services that blend artistic vision with functional
                practicality, tailored to serve both residential and commercial
                properties.
              </p>
              <p className="w-[300px] h-[76px] font-primary text-[16px] leading-[19px] tracking-[-0.05em] text-black flex-none order-1 flex-grow-1">
                Our Modern chic architectural design is a blend of contemporary
                elements and luxurious accents, that create visually stunning
                and functional spaces.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="flex flex-col justify-center items-center p-0 w-[140px] h-[32px] border border-black rounded-[70px] flex-none order-1 flex-grow-0 relative"
            >
              <div className="w-[120px] h-[32px] flex-none order-0 self-stretch flex-grow-1 z-0"></div>
              <span className="absolute w-full h-[17px] left-[31px] top-[7px] font-primary text-[14px] leading-[17px] flex items-center text-center text-black flex-none order-1 flex-grow-0 z-1">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
