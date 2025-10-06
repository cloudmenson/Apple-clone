import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Header } from "@/widgets";

import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple",
  description:
    "All Apple innovations: including iPhone, iPad, Apple Watch, Mac, Apple TV. Plus accessories, entertainment, and expert support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />

      <body className={`${InterSans.variable} antialiased`}>{children}</body>

      <Footer />
    </html>
  );
}
