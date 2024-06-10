import React from "react";
import { ThemeProvider as TP } from "next-themes";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <TP
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </TP>
  );
}
