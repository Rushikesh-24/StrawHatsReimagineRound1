import type { Metadata } from "next";
import "./globals.css";
import Panchang from 'next/font/local'

const myFont = Panchang({
  src: './fonts/Panchang-Variable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Amul 2.0 : The Taste of India",
  description: "Amul, the Taste of India, has been a household name for decades, providing quality dairy products to millions. As we look towards the future, our goal is to redesign Amul's digital presence, ensuring it meets the needs of the next generation of consumers. Our vision for Amul 2.0 is to create a user-centric, immersive, and intuitive website that leverages the latest in web technologies and design trends. This project will not only enhance user experience but also solidify Amul's position as a forward-thinking and innovative brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#0F165C] ${myFont.className}`}>{children}</body>
    </html>
  );
}
