import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/Providers/Providers";
import { Urbanist } from "next/font/google";
import SplashCursor from "@/components/ui/core/SplashCursor";

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
        <Providers>
          {children}
          {/* <SplashCursor /> */}
        </Providers>
      </body>
    </html>
  );
}
