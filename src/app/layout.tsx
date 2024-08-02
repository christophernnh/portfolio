"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/navbar";
import { CSSProperties, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const layoutStyles: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transition: "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
  };
  return (
    <html lang="en">
      <body className={`font-satoshi bg-zinc-900 text-white`}>
        <Navbar />
        <section style={layoutStyles} className="px-40 py-10">{children}</section>
      </body>
    </html>
  );
}
