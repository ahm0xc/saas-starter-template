import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavActionButtons() {
  return (
    <div className="flex items-center gap-4">
      <SignedIn>
        <Button
          asChild
          after={<ArrowRightIcon />}
          variant="tertiary"
          className="rounded-full"
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <UserButton />
      </SignedIn>
      <SignedOut>
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
      </SignedOut>
    </div>
  );
}
