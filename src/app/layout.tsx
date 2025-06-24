import "./globals.css";

import { Footer, Header } from "@/components/Layouts";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lora,
  Open_Sans,
  Roboto_Condensed,
} from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huấn luyện AI với dữ liệu doanh nghiệp - MyGPT",
  description: "Huấn luyện AI với dữ liệu doanh nghiệp - MyGPT",
  icons: "https://mygpt.vn/wp-content/uploads/2023/04/mygpt-logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoCondensed.variable} ${lora.variable} ${openSans.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
