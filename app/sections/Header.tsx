"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [pages, setPages] = useState<Array<{ title: string; slug: string }>>([
    { title: "Home", slug: "home" },
    { title: "About", slug: "about" },
    { title: "Work", slug: "work" },
    { title: "Contact", slug: "contact" },
    // Add any default pages you want to show
  ]);

  // Remove the fetch for now until API is ready
  // useEffect(() => {
  //   const fetchPages = async () => {
  //     const response = await fetch("/api/pages");
  //     const data = await response.json();
  //     setPages(data);
  //   };
  //   fetchPages();
  // }, []);

  return (
    <header className="absolute top-5 w-full z-50" data-theme={theme}>
      <nav className="">
        <div className="flex justify-end items-center h-[41px] px-7 pt-4">
          <div className="flex items-center space-x-8 bg-[var(--color-secondary)] border border-black/90 p-5 px-7 rounded-lg">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={page.slug === "home" ? "/" : `/${page.slug}`}
                className={`font-primary text-sm transition-colors duration-300 ${
                  theme === "dark" ? "text-black" : "text-white"
                }`}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
