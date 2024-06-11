import React from "react";

import Logo from "~/components/logo";
import NavLinks from "./nav-links";
import NavActionButtons from "./nav-action-buttons";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  return (
    <header className="bg-primary text-wg-white flex h-20 w-full items-center text-[15px]">
      <div
        aria-label="inner-nav-wrapper"
        className="mx-auto flex w-full max-w-6xl items-center"
      >
        <div aria-label="nav-left">
          <div aria-label="logo-wrapper">
            <Logo className="h-6 w-6" />
          </div>
        </div>
        <div aria-label="nav-center" className="mx-auto">
          <NavLinks />
        </div>
        <div aria-label="nav-right">
          <NavActionButtons />
        </div>
      </div>
    </header>
  );
}