import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";
import ThemeProvider from "~/components/providers/theme-provider";

import "~/styles/globals.css";
import { cn } from "~/utils/cn";

const interFont = Inter({
  weight: ["400"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saas Starter template",
  description: "",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="antialiased" suppressHydrationWarning>
        <body className={cn("antialiased font-sans", interFont.variable)}>
          <ThemeProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
