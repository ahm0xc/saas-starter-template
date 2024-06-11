import React from "react";
import Link from "next/link";

import Logo from "~/components/logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo className="h-7 w-7" />
          </Link>
          <p className="text-secondary-200 text-sm">
            © 2024 Ahmed, LLC • <Link href="/">Privacy</Link> •{" "}
            <Link href="/">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
