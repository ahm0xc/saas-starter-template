"use client";

import React from "react";
import { ClerkProvider as CP } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function ClerkProvider({ children }: React.PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <CP
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
      }}
    >
      {children}
    </CP>
  );
}
