import React from "react";
import { CheckIcon, WalletIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export default function PricingBlock() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-full bg-green-200 p-20">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-center text-[15px] font-semibold uppercase tracking-wider text-green-600">
                personal
              </p>
            </div>
            <div className="mt-10">
              <p className="text-center text-5xl font-semibold text-green-900">
                $5/mo
              </p>
            </div>
            <div className="mt-10">
              <p className="text-center text-lg text-secondary-700">
                Simple and powerful, this approach delivers effortless solutions
                that enhance efficiency and foster innovation, empowering users
                to achieve remarkable results with minimal complexity.
              </p>
            </div>
            <div className="mt-10">
              <ul className="divide-y-[1px] divide-secondary-900/20">
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Figma editor</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">3 collaborative design files</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Unlimited personal drafts</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Basic file inspection</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1" />
            <div className="mt-10">
              <Button
                variant="primary"
                before={<WalletIcon />}
                className="h-12 w-full rounded-full text-lg font-semibold"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full bg-pink-200 p-20">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-center text-[15px] font-semibold uppercase tracking-wider text-pink-600">
                pro
              </p>
            </div>
            <div className="mt-10">
              <p className="text-center text-5xl font-semibold text-pink-900">
                $19/mo
              </p>
            </div>
            <div className="mt-10">
              <p className="text-center text-lg text-secondary-700">
                Designed specifically to support the unique needs of early-stage
                teams, offering tailored tools and resources essential for
                growth and success in initial business phases.
              </p>
            </div>
            <div className="mt-10">
              <ul className="divide-y-[1px] divide-secondary-900/20">
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Unlimited Figma files</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Team libraries</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Advanced prototyping</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Advanced codegen</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Annotations and status</p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-pink-400 p-1 text-white">
                      <CheckIcon className="h-7 w-7" />
                    </span>
                    <p className="text-lg">Unlimited version history</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1" />
            <div className="mt-10">
              <Button
                variant="primary"
                before={<WalletIcon />}
                className="h-12 w-full rounded-full text-lg font-semibold"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
