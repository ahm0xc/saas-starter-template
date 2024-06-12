import React from "react";
import { ArrowRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import Link from "next/link";

export default function NavActionButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/sign-in"
        className="text-white/70 duration-200 hover:text-white"
      >
        Sign in
      </Link>
      <Button
        after={<ArrowRightIcon />}
        variant="tertiary"
        className="rounded-full"
      >
        Get Started
      </Button>
    </div>
  );
}
