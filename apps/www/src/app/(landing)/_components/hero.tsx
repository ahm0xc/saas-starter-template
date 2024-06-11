import React from "react";
import { ArrowRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export default function Hero() {
  return (
    <div className="bg-primary pb-20">
      <div className="mx-auto w-fit pt-32">
        <h1 className="animate-wg-fade-in-up fill-mode-forwards text-center text-7xl font-semibold leading-[80px] text-white opacity-0 duration-1000">
          Build faster with Template. <br /> An open-source collection <br /> of
          tools setup for React.
        </h1>
        <p className="animate-wg-fade-in-up fill-mode-forwards mx-auto mt-8 max-w-[50ch] text-center text-white/70 opacity-0 delay-300 duration-1000">
          Beautiful UI components for React, lovingly crafted with the Wedges
          Design System, Radix UI, and Tailwind CSS.
        </p>
        <div className="animate-wg-fade-in-up fill-mode-forwards mt-8 flex items-center justify-center opacity-0 delay-700 duration-1000">
          <Button
            variant="tertiary"
            className="h-14 rounded-full px-10 text-lg font-[500]"
            after={<ArrowRightIcon />}
          >
            Start building with Wedges
          </Button>
        </div>
      </div>
    </div>
  );
}
