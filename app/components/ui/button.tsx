"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "default",
  className = "",
}: ButtonProps) {
  // Define styles based on variant
  const borderColor = {
    default: "border-black",
    primary: "border-[var(--color-primary)]",
    secondary: "border-[var(--color-secondary)]",
  };

  const textColor = {
    default: "text-black",
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-secondary)]",
  };

  return (
    <Link
      href={href}
      className={`flex flex-col justify-center items-center p-0 w-[140px] h-[32px] border ${borderColor[variant]} rounded-[70px] flex-none relative ${className}`}
    >
      <div className="w-[120px] h-[32px] flex-none order-0 self-stretch flex-grow-1 z-0"></div>
      <span
        className={`absolute w-full h-[17px] left-[31px] top-[7px] font-primary text-[14px] leading-[17px] flex items-center text-center ${textColor[variant]} flex-none order-1 flex-grow-0 z-1`}
      >
        {children}
      </span>
    </Link>
  );
}
