import type { Metadata } from "next";
import {Audiowide} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binary Labs | Innovative Software Solutions",
  description: "Binary Labs - Crafting cutting-edge software solutions for tomorrow's challenges",
  icons:{
    icon:"/images/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.className} bg-gray-900`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
