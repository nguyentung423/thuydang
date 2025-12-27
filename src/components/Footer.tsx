"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTop();
  };
  return (
    <footer
      id="contact"
      className="relative z-10 w-full min-h-[70vh] bg-white border-t-2 border-gray-200 flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full">
          {/* The Hook - Centered */}
          <div className="text-center mb-16 md:mb-24">
            <Reveal delay={0.2}>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                Sẵn sàng hợp tác?
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                Hãy cùng kiến tạo
                <br />
                <span className="font-semibold">chiến dịch tiếp theo.</span>
              </h2>
            </Reveal>
          </div>

          {/* The Business Card - Contact Details */}
          <div className="text-center space-y-6">
            {/* Email - The Hero */}
            <Reveal delay={0.6}>
              <motion.a
                href="mailto:dangvanthuy0201@gmail.com"
                className="block text-2xl md:text-3xl lg:text-4xl font-medium text-foreground hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                dangvanthuy0201@gmail.com
              </motion.a>
            </Reveal>

            {/* Info Stack */}
            <Reveal delay={0.8}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-muted">
                <span className="text-lg font-medium text-foreground">
                  094.883.1162
                </span>
                <span className="hidden md:block text-gray-300">•</span>
                <span>Hà Nội, Việt Nam</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Row - Copyright */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">© 2025 Đặng Văn Thùy.</p>
            <Link
              href="#"
              onClick={handleScrollToTop}
              className="text-xs text-gray-400 hover:text-foreground transition-colors"
            >
              Lên đầu trang ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
