import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ThemeToggle from "~/components/theme-toggle";

export default async function Home() {
  return (
    <div>
      <ThemeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Signin</Link>
      </SignedOut>
    </div>
  );
}
