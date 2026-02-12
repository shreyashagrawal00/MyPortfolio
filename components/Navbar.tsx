"use client";

import { useState, useEffect } from "react";
import { navbarConfig } from "@/data/transformerData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-neutral-carbon/80 backdrop-blur-md border-b border-neutral-carbon"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        {/* CTA */}
        <div className="flex-1" />
        <a
          href={navbarConfig.ctaLink}
          className="font-body text-sm md:text-base tracking-wide text-white hover:text-accent-metal transition-colors duration-200 pointer-events-auto"
        >
          {navbarConfig.ctaText}
        </a>
      </div>
    </nav>
  );
}
