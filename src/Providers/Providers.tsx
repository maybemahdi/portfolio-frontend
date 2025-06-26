// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
