import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/utils/cn";
import { interFont, poppinsFont } from "~/lib/fonts";
import ThemeProvider from "~/components/providers/theme-provider";
import ClerkProvider from "~/components/providers/clerk-provider";

import "~/styles/globals.css";

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
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          interFont.variable,
          poppinsFont.variable,
        )}
      >
        <ThemeProvider>
          <ClerkProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
