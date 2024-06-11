"use client";

import React from "react";
import { ThemeProvider as TP } from "next-themes";
import { usePathname } from "next/navigation";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const forcedLightThemePaths = ["/"];

  const forcedTheme = forcedLightThemePaths.includes(pathname)
    ? "light"
    : undefined;
    
  return (
    <TP
      attribute="class"
      defaultTheme="light"
      forcedTheme={forcedTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </TP>
  );
}
