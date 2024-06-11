import React from "react";
import { Button } from "@lemonsqueezy/wedges";
import { ArrowRightIcon } from "@iconicicons/react";

export default function FooterCTA() {
  return (
    <div className="bg-primary py-28 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4">
        <div>
          <p className="text-sm uppercase text-orange-400">
            ELEVATE YOUR BUSINESS
          </p>
          <h3 className="mt-6 text-5xl font-semibold">
            Take your business to the next level with SaasT
          </h3>
        </div>
        <div className="flex items-end justify-end">
          <Button variant="tertiary" className="text-lg h-12 px-8 rounded-full" after={<ArrowRightIcon />}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
