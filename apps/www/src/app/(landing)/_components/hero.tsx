import React from "react";
import { ArrowRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

import ReviewMarquee from "./review-marquee";

export default function Hero() {
  return (
    <div className="bg-primary">
      {/* hero */}
      <div className="mx-auto w-fit pt-32">
        <h1 className="animate-wg-fade-in-up text-center text-7xl font-semibold leading-[80px] text-white opacity-0 duration-1000 fill-mode-forwards">
          Build faster with Template. <br /> An open-source collection <br /> of
          tools setup for React.
        </h1>
        <p className="mx-auto mt-8 max-w-[50ch] animate-wg-fade-in-up text-center text-white/70 opacity-0 delay-300 duration-1000 fill-mode-forwards">
          Beautiful UI components for React, lovingly crafted with the Wedges
          Design System, Radix UI, and Tailwind CSS.
        </p>
        <div className="mt-8 flex animate-wg-fade-in-up items-center justify-center opacity-0 delay-700 duration-1000 fill-mode-forwards">
          <Button
            variant="tertiary"
            className="h-14 rounded-full px-10 text-lg font-[500]"
            after={<ArrowRightIcon />}
          >
            Start building with Wedges
          </Button>
        </div>
      </div>
      {/* reviews */}
      <div className="pb-28 pt-36">
        <ReviewMarquee />
      </div>
    </div>
  );
}
