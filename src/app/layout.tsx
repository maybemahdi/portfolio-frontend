import { ThemeProvider } from "@/Providers/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

import { Urbanist } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import Providers from "@/Providers/Providers";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Mahdi Hasan Mahi",
  description: "Passionate Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
