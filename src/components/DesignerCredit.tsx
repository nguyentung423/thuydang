"use client";

import Link from "next/link";

export default function DesignerCredit() {
  return (
    <div className="relative py-5 md:py-0 md:h-14 overflow-hidden">
      {/* Oil Slick Animated Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-40 animate-gradient-x bg-[length:200%_100%] bg-gradient-to-r from-purple-900 via-cyan-800 via-50% to-fuchsia-900" />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center gap-3 px-4 text-center md:flex-row md:gap-6">
        <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">
          Designed & Orchestrated by{" "}
          <span className="text-gray-200 font-medium">T.</span>
        </span>

        <span className="hidden md:block text-gray-600">•</span>

        <Link
          href="https://tungfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-xs text-gray-300 font-medium tracking-widest uppercase transition-all duration-300 hover:text-cyan-400"
        >
          <span className="relative">
            Get your portfolio
            <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            {/* Glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-sm bg-cyan-400/20 transition-opacity duration-300" />
          </span>
        </Link>
      </div>
    </div>
  );
}
