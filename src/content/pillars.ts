export interface Pillar {
  id: number;
  title: string;
  shortDesc: string;
  fullContent: string;
  achievements: string[];
  images: string[];
}

export const pillars: Pillar[] = [
  {
    id: 1,
    title: "EVENT & ACTIVATION",
    shortDesc: "Event Operations & Coordination",
    fullContent:
      "Kết hợp giữa tư duy bao quát của một Trưởng ban tổ chức (dự án VTRAIN) và sự linh hoạt của một nhân sự chạy sự kiện thực chiến. Tôi trực tiếp tham gia lập kế hoạch tổng thể (Masterplan), phân công nhiệm vụ nhân sự và điều phối hiện trường cho đa dạng các loại hình từ Lễ khai trương, Hội chợ Tết đến các sự kiện giải trí quy mô lớn.",
    achievements: [
      "Xây dựng Masterplan, Checklist & Quản lý tiến độ (Dự án VTRAIN)",
      "Hỗ trợ tổ chức & Điều phối hiện trường: Khai trương Mediplus, Hội chợ Tết",
      "CTV Vận hành sự kiện giải trí: Ambedo Fiesta, VPBank K-Star Spark",
      "Liên hệ diễn giả & Phân công nhiệm vụ cho các ban chuyên môn",
    ],
    images: ["/event.jpg", "/event6.jpg", "/ki.jpg"],
  },
  {
    id: 2,
    title: "TRADE MARKETING",
    shortDesc: "Marketing Intern @ Beta Cinemas",
    fullContent:
      "Trong vai trò Thực tập sinh, tôi trực tiếp tham gia hỗ trợ vận hành các hoạt động Trade Marketing tại cụm rạp. Đảm bảo các hạng mục trưng bày (POSM) và sự kiện (Activation) diễn ra đúng kế hoạch, đồng thời hỗ trợ xử lý các thủ tục hành chính, thanh toán để quy trình nội bộ của team luôn thông suốt.",
    achievements: [
      "Hỗ trợ triển khai Activation & Giám sát trưng bày POSM tại rạp",
      "Theo dõi hiện trường & Tổng hợp số liệu báo cáo hiệu quả",
      "Xử lý hồ sơ thanh toán & Rà soát hợp đồng đúng quy trình",
      "Phối hợp hậu cần & Hỗ trợ vận hành chung cho cả team",
    ],
    images: ["/j.jpg"],
  },
  {
    id: 3,
    title: "CONTENT & COMMUNITY",
    shortDesc: "Quản trị Fanpage & SEO.",
    fullContent:
      "Đảm nhận vai trò Trưởng ban Truyền thông VTRAIN Gen 2, quản lý toàn bộ hoạt động content marketing và community engagement. Chuyên môn sâu về SEO writing cho các platform như Topa.vn và VnReview. Xây dựng chiến lược content viral cho Fanpage các CLB và tổ chức.",
    achievements: [
      "Trưởng ban Truyền thông VTRAIN (Gen 2)",
      "Viết bài chuẩn SEO cho Topa.vn, VnReview",
      "Xây dựng content viral cho Fanpage CLB",
      "Tăng 150% engagement rate trên các platform",
    ],
    images: ["/content.jpg"],
  },
];
