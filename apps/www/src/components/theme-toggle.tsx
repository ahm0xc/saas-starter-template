"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@iconicicons/react";
import { Button, Tooltip } from "@lemonsqueezy/wedges";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  /** In your app, you can use a hook, such as `useTheme` or a similar way to access
   *  the current theme and a setter function to change the theme.
   */
  const { setTheme, theme } = useTheme();

  return (
    <Tooltip sideOffset={8} content={`Click to switch to the dark theme`}>
      <Button
        variant="transparent"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        isIconOnly
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Tooltip>
  );
}
