import type { Metadata } from "next";
import "./globals.css";

import { Poiret_One } from 'next/font/google';
const inter = Poiret_One({
  subsets: ['latin'], // Optional: Choose subsets
  weight: '400', // Optional: Choose font weights
  variable: '--font-inter', // Optional: Use CSS variable
});


export const metadata: Metadata = {
  title: "Shahma Sherin K",
  description: "Portfolio website for showcasing my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
