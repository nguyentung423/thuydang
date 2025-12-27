"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      scrollToSection("work");
    } else {
      window.location.href = "/#work";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity block"
            >
              <img
                src="/f.png"
                alt="Đặng Văn Thùy"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={handleWorkClick}
                className="text-sm font-medium transition-colors text-foreground hover:text-accent"
              >
                Dự Án
              </button>
              <Link
                href="/#about"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/#about"
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Hồ Sơ
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Liên Hệ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-16 left-0 right-0 bg-[#F7F7F5] border-b border-border shadow-lg">
            <nav className="flex flex-col py-6 px-6">
              <button
                onClick={handleWorkClick}
                className="py-4 text-lg font-medium text-foreground hover:text-accent transition-colors text-left border-b border-gray-200"
              >
                Dự Án
              </button>
              <Link
                href="/#about"
                onClick={handleNavClick}
                className="py-4 text-lg font-medium text-foreground hover:text-accent transition-colors border-b border-gray-200"
              >
                Hồ Sơ
              </Link>
              <Link
                href="/#contact"
                onClick={handleNavClick}
                className="py-4 text-lg font-medium text-foreground hover:text-accent transition-colors"
              >
                Liên Hệ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
