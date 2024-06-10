import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";
import "~/styles/globals.css";
import ThemeProvider from "~/components/providers/theme-provider";

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
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <ThemeProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
