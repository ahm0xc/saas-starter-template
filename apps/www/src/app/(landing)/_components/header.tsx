import React from "react";
import Link from "next/link";

import Logo from "~/components/logo";
import NavLinks from "./nav-links";
import NavActionButtons from "./nav-action-buttons";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  return (
    <header className="sticky top-0 z-10 flex h-20 w-full items-center border-b border-b-surface-400/80 bg-primary px-4 text-[15px] text-wg-white">
      <div
        aria-label="inner-nav-wrapper"
        className="mx-auto flex w-full max-w-6xl items-center"
      >
        <div aria-label="nav-left">
          <Link
            href="/"
            aria-label="logo-wrapper"
            className="flex items-center gap-2"
          >
            <Logo className="h-6 w-6" />
            <p className="font-poppins text-2xl font-semibold">Wedges</p>
          </Link>
        </div>
        <div aria-label="nav-center" className="mx-auto">
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>
        <div aria-label="nav-right">
          <NavActionButtons />
        </div>
      </div>
    </header>
  );
}
