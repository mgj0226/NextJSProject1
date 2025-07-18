import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Project ONE",
  description: "NextJS sandbox Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
        {/* <Link href="https://nextjs.org" rel="icon">Test</Link> */}
        <Link href={"/"}> Home </Link>
        <Link href={"/clientcompo"}> Client Component </Link>
        <Link href={"/servercompo"}> Server Component </Link>
        <Link href={"/users"}> Users </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
