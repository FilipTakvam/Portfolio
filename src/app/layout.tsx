import { Inter } from "next/font/google";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

type RootLayoutProps = {
  children: React.ReactNode;
}

export const metadata = {
  title: "Filip Takvam",
  description: "Filip Takvam´s portfolio, an Industrial Design Engineer",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
