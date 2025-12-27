"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { SITE_DATA } from "@/content/site";
import { pillars, Pillar } from "@/content/pillars";
import Link from "next/link";
import Image from "next/image";
import Reveal, { StaggerContainer } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { profile, projects } = SITE_DATA;
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAwards, setShowAwards] = useState(false);

  const openModal = (pillar: Pillar) => {
    setSelectedPillar(pillar);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPillar(null);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section - Data Wall Layout */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-32 lg:py-40 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0}>
              <p className="text-xs md:text-sm text-muted mb-3 md:mb-4 tracking-widest uppercase">
                {profile.role}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-1 md:mb-0">
                Sự Chỉn Chu
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 md:mb-0">
                Từng Điểm Chạm
              </h1>
            </Reveal>
            <Reveal delay={0.6}>
              <p className="mt-4 md:mt-8 text-base md:text-lg text-muted max-w-xl leading-relaxed">
                Kiến tạo trải nghiệm thương hiệu đáng nhớ thông qua chiến lược
                sự kiện, thiết kế POSM và tối ưu điểm chạm khách hàng.
              </p>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="mt-8 md:mt-12 flex flex-row items-center gap-4 md:gap-6">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#work"
                    className="inline-block text-sm font-medium px-6 py-3 border border-foreground hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 whitespace-nowrap"
                  >
                    Xem Dự Án
                  </Link>
                </motion.div>
                <Link
                  href="#about"
                  className="text-sm font-medium text-muted hover:text-foreground border-b border-transparent hover:border-gray-800 transition-colors whitespace-nowrap"
                >
                  Về Tôi →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Data Wall */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.5}>
              <div className="relative pl-6 md:pl-8 lg:pl-12">
                {/* Gradient Vertical Divider */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                {/* Metric 1 */}
                <div className="py-4 md:py-6 border-b border-border">
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground">
                    04
                  </span>
                  <span className="block mt-1 md:mt-2 text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted font-medium">
                    Giải Thưởng Uy Tín
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="py-4 md:py-6 border-b border-border">
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground">
                    100%
                  </span>
                  <span className="block mt-1 md:mt-2 text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted font-medium">
                    Tỷ Lệ Vận Hành Chuẩn
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="py-4 md:py-6">
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-foreground">
                    10k+
                  </span>
                  <span className="block mt-1 md:mt-2 text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted font-medium">
                    Khán Giả Tiếp Cận
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work Section - Compact Pillars */}
      <section
        id="work"
        className="min-h-screen flex flex-col justify-center px-6 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                Chuyên môn cốt lõi
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-medium">
                3 Trụ Cột Vận Hành
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} delay={index * 0.2}>
                <motion.div
                  onClick={() => openModal(pillar)}
                  className="group relative bg-background border border-border rounded-lg p-10 lg:p-12 min-h-[380px] cursor-pointer flex flex-col justify-between transition-colors duration-300 hover:border-accent hover:bg-gray-50/50"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Top Content */}
                  <div>
                    {/* Pillar Number */}
                    <div className="text-5xl md:text-6xl font-light text-muted mb-8 group-hover:text-accent transition-colors">
                      {pillar.id.toString().padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight leading-tight">
                      {pillar.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  {/* CTA - Anchored to Bottom */}
                  <div className="text-sm text-accent group-hover:text-accent/80 transition-colors font-medium mt-8">
                    Xem chi tiết →
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Editorial Split Layout */}
      <section id="about" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Portrait */}
          <div className="relative w-full h-[400px] lg:h-[700px] order-2 lg:order-1 flex items-end justify-center">
            {/* Portrait Image */}
            <img
              src="/t.png"
              alt="Portrait"
              className="w-full h-full object-contain object-bottom"
              style={{ objectFit: "contain", objectPosition: "bottom center" }}
            />
          </div>

          {/* Right Column - Narrative */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-16 lg:pt-20 pb-0 order-1 lg:order-2 bg-background">
            <div className="max-w-lg">
              {/* Eyebrow */}
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                  Về Tôi
                </span>
              </Reveal>

              {/* Headline */}
              <Reveal delay={0.2}>
                <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                  Không chỉ là Marketing.
                  <br />
                  <span className="font-semibold">Đó là sự Vận Hành.</span>
                </h2>
              </Reveal>

              {/* Body Text */}
              <Reveal delay={0.4}>
                <div className="mt-10 space-y-6 text-muted leading-relaxed">
                  <p>
                    Trưởng thành từ áp lực tốc độ cao của Beta Cinema — nơi mỗi
                    suất chiếu là một deadline, mỗi sự kiện là một bài test về
                    độ chính xác. Tôi học được rằng trong Trade Marketing, không
                    có chỗ cho "gần đúng".
                  </p>
                  <p>
                    Tôi tin rằng ý tưởng chỉ có giá trị khi nó được thực thi
                    hoàn hảo. Một standee đặt sai vị trí 30cm có thể làm hỏng cả
                    chiến dịch. Một checklist thiếu một dòng có thể khiến sự
                    kiện thất bại.
                  </p>
                </div>
              </Reveal>

              {/* Signature Block */}
              <Reveal delay={0.6}>
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-accent" />
                    <div>
                      <p className="text-lg font-semibold tracking-tight">
                        {profile.name}
                      </p>
                      <p className="text-sm text-muted mt-1">{profile.role}</p>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    {/* Download CV */}
                    <motion.a
                      href="/cv.pdf"
                      download
                      className="w-fit inline-flex items-center gap-2 text-sm tracking-wide uppercase text-accent border-b border-accent hover:opacity-70 transition-opacity"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Tải Hồ Sơ Năng Lực</span>
                      <span>↓</span>
                    </motion.a>

                    {/* Awards Trigger */}
                    <button
                      onClick={() => setShowAwards(true)}
                      className="text-sm text-gray-500 hover:text-accent transition-colors cursor-pointer"
                    >
                      Xem Thành Tích & Giải Thưởng
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        pillar={selectedPillar}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Awards Modal */}
      <AnimatePresence>
        {showAwards && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAwards(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal - Bottom Sheet on Mobile, Centered on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden bottom-0 left-0 right-0 w-full max-h-[85vh] rounded-t-2xl rounded-b-none md:top-1/2 md:left-1/2 md:bottom-auto md:right-auto md:w-full md:max-w-2xl md:h-auto md:max-h-[90vh] md:rounded-2xl md:-translate-x-1/2 md:-translate-y-1/2"
            >
              {/* Header - Sticky */}
              <div className="sticky top-0 bg-white rounded-t-2xl md:rounded-t-2xl px-6 pt-6 pb-4 md:px-10 md:pt-8 border-b border-gray-100 z-10">
                {/* Drag Handle - Mobile only */}
                <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4 md:hidden" />

                {/* Close Button */}
                <button
                  onClick={() => setShowAwards(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-foreground transition-colors"
                  aria-label="Đóng"
                >
                  <span className="text-xl">✕</span>
                </button>

                <h3 className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
                  Thành Tựu Nổi Bật
                </h3>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
                {/* Awards List - Typography Focused */}
                <div className="flex flex-col gap-8">
                  {/* Award 1 */}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Giải Ba — UEB Business Challenges
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Trưởng nhóm Marketing (CMO) & Xây dựng chiến lược. Phụ
                      trách nghiên cứu thị trường, định vị sản phẩm và xây dựng
                      kế hoạch Go-to-market.
                    </p>
                  </div>

                  {/* Award 2 */}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Giải Nhì — VYTEC Technopreneur Challenge
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Đồng sáng lập & Phụ trách Thương mại hóa. Xây dựng bài
                      Pitching gọi vốn và chiến lược tiếp cận khách hàng mục
                      tiêu cho sản phẩm công nghệ.
                    </p>
                  </div>

                  {/* Award 3 */}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">2024</p>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Giải Khuyến Khích — Bệ phóng Khởi nghiệp
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Phát triển ý tưởng kinh doanh & Giải pháp khách hàng. Tối
                      ưu hóa mô hình Business Model Canvas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer - Sticky Close Button */}
              <div className="sticky bottom-0 bg-white px-6 pt-4 pb-8 md:px-10 md:pb-8 border-t border-gray-100">
                <button
                  onClick={() => setShowAwards(false)}
                  className="w-full py-3 text-sm text-center text-gray-500 hover:text-foreground border border-gray-200 rounded-lg transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
