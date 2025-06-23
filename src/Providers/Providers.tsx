// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/shared/Navbar/Navbar";

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
    </ThemeProvider>
  );
}
