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
    <header className="bg-primary text-wg-white flex h-20 w-full items-center px-4 text-[15px] sticky top-0 z-10 border-b border-b-surface-400/80">
      <div
        aria-label="inner-nav-wrapper"
        className="mx-auto flex w-full max-w-6xl items-center"
      >
        <div aria-label="nav-left">
          <Link href="/" aria-label="logo-wrapper" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <p className="text-2xl font-semibold font-poppins">Wedges</p>
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