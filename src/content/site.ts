export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  thumbnail: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
}

export interface SiteData {
  profile: Profile;
  projects: Project[];
}

export const SITE_DATA: SiteData = {
  profile: {
    name: "Đặng Văn Thùy",
    role: "Chuyên Viên Trade Marketing",
    email: "dangvanthuy@email.com",
    phone: "+84 123 456 789",
    location: "TP. Hồ Chí Minh, Việt Nam",
  },
  projects: [
    {
      slug: "beta-cinema-brand-activation",
      title: "Kích Hoạt Thương Hiệu Beta Cinema",
      client: "Beta Cinema",
      year: "2024",
      tags: ["POSM", "Luồng Khách", "Brand Activation"],
      thumbnail: "/projects/beta-cinema.jpg",
      summary:
        "Chiến dịch kích hoạt thương hiệu toàn diện cho Beta Cinema, tập trung nâng cao trải nghiệm tại rạp và thúc đẩy tương tác khách hàng thông qua bố trí POSM chiến lược và tối ưu hóa luồng khách.",
      challenge:
        "Beta Cinema cần làm mới diện mạo thương hiệu tại hơn 20 cụm rạp, đồng thời cải thiện định hướng khách hàng và tăng doanh số quầy bắp nước. Thách thức là tạo ra nhận diện thị giác nhất quán, phù hợp với các kiến trúc rạp đa dạng mà vẫn đảm bảo hiệu quả vận hành trong giờ cao điểm.",
      solution:
        "Phát triển chiến lược POSM tích hợp với hệ thống thiết kế module, thích ứng với kiến trúc riêng của từng cụm rạp. Triển khai vị trí standee, lightbox và màn hình kỹ thuật số tại các điểm chạm khách hàng quan trọng. Tái thiết kế hệ thống quản lý hàng đợi để giảm thời gian chờ và tối đa hóa tiếp xúc nội dung khuyến mãi.",
      impact: [
        "Tăng 32% doanh số quầy bắp nước trong quý đầu tiên",
        "Giảm 45% thời gian xếp hàng trung bình",
        "Triển khai thành công tại 23 cụm rạp",
        "Độ nhận diện thương hiệu tăng 28% qua khảo sát",
        "Đạt giải Retail Activation xuất sắc - Marketing Awards 2024",
      ],
    },
    {
      slug: "vtrain-startup-series",
      title: "Chuỗi Sự Kiện Startup VTRAIN",
      client: "VTRAIN",
      year: "2023",
      tags: ["Event Masterplan", "Leadership", "Xây Dựng Cộng Đồng"],
      thumbnail: "/projects/vtrain.jpg",
      summary:
        "Dẫn dắt toàn bộ quy trình lập kế hoạch và thực thi chuỗi 6 sự kiện startup, kết nối các nhà khởi nghiệp, nhà đầu tư và lãnh đạo ngành để thúc đẩy hệ sinh thái startup Việt Nam.",
      challenge:
        "VTRAIN muốn khẳng định vị thế tiên phong trong cộng đồng startup Việt Nam nhưng chưa có chuỗi sự kiện đặc trưng. Thách thức là tạo ra format sự kiện có khả năng mở rộng, thu hút diễn giả cao cấp đồng thời duy trì cơ hội networking thân mật cho người tham dự.",
      solution:
        "Thiết kế cấu trúc sự kiện phân tầng kết hợp keynote với phiên thảo luận nhóm và networking có cấu trúc. Xây dựng pipeline tuyển diễn giả tận dụng mối quan hệ sẵn có để thu hút các founder và VC hàng đầu. Triển khai mô hình hybrid cho phép tham gia trực tiếp lẫn online.",
      impact: [
        "6 sự kiện thành công với tổng 1,200+ người tham dự",
        "18 diễn giả keynote bao gồm 3 founder unicorn",
        "Hơn 50 lượt đưa tin trên các báo công nghệ",
        "Thiết lập quan hệ đối tác với 8 nhà tài trợ doanh nghiệp",
        "Tỷ lệ hài lòng 85% từ người tham dự",
      ],
    },
    {
      slug: "multi-channel-content-growth",
      title: "Tăng Trưởng Nội Dung Đa Kênh",
      client: "Đa Khách Hàng",
      year: "2023-2024",
      tags: ["SEO", "Social Growth", "Content Strategy"],
      thumbnail: "/projects/content-growth.jpg",
      summary:
        "Phát triển và thực thi chiến lược nội dung đa kênh toàn diện, tăng đáng kể lượng tiếp cận organic và tương tác trên SEO, mạng xã hội và các nền tảng owned media.",
      challenge:
        "Nhiều khách hàng đang gặp khó khăn với chiến lược nội dung rời rạc, dẫn đến thông điệp không nhất quán và ROI thấp. Mỗi nền tảng được quản lý riêng biệt, gây ra sự trùng lặp công sức và bỏ lỡ cơ hội khuếch đại liên kênh.",
      solution:
        "Tạo framework nội dung thống nhất, duy trì tính nhất quán thương hiệu trong khi thích ứng với đặc thù từng nền tảng. Triển khai chiến lược content pillar với tài sản module có thể tái sử dụng đa kênh. Thiết lập workflow tối ưu hóa nội dung dựa trên dữ liệu hiệu suất thời gian thực.",
      impact: [
        "Tăng 156% lưu lượng organic trong 12 tháng",
        "Tương tác mạng xã hội tăng 89%",
        "Hiệu quả sản xuất nội dung cải thiện 40%",
        "Đạt top 3 ranking cho hơn 25 từ khóa mục tiêu",
        "Giảm 35% chi phí thu hút khách hàng",
      ],
    },
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return SITE_DATA.projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return SITE_DATA.projects;
}
