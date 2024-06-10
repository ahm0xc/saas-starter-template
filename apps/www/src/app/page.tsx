import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Signin</Link>
      </SignedOut>
    </div>
  );
}
