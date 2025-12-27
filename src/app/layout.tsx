import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignerCredit from "@/components/DesignerCredit";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Đặng Văn Thùy | Trade Marketing Executive",
  description:
    "Portfolio of Đặng Văn Thùy - Trade Marketing Executive specializing in Events, POSM, and Brand Activation campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${manrope.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <DesignerCredit />
      </body>
    </html>
  );
}
