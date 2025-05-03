import React from "react";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="relative w-full h-[720px] bg-[#F9F9F2]">
      <div>
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
    </section>
  );
};

export default WorkSection;
