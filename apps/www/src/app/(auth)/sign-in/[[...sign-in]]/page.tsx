"use client";

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";

import { UIConfig } from "~/config/ui";
import useIsMounted from "~/hooks/use-is-mounted";

export default function SignInPage() {
  const { resolvedTheme } = useTheme();
  const { isMounted } = useIsMounted();

  if (!isMounted) return null;;

  return (
    <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="grid h-full place-content-center">
        <SignIn />
      </div>
      <div className="relative hidden h-full overflow-hidden lg:block">
        <img
          src={
            resolvedTheme === "dark"
              ? UIConfig.auth.signInPage.images.dark
              : UIConfig.auth.signInPage.images.light
          }
          className={"absolute inset-0 h-full w-full object-cover"}
          alt=""
        />
      </div>
    </div>
  );
}
