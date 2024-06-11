import React from "react";
import { ArrowRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import Link from "next/link";

export default function NavActionButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link href='/sign-in' className="text-white/70 hover:text-white duration-200">Sign in</Link>
      <Button after={<ArrowRightIcon />} variant="tertiary" className="rounded-full">Get Started</Button>
    </div>
  );
}
